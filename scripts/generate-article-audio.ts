import fs from "node:fs/promises";
import path from "node:path";
import { loadEnv } from "./load-env";
import { articles } from "../src/lib/articles";
import type { ArticleAudioItem } from "../src/lib/article-audio";

const root = process.cwd();
const publicAudioDir = path.join(root, "public", "article-audio");
const manifestPath = path.join(root, "src", "lib", "article-audio.ts");
const speechEndpoint = "https://api.openai.com/v1/audio/speech";

type CliOptions = {
  all: boolean;
  slugs: string[];
  force: boolean;
  dryRun: boolean;
};

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  const slugs: string[] = [];
  let all = false;
  let force = false;
  let dryRun = false;

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--all") {
      all = true;
      continue;
    }

    if (arg === "--force") {
      force = true;
      continue;
    }

    if (arg === "--dry-run") {
      dryRun = true;
      continue;
    }

    if (arg === "--slug") {
      const slug = args[index + 1];
      if (!slug) {
        throw new Error("--slug needs a value");
      }
      slugs.push(slug);
      index += 1;
      continue;
    }

    if (arg.startsWith("--slug=")) {
      slugs.push(arg.slice("--slug=".length));
    }
  }

  if (!all && slugs.length === 0) {
    throw new Error("Use --slug <article-slug> or --all");
  }

  return { all, slugs, force, dryRun };
}

function decodeEntities(text: string) {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripArticleText(source: string) {
  const articleStart = source.indexOf("<article");
  const articleOpenEnd = source.indexOf(">", articleStart);
  const articleEnd = source.lastIndexOf("</article>");

  if (articleStart < 0 || articleOpenEnd < 0 || articleEnd < 0) {
    throw new Error("Article JSX block not found");
  }

  let text = source.slice(articleOpenEnd + 1, articleEnd);
  const footerStart = text.indexOf('<div className="ornament-divider mt-16');
  if (footerStart >= 0) {
    text = text.slice(0, footerStart);
  }

  text = text
    .replace(/<figure[\s\S]*?<\/figure>/g, " ")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
    .replace(/\{\s*["'`]([^"'`]*)["'`]\s*\}/g, "$1")
    .replace(/\{[^{}]*\}/g, " ")
    .replace(/<[^>]+>/g, " ");

  return decodeEntities(text)
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:?!])/g, "$1")
    .trim();
}

function splitForSpeech(text: string, maxChars: number) {
  const paragraphs = text
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
  const chunks: string[] = [];
  let current = "";

  for (const paragraph of paragraphs) {
    if (paragraph.length > maxChars) {
      if (current) {
        chunks.push(current);
        current = "";
      }

      for (let index = 0; index < paragraph.length; index += maxChars) {
        chunks.push(paragraph.slice(index, index + maxChars));
      }
      continue;
    }

    const next = current ? `${current} ${paragraph}` : paragraph;
    if (next.length > maxChars && current) {
      chunks.push(current);
      current = paragraph;
    } else {
      current = next;
    }
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
}

async function synthesizeSpeech({
  input,
  outputPath,
  apiKey,
  model,
  voice,
}: {
  input: string;
  outputPath: string;
  apiKey: string;
  model: string;
  voice: string;
}) {
  const response = await fetch(speechEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      voice,
      input,
      response_format: "mp3",
      instructions:
        "Bacakan sebagai narasi esai Bahasa Indonesia yang tenang, jelas, dan reflektif. Pertahankan istilah Arab dan nama tokoh apa adanya.",
    }),
  });

  if (!response.ok) {
    throw new Error(
      `OpenAI speech request failed (${response.status}): ${await response.text()}`,
    );
  }

  const audio = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(outputPath, audio);
}

async function readManifest() {
  try {
    const source = await fs.readFile(manifestPath, "utf8");
    const match = source.match(
      /export const articleAudio(?:: Record<string, ArticleAudioItem>)? = ([\s\S]*?)(?: satisfies Record<string, ArticleAudioItem>)?;/,
    );
    if (!match) {
      return {};
    }

    return JSON.parse(match[1]) as Record<string, ArticleAudioItem>;
  } catch {
    return {};
  }
}

async function writeManifest(manifest: Record<string, ArticleAudioItem>) {
  const body = JSON.stringify(manifest, null, 2);
  await fs.writeFile(
    manifestPath,
    `export type ArticleAudioTrack = {
  src: string;
  duration?: string;
};

export type ArticleAudioItem = {
  generatedAt: string;
  model: string;
  voice: string;
  tracks: ArticleAudioTrack[];
};

export const articleAudio: Record<string, ArticleAudioItem> = ${body};

export function getArticleAudio(slug: string) {
  return articleAudio[slug as keyof typeof articleAudio];
}
`,
    "utf8",
  );
}

async function generateForSlug({
  slug,
  force,
  apiKey,
  model,
  voice,
  maxChars,
  manifest,
  dryRun,
}: {
  slug: string;
  force: boolean;
  apiKey: string;
  model: string;
  voice: string;
  maxChars: number;
  manifest: Record<string, ArticleAudioItem>;
  dryRun: boolean;
}) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) {
    throw new Error(`Unknown article slug: ${slug}`);
  }

  if (manifest[slug] && !force) {
    console.log(`Skipping ${slug}; audio already exists. Use --force to regenerate.`);
    return;
  }

  const pagePath = path.join(root, "src", "app", "artikel", slug, "page.tsx");
  const source = await fs.readFile(pagePath, "utf8");
  const spokenText = `${article.title}. ${stripArticleText(source)}`;
  const chunks = splitForSpeech(spokenText, maxChars);
  const slugDir = path.join(publicAudioDir, slug);

  await fs.rm(slugDir, { force: true, recursive: true });
  await fs.mkdir(slugDir, { recursive: true });

  console.log(`Generating ${slug}: ${chunks.length} audio part(s)`);

  if (dryRun) {
    console.log(`  text length: ${spokenText.length} characters`);
    chunks.forEach((chunk, index) => {
      console.log(`  part ${index + 1}: ${chunk.length} characters`);
    });
    return;
  }

  const tracks = [];
  for (let index = 0; index < chunks.length; index += 1) {
    const filename = `part-${String(index + 1).padStart(2, "0")}.mp3`;
    const outputPath = path.join(slugDir, filename);

    await synthesizeSpeech({
      input: chunks[index],
      outputPath,
      apiKey: apiKey ?? "",
      model,
      voice,
    });

    tracks.push({ src: `/article-audio/${slug}/${filename}` });
    console.log(`  wrote ${filename}`);
  }

  manifest[slug] = {
    generatedAt: new Date().toISOString(),
    model,
    voice,
    tracks,
  };
}

async function main() {
  loadEnv();

  const options = parseArgs();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey && !options.dryRun) {
    throw new Error("OPENAI_API_KEY is required in .env.local or the environment");
  }

  const model = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
  const voice = process.env.OPENAI_TTS_VOICE || "alloy";
  const maxChars = Number(process.env.OPENAI_TTS_MAX_CHARS || 2800);
  const selectedSlugs = options.all
    ? articles.map((article) => article.slug)
    : [...new Set(options.slugs)];
  const manifest = await readManifest();

  for (const slug of selectedSlugs) {
    await generateForSlug({
      slug,
      force: options.force,
      apiKey: apiKey ?? "",
      model,
      voice,
      maxChars,
      manifest,
      dryRun: options.dryRun,
    });
  }

  if (!options.dryRun) {
    await writeManifest(manifest);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

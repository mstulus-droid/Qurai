import { ArticleAudioPlayer } from "@/components/article-audio-player";
import { getArticleAudio } from "@/lib/article-audio";
import { articles } from "@/lib/articles";

export function ArticleAudio({ slug }: { slug: string }) {
  const audio = getArticleAudio(slug);

  if (!audio?.tracks.length) {
    return null;
  }

  const article = articles.find((item) => item.slug === slug);

  return (
    <ArticleAudioPlayer
      title={article?.title ?? "Artikel Qurai"}
      tracks={audio.tracks}
    />
  );
}

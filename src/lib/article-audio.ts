export type ArticleAudioTrack = {
  src: string;
  duration?: string;
};

export type ArticleAudioItem = {
  generatedAt: string;
  model: string;
  voice: string;
  tracks: ArticleAudioTrack[];
};

export const articleAudio: Record<string, ArticleAudioItem> = {};

export function getArticleAudio(slug: string) {
  return articleAudio[slug as keyof typeof articleAudio];
}

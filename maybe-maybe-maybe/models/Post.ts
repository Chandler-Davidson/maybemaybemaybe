export interface Post {
  id: number;
  title: string;
  subreddit: string;
  upvotes: number;
  redditId: string;
  author: string;
  url: string;
  createdUtc: string;
  isVideo: boolean;
  media: string;
}
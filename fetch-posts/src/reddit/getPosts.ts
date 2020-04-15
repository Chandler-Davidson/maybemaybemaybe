import reddit from "./reddit";

export async function getTopPosts(subreddit: string) {
  return await reddit.getTop(subreddit)
}

export async function getHotPosts(subreddit: string) {
  return await reddit.getHot(subreddit);
}
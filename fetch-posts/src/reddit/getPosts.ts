import reddit from "./reddit";
import { Submission } from "snoowrap";
import { Post } from "../entity/Post";

export async function getTopPosts(subreddit: string) {
  const submissions = await reddit.getTop(subreddit, {limit: 100})
  return submissions.map(submissionToPost);
}

export async function getHotPosts(subreddit: string) {
  const submissions = await reddit.getHot(subreddit);
  return submissions.map(submissionToPost);
}

function submissionToPost(submission: Submission): Post {
  const post = new Post();
  post.title = submission.title;
  post.subreddit = submission.subreddit_name_prefixed;
  post.upvotes = submission.ups;
  post.redditId = submission.id;
  post.author = submission.author.name;
  post.url = submission.url;
  post.createdUtc = submission.created_utc.toString();
  post.isVideo = submission.is_video;

  if (submission.media && submission.media.reddit_video)
    post.media = submission.media.reddit_video.fallback_url as string;

  return post;
}
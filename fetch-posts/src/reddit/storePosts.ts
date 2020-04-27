import { Connection } from "typeorm";
import saveArray from "../entity/saveArray";
import { Post } from "../entity/Post";

export default async function storePosts(connection: Connection, func: (subreddit: string) => Promise<Post[]>, subreddits: string[]) {
  try {
    const posts = await Promise.all(subreddits.map(func));
    const videoPosts = posts.flat().filter(p => p.isVideo);

    saveArray(connection, videoPosts);
  }
  catch (ex) {
    console.error(ex);
  }
}
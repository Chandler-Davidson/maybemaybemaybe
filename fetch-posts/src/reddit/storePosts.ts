import { Connection } from "typeorm";
import saveArray from "../entity/saveArray";
import { Post } from "../entity/Post";

export default async function storePosts(connection: Promise<Connection>, func: (subreddit: string) => Promise<Post[]>, subreddits: string[]) {
  try {
    const posts = await Promise.all(subreddits.map(func));

    saveArray(await connection, posts.flat());
  }
  catch (ex) {
    console.error(ex);
  }
}
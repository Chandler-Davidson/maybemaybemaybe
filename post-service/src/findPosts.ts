import { Post } from "./entity/Post";
import { getConnection } from "typeorm";

export async function findNewPosts(limit: number): Promise<Post[] | undefined> {
  try {
    return await getConnection()
      .createQueryBuilder()
      .from(Post, 'Post')
      .orderBy('RANDOM()')
      .limit(limit)
      .execute();
  }
  catch (error) {
    console.error(error);
  }
}

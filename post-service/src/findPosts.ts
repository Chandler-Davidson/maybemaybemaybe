import { Post } from "./entity/Post";
import { Connection, getConnection } from "typeorm";
import { repeat, getRandomNumber } from "./Utils";

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

async function getRandomIds(connection: Connection, limit: number) {
  const numOfRecords = await connection.manager.count(Post);
  return repeat(() => getRandomNumber(1, numOfRecords), limit)
}
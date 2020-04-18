import { Post } from "./entity/Post";
import { Connection, In } from "typeorm";
import { repeat, getRandomNumber } from "./Utils";

export async function findNewPosts(connection: Promise<Connection>, limit: number): Promise<Post[] | undefined> {
  try {
    const conn = await connection;

    const options = {
      id: In(await getRandomIds(conn, limit))
    }

    return conn.manager.find(Post, options);
  }
  catch (error) {
    console.error(error);
  }
}

async function getRandomIds(connection: Connection, limit: number) {
    const numOfRecords = await connection.manager.count(Post);
    return repeat(() => getRandomNumber(1, numOfRecords), limit)
}
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Post } from "./entity/Post";
import { getTopPosts } from "./reddit/getPosts";
import saveArray from "./entity/saveArray";

const subreddits = [
  'yesyesyesno',
  'nonononoyes'
];

async function storeTopPosts() {
  try {
    const connection = await createConnection();
    const topPosts = await Promise.all(subreddits.map(getTopPosts));

    saveArray(connection, topPosts.flat());
  }
  catch (ex) {
    console.error(ex);
  }
}


storeTopPosts();
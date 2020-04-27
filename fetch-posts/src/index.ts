import "reflect-metadata";
import "./lib/env";

import { createConnection } from "typeorm";
import { getTopPosts, getHotPosts } from "./reddit/getPosts";
import storePosts from "./reddit/storePosts";

const subreddits = [
  'yesyesyesno',
  'nonononoyes'
];

const view = process.argv[2];
const func = view === "top" ? getTopPosts : getHotPosts;

async function main() {
  const connection = await createConnection();
  storePosts(connection, func, subreddits);
}

main();
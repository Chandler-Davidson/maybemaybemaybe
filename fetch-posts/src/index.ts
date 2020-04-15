import { getTopPosts } from "./reddit/getPosts";
  
async function log() {
  console.log(await getTopPosts('nonononoyes'));
}

log();
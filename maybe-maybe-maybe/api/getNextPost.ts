import Axios from "axios";
import { Post } from "../models/Post";

const posts: Post[] = [];

export default async function getNextPost() {
  let nextPost: Post;

  if (posts.length <= 1) {
    const newPosts = await fetchPosts();
    posts.push(...newPosts);
  }

  nextPost = posts[0];
  posts.shift();

  return nextPost;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await Axios.get('http://136.53.66.122:4000');

  if (!Array.isArray(response.data))
    throw "Invalid response";
  
  return response.data;
}
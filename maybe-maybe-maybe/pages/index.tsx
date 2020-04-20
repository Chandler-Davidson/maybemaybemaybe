import Head from "../components/head";
import Post from "../components/post";
import { useState, useEffect } from "react";
import getNextPosts from "../api/getNextPosts";

export default () => {
  const [post, setPost] = useState({} as any);
  const [posts, setPosts] = useState([]);
  let getData;

  useEffect(() => {
    getData = async function() {
      setPosts(await getNextPosts());
      setPost(posts[0] || {});
    }
    
    getData();
  }, [])

  return (
    <div>
      <Head title="Home" />
      <div className="hero">
        <h1 className="title">Maybe Maybe Maybe</h1>
        <Post post={post} />
        <button onClick={() => {
          if (posts.length > 1) {
            posts.shift();
            setPosts(posts);
            setPost(posts[0]);
          } else {
            getData();
          }
        }}>Next</button>
      </div>

      <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
    </div>
  )
};

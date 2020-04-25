import Head from "../components/head";
import Post from "../components/post";
import { useState, useEffect } from "react";
import getNextPost from "../api/getNextPost";

export default () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getData() {
      setPost(await getNextPost());
    }
    
    getData();
  }, []);

  return (
    <div>
      <Head title="Home" />
      <div className="hero">
        <h1 className="title">Maybe Maybe Maybe</h1>
        <Post post={post || ({} as any)} />
        <button
          onClick={async () => {
            setPost(await getNextPost());
          }}
        >
          Next
        </button>
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
  );
};

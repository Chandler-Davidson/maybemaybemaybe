import { Post } from "../models/Post";
import { useState } from "react";
import Link from "next/link";

const PostComponent = (props: { post: Post }) => {
  const { title, author, subreddit, upvotes, media, url } = props.post;

  const [isHidden, setHidden] = useState(true);
  const showSubreddit = () => setHidden(!isHidden);

  return (
    <div className="post">
      <a href={url}>
        <h3>{title}</h3>
      </a>

      <video autoPlay loop controls src={media} />

      <div className="details">
        <div className="subDetails">
          <p>{author}</p>
          <button onClick={showSubreddit}>{`${
            isHidden ? "Show" : "Hide"
          } subreddit`}</button>
          <div hidden={isHidden}>{subreddit}</div>
        </div>
        <p>{`${upvotes} ups`}</p>
      </div>
      <style>{`
      .post {
        max-width: 587px;
        margin: 40px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 55%;
      }

      video {
        width: 100%;
        height: 100%;
      }
    `}</style>
    </div>
  );
};

export default PostComponent;

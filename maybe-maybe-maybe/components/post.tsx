import { Post } from "../models/Post";
import { useState } from "react";

const PostComponent = (props: { post: Post }) => {
  const { title, author, subreddit, upvotes, media } = props.post;

  console.log(props.post);

  const [isHidden, setHidden] = useState(true);
  const showSubreddit = () => setHidden(!isHidden);

  return (
    <div className="post">
      <h3>{title}</h3>
      <video width="320" height="240" controls autoPlay>
        <source src={media} type="video/mp4" />
      </video>
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
    `}</style>
    </div>
  );
};

export default PostComponent;

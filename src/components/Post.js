import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const article = props.article;
  // check if content not too long
  var content = article.content;

  if (content.length > 150) {
    content = content.slice(0, 150) + "...";
  }

  return (
    <div className="post">
      <div className="post-header">
        <h3>{article.title}</h3>
        <div className="post-meta">
          <p>{article.author}</p>
          <p>{article.date}</p>
        </div>
      </div>

      <p>{content}</p>
      <button className="btn-primary">
        <Link
          to={{ pathname: `/posts/${article.id}`, search: `id=${article.id}` }}
          className="btn-link"
        >
          See Post
        </Link>
      </button>
    </div>
  );
};

export default Post;

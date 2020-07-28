import React, { Component } from "react";

const Post = (props) => {
  const article = props.article;
  return (
    <div className="post">
      <div className="post-header">
        <h3>{article.title}</h3>
        <div className="post-meta">
          <p>{article.author}</p>
          <p>{article.date}</p>
        </div>
      </div>

      <p>{article.content}</p>
    </div>
  );
};

export default Post;

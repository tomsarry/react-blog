import React from "react";

const Article = (props) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get("id");

  const article = props.article.find((article) => {
    return article.id === product;
  });

  return (
    <div>
      <div className="post-header">
        <h1>{article.title}</h1>
        <div className="post-meta">
          <p>{article.author}</p>
          <p>{article.date}</p>
        </div>
      </div>
      <p className="post-content">{article.content}</p>
    </div>
  );
};

export default Article;

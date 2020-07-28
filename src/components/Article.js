import React from "react";
import "../articles.json";

const Article = (props) => {
  // get article id and find it on the json file
  const id = props.match.params.id;
  const articles = require("../articles.json").article;

  const article = articles.find((article) => {
    return article.id === id;
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

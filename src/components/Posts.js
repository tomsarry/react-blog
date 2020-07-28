import React from "react";

import Post from "./Post";

function Posts(props) {
  const articles = props.articles;
  // const articles = require("../articles.json").article;
  const listPosts = articles.map((article) => (
    <Post key={article.id} article={article} />
  ));

  return (
    <React.Fragment>
      <h1>Posts</h1>
      <div>{listPosts}</div>
    </React.Fragment>
  );
}

export default Posts;

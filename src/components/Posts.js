import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../articles.json";
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

import axios from "axios";
import React, { useState, useEffect } from "react";

const Article = (props) => {
  const [article, setArticle] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    // download article

    axios.get(process.env.REACT_APP_API + "posts/" + id).then((response) => {
      var result = response.data;
      // set article
      setArticle(result);
      return response.data;
    });
  }, [id]);

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

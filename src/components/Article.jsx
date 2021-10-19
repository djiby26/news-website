import React from "react";

const Article = ({ article }) => {
  return (
    <div className="article">
      <h3>{article.title}</h3>
      <img src={article.image} alt="" />
      <p>{article.textContent}</p>
      <p>article.image</p>
    </div>
  );
};

export default Article;

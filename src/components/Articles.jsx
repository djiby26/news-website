import React from "react";
import Article from "./Article";

const cardStyle = {
  width: "30rem",
  height: "30rem",
};

const Articles = ({ articles }) => {
  return (
    <div style={cardStyle} class="most-recent-articles">
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;

import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  const { title, text, imageUrl, id } = article;
  const synopsis = text.slice(0, 150);

  return (
    <Link to={"/articleDetail/" + id}>
      <div className="newscard">
        <div
          className="newscardimg"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div>
          <div className="newscardtitle">
            <h1>{title}</h1>
          </div>
          <div>
            <span>{synopsis}</span>
          </div>
          <div></div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;

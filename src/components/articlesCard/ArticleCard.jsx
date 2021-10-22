import React from "react";
import { Link } from "react-router-dom";
import articleImg from "../../assets/imges.jpg";
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

    // <div className="article">
    //   <div className="left">
    //     <h3>{article.title}</h3>
    //     <img src={articleImg} alt="" />
    //   </div>
    //   <div className="right">
    //     <p>{article.text}</p>
    //     <p>{article.datePublication}</p>
    //   </div>
    // </div>
  );
};

export default ArticleCard;

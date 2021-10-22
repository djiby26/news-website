import React from "react";
import ArticleCard from "../../components/articlesCard/ArticleCard";
import AddArticle from "../../components/addArticle/AddArticle";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Articles.css";

const cardStyle = {
  width: "30rem",
  height: "30rem",
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      const data = await axios.get("http://localhost:1337/articles");
      setArticles([...data?.data]);
    }
    fetchArticles();
  }, []);

  function showAddArticlesDialog() {
    setShowModal(!showModal);
  }

  return (
    <div className="newslist">
      <div className="newslistbreadcrumb">
        {/* <div className="newslisttitle">
          <h3>World News</h3>
        </div> */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "4px" }}>
            <button onClick={showAddArticlesDialog}>Ajouter Article </button>
          </div>
        </div>
      </div>
      <div>
        {articles?.map((article, i) => (
          <ArticleCard article={article} key={i} />
        ))}
      </div>
      {showModal ? <AddArticle closeModal={showAddArticlesDialog} /> : null}
    </div>
  );
};

export default Articles;

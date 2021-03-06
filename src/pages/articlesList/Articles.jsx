import React from "react";
import ArticleCard from "../../components/articlesCard/ArticleCard";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const data = await axios.get("http://localhost:1337/articles");
      setArticles([...data?.data]);
    }
    fetchArticles();
  }, []);

  return (
    <div className="articlelist">
      <div>
        {articles?.map((article, i) => (
          <ArticleCard article={article} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Articles;

import React from "react";
import "./ArticlesByCategory.css";
import ArticleCard from "../../components/articlesCard/ArticleCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const ArticlesByCategory = () => {
  const [articles, setArticles] = useState([]);
  //   const [category, setCategory] = useState("");
  let { category } = useParams();

  useEffect(() => {
    async function fetchArticles() {
      const data = await axios.get(
        "http://localhost:1337/articles?_where[category]=" + category
      );
      setArticles([...data?.data]);
    }
    fetchArticles();
  }, []);

  const getCategories = (category) => {
    // setCategory(category);
  };

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

export default ArticlesByCategory;

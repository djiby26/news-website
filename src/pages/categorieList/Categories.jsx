import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await axios.get("http://localhost:1337/categories");
      setCategories([...data?.data]);
    }
    fetchCategories();
  }, []);

  return (
    <>
      <div className="category-pane">
        <h3>Categories</h3>
        {categories.map((category) => (
          // <Link to={"/articlesByCategory/" + category.title}>
          <a key={category.id} href="#">
            {category.title}
          </a>
          // </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;

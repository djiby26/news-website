/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CategoryPane = ({ categories }) => {
  return (
    <div className="category-pane">
      <h3>Categories</h3>
      {categories.map((category) => (
        <a href="#">{category}</a>
      ))}
    </div>
  );
};

export default CategoryPane;

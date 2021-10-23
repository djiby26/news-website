/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddArticle from "../addArticle/AddArticle";
import AddCategorie from "../addCategorie/AddCategorie";
import "./Navigation.css";

const Navigation = () => {
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [showCategorieModal, setShowCategorieModal] = useState(false);

  function showAddCategorieDialog() {
    setShowCategorieModal(!showCategorieModal);
  }

  function showAddArticlesDialog() {
    setShowArticleModal(!showArticleModal);
  }
  return (
    <Router>
      <nav>
        <h1>LOGO</h1>
        <ul className="link-list">
          <li className="nav-link">
            {/* <Link to="/">Accueil</Link> */}
            <a href="">Accueil</a>
          </li>
          <li className="nav-link">
            {/* <Link to="/articles">Articles</Link> */}
            <a href="">Articles</a>{" "}
          </li>
          <li className="nav-link">
            {" "}
            {/* <Link to="/categories">Categories</Link> */}
            <a href="">Categories</a>{" "}
          </li>
        </ul>
        <div className="nav-btn">
          <div className="add-article">
            <button onClick={showAddArticlesDialog}>Ajouter Article</button>
          </div>

          <div className="add-categorie">
            <button onClick={showAddCategorieDialog}>Ajouter Categorie</button>
          </div>
        </div>

        {showCategorieModal ? (
          <AddCategorie closeModal={showAddCategorieDialog} />
        ) : null}

        {showArticleModal ? (
          <AddArticle closeModal={showAddArticlesDialog} />
        ) : null}
      </nav>
    </Router>
  );
};

export default Navigation;

/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navigation = () => {
  return (
    <nav>
      <h1>LOGO</h1>
      <ul className="link-list">
        <li className="nav-link">
          <a href="">Accueil</a>
        </li>
        <li className="nav-link">
          <a href="">Toutes les articles</a>{" "}
        </li>
        <li className="nav-link">
          {" "}
          <a href="">Categories</a>{" "}
        </li>
      </ul>
      <div className="login">
        <a href="#">Se connecter</a>
      </div>
    </nav>
  );
};

export default Navigation;

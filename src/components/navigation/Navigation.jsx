/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../../App";

const Navigation = () => {
  return (
    <Router>
      <nav>
        <h1>LOGO</h1>
        <ul className="link-list">
          <li className="nav-link">
            <Link to="/">Accueil</Link>
            {/* <a href="">Accueil</a> */}
          </li>
          <li className="nav-link">
            <Link to="/articles">Articles</Link>
            {/* <a href="">Articles</a>{" "} */}
          </li>
          <li className="nav-link">
            {" "}
            <Link to="/categories">Categories</Link>
            {/* <a href="">Categories</a>{" "} */}
          </li>
        </ul>
        <div className="login">
          <a href="#">Se connecter</a>
        </div>

        {/* <Switch>
          <Route path="/articles">
            <ManageArticles />
          </Route>
          <Route path="/categories">
            <ManageCategorie />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch> */}
      </nav>
    </Router>
  );
};

export default Navigation;

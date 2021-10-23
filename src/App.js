import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import ArticlesList from "./pages/articlesList/Articles";
import ArticleDetail from "./pages/articleDetail/ArticleDetail";
import CategoriesList from "./pages/categorieList/Categories";
import ArticlesByCategory from "./pages/articlesByCategory/ArticlesByCategory";

function App() {
  return (
    <>
      <Navigation />
      <div className="hero">
        <CategoriesList />
        <main className="main">
          <BrowserRouter>
            <Switch>
              <Route path="/articles">
                <ArticlesList />
              </Route>
              <Route path="/articleDetail/:id">
                <ArticleDetail />
              </Route>
              <Route path="/articlesByCategory/:category">
                <ArticlesByCategory />
              </Route>
              <Route exact path="/">
                <Redirect to="/articles" />
              </Route>
              <Route path="*">
                <ArticlesList />
              </Route>{" "}
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    </>
  );
}

export default App;

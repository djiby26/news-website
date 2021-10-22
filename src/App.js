import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import ArticlesList from "./pages/articlesList/Articles";
import ArticleDetail from "./pages/articleDetail/ArticleDetail";
import CategoryPane from "./components/categoriePane/CategoryPane";

function App() {
  return (
    <>
      <Navigation />
      <CategoryPane />
      <div className="container">
        <main className="main">
          <BrowserRouter>
            <Switch>
              <Route path="/articles">
                <ArticlesList />
              </Route>
              <Route path="/articleDetail/:id">
                <ArticleDetail />
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

import "./App.css";
import Navigation from "./components/Navigation";
import Articles from "./components/Articles";
import { useState } from "react";
import CategoryPane from "./components/CategoryPane";
import articleImg from "./assets/imges.jpg";

function App() {
  const [currentUserRole, setCurrentUserRole] = useState("visitor");

  const [categories, setCategory] = useState([
    "Sport",
    "Coronavirus",
    "Climat",
    "Sante",
    "Politique",
    "Monde",
    "Science",
  ]);

  const [articles, setArticles] = useState([
    {
      id: 0,
      image: { articleImg },
      title: "Greve UCAD",
      textContent:
        "Lorem ipsum dolor sit amet consectetur, " +
        "adipisicing elit. Exercitationem esse nostrum repellendus " +
        "numquam ullam molestias minus rerum, mollitia labore sunt" +
        " necessitatibus blanditiis incidunt id, ea quibusdam " +
        "delectus repellat libero debitis.",
      category: "education",
      date: Date.now,
    },
    {
      id: 1,
      image: { articleImg },
      title: "Augmentation des cas de covid",
      textContent:
        "Lorem ipsum dolor sit amet consectetur, " +
        "adipisicing elit. Exercitationem esse nostrum repellendus " +
        "numquam ullam molestias minus rerum, mollitia labore sunt" +
        " necessitatibus blanditiis incidunt id, ea quibusdam " +
        "delectus repellat libero debitis.",
      category: "Sante",
      date: Date.now,
    },
    {
      id: 2,
      image: { articleImg },
      title: "Greve UCAD",
      textContent:
        "Lorem ipsum dolor sit amet consectetur, " +
        "adipisicing elit. Exercitationem esse nostrum repellendus " +
        "numquam ullam molestias minus rerum, mollitia labore sunt" +
        " necessitatibus blanditiis incidunt id, ea quibusdam " +
        "delectus repellat libero debitis.",
      category: "Politique",
      date: Date.now,
    },
  ]);
  return (
    <div className="App">
      <Navigation />
      <section className="hero">
        <CategoryPane categories={categories} />
        <Articles articles={articles} />
      </section>
    </div>
  );
}

export default App;

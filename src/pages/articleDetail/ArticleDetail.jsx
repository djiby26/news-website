import "./ArticleDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ArticleDetail() {
  let { id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    async function getArticle() {
      const data = await axios.get("http://localhost:1337/articles/" + id);
      setArticle(data?.data);
    }
    getArticle();
  }, [id]);

  async function deleteArticle() {
    if (window.confirm("Do you want to delete this news?")) {
      await axios.delete("http://localhost:1337/newsposts/" + id);
      window.history.pushState(null, "", "/news");
      window.location.reload();
    }
  }
  return (
    <div className="newsview">
      <div
        className="newsviewimg"
        style={{ backgroundImage: `url(${article?.imageUrl})` }}
      ></div>
      <div>
        <div className="newsviewtitlesection">
          <div className="newsviewtitle">
            <h1>{article?.title}</h1>
          </div>
          <div className="newsviewdetails">
            <span style={{ flex: "1", color: "rgb(99 98 98)" }}>
              Written By: <span>{article?.ecritPar}</span>
            </span>
            <span style={{ flex: "1", color: "rgb(99 98 98)" }}>
              Date: <span>{article?.created_at}</span>
            </span>
            <span>
              <button className="btn-danger" onClick={deleteArticle}>
                Delete
              </button>
            </span>
          </div>
        </div>
        <div className="newsviewbody">{article?.text}</div>
      </div>
    </div>
  );
}

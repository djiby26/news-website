import { useState, useEffect } from "react";
import axios from "axios";
export default function AddArticle({ closeModal }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await axios.get("http://localhost:1337/categories");
      setCategories([...data?.data]);
    }
    fetchCategories();
  }, []);
  const [disable, setDisable] = useState(false);
  async function saveArticle() {
    const title = window.articleTitle.value;
    const imageUrl = window.articleImageUrl.value;
    const ecritPar = window.articleEcritPar.value;
    const text = window.articleText.value;
    const category = window.articleCategory.value;

    setDisable(true);
    await axios.post("http://localhost:1337/articles", {
      title,
      imageUrl,
      ecritPar,
      text,
      category,
    });
    window.location.reload();
    setDisable(false);
  }

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={closeModal}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Article</h3>
          <span
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={closeModal}
          >
            X
          </span>
        </div>
        <div className="modal-body content">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="inputField">
              <div className="label">
                <label>Title</label>
              </div>
              <div>
                <input id="articleTitle" type="text" />
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Category</label>
              </div>
              <div>
                <select id="articleCategory">
                  {categories.map((category) => {
                    return (
                      <option value={category.title}>{category.title}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>ImageUrl</label>
              </div>
              <div>
                <input id="articleImageUrl" type="text" />
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Ecrit Par</label>
              </div>
              <div>
                <input id="articleEcritPar" type="text" />
              </div>
            </div>
            <div className="inputField" style={{ flex: "2 1 100%" }}>
              <div className="label">
                <label>Texte</label>
              </div>
              <div>
                <textarea
                  id="articleText"
                  style={{ width: "100%", height: "200px" }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            disabled={disable}
            className="btn-danger"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button disabled={disable} className="btn" onClick={saveArticle}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

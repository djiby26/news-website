import { useState } from "react";
import axios from "axios";

export default function AddCategorie({ closeModal }) {
  const [disable, setDisable] = useState(false);
  async function saveCategorie() {
    const title = window.categorieTitle.value;
    setDisable(true);
    await axios.post("http://localhost:1337/categories", {
      title,
    });
    window.location.reload();
    setDisable(false);
  }

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={closeModal}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Category</h3>
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
                <input id="categorieTitle" type="text" />
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
          <button disabled={disable} className="btn" onClick={saveCategorie}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

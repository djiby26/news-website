import React, { useState } from "react";
const axios = require("axios");

const AddArticle = ({ categories }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    textContent: "",
    publicationDate: "",
    image: null,
    category_id: 0,
  });

  const handleChange = (e) => {
    if (e.target.name !== "image") {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === "image") {
      setFormValues({
        ...formValues,
        publicationDate: e.target.name.split("").reverse().join(""),
      });
    } else {
      setFormValues({ ...formValues, image: e.target.files[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof imageState);
    console.log(formValues);
    // fetch("http://localhost:3001/api/articles").then();
    // axios.post("http://localhost:3001/api/articles", data);
  };

  return (
    <div className="add-article-container">
      <form className="add-article" onSubmit={handleSubmit}>
        <label>
          Titre
          <input
            onChange={handleChange}
            type="text"
            name="title"
            value={formValues.title}
            id="title-inp"
            placeholder="titre de l'article"
          />
        </label>
        <label>
          Texte
          <input
            onChange={handleChange}
            type="text"
            value={formValues.textContent}
            name="textContent"
            id="text-inp"
            placeholder="texte article"
          />
        </label>

        <label>
          Date
          <input
            value={formValues.publicationDate}
            onChange={handleChange}
            type="date"
            name="publicationDate"
            id="date-inp"
          />
        </label>

        <select
          onChange={handleChange}
          name="category_id"
          id="category"
          value={formValues.category_id}
        >
          <option value="1">Category</option>
          <option value="2">Sport</option>
          <option value="3">Politique</option>
          {/* {categories.map((category) => {
            return <option value={category.id} >{category.title}</option>;
          })} */}
        </select>
        <label>
          Image
          <input
            onChange={handleChange}
            multiple={false}
            accept="image/*"
            type="file"
            name="image"
            id="image-inp"
            // value={formValues.image || ""}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default AddArticle;

import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Select from "react-select";
import { options } from "../Options";

const BlogList = ({ item, remItem, updateItem }) => {
  const [search, setSearch] = useState("");
  // let blogsAllArr = JSON.parse(localStorage.getItem("BlogList")) || [];

  // console.log(blogsAllArr);
  return (
    <div className="blog">
      {item.map((i) => {
        console.log("bloglist....!");
        const { id, title, desc, category } = i;
        return (
          <article key={id}>
            <br/>
            <p style={{ color: "red" }}> Title: {title}</p>
            <p style={{ color: "blue" }}> Description : {desc}</p>
            <p style={{ color: "green" }}>
              Category :{" "}
              {category.map(function (d, idx) {
                return <li key={idx}>{d.label}</li>;
              })}
            </p>
            <div>
              <Link to={`/edit-blog/${id}`}>
                <button
                  type="button"
                  onClick={() => {
                    updateItem(id);
                  }}
                >
                  <FaEdit />
                </button>
              </Link>
              <button type="button" onClick={() => remItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default BlogList;

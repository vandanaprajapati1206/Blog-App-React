import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Select from "react-select";
import { options } from "../Options";

const BlogList = ({ item, remItem, updateItem }) => {
  const [search, setSearch] = useState("");

  return (
    <div>

      {item.map((i) => { 
        const { id, title, desc, category =  JSON.parse(localStorage.getItem("blog"))} = i;
       
        // const item_name = category['category'][0]['value'];
        return (
          <article key={id}>
            <p> Title: {title}</p>
            <p> Description : {desc}</p>
            <p>Category :{}</p>
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

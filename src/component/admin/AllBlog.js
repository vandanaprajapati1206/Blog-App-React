import React, { useState } from "react";
import Select from "react-select/dist/declarations/src/Select";
import getAllBlogsLocalStorage from "../Blogs/getAllBlogsLocalStorage";

const AllBlog = ({ item }) => {
  const [search, setSearch] = useState("");
  const [blogData, setList] = useState(getAllBlogsLocalStorage());

  return (
    <div>
      <div>
        <span>Search by Title: </span>
        <input
          placeholder="Search Title"
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
      </div>
      <br />
      {item
        .filter((blog) => {
          if (search === "") {
            return item;
          } else if (blog.title.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((i) => {
          const { id, title, desc, category } = i;
          return (
            <article key={id}>
              <p style={{ color: "red" }}> Title: {title}</p>
              <p style={{ color: "blue" }}> Description : {desc}</p>
              <p style={{ color: "green" }}>
                Category :
                {category.map(function (d, idx) {
                  return <li key={idx}>{d.label}</li>;
                })}
              </p>
              <Select />
              <p>Total Like : </p>
            </article>
          );
        })}
    </div>
  );
};
export default AllBlog;

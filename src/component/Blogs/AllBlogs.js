import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Select from "react-select";
import { options } from "../Options";
import getLocalStorage from "./getLocalStorage";

const AllBlogs = ({ item }) => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState(getLocalStorage());
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

      {/* <div>
        <span>Search by Category: </span>
        <Select
          options={options}
          isMulti={true}
          _default={options.map(({ label }) => label)}
          onChange={setSearch}
          placeholder="Search Title"
        />
      </div> */}
      
    <br/>
      {item
        .filter((blog) => {
          if (search === "") {
            return item;
          } else if (blog.title.toLowerCase().includes(search.toLowerCase())) {
            return item;
          } 
        })
        .map((i) => {
          const { id, title, desc,category  } = i;
          return (
            <article key={id}>
              <p style={{color: "red"}}> Title: {title}</p>
              <p style={{color: "blue"}}> Description : {desc}</p>
              <p style={{color: "green"}}>Category :{category.map(function(d,idx){
              return (<li key={idx}>{d.label}</li>)
            })}</p>
            </article>
          );
        })  }
    </div>
  );
};

export default AllBlogs;

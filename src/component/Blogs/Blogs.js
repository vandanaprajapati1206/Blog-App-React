import React, { useEffect, useState } from "react";
import Alert from "../Alert";
import BlogList from "./BlogList";
import getLocalStorage from "./getLocalStorage";

import { Link } from "react-router-dom";
import AllBlogs from "./AllBlogs";

export default function Blogs() {
  const [list, setList] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem("blog", JSON.stringify(list));
  }, [list]);

  return (
    <section>   
         <hr />
          <h2 style={{ color: "darkmagenta" }}>Blog List</h2>
          <hr />  
      {list.length > 0 && (
        <div>
          <AllBlogs item={list}  />
        </div>
      )}
    </section>
  );
}

import React, { useEffect, useState } from "react";
import Alert from "../Alert";

import { Link } from "react-router-dom";
import AllBlogs from "./AllBlogs";
import getAllBlogsLocalStorage from "./getAllBlogsLocalStorage";

export default function Blogs() {
   const [list, setList] = useState(getAllBlogsLocalStorage());

  useEffect(() => {
    localStorage.setItem("AllBlogs", JSON.stringify(list));
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

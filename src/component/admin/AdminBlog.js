import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getAllBlogsLocalStorage from "../Blogs/getAllBlogsLocalStorage";
import AllBlog from "./AllBlog";

export default function AdminBlog() {
  const [blogData, setList] = useState(getAllBlogsLocalStorage());

  // useEffect(() => {
  //   localStorage.getItem("AllBlogs", JSON.stringify(blogData));
  // }, [blogData]);

  return (
    <div>
      <hr />
      <h2 style={{ color: "darkmagenta" }}>Blog List</h2>
      <hr />

      <section>
        {blogData.length > 0 && (
        <div>
         <AllBlog item={blogData}/>
        </div>
      )}
      </section>
    </div>
  );
}

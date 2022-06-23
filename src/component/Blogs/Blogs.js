import React, { useEffect, useState } from "react";
import AllBlogs from "./AllBlogs";
import getAllBlogsLocalStorage from "./getAllBlogsLocalStorage";

export default function Blogs() {
  const [list, setList] = useState(getAllBlogsLocalStorage());

  useEffect(() => {
    localStorage.setItem("AllBlogs", JSON.stringify(list));
  }, [list]);

  const addlike = (k, id) => {
    console.log(k, id);
    let item = list[k];
    console.log(item);
    item.likes.push(id);
    console.log(item);
    setList(item);
  };

  const dislike = (k, id) => {
    console.log(k, id);
    let item = list[k];
    console.log(item);
    item.likes.splice(id);
    console.log(item);
    setList(item);
  };
  return (
    <section>
      <hr />
      <h2 style={{ color: "darkmagenta" }}>Blog List</h2>
      <hr />
      {list.length > 0 && (
        <div>
          <AllBlogs item={list} like={addlike} />
        </div>
      )}
    </section>
  );
}

import React, { useEffect, useState } from "react";
import { getLikeStorage } from "../Storage/getLikeStorage";
import AllBlogs from "./AllBlogs";
import getAllBlogsLocalStorage from "./getAllBlogsLocalStorage";

export default function Blogs() {
  const [list, setList] = useState(getAllBlogsLocalStorage());
  const [likeList, setLikeList] = useState(getLikeStorage);

  let loginUserId = JSON.parse(localStorage.getItem("LoginUser"));
  let userid = loginUserId.loginUser_id;

  let AlllikeBlogs = JSON.parse(localStorage.getItem("AllLikeBlogs"));
  console.log("AlllikeBlogs", AlllikeBlogs);

  // const addBlog = (i, props) => {
  //   let blogs = list[i];
  //   console.log(blogs);
  //   blogs.LikeBlogs.push(props.item);
  //   setList(blogs);
  // };
  // console.log(list);
  // const LikeBlogs = [];
  // LikeBlogs.push(list);
  // localStorage.setItem("AllLikeBlogs", JSON.stringify(LikeBlogs));

  const addlike = (k) => {
    let item = list[k];
    console.log("Like item",k,  item, userid);
    item.likes.push(userid);
    console.log(item);
    setList(item);
  };

  const removelike = (i) => {
    console.log(i);
    let item = likeList[i];
    console.log("Removed item", item);
    item.likes.pop(userid);
    console.log(item);
    setLikeList(item);
  };

  return (
    <section>
      <hr />
      <h2 style={{ color: "darkmagenta" }}>Blog List</h2>
      <hr />
      {list.length > 0 && (
        <div>
          <AllBlogs item={list} like={addlike} dislike={removelike} />
        </div>
      )}
    </section>
  );
}

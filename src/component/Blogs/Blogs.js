import React, { useEffect, useState } from "react";
import { getLikeStorage } from "../Storage/getLikeStorage";
import AllBlogs from "./AllBlogs";
import getAllBlogsLocalStorage from "../Storage/getAllBlogsLocalStorage";

export default function Blogs() {
  const [list, setList] = useState(getAllBlogsLocalStorage());
  const [likeList, setLikeList] = useState(getLikeStorage);
 
  let a = list.length < 0;
  
  let loginUserId = JSON.parse(localStorage.getItem("LoginUser"));
  let userid = loginUserId.emaillog;

  // let AlllikeBlogs = JSON.parse(localStorage.getItem("AllLikeBlogs"));
  // console.log("AlllikeBlogs", AlllikeBlogs);
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
    console.log("Like ID:", k, "like Iteam: ", item, "User ID: ", userid);
    item.likes.push(userid);
    // console.log(item);
    setList(item);
  };

  const removelike = (j) => {
    console.log(j);
    let item = list[j];
    console.log("UnLike ID:", j, "like Iteam: ", item, "User ID: ", userid);
    item.likes.pop(userid);
    setList(item);
  };

  useEffect(() => {
    localStorage.setItem("AllBlogs", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    localStorage.setItem("AllLikeBlogs", JSON.stringify(likeList));
  }, [likeList]);

  return (
    <section>
      <hr />
      <h2 style={{ color: "darkmagenta" }}>Blog List</h2>
      <hr />

      {!a ? (
        <div>
          <AllBlogs item={list} like={addlike} dislike={removelike} />
        </div>
      ) : (
        <h2>Threre is no one Blogs </h2>
      )}
    </section>
  );
}

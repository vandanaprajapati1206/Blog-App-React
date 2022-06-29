import React, { useEffect, useState } from "react";
import AllBlogs from "./AllBlogs";
import getAllBlogsLocalStorage from "../Storage/getAllBlogsLocalStorage";

export default function Blogs() {
  const [list, setList] = useState(getAllBlogsLocalStorage());

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
    const item = list;
    item[k].likes.push(userid);

    // let aa = item[k].likes.length;
    // console.log("Total Length", aa);

    localStorage.setItem("AllBlogs", JSON.stringify(item));
    console.log("Like ID:", k);
    console.log("like Iteam: ", item);
    console.log("User ID: ", userid);
  };

  //   function filter_likes(filters) {
  //     const likeId = [];
  //     filters.forEach(val => {
  //       likeId.push(...AllBlogs.filter(val => val.likes.includes(val)));
  //     });
  //     console.log(likeId);
  // };

  const removelike = (k) => {
    let item = list;
    var a = item[k].likes;
    var filtered = a.filter(function (value) {
      return value === userid;
    });
    let aa = item[k].likes.length;
    console.log("Total Length", aa);
    console.log(" Like List Filter", filtered);
    a.pop(filtered);
    console.log("UnLike ID:", k);
    console.log("like Iteam: ", item);
    console.log("User ID: ", userid);
    localStorage.setItem("AllBlogs", JSON.stringify(item));
  };

  // useEffect(() => {
  //   localStorage.setItem("AllBlogs", JSON.stringify(list));
  // }, [list]);

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

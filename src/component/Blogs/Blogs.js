import React, { useEffect, useState } from "react";
import AllBlogs from "./AllBlogs";
import getAllBlogsLocalStorage from "../Storage/getAllBlogsLocalStorage";

export default function Blogs(props) {
  const [list, setList] = useState(getAllBlogsLocalStorage());
  let a = list.length < 0;
  let loginUserId = JSON.parse(localStorage.getItem("LoginUser"));
  let userid = loginUserId.emaillog;

  const addlike = (k) => {
    const item = list;
    item[k].likes.push(userid);
    localStorage.setItem("AllBlogs", JSON.stringify(item));
    console.log("Like ID:", k);
    console.log("like Iteam: ", item);
    console.log("User ID: ", userid);
  };

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

  const addComment = (k,comment) => {
    const item = list;
    console.log("Comment Iteam: ", item);
    console.log("User ID: ", userid);
    item[k].comment.push({ userid , comment:comment});
    
    localStorage.setItem("AllBlogs", JSON.stringify(item));
    console.log("Comment ID:", k);
  };
  return (
    <section>
      <hr />
      <h2 style={{ color: "darkmagenta" }}>Blog List</h2>
      <hr />
      {!a ? (
        <div>
          <AllBlogs
            item={list}
            like={addlike}
            dislike={removelike}
            comment={addComment}
          />
        </div>
      ) : (
        <h2>Threre is no one Blogs </h2>
      )}
    </section>
  );
}

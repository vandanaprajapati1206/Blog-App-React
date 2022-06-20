import React, { useState } from "react";
import getLocalStorage from "./getLocalStorage";
import LikeBtn from "../Like/LikeBtn";
import getAllBlogsLocalStorage from "./getAllBlogsLocalStorage";
const AllBlogs = ({ item }) => {
  const [search, setSearch] = useState("");

  const blogList = getAllBlogsLocalStorage();
  console.log("BlogList", blogList);
  let olddata = JSON.parse(localStorage.getItem("LoginUser"));

  let email = olddata.emaillog;

  // console.log(blogList[4].userListId);
  console.log("Email: " , email);
  // let blogs = blogList.map(function(d,idx){
  //   return <li key={idx}>{d.label}</li>;
  // })


  // const userWiseBlog = userListId.map(function (d, idx) {
  //   return <li key={idx}>{d.label}</li>;
  // })
  // console.log(userWiseBlog);

  // let Blogs = email.find((obj) => {
  //   return (
  //     obj.email === blogList[0].userListId
  //   );
  // });
  // console.log(Blogs);
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
          const { id, name, desc, category } = i;

          return (
            <article key={id}>
              <p style={{ color: "red" }}> Title: {name}</p>
              <p style={{ color: "blue" }}> Description : {desc}</p>
              <p style={{ color: "green" }}>
                Category :
                {category.map(function (d, idx) {
                  return <li key={idx}>{d.label}</li>;
                })}
              </p>
              <LikeBtn />
            </article>
          );
        })}
    </div>
  );
};

export default AllBlogs;

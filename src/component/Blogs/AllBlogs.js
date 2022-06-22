import React, { useState } from "react";
import getLocalStorage from "./getLocalStorage";
import LikeBtn from "../Like/LikeBtn";
import getAllBlogsLocalStorage from "./getAllBlogsLocalStorage";
import "../admin/admin.css";
import getLikeLocalStorage from "../Like/getLikeLocalStorage";

const AllBlogs = ({ item }) => {
  const [search, setSearch] = useState("");
  const blogList = getAllBlogsLocalStorage();
  console.log("BlogList", blogList);

  // for (const key in blogList) {
  //   if (blogList.hasOwnProperty(key)) {
  //     const element = blogList[key];
  //       console.log(key+": ", element);
  //   }
  // }
  //   blogList.map((i) => {
  //     const { userListId} = i;
  //  const a=  userListId.map(function (d, idx) {
  //     console.log(a);
  //     return <li key={idx}>{d.label}</li>;
  //   })})

  // const a= blogList.find(function(a,index){
  //   if(a.userListId =='label')
  //   return true;
  // })
  // console.log(a);

  let olddata = JSON.parse(localStorage.getItem("LoginUser"));
  let email = olddata.emaillog;
  console.log("Email: ", olddata, email);

  // console.log(blogList[4].userListId);

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

  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [list, setList] = useState(getLikeLocalStorage());

  //let likeArr = JSON.parse(localStorage.getItem("TotalLike")) || [];
  let blogArr = JSON.parse(localStorage.getItem("AllBlogs")) || [];
  let usersArr = JSON.parse(localStorage.getItem("LoginUser")) || [];
  let blogLike = JSON.parse(localStorage.getItem("TotalLike")) || [];
  console.log(blogArr);
  console.log(like, disLike);

  function likef() {
    console.log("Liked", like);
    if (toggle) {
      setToggle(false);
      setLike(like - 1);
    } else {
      setToggle(true);
      setLike(like + 1);
      if (!toggle) {
        setToggle(true);
        setLike(like + 1);
        setDisLike(disLike - 1);

        const LikeCount = {
           id: new Date().getTime().toString(),count: like + 1,
          email,
        };

  
        blogLike.push(LikeCount);
        localStorage.setItem("TotalLike", JSON.stringify(LikeCount));
      }
    }
  }

  function dislikef() {
    console.log("DisLiked", disLike);
    if (toggle) {
      setToggle(false);
      setDisLike(disLike + 1);
    } else {
      setToggle(true);
      setDisLike(like + 1);
      if (!toggle) {
        setToggle(false);
        setDisLike(disLike + 1);
        setLike(like - 1);
      }
    }
  }

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
            <article key={id} className="blog">
              <p style={{ color: "red" }}> Title: {name}</p>
              <p style={{ color: "blue" }}> Description : {desc}</p>
              <p style={{ color: "green" }}>
                Category :
                {category.map(function (d, idx) {
                  return <li key={idx}>{d.label}</li>;
                })}
              </p>
              <LikeBtn/>
            </article>
          );
        })}
    </div>
  );
};

export default AllBlogs;

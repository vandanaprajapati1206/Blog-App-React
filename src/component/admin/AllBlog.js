import React, { useState } from "react";
import Select from "react-select";
import getAllBlogsLocalStorage from "../Blogs/getAllBlogsLocalStorage";
import LikeBtn from "../Like/LikeBtn";
import UsersList from "./UsersList";

const AllBlog = ({ item }) => {
  const [search, setSearch] = useState("");
  const [blogData, setList] = useState(getAllBlogsLocalStorage());
  const [userList, setUserList] = useState("");

  let userData = JSON.parse(localStorage.getItem("usersSignup"));
  console.log(userData);

  // let UserBlogsArr = JSON.parse(localStorage.getItem("AllBlogs"));
  
  // console.log(UserBlogsArr);

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
          const { id, title, desc, category } = i;
          return (
            <div className="blog">
              <article key={id}>
                <p style={{ color: "red" }}> Title: {title}</p>
                <p style={{ color: "blue" }}> Description : {desc}</p>
                <p style={{ color: "green" }}>
                  Category :
                  {category.map(function (d, idx) {
                    return <li key={idx}>{d.label}</li>;
                  })}
                </p>
                <p>Users List : {}</p>
                <p>Assign User: </p>
                <p>Total Like : {}</p>
              </article>
            </div>
          );
        })}
    </div>
  );
};
export default AllBlog;

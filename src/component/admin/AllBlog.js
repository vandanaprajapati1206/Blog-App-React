import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const AllBlog = ({ item, updateItem, remItem, blogLikeArr }) => {
  const [search, setSearch] = useState("");
  // const [blogData, setList] = useState(getAllBlogsLocalStorage());


  // let userData = JSON.parse(localStorage.getItem("usersSignup"));
  // console.log(userData);

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
          const { id, name, desc, category ,userListId, blogLikeArr } = i;
          let blogLike = JSON.parse(localStorage.getItem("TotalLike")) || [];

          return (
            <div className="blog">
              <article key={id}>
                <p style={{ color: "red" }}> Title: {name}</p>
                <p style={{ color: "blue" }}> Description : {desc}</p>
                <p style={{ color: "green" }}>
                  Category :
                  {category.map(function (d, idx) {
                    return <li key={idx}>{d.label}</li>;
                  })}
                </p> 
                <p style={{ color: "gray" }}>
                  Users List:
                  {userListId.map(function (d, idx) {
                    return <li key={idx}>{d.label}</li>;
                  })}
                </p>
                <p>Total Like : {blogLike.count}</p>
                <div>
              <Link to={`/admin/edit-blog/${id}`}>
                <button
                  type="button"
                  onClick={() => {
                    updateItem(id);
                  }}
                >
                  <FaEdit />
                </button>
              </Link>
              <button type="button" onClick={() => remItem(id)}>
                <FaTrash />
              </button>
            </div>
              </article>
            </div>
          );
        })}
    </div>
  );
};
export default AllBlog;

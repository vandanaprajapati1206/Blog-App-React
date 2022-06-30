import React, { useState } from "react";
import "../admin/admin.css";
import Comment from "../Comment/Comment";
import Like from "../Like/Like";

const AllBlogs = ({ item, like, dislike, comment }) => {
  const [search, setSearch] = useState("");
  //const [comment, setComment] = useState();

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
          } else if (blog.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          } else if (blog.desc.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((i, k) => {
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
              <Like
                addlike={like}
                // id={userid}
                likes={item.likes}
                k={k}
                removelike={dislike}
              />
              {/* {comment.map((rec) => {
                return (
                  <h5>
                    <span style={{ fontWeight: "500" }}></span>{rec.text}
                  </h5>
                );
              })} */}
              {/* {comment}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setComment(e.target[0].value, id);
                }}
              >
                <input type="text" placeholder="add a comment" />
              </form> */}

              <Comment 
              addComment={comment} 
              comments={item.comments} 
              k={k} 
              />
            </article>
          );
        })}
    </div>
  );
};

export default AllBlogs;

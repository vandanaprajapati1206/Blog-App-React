import React, { useEffect, useState } from "react";
import getAllBlogsLocalStorage from "../Storage/getAllBlogsLocalStorage";

export default function Comment(props) {
  const [comment, setComment] = useState(null);
  const [list, setList] = useState(getAllBlogsLocalStorage());

  function add(cmt) {
    props.addComment(props.k, cmt);
  }

  function handleComment(e) {
    e.preventDefault();
    const cmt = e.target[0].value;
    add(cmt);
    setComment(cmt);
    console.log(cmt);
  }

  const item = list;
  let a = item.map((i) => {
    const { comment, id } = i;
    return (
      <h6 key={id}>
        <br />
        <p style={{ color: "#c25d6f" }}>
          {comment.map(function (d, idx) {
            return (
              <li key={idx}>
                {d.userid} {d.comment}
              </li>
            );
          })}
        </p>
      </h6>
    );
  });

  useEffect(() => {
    localStorage.getItem("AllBlogs", JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <br/>
      <h6>Comments :{a}</h6>
      <form onSubmit={handleComment}>
        <input type="text" placeholder="Add a comment" />
      </form>
    </div>
  );
}

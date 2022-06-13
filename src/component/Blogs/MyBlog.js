import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import BlogList from "./BlogList";
import Blogs from "./Blogs";
import getLocalStorage from "./getLocalStorage";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function MyBlog({ item, remItem, updateItem }) {
  const [search, setSearch] = useState("");
  const [list, setList] = useState(getLocalStorage());

  return (
    <div>
      {list.length > 0 && (
        <div>
          <hr />
          <h2 style={{ color: "darkmagenta" }}>My Blog List</h2>
          
          <hr />
          <input
            placeholder="Search Title"
            onChange={(e) => setSearch(e.target.value)}
          />
          <br />
          <article>
            <table
              style={{
                backgroundColor: "#ffd2fd",
                color: "darkblue",
                padding: "30px",
                marginTop: "30px",
                marginInline: "auto",
              }}
            >
              <thead style={{ backgroundColor: "navy", color: "white" }}>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>category</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              {/*           
          {item
            .filter((blog) => {
              if (search === "") {
                return blog;
              } else if (
                blog.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return blog;
              }
            })
            .map((i) => {
              const { id, title, desc, category } = i;
              return (
                <tbody key={id}>
                  <tr>
                    <th>{title}</th>
                    <th>{desc}</th>
                    <th>{category}</th>
                    <th>
                      <Link to={`/user/edit-blog/${id}`}>
                        <button
                          type="button"
                          onClick={() => {
                            updateItem(id);
                          }}
                        >
                          <FaEdit />
                        </button>
                      </Link>
                    </th>
                    <th>
                      <button type="button" onClick={() => remItem(id)}>
                        <FaTrash />
                      </button>
                    </th>
                  </tr>
                </tbody> 
              );
            })} */}
            </table>
          </article>
        </div>
      )}
    </div>
  );
}

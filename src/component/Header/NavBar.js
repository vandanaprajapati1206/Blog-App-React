
import React from "react";
import {  NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h1 style={{ color: "darkmagenta" }}>Blog Application</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "20px",
          margin: "20px",
          backgroundColor: "#fad0ff",
          justifyContent: "center",
        }}
      >
        <nav>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/user/myblog"
          >
            My Blogs
          </NavLink>{" "}
          || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/user/blog-list"
          >
            All Blogs
          </NavLink>
          || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/user/add-blog"
          >
            Add Blog
          </NavLink>{" "}
          || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
          >
            Log Out
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

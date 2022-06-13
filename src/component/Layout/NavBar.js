import { Button } from "bootstrap";
import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export default function NavBar({ logout, props }) {
  const nav = useNavigate();

  // const { username, email, city, phone } =
  //   (props.location && props.location.state) || {};

  function handelLogOut() {
    logout();
    nav("/");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
  }

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
              return { color: isActive ? "red" : "" };
            }}
            to="/myblog"
          >
            My Blogs
          </NavLink>{" "}
          || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/blogs"
          >
            All Blogs
          </NavLink>
          || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/add-blog"
          >
            Add Blog
          </NavLink>
        </nav>
      </div>

 

      <button onClick={handelLogOut} style={{ marginLeft: "50%" }}>
        Log Out
      </button>

      <Outlet />
    </div>
  );
}

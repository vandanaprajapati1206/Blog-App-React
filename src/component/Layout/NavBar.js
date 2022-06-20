import { Button } from "bootstrap";
import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export default function NavBar({ logout, props }) {
  const nav = useNavigate();
  var user = JSON.parse(localStorage.getItem("usersSignup"))
  var logingUser = JSON.parse(localStorage.getItem("LoginUser"))
  console.log(user);
  console.log(logingUser);

  function handelLogOut() {
    logout();
    nav("/");
    localStorage.removeItem("LoginUser");
    localStorage.removeItem("BlogList");
    sessionStorage.removeItem("LogInEmail");
    sessionStorage.removeItem("LogInPassword");
  }

  return (
    <div>
      <h1 style={{ color: "darkmagenta" }}>Blog Application</h1>
      <h5 style={{ color: "darkmagenta", backgroundColor: "rgb(233 178 240)" }}>
       
      
     User Id:  {logingUser.loginUser_id}    Welcome....!!!
        <button
          onClick={handelLogOut}
          className="btn btn-light"
          style={{
            marginLeft: "50%",
            color: "darkmagenta",
            borderColor: "darkmagenta",
          }}
        >
          Log Out
        </button>
      </h5>
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
            to="/blogs"
          >
            All Blogs
          </NavLink>
          {/* <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/myblog"
          >
            My Blogs
          </NavLink> */}
          {/* || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/add-blog"
          >
            Add Blog
          </NavLink>
          || || */}
          || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/profile"
          >
            My Profile
          </NavLink>
        </nav>
      </div>

      {/* <button onClick={handelLogOut} style={{ marginLeft: "50%" }}>
        Log Out
      </button> */}

      <Outlet />
    </div>
  );
}

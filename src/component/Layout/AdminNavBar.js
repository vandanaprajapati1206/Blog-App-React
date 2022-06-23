import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminNavBar({ adminlogout, props }) {
  const nav = useNavigate();
  function handelLogOut() {
    adminlogout();
    nav("/");
    localStorage.removeItem("LoginUser")
    sessionStorage.removeItem("LogInEmail");
    sessionStorage.removeItem("LogInPassword");
  }
  return (
    <div>
      <h1 style={{ color: "darkmagenta" }}>Blog Application</h1>
      <h4 style={{ color: "darkmagenta", backgroundColor: "rgb(233 178 240)" }}>
        Admin Panel
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
      </h4>
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
            to="/admin/dashboard"
          >
            Dashboard
          </NavLink>
          || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/admin/users"
          >
            Users
          </NavLink>
          || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/admin/blogs"
          >
            Blogs
          </NavLink>|| ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/admin/addblog"
          >
            Add Blogs
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

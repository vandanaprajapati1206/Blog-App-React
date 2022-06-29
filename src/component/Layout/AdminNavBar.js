import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminNavBar({ adminlogout, props }) {
  const nav = useNavigate();
  function handelLogOut() {
    adminlogout();
    nav("/");
    localStorage.removeItem("LoginUser");
    sessionStorage.removeItem("LogInEmail");
    sessionStorage.removeItem("LogInPassword");
  }
  return (
    <div>
      <h1 style={{ color: "#412db2" }}>Blog Application</h1>
      <h4 style={{ color: "white", backgroundColor: "rgb(125 106 201)" }}>
        Admin Panel
        <button
          onClick={handelLogOut}
          className="btn btn-light"
          style={{
            marginLeft: "50%",
            color: "#412db2",
            borderColor: "#412db2",
          }}
        >
          Log Out
        </button>
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "50px",
          margin: "20px",
          backgroundColor: "rgb(212 205 239)",
          justifyContent: "center",
        }}
      >
        <nav style={{ margin: "auto" ,fontSize: '20px', fontStyle:'' }}>
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
          </NavLink>
          || ||
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

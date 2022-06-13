import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Header() {
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
            to="/"
          >
           Home
          </NavLink>{" "} || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/contact-us"
          >
            Contact Us
          </NavLink>
          || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/login"
          >
            Sign In
          </NavLink>{" "}
          || ||
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/sign-up"
          >
            Sign Up
          </NavLink>
         
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

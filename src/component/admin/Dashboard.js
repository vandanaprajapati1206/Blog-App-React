import React, { useState } from "react";
import getAllBlogsLocalStorage from "../Storage/getAllBlogsLocalStorage";
import "./admin.css";

export default function Dashboard() {
  let userData = JSON.parse(localStorage.getItem("usersSignup"));
  const [blogData, setBlogData] = useState(getAllBlogsLocalStorage());

  return (
    <div>
      <hr />
      <h2 style={{ color: "#412db2" }}>Dashboard</h2>
      <hr />

      <h3 style={{ color: "darkblue" }}>
        <pre>
          <div style={{ width: "100%" }}>
            Total Blog : {blogData.length}          Total User : {userData.length}
          </div>
        </pre>
      </h3>
    </div>
  );
}

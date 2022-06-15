import React from "react";

export default function MyProfile() {
 const profile = JSON.stringify(localStorage.getItem("LoginUser"))

    return (
    <div>
      <hr />
      <h2 style={{ color: "darkmagenta" }}>My Profile</h2>
      <hr />
  

    </div>
  );
}

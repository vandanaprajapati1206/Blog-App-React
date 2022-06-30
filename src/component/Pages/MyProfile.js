import React from "react";

export default function MyProfile() {
  var logingUser = JSON.parse(localStorage.getItem("LoginUser"));

  return (
    <div>
      <hr />
      <h2 style={{ color: "darkmagenta" }}>My Profile</h2>
      <hr />
      <div>
        Email : {logingUser.emaillog}
        <br />
        Password : {logingUser.passwordlog}
      </div>
    </div>
  );
}

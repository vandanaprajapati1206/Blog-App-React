import React from "react";

const MyProfile = () => {
  var logingUser = JSON.parse(localStorage.getItem("LoginUser"));

  return(
    <div>Email : {logingUser.emaillog}
    Password : {logingUser.passwordlog}</div>
  )
};

export default MyProfile;

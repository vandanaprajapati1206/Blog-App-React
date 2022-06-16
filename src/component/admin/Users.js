import React, { useEffect, useState } from "react";
import Alert from "../Alert";
import { Link } from "react-router-dom";
import UsersList from "./UsersList";

export default function Users() {
  let userData = JSON.parse(localStorage.getItem("usersSignup"));
  return (
    <section>
      <hr />
      <h2 style={{ color: "darkmagenta" }}>User List</h2>
      <hr />
      {userData.length > 0 && (
        <div>
          <UsersList item={userData} />
        </div>
      )}
    </section>
  );
}

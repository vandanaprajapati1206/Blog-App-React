import React from "react";
import UsersList from "./UsersList";

export default function Users() {
  let userData = JSON.parse(localStorage.getItem("usersSignup"));
  
  // let category = userData.interst;

  // var result = userData.filter(obj => {
  //   return obj.interst === "value"
  // })
  // const obj = Object.assign({}, category);
  // console.log(obj);
  // console.log("all user data", userData);
  // console.log(result);
  
  return (
    <section>
      <hr />
      <h2 style={{ color: "#412db2" }}>User List</h2>
      <hr />
      {userData.length > 0 && (
        <div>
          <UsersList item={userData} />
        </div>
      )}
    </section>
  );
}

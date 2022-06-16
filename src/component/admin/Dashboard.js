// import React from "react";

// type Props = {
//   roleRequied: "ADMIN" | "USER",
//   message: String,
// };

// const useRole = () => {
//   let users: any;
//   const _user = localStorage.getItem("login");
//   if (_user) {
//     users = JSON.parse(_user);
//   }
//   if (users) {
//     return users.role
//   } else {
//     return 'USER'
//   }
// };

// export default function Dashboard(props: Props) {
//   const { roleRequied, message } = props;
//   const role = useRole()
//   return <div> Admin Dashboard</div>;
// }

import React, { useState } from "react";
import getAllBlogsLocalStorage from "../Blogs/getAllBlogsLocalStorage";

export default function Dashboard() {
  let userData = JSON.parse(localStorage.getItem("usersSignup"));
  const [blogData, setList] = useState(getAllBlogsLocalStorage());

  return (
    <div>
      <hr />
      <h2 style={{ color: "darkmagenta" }}>Dashboard</h2>
      <hr />

      <h3 style={{ color: "darkblue" }}>Total Blog : {blogData.length} </h3>
      <h3 style={{ color: "darkblue" }}>Total User : {userData.length}</h3>
    </div>
  );
}

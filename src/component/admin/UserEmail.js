// const UserEmail = () => {
//   let userData = JSON.parse(localStorage.getItem("usersSignup"));

//   console.log(userData);

//   return userData.map((i) => {
//     const { user_id, email } = i;
//     console.log(email);

//     return <div key={user_id}>{email}</div>;
//   });
// };

// export default UserEmail;

import React from "react";

const UserEmail = () => {
  let userData = JSON.parse(localStorage.getItem("usersSignup"));

  return (
    <div>
      {userData.map((i) => {
        const { user_id, email } = i;
        console.log(email);
        return <article key={user_id}>{email}</article>;
      })}
    </div>
  );
};

export default UserEmail;

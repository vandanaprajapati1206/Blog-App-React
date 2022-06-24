// import { number } from "prop-types";
// import React, { useEffect, useState } from "react";
// import getLikeLocalStorage from "./getLikeLocalStorage";

import { useEffect, useState } from "react";
import { getLikeStorage } from "../Blogs/Blogs";
import getAllBlogsLocalStorage from "../Blogs/getAllBlogsLocalStorage";

// const Like = () => {
//   const [liked, setLike] = useState(false);
//   const [disLike, setDisLike] = useState(true);
//   const [list, setList] = useState(getLikeLocalStorage());

//   let logData = JSON.parse(localStorage.getItem("LoginUser"));
//   let email = logData.emaillog;

//   let blogData = JSON.parse(localStorage.getItem("AllBlogs"));
//  console.log(blogData);
//   let blog = blogData.emaillog;

//   useEffect(() => {
//     localStorage.setItem("Like", JSON.stringify(list));
//   }, [list]);

//   function handleBtn(e) {
//     e.preventDefault();
//     console.log("Clicked..!");
//     const LikesData = {
//       liked: liked + 1,
//       disLike: liked - 1,
//       email,
//       blog,
//     };
//     localStorage.setItem("Likes", JSON.stringify([LikesData]));
//   }
//   return (
//     <div>
//       <button onClick={handleBtn}>Like</button>
//     </div>
//   );
// };
// export default Like;

function Like(props) {
  const [state, setState] = useState(true);
  // const [counter, setCounter] = useState(0);
  // let loginUserId = JSON.parse(localStorage.getItem("LoginUser"));
  // let userid = loginUserId.emaillog;


  // function toggle() {
  //   setState(!state);
  //   if (state === true) {
  //     props.addlike(props.k, props.userid);
  //   } 
  //   // if(!state === true)
  //   // {
  //   //   props.removeLike(props.k, props.userid);
  //   // }
  // }

  // useEffect(() => {
  //   console.log(state);
  //   //localStorage.setItem('', JSON.stringify(list))
  // // },[list]);
  // }, [state]);

  return (
    <div
      className="Favorite"
      onClick={() => props.addlike(props.k, props.userid)}
      id="clicks"
    >
      Like:
      {/* {counter} */}
      {state ? <span>♡</span> : <span>❤</span>}
    </div>
    
  );
}
export default Like;

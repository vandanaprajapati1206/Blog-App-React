// import React, { useEffect, useState } from "react";

// const LikeBtn = () => {
//   const [like, setLike] = useState(0);
//   const [disLike, setDisLike] = useState(0);
//   const [toggle, setToggle] = useState(false);

//   //let likeArr = JSON.parse(localStorage.getItem("TotalLike")) || [];
//   let blogArr = JSON.parse(localStorage.getItem("AllBlogs")) || [];
//   let blogTitle = blogArr
//   console.log("blogTitle", blogTitle);
  
//   //  let Blogs = blogArr.find((obj) => {
//   //   return (
//   //     obj.title === blogArr[0].title
//   //   );
//   // });
//   // console.log(Blogs);

//   // let blogId = blogArr[0].title;
//   // console.log(blogId);

//   let olddata = JSON.parse(localStorage.getItem("LoginUser"));
//   let email = olddata.emaillog;

//   //console.log(blogArr);
//   console.log(like, disLike);

//   function likef() {
//     console.log("Liked", like);
//     if (toggle) {
//       setToggle(false);
//       setLike(like - 1);
//     } else {
//       setToggle(true);
//       setLike(like + 1);
//       if (!toggle) {
//         setToggle(true);
//         setLike(like + 1);
//         setDisLike(disLike - 1);
//         const LikeCount = {
//           count: like + 1,
//           email, blogTitle
//         };
     
//       }
//     }
//   }

//   function dislikef() {
//     console.log("DisLiked", disLike);
//     if (toggle) {
//       setToggle(false);
//       setDisLike(like - 1);
//     } else {
//       setToggle(true);
//       // setDisLike(disLike + 1);
//       if (!toggle) {
//         setToggle(false);
//         // setDisLike(disLike + 1);
//         setLike(like - 1);
//         // const DisLikeCount = {
//         //   count: like - 1,
//         // };
//         const DisLike={
//           email, blogTitle
//         }
//       }
//     }
//   }
// var a= localStorage.getItem("TotalLike")
// console.log(a);

//   // function toggleButton(e) {
//   //   e.preventDefault();
//   //   console.log("Liked..");
//   //   const LikeCount = {
//   //     count: like + 1,
//   //   };
//   //   localStorage.setItem("TotalLike", JSON.stringify((LikeCount)));
//   //  // console.log(likeArr);
//   //   setToggle(!toggle);

//   // }

//   // const handleLike = () => {
//   //   let currentLikedBands = props.likedBands;
//   //   if (!isLiked) {
//   //     updateLike(true);
//   //     if (!currentLikedBands.includes(name))
//   //       props.updateLikedBands(
//   //         [...currentLikedBands, name]
//   //       );
//   //   } else {
//   //     updateLike(false);
//   //     if (currentLikedBands.includes(name))
//   //       props.updateLikedBands(
//   //         currentLikedBands
//   //         .filter(band => band !== name)
//   //         );
//   //   }
//   // };
//   // useEffect(() => {
//   //   localStorage.setItem("TotalLike", JSON.stringify());

//   // }, []);

//   // useEffect(() => {
//   //   localStorage.setItem("TotalLike", JSON.stringify(list));
//   // }, [list]);
 
// return (
//     <>
//       <button
//         style={{ backgroundColor: toggle ? "red" : "white" }}
//         onClick={toggle ? dislikef : likef}
//       >
//         {toggle ? "DisLike" : "Like"}
//       </button>
//     </>
//   );
// };
// export default LikeBtn;

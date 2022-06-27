import { useState } from "react";

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
  // function toggle() {
  //   setState(!state);
  //   if (state === true) {
  //     props.addlike(props.k, props.userid);
  //   }
  //   if (!state === true) {
  //     props.removelike(props.j, props.userid);
  //   }
  // }
  // console.log(toggle);

  // const handleLike = () => {

  //   let currentLike = props.likes;
  //   if (!state) {
  //     setState(true);
  //   }
  //   if (!currentLike) {
  //     // props.updateLike([...currentLike, name]);
  //     props.addlike(props.k, props.userid);
  //   } else {
  //     setList(false);
  //     if (currentLike.inclues(name))
  //       // props.updateLike(currentLike.filter((a) => a !== name));
  //       props.removelike(props.k, props.userid);
  //   }
  // };

  // const [isLiked, updateLike] = useState(false);
  // const handleLike = () => {
  //   let currentLikedBands = props.likedBands;
  //   if (!isLiked) {
  //     updateLike(true);
  //     if (!currentLikedBands.includes(name))
  //       props.updateLikedBands(
  //         [...currentLikedBands, name]
  //       );
  //   } else {
  //     updateLike(false);
  //     if (currentLikedBands.includes(name))
  //       props.updateLikedBands(
  //         currentLikedBands
  //         .filter(band => band !== name)
  //         );
  //   }
  // };

  // useEffect(() => {
  //   console.log(state);
  //   //localStorage.setItem('', JSON.stringify(list))
  // // },[list]);
  // }, [state]);

  return (
    // <div
    //   className="Favorite"
    //   onClick={() => props.addlike(props.k, props.id)}
    //   id="clicks"
    // >
    //   {state ? <span>♡ Like</span> : <span>❤ Liked</span>}
    // </div>

    <section>
      
      {/* <div
        className="Favorite"
        onClick={() => props.addlike(props.k, props.userid)}
        id="clicks"
      >
        Like: 

         {state ? <span>♡</span> : <span>❤</span>}
      </div> */}

      {!state ? (
        <div
          className="Favorite"
          onClick={() => props.addlike(props.k, props.userid)}
          id="clicks"
        >
          Like:
          <span>♡</span>
        </div>
      ) : (
        <div
          className="Favorite"
          onClick={() => props.removelike(props.i, props.userid)}
          id="clicks"
        >
          Like:
          <span>❤</span>
        </div>
      )}
    </section>
  );
}
export default Like;

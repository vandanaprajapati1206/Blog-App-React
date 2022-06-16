// import React, { useState } from 'react'
// import cn from "classnames";
// import "./likebtn.scss";
// import { ReactComponent as Hand } from "./hand.svg";

// export default function LikeBtn() {
//   const [liked, setLiked] = useState(null);
//   const [clicked, setClicked] = useState(false);

//   return (
//         <button
//       onClick={() => setLiked(!liked)}
//       onAnimationEnd={() => setClicked(false)}
//       className={cn("like-button-wrapper", {
//         liked,
//       })}
//     >
//       <div className="like-button">
//         <Hand />
//         <span>Like</span>
//       </div>
//     </button>
//   )
// }

import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
// import Heart from "react-animated-heart";

export default function LikeBtn() {
  const [isClick, setClick] = useState(false);
  console.log(isClick);
  function handleLikebtn(e)
  {
    e.preventDefault();
    setClick(!isClick)
    
  }
  return (
    <div >
      
      <button isClick={isClick} onClick={handleLikebtn} >Like </button>
    </div>
  );
}

import { useState } from "react";
import getAllBlogsLocalStorage from "../Storage/getAllBlogsLocalStorage";

function Like(props) {
  const [state, setState] = useState(true);
  const [list, setList] = useState(getAllBlogsLocalStorage());
  let likeUserId = JSON.parse(localStorage.getItem("AllBlogs"));
  let likeId = likeUserId.likes;
  // const [counter, setCounter] = useState(0);
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

  function add() {
    props.addlike(props.k, props.userid);
  }
  function remove() {
    props.removelike(props.k, props.userid);
  }
  const user = (k) => {
    let item = list;
    const a = item[k].likes.find((val) => {
      return val.likes !== likeId;
    });
    console.log(a);
  };

  function toggle() {
    setState(!state);
    if (state === true) {
      console.log("add like");
      add();
    } else {
      if (!user) {
        setState(state === true);
        console.log("add like1");
        add();
      } else {
        setState(state === false);
        console.log("remove like");
        remove();
      }
    }
  }

  return (
    <div className="Favorite" onClick={toggle} id="clicks">
      {state ? <span>♡ Like</span> : <span>❤ Liked</span>}
    </div>
  );
}
export default Like;

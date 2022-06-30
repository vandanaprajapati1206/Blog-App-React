import { useEffect, useState } from "react";
import getAllBlogsLocalStorage from "../Storage/getAllBlogsLocalStorage";

function Like(props) {
  const [state, setState] = useState(true);
  const [list, setList] = useState(getAllBlogsLocalStorage());

  function add() {
    props.addlike(props.k, props.userid);
  }

  function remove() {
    props.removelike(props.k, props.userid);
  }

  function user() {
    console.log((value) => value !== props.userid);
    props.a.filter(function (value) {
      return value !== props.userid;
    });
  }

  function toggle() {
    setState(false);
    if (!state) {
      console.log("state", state);
      setState(true)
      add();
    } else {
      setState(false);
      remove();
    }
  }

  // function toggle() {
  //   setState(false);
  //   if (!state && !user) {
  //     console.log("state", state);
  //     setState(true);
  //     remove();
  //   } else {
  //     if (user) {
  //       setState(false);
  //       add();
  //     }
  //     setState(false);
  //     remove();
  //   }
  // }

  useEffect(() => {
    localStorage.getItem("AllBlogs", JSON.stringify(list));
  }, [list]);

  return (
    <div className="Favorite" onClick={() => toggle()} id="clicks">
      {state ? <span>❤ Liked</span> : <span>♡ Like</span>}
    </div>
  );
}
export default Like;

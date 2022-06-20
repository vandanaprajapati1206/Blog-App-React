import React, { useEffect, useState } from 'react'
import getAllBlogsLocalStorage from '../Blogs/getAllBlogsLocalStorage';

 const LikeBtn = () => {
    const [toggle, setToggle] = useState(0);
    const [list, setList] = useState(getAllBlogsLocalStorage());

    function toggleButton (e){
      e.preventDefault();
      console.log("Liked..");
      const LikeCount = {
        toggle : toggle + 1
      };
      localStorage.setItem("Toggle Btn", JSON.stringify(LikeCount));
     // localStorage.setItem("AllBlogs", JSON.stringify(LikeCount))
      setToggle(!toggle);

    }  
    useEffect(() => {
     
      },[toggle]);
    return (
     <>
       <button style={{backgroundColor: toggle ? 'red' : 'white'}} onClick={toggleButton}>Like</button>
     </>
    );
}
export default LikeBtn
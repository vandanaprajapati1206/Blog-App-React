import React, { useEffect } from 'react'

 const LikeBtn = () => {
    const [toggle, setToggle] = React.useState(false);
    const toggleButton = () => setToggle(!toggle);
    useEffect(() => {
        
      }, [toggle]);
    return (
     <>
       <button style={{backgroundColor: toggle ? 'red' : 'white'}} onClick={toggleButton}>Click Me</button>
     </>
    );
}
export default LikeBtn
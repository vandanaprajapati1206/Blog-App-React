const getAllBlogsLocalStorage = () => {
    let list = localStorage.getItem("AllBlogs");
  
      if (list) {
        return JSON.parse(localStorage.getItem("AllBlogs"));
      } else {
        return [];
      }
    };
    export default getAllBlogsLocalStorage;
  
  
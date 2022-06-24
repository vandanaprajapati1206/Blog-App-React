export const getLikeStorage = () => {
    let list = localStorage.getItem("AllLikeBlogs");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  
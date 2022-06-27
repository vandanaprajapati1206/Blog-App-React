const getLocalStorage = () => {
  let list = localStorage.getItem("BlogListLike");

    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  export default getLocalStorage;


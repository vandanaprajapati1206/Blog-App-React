const getLocalStorage = () => {
    let list = localStorage.getItem("blog");
    if (list) {
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return [];
    }
  };
  export default getLocalStorage;
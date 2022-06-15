const getLocalStorage = () => {
  let list = localStorage.getItem("BlogList");

    if (list) {
      return JSON.parse(localStorage.getItem("BlogList"));
    } else {
      return [];
    }
  };
  export default getLocalStorage;


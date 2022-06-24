const getLocalStorage = () => {
  let list = localStorage.getItem("BlogList");

    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  export default getLocalStorage;


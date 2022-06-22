const getLikeLocalStorage = () => {
  let list = localStorage.getItem("TotalLike");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
export default getLikeLocalStorage;

const getLocalStorageSignUp = () => {
    let signup = localStorage.getItem("SignUp");
    if (signup) {
      return JSON.parse(localStorage.getItem("SignUp"));
    } else {
      return [];
    }
  };
  export default getLocalStorageSignUp;

  // import React, { useEffect, useState } from "react";

  // function getSavedValue(key, initialValue) {
    
  //   const savedValue = JSON.parse(localStorage.getItem(key));
  //   if (savedValue) return savedValue;
  
  //   if (initialValue instanceof Function) return initialValue();
  //   return initialValue;
  // }
  
  // export default function useLocalStorage(key, initialValue) {
    
  //     const [value, setValue] = useState(() => {
  //     return getSavedValue(key, initialValue);
  //   });
  
  //   useEffect(() => {
  //     localStorage.setItem(key, JSON.stringify(value));
  //   }, [value]);
  
  //   return [value, setValue];
  // }
  
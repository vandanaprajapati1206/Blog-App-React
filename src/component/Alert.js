import React, { useEffect } from "react";

const Alert = ({ type, msg, remAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      remAlert();
    }, 7000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <div>
      {`${type}` === "danger" ? (
        <h1 style={{ color: "red" }}>{msg}</h1>
      ) : (
        <p style={{ color: "green" }}>{msg}</p>
      )}
    </div>
  );
};

export default Alert;

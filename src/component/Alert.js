import React, { useEffect } from "react";

const Alert = ({ type, msg, remAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      remAlert();
    }, 5000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <div>
      {`${type}` === "danger" ? (
        <p style={{ color: "red" }}>{msg}</p>
      ) : (
        <p style={{ color: "green" }}>{msg}</p>
      )}
    </div>
  );
};

export default Alert;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page Not Found </h1>
      <br />
      <nav>
        Click here for<Link to="/"> go to Home </Link>
      </nav>
      <br />
      <span>Click here for go to last Page</span>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

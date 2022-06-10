import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Alert from "../Alert";
import Blogs from "../Blogs/Blogs";

export default function Login({ auth }) {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [blog, setBlog] = useState(true);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const navigate = useNavigate();
  function handleSingIn(e) {
    e.preventDefault();
    console.log("Login : ", emaillog, passwordlog);

    let email = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    
    if (!emaillog || !passwordlog) {
      showAlert(true, "danger", "EMPTY Email and Password");
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== email) {
      showAlert(true, "danger", "Wrong Email and Password");
    } else {
     
      setEmaillog();
      setPasswordlog();
      auth();
      sessionStorage.setItem("LogInEmail", emaillog);
      sessionStorage.setItem("LogInPassword", passwordlog);
      console.log("Saved in Session Storage");
       setBlog(!blog);
       navigate("/user");
    }
  }
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <div>
      <h2> Sign In</h2>

      {alert.show && <Alert {...alert} remAlert={showAlert} />}

      <div
        style={{
          display: "block",
          padding: 30,
          marginInline: "250px",
        }}
      >
        {blog ? (
          <form onSubmit={handleSingIn}>
            <div>
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={(e) => setEmaillog(e.target.value)}
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="Password"
                className="form-control"
                id="password"
                name="email"
                onChange={(e) => setPasswordlog(e.target.value)}
                placeholder=" Enter Password"
              />
              <br></br>

              <Button variant="outline-success" size="lg" type="submit">
                Sign In
              </Button>
            </div>
          </form>
        ) : (
          <Blogs />
        )}
      </div>

      <nav>
        <span>Click Here For </span>
        <Link to="/sign-up"> Sign Up</Link>
      </nav>
    </div>
  );
}

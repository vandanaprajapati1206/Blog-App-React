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

    let olddata = localStorage.getItem("usersSignup");
    let oldArr = JSON.parse(olddata);

    // oldArr.map((arr) => {
    //   if (emaillog.length > 0  && !passwordlog.length > 0)
    //   {
    //     showAlert(true, "danger", "EMPTY Email and Password");
    //     console.log("EMPTY", (emaillog.length > 0 && passwordlog.length > 0));
    //     if (arr.emaillog == emaillog && arr.password == passwordlog)
    //     {
    //       console.log(arr.emaillog == emaillog && arr.password == passwordlog);
    //       sessionStorage.setItem("LogInEmail", emaillog);
    //       sessionStorage.setItem("LogInPassword", passwordlog);
    //       console.log("Saved in Session Storage");
    //       let user = emaillog;
    //       navigate.push({ pathname: "/blogs", user: emaillog });
    //     } else {
    //       showAlert(true, "danger", "Wrong Email and Password");
    //     }
    //   }
    // });

    let pass = oldArr.filter((obj) => {
      return obj.email === emaillog;
    });
    let email = oldArr.filter((obj) => {
      return obj.password === passwordlog;
    });

    console.log(!emaillog || !passwordlog);
    console.log(
      email,
      pass,
      emaillog,
      passwordlog,
      passwordlog !== pass || emaillog !== email
    );
    if (!emaillog || !passwordlog) {
      showAlert(true, "danger", "EMPTY Email and Password");
      console.log("EMPTY");
    } else if (passwordlog == pass && emaillog == email) {
      setEmaillog();
      setPasswordlog();
      auth();
      sessionStorage.setItem("LogInEmail", emaillog);
      sessionStorage.setItem("LogInPassword", passwordlog);
      console.log("Saved in Session Storage");
      setBlog(!blog);
      navigate("/blogs");
    } else {
      
      showAlert(true, "danger", "Wrong Email and Password");
      console.log("Worng Email and password");
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

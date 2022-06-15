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
    let verify = oldArr.find((obj) => {
      console.log(obj.password === passwordlog && obj.email === emaillog);
      return (obj.password === passwordlog && obj.email === emaillog);
    });

    console.log("data",verify, emaillog, passwordlog);  

    if (!emaillog || !passwordlog) {
      showAlert(true, "danger", "EMPTY Email and Password");
       console.log("EMPTY", !emaillog || !passwordlog);
    } else if (!verify) {
      showAlert(true, "danger", "Wrong Email and Password"); 
      console.log("Worng Email and password",!verify);
    } else  {
      console.log("Sign In Done...", verify);
      setEmaillog();
      setPasswordlog();
      auth();
      console.log("Sign In Done...");

      let usersLogArr = JSON.parse(localStorage.getItem("LoginUser")) || [];
      let loginUser_data = {
        loginUser_id: new Date().getTime().toString(),
        login_email: emaillog,
        login_password: passwordlog,
      };
      
      usersLogArr.push(loginUser_data);
      localStorage.setItem("LoginUser", JSON.stringify(usersLogArr));

      sessionStorage.setItem("LogInEmail", emaillog);
      sessionStorage.setItem("LogInPassword", passwordlog);
      console.log("Saved in Session Storage");

      setBlog(!blog);
      navigate("/blogs");
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

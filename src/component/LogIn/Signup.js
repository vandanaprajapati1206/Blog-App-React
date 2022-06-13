import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Alert from "../Alert";
import Blogs from "../Blogs/Blogs";
import { options } from "../Options";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

// const getLocalStorageSignUp = () => {
//   let signup = localStorage.getItem("users");
//   if (signup) {
//     return JSON.parse(localStorage.getItem("users"));
//   } else {
//     return [];
//   }
// };

export default function Signup({ auth }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [desc, setDesc] = useState("");
  const [intrest, setIntrest] = useState(null);
  const [gender, setGender] = useState("");

  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  // const [signup, setSignup] = useState(getLocalStorageSignUp());
  const [signup, setSignup] = useState('',  {localStorage : false});

  const navigate = useNavigate();

  function handleSingUp(e) {
    e.preventDefault();
    console.log(
      "User Sign up : ",
      name,
      email,
      phone,
      password,
      desc,
      intrest,
      gender
    );
    if (!email || !phone || !password) {
      showAlert(true, "danger", " Email ,Phone and Password Requierd..!");
    } else if (email && phone && password) {
      console.log(user_data);
      let user_data = {
        id: new Date().getTime().toString(),
        email: email,
        phone: phone,
        password: password,
        name: name,
        desc: desc,
        intrest: intrest,
        gender: gender,
      };
      let user_data_str = JSON.stringify(user_data);
      let usersArr = JSON.parse(localStorage.getItem("usersSignup")) || [];

      const userExists = usersArr.find(
        (user) => JSON.stringify(user) === user_data_str
      );
      console.log(userExists);
      if (userExists) {
        showAlert(true, "danger", " User already exists..!");
      } else {
        usersArr.push(user_data);
        localStorage.setItem("usersSignup", JSON.stringify(usersArr));
      }
    } else {
      showAlert(true, "success", " User SuccessFully sign up..!");

      // const newItem = {
      //   id: new Date().getTime().toString(),
      //   name: name,
      //   email: email,
      //   desc: desc,
      //   gender: gender,
      //   phone: phone,
      //   password: password,
      //   intrest: intrest,
      // };
      // localStorage.setItem("users", JSON.stringify([newItem]));

      // localStorage.setItem("Email", JSON.stringify(email));
      // localStorage.setItem("Password", JSON.stringify(password));
      // console.log("Saved in Local Storage");

      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      console.log("Saved in Session Storage");
      
      auth();
      setName("");
      setEmail("");
      setDesc("");
      setGender("");
      setPhone("");
      setPassword("");
      setIntrest("");

      setSignup(!signup , {localStorage : true});
      navigate("/blogs");
    }
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <div>
      <h2> Sign Up</h2>
      {alert.show && <Alert {...alert} remAlert={showAlert} />}

      <div
        style={{
          marginInline: "250px",
        }}
      >
    
          <form onSubmit={handleSingUp}>
            <div>
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="name"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label for="number" className="form-label">
                Phone No.
              </label>
              <input
                type="number"
                className="form-control"
                id="number"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
              />
            </div>

            <div>
              <label for="interst" className="form-label">
                Intrest
              </label>
              <Select
                options={options}
                isMulti={true}
                _default={options.map(({ label }) => label)}
                onChange={setIntrest}
              />
            </div>

            <div>
              <label for="gender" className="form-label">
                Gender
              </label>
              <br></br>
              <input
                type="radio"
                value="Male"
                name="gender"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
              <input
                type="radio"
                value="Female"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Female"}
              />
              Female
            </div>

            <div>
              <label for="description" className="form-label">
                Descriptions
              </label>
              <textarea
                rows={5}
                cols={90}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div>
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder=" Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <br></br>
            <Button type="submit">Sign In</Button>
          </form>
       
      </div>
      <nav>
        <span>click here for </span>
        <Link to="/login"> Sign In </Link>
      </nav>
    </div>
  );
}

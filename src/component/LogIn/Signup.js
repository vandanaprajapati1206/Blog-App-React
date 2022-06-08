import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import  Alert  from "../Alert";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [desc, setDesc] = useState("");
  const [intrest, setIntrest] = useState("");
  const [gender, setGender] = useState("male");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const options = [
    { value: "culture", label: "Culture" },
    { value: "arts", label: "Arts" },
    { value: "affiliate", label: "Affiliate" },
    { value: "business", label: "Business" },
    { value: "politics", label: "Politics" },
  ];
  function handleSingUp(e) {
    e.preventDefault();
    if (!email) {
      showAlert(true, "danger", " Email Requierd..!");
    } else if (email === setEmail) {
      showAlert(true, "danger", " Email Alredy  existed..!");
    } else if (!phone) {
      showAlert(true, "danger", " Phone No. Requierd..!");
    }else{
      setName(e.target.value);
      setEmail(e.target.value);
      setDesc(e.target.value);
      setGender(e.target.value);
      setPhone(e.target.value);
      setPassword(e.target.value);
      setIntrest(e.target.value);
      console.log(name, email, phone, password, desc, intrest, gender);
    }
   
  }
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  return (
    <div>
      <h2> Signup Page</h2>
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
              type="text"
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
        <Link to="/"> Sign In</Link>
      </nav>
    </div>
  );
}

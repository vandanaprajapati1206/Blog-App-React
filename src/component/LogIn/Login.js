import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Button } from "react-bootstrap";
import { Alert } from "bootstrap";

export default function Login() {
  function handleSingIn(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2> Sign In</h2>
      <div
        style={{
          display: "block",
          padding: 30,
          marginInline: "250px",
        }}
      >
      
          <form onSubmit={handleSingIn}>
        {/* <Form onSubmit={handleSingIn}>
          <Row className="mb-3">
            <Col xs="auto">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                required
                placeholder="name@example.com"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs="auto">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="email"
                required
                placeholder="Enter Password"
              />
            </Col>
          </Row> */}

          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                //   defaultValue={}
                name="email"
                required
                placeholder="name@example.com"
                //   onChange={}
              />
            </Col>
          </Form.Group> */}

          <label for="email" className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />

          <div>
            <label for="password" className="form-label">
              Password
            </label>

            <input
              type="Password"
              className="form-control"
              id="password"
              placeholder=" Enter Password"
            />
            <br></br>
            <Button variant="outline-success" size="lg" type="submit">
              Sign In
            </Button>
          </div>
        </form>
      </div>

      <nav>
        <span>click here for </span>
        <Link to="/sign-up"> Sign Up</Link>
      </nav>
    </div>
  );
}

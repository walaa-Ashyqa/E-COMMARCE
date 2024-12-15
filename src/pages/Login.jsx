import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css"; 
import { NavLink } from "react-router-dom";

import img1 from "../assets/img1.jpg"; 
function Login() {
  return (
    <Container fluid className="login-container">
      <Row className="vh-100">
      <Col md={6} className="p-0">
  <div className="image-section position-relative">
    <img
      src={img1}
      alt="Welcome to the App"
      className="img-fluid vh-100 w-100"
    />
    <div className="overlay"></div>
  </div>
</Col>

        <Col md={6} className="form-section d-flex align-items-center">
          <div className="form-container p-5">
            <h1 className="mb-4 text-primary">Welcome Back!</h1>
            <p className="mb-4 text-muted">
              Please log in to your account to continue.
            </p>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className=" d-flex align-items-left">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-pill"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="  d-flex align-items-left">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  className="rounded-pill"
                />
              </Form.Group>

   
              <div className="d-flex justify-content-between mb-3">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <a href="#" className="text-primary text-decoration-none">
                  Forgot password?
                </a>
              </div>

          
              <Button
                type="submit"
                className="w-100 btn mb-3 color-primary ounded-pill"
              >
                Log In
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;

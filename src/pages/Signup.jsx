import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css"; 
import img3 from "../assets/img3.jpg"; 
function Signup() {
  return (
    <Container fluid className="signup-container">
      <Row className="vh-100">
      
      <Col md={6} className="p-0">
  <div className="image-section position-relative">
    <img
      src={img3}
      alt="Welcome to the App"
      className="img-fluid vh-100 w-100"
    />

    <div className="overlay"></div>
  </div>
</Col>


        <Col md={6} className="form-section d-flex align-items-center">
          <div className="form-container p-5">
            <h1 className="mb-4 text-primary">Create an Account</h1>
            <p className="mb-4 text-muted">
              Join us by creating a new account to get started.
            </p>

         
            <Form>
        
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="d-flex align-items-left">
                  Full Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  className="rounded-pill"
                />
              </Form.Group>

         
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="d-flex align-items-left">
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-pill"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="d-flex align-items-left">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  className="rounded-pill"
                />
              </Form.Group>

           
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label className="d-flex align-items-left">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm your password"
                  className="rounded-pill"
                />
              </Form.Group>

            
              <Button
                type="submit"
                className="w-100 btn mb-3 color-primary rounded-pill"
              >
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;

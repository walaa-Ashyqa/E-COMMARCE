import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
function MyNavbar() {
  return (
  <>
       <Navbar bg="light" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand className="navbar-brand" to="/">
          E-Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link" activeClassName="active-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active-link">
              About Us
            </NavLink>
            <NavLink to="/login" className="nav-link" activeClassName="active-link">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-link" activeClassName="active-link">
              Sign Up
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active-link">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)
}

export default MyNavbar
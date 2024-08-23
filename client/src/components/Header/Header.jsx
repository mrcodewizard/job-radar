import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from './../../assets/img/logo.png'

const index = () => {
  return (
    <div>
      {/* Navbar Start  */}
        <Navbar bg="white" expand="lg" sticky="top" className="shadow p-0">
            <Navbar.Brand href="index.html" className="d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 className="m-0 text-brand w-32">
                  <img src={logo} className='img-fluid' />
                </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse" className="me-4" />
            <Navbar.Collapse id="navbarCollapse">
                <Nav className="ms-auto p-4 p-lg-0">
                  <Nav.Item>
                    <Link to="/" className="active nav-link">Home</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/job-list" className="nav-link">Jobs</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/signup" className="nav-link">SignUp</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/signin" className="nav-link">SignIn</Link>
                  </Nav.Item>
                </Nav>
                <Button variant="primary" className="bg-cgreen rounded-0 py-4 px-lg-5 d-none d-lg-block">
                Admin<i className="fa fa-arrow-right ms-3"></i>
                </Button>
            </Navbar.Collapse>
        </Navbar>
      {/* Navbar End  */}
    </div>
  )
}

export default index
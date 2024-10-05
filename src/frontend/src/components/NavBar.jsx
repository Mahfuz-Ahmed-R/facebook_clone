import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaFacebook, FaHome, FaTv, FaStore, FaUsers, FaGamepad, FaTh, FaFacebookMessenger, FaBell } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="p-2">
      {/* Left side */}
      <Navbar.Brand href="#home">
        <FaFacebook size={30} className="text-primary" />
      </Navbar.Brand>
      <Form className="d-flex mx-2" inline>
        <FormControl type="text" placeholder="Search Facebook" className="mr-sm-2" />
      </Form>

      {/* Center */}
      <Nav className="mx-auto">
        <Nav.Link href="#home">
          <FaHome size={25} className="text-primary" />
        </Nav.Link>
        <Nav.Link href="#watch">
          <FaTv size={25} className="text-muted" />
        </Nav.Link>
        <Nav.Link href="#marketplace">
          <FaStore size={25} className="text-muted" />
        </Nav.Link>
        <Nav.Link href="#groups">
          <FaUsers size={25} className="text-muted" />
        </Nav.Link>
        <Nav.Link href="#games">
          <FaGamepad size={25} className="text-muted" />
        </Nav.Link>
      </Nav>

      {/* Right side */}
      <Nav>
        <Nav.Link href="#grid">
          <FaTh size={25} className="text-muted" />
        </Nav.Link>
        <Nav.Link href="#messenger">
          <FaFacebookMessenger size={25} className="text-muted" />
        </Nav.Link>
        <Nav.Link href="#notifications">
          <FaBell size={25} className="text-muted" />
        </Nav.Link>
        <Nav.Link href="#profile">
          {/* Profile picture */}
          <img
            src="profile.jpg" // Replace with your profile image path
            alt="Profile"
            className="rounded-circle"
            width="30"
            height="30"
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;

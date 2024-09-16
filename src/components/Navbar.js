import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Person, Cart } from 'react-bootstrap-icons';
import './Navbar.css';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-transparent py-3" style={{ position: 'absolute', top: 0, width: '100%', zIndex: 100 }}>
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <img
          src="./Assets/logo.jpeg"
          className="d-inline-block align-top"
          alt="WINZI COLLECTION Logo"
        />
        <span>WINZI COLLECTION</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/shirts">Shirts</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/jackets">Jackets</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accessories">Accessories</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>

        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
            <Cart size={25} color="white" />
          </Nav.Link>
          {/* Person Icon with Dropdown for Login and Signup */}
          <NavDropdown title={<Person size={25} color="white" />} id="user-dropdown" className="person-dropdown">
            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/signup">Signup</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">NepalSafari</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
            
          </Nav>
          <Nav>
            <Nav.Link componentClass={Link} href="/" to="/">Home</Nav.Link>
            <Nav.Link eventKey={2} componentClass={Link} href="/about" to="/about">  About </Nav.Link>
            <Nav.Link eventKey={3} componentClass={Link} href="/admin" to="/admin">  Admin </Nav.Link>
            <Nav.Link eventKey={4} componentClass={Link} href="/package" to="/package">  Package </Nav.Link>
            <Nav.Link eventKey={5} componentClass={Link} href="/packagedetail" to="/packagedetail">PD</Nav.Link>
            <Nav.Link eventKey={6} componentClass={Link} href="/signup" to="/signup">Signup</Nav.Link>
            <Nav.Link eventKey={7} componentClass={Link} href="/book" to="/book">Book</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>


    );
  }
}




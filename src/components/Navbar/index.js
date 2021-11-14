import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand='lg' style={{ backgroundColor: "#EADCA6" }}>
      <Container>
        <Navbar.Brand href='/'>e-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <NavDropdown title='Categories' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='/products/Chair'>Chair</NavDropdown.Item>
              <NavDropdown.Item href='/products/Car'>Car</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/cart'>Cart</Nav.Link>
            <Nav.Link eventKey={2} href='/favorites'>
              Favorites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { ROUTES } from 'routes';

const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Delirium Screening</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="ml-auto text-uppercase" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="ml-auto text-uppercase" href="#link">
            Admin
          </Nav.Link>
          <Nav.Link className="ml-auto " href="#home">
            Wyloguj
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;

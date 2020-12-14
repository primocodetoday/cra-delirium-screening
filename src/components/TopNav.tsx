import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { ROUTES } from 'routes';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
  return (
    <Navbar bg="dark" expand="lg" className="mb-4" variant="dark">
      <Navbar.Brand className="mr-auto" as={NavLink} exact to={ROUTES.HOME}>
        Delirium Screening
      </Navbar.Brand>
      <Navbar.Toggle className="" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="" id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link as={NavLink} exact to={ROUTES.ID} className="ml-auto text-uppercase" href="#home">
            Pacjenci
          </Nav.Link>
          <Nav.Link className="ml-auto " href="#home">
            WYLOGUJ
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;

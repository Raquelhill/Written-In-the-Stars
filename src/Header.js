import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () => {
  return (
    <header className="Header">
      <div className="title-container">
        <h1 className="title">
          WRITTEN <span>IN THE</span> STARS
        </h1>
      </div>
      <DropdownButton id="dropdown-basic-button" title="ZODIAC SIGNS">
        <Dropdown.Item href="#/action-1">Aries</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Taurus</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Gemini</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Cancer</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Leo</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Virgo</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Libra</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Scorpio</Dropdown.Item>
        <Dropdown.Item href="#/action-9">Sagittarius</Dropdown.Item>
        <Dropdown.Item href="#/action-10">Capricorn</Dropdown.Item>
        <Dropdown.Item href="#/action-11">Aquarius</Dropdown.Item>
        <Dropdown.Item href="#/action-12">Pisces</Dropdown.Item>
      </DropdownButton>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavLink exact to="/" className="all-signs-nav">
        HOME
      </NavLink>
    </header>
  );
};

export default Header;

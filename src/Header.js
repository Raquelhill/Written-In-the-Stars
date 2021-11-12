import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () => {
  return (
    <header className="Header">
      <div className="title-container">
        <h1 className="title">WRITTEN IN THE STARS</h1>
      </div>
      <div className="nav-buttons">
        <DropdownButton
          className="drop-button"
          id="dropdown-basic-button"
          title="ZODIAC SIGNS"
        >
          <Dropdown.Item href="/aries">Aries</Dropdown.Item>
          <Dropdown.Item href="/taurus">Taurus</Dropdown.Item>
          <Dropdown.Item href="/gemini">Gemini</Dropdown.Item>
          <Dropdown.Item href="/cancer">Cancer</Dropdown.Item>
          <Dropdown.Item href="/leo">Leo</Dropdown.Item>
          <Dropdown.Item href="/virgo">Virgo</Dropdown.Item>
          <Dropdown.Item href="/libra">Libra</Dropdown.Item>
          <Dropdown.Item href="/scorpio">Scorpio</Dropdown.Item>
          <Dropdown.Item href="/sagittarius">Sagittarius</Dropdown.Item>
          <Dropdown.Item href="/capricorn">Capricorn</Dropdown.Item>
          <Dropdown.Item href="/aquarius">Aquarius</Dropdown.Item>
          <Dropdown.Item href="/pisces">Pisces</Dropdown.Item>
        </DropdownButton>
        <NavLink exact to="/" id="home" className="home-button">
          HOME
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

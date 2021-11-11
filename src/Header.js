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
        <Dropdown.Item className="drop-down" href="#/action-1">
          Aries
        </Dropdown.Item>
        <Dropdown.Item className="drop-down" href="#/action-2">
          Taurus
        </Dropdown.Item>
        <Dropdown.Item className="drop-down" href="#/action-3">
          Gemini
        </Dropdown.Item>
        <Dropdown.Item className="drop-down" href="#/action-4">
          Cancer
        </Dropdown.Item>
        <Dropdown.Item className="drop-down" href="#/action-5">
          Leo
        </Dropdown.Item>
        <Dropdown.Item className="drop-down" href="#/action-6">
          Virgo
        </Dropdown.Item>
        <Dropdown.Item className="drop-down" href="#/action-7">
          Libra
        </Dropdown.Item>
        <Dropdown.Item className="drop-down" href="#/action-8">
          Scorpio
        </Dropdown.Item>
        <Dropdown.Item className="drop-down" href="#/action-9">
          Sagittarius
        </Dropdown.Item>
        <Dropdown.Item className="drop-down" href="#/action-10">
          Capricorn
        </Dropdown.Item>
        <Dropdown.Item className="drop-down" href="#/action-11">
          Aquarius
        </Dropdown.Item>
        <Dropdown.Item className="drop-down" href="#/action-12">
          Pisces
        </Dropdown.Item>
      </DropdownButton>
      <NavLink exact to="/" className="all-signs-nav">
        HOME
      </NavLink>
    </header>
  );
};

export default Header;

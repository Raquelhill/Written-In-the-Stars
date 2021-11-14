import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Giphy from './giphy.gif';
class Header extends React.Component {
  state = { sign: '' };

  render() {
    return (
      <header className="Header">
        <div className="title-container">
          <h1 className="title">
            <img src={Giphy} className="star-image" alt="Star" />
            WRITTEN IN THE STARS
            <img src={Giphy} className="star-image" alt="Star" />
          </h1>
        </div>
        <div className="nav-buttons">
          <DropdownButton
            className="drop-button"
            id="dropdown-basic-button"
            title="ZODIAC SIGNS"
            onSelect={(e) => this.setState({ sign: e })}
          >
            <Dropdown.Item eventKey="aries" as={Link} to="/aries/today">
              Aries
            </Dropdown.Item>
            <Dropdown.Item eventKey="taurus" href="/taurus/today">
              Taurus
            </Dropdown.Item>
            <Dropdown.Item eventKey="gemini" href="/gemini/today">
              Gemini
            </Dropdown.Item>
            <Dropdown.Item eventKey="cancer" href="/cancer/today">
              Cancer
            </Dropdown.Item>
            <Dropdown.Item eventKey="leo" href="/leo/today">
              Leo
            </Dropdown.Item>
            <Dropdown.Item eventKey="virgo" href="/virgo/today">
              Virgo
            </Dropdown.Item>
            <Dropdown.Item eventKey="libra" href="/libra/today">
              Libra
            </Dropdown.Item>
            <Dropdown.Item eventKey="scorpio" href="/scorpio/today">
              Scorpio
            </Dropdown.Item>
            <Dropdown.Item eventKey="sagittarius" href="/sagittarius/today">
              Sagittarius
            </Dropdown.Item>
            <Dropdown.Item eventKey="capricorn" href="/capricorn/today">
              Capricorn
            </Dropdown.Item>
            <Dropdown.Item eventKey="aquarius" href="/aquarius/today">
              Aquarius
            </Dropdown.Item>
            <Dropdown.Item eventKey="pisces" href="/pisces/today">
              Pisces
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            className="drop-button"
            id="dropdown-basic-button"
            title="HOROSCOPE"
          >
            <Dropdown.Item
              as={Link}
              to={`/cancer/yesterday`}
              eventKey="yesterday"
            >
              Yesterday
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={`/cancer/today`} eventKey="today">
              Today
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={`/cancer/tomorrow`}
              eventKey="tomorrow"
            >
              Tomorrow
            </Dropdown.Item>
          </DropdownButton>
          <NavLink exact to="/" id="home" className="home-button">
            HOME
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;

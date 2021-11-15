import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Giphy from './giphy.gif';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sign: this.props.sign, day: '' };
  }

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
            onSelect={(e) => {
              this.setState({ sign: e });
            }}
          >
            <Dropdown.Item eventKey="aries" as={Link} to="/aries">
              Aries
            </Dropdown.Item>
            <Dropdown.Item eventKey="taurus" as={Link} to="/taurus">
              Taurus
            </Dropdown.Item>
            <Dropdown.Item eventKey="gemini" as={Link} to="/gemini">
              Gemini
            </Dropdown.Item>
            <Dropdown.Item eventKey="cancer" as={Link} to="/cancer">
              Cancer
            </Dropdown.Item>
            <Dropdown.Item eventKey="leo" as={Link} to="/leo">
              Leo
            </Dropdown.Item>
            <Dropdown.Item eventKey="virgo" as={Link} to="/virgo">
              Virgo
            </Dropdown.Item>
            <Dropdown.Item eventKey="libra" as={Link} to="/libra">
              Libra
            </Dropdown.Item>
            <Dropdown.Item eventKey="scorpio" as={Link} to="/scorpio">
              Scorpio
            </Dropdown.Item>
            <Dropdown.Item eventKey="sagittarius" as={Link} to="/sagittarius">
              Sagittarius
            </Dropdown.Item>
            <Dropdown.Item eventKey="capricorn" as={Link} to="/capricorn">
              Capricorn
            </Dropdown.Item>
            <Dropdown.Item eventKey="aquarius" as={Link} to="/aquarius">
              Aquarius
            </Dropdown.Item>
            <Dropdown.Item eventKey="pisces" as={Link} to="/pisces">
              Pisces
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

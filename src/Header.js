import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Giphy from './giphy.gif';
class Header extends React.Component {
  state = { sign: '', day: '' };

  render() {
    if (this.state !== undefined) {
      {
        console.log(this.state);
      }
    }
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
            <Dropdown.Item eventKey="taurus" as={Link} to="/taurus/today">
              Taurus
            </Dropdown.Item>
            <Dropdown.Item eventKey="gemini" as={Link} to="/gemini/today">
              Gemini
            </Dropdown.Item>
            <Dropdown.Item eventKey="cancer" as={Link} to="/cancer/today">
              Cancer
            </Dropdown.Item>
            <Dropdown.Item eventKey="leo" as={Link} to="/leo/today">
              Leo
            </Dropdown.Item>
            <Dropdown.Item eventKey="virgo" as={Link} to="/virgo/today">
              Virgo
            </Dropdown.Item>
            <Dropdown.Item eventKey="libra" as={Link} to="/libra/today">
              Libra
            </Dropdown.Item>
            <Dropdown.Item eventKey="scorpio" as={Link} to="/scorpio/today">
              Scorpio
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="sagittarius"
              as={Link}
              to="/sagittarius/today"
            >
              Sagittarius
            </Dropdown.Item>
            <Dropdown.Item eventKey="capricorn" as={Link} to="/capricorn/today">
              Capricorn
            </Dropdown.Item>
            <Dropdown.Item eventKey="aquarius" as={Link} to="/aquarius/today">
              Aquarius
            </Dropdown.Item>
            <Dropdown.Item eventKey="pisces" as={Link} to="/pisces/today">
              Pisces
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            className="drop-button"
            id="dropdown-basic-button"
            title="HOROSCOPE"
            onSelect={(e) => this.setState({ day: e })}
          >
            <Dropdown.Item
              as={Link}
              to={`/${this.state.sign}/yesterday`}
              eventKey="yesterday"
            >
              Yesterday
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={`/${this.state.sign}/today`}
              eventKey="today"
            >
              Today
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={`/${this.state.sign}/tomorrow`}
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

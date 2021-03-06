import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Giphy from '.././assets/giphy.gif';
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
            <Dropdown.Item
              eventKey="aries"
              as={Link}
              to="/singlezodiac/aries/today"
            >
              Aries
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="taurus"
              as={Link}
              to="/singlezodiac/taurus/today"
            >
              Taurus
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="gemini"
              as={Link}
              to="/singlezodiac/gemini/today"
            >
              Gemini
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="cancer"
              as={Link}
              to="/singlezodiac/cancer/today"
            >
              Cancer
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="leo"
              as={Link}
              to="/singlezodiac/leo/today"
            >
              Leo
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="virgo"
              as={Link}
              to="/singlezodiac/virgo/today"
            >
              Virgo
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="libra"
              as={Link}
              to="/singlezodiac/libra/today"
            >
              Libra
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="scorpio"
              as={Link}
              to="/singlezodiac/scorpio/today"
            >
              Scorpio
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="sagittarius"
              as={Link}
              to="/singlezodiac/sagittarius/today"
            >
              Sagittarius
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="capricorn"
              as={Link}
              to="/singlezodiac/capricorn/today"
            >
              Capricorn
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="aquarius"
              as={Link}
              to="/singlezodiac/aquarius/today"
            >
              Aquarius
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="pisces"
              as={Link}
              to="/singlezodiac/pisces/today"
            >
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './SingleZodiac.css';

class SingleZodiac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
      id: this.props.id,
      day: this.props.day,
    };
  }

  componentDidMount() {
    const URL = `https://aztro.sameerkumar.website/?sign=${this.props.id}&day=${this.state.day}`;
    // const URL = `https://aztro.sameerkumar.website/?sign=${this.props.id}`;
    fetch(URL, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ json });
      });
  }

  componentDidUpdate() {
    // Typical usage (don't forget to compare props):
    if (this.props.day !== this.state.day) {
      const URL = `https://aztro.sameerkumar.website/?sign=${this.props.id}&day=${this.state.day}`;
      // const URL = `https://aztro.sameerkumar.website/?sign=${this.props.id}`;
      fetch(URL, {
        method: 'POST',
      })
        .then((response) => response.json())
        .then((json) => {
          this.setState({ json });
          this.props.updateDay(this.state.day);
        });
    }
  }

  render() {
    console.log('STATE', this.state);
    return (
      <div>
        <>
          <section className="sign-details">
            <div className="sign-styling">
              <p className="current-sign">{this.props.id}</p>
              <p className="current-sign">{this.state.json.date_range}</p>
              <div className="horoscope-styling">
                <p>Daily Horoscope: {this.state.json.current_date} </p>
                <p className="description">{this.state.json.description}</p>
                <p>Compatability: {this.state.json.compatibility}</p>
                <p>Mood: {this.state.json.mood} </p>
                <p>Spirit Color: {this.state.json.color} </p>
                <p>Lucky Number: {this.state.json.lucky_number} </p>
                <p>Lucky Time of Day: {this.state.json.lucky_time} </p>
                <button
                  onClick={(e) => {
                    this.setState({ day: 'yesterday' });
                  }}
                >
                  Yesterday
                </button>
                {/* </Link> */}
                {/* <Link to={`/${this.props.id}/today`}> */}
                <button onClick={(e) => this.setState({ day: 'today' })}>
                  Today
                </button>
                {/* </Link> */}
                {/* <Link to={`/${this.props.id}/tomorrow`}> */}
                <button onClick={(e) => this.setState({ day: 'tomorrow' })}>
                  Tomorrow
                </button>
                {/* </Link> */}
              </div>
            </div>
          </section>
        </>
      </div>
    );
  }
}

export default SingleZodiac;

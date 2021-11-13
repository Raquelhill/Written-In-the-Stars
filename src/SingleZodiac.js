import React, { Component } from 'react';
import Header from './Header';
import './SingleZodiac.css';

class SingleZodiac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
      id: '',
      day: '',
    };
  }

  componentDidMount() {
    const URL = `https://aztro.sameerkumar.website/?sign=${this.props.id}`;
    fetch(URL, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ json });
      });
  }

  render() {
    const aztroJs = require('aztro-js');
    let sign = this.props.id;
    aztroJs.getAllHoroscope(sign, function (details) {
      console.log(details);
    });
    return (
      <div>
        <>
          <Header />
          <section className="sign-details">
            <div className="sign-styling">
              <p className="current-sign">{this.props.id}</p>
              <p className="current-sign">{this.state.json.date_range}</p>
              <p>Daily Horoscope: {this.state.json.current_date} </p>
              <p className="description">{this.state.json.description}</p>
              <p>Compatability: {this.state.json.compatibility}</p>
              <p>Mood: {this.state.json.mood} </p>
              <p>Spirit Color: {this.state.json.color} </p>
              <p>Lucky Number: {this.state.json.lucky_number} </p>
              <p>Lucky Time of Day: {this.state.json.lucky_time} </p>
            </div>
          </section>
        </>
      </div>
    );
  }
}

export default SingleZodiac;

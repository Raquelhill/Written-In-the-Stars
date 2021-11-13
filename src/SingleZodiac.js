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
    return (
      <div>
        <>
          <Header />
          <section className="sign-details">
            <div className="sign-styling">
              <p className="current-sign">{this.props.id}</p>
              <p>{this.state.json.date_range}</p>
              <p>Today's Date: {this.state.json.current_date} </p>
              <p>Top Love Match: {this.state.json.compatibility}</p>
              <p>Lucky Number: {this.state.json.lucky_number} </p>
              <p>Lucky Time: {this.state.json.lucky_time} </p>
              <p>Spirit Color: {this.state.json.color} </p>
              <p>Quality: {this.state.json.mood} </p>
              <p className="description">
                Horoscope: {this.state.json.description}{' '}
              </p>
            </div>
          </section>
        </>
      </div>
    );
  }
}

export default SingleZodiac;

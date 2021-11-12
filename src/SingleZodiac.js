import React, { Component } from 'react';
import Header from './Header';
import './SingleZodiac.css';

class SingleZodiac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
    };
  }

  componentDidMount() {
    const URL = `https://aztro.sameerkumar.website/?sign=gemini&day=today`;
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
            Current Date: {this.state.json.current_date} <br />
            Compatibility: {this.state.json.compatibility} <br />
            Lucky Number: {this.state.json.lucky_number} <br />
            Lucky Time: {this.state.json.lucky_time} <br />
            Color: {this.state.json.color} <br />
            Date Range: {this.state.json.date_range} <br />
            Mood: {this.state.json.mood} <br />
            Description: {this.state.json.description} <br />
          </section>
        </>
      </div>
    );
  }
}

export default SingleZodiac;

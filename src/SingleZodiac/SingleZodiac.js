import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SingleZodiac.css';

class SingleZodiac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zodiacData: {},
      id: this.props.id,
    };
  }

  componentDidMount() {
    const URL = `https://aztro.sameerkumar.website/?sign=${this.props.id}&day=today`;
    fetch(URL, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((zodiacData) => {
        this.setState({ zodiacData });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.day !== prevProps.day || this.props.id !== prevProps.id) {
      const currentDay = window.location.pathname.split('/')[3] || 'today';
      const URL = `https://aztro.sameerkumar.website/?sign=${this.props.id}&day=${currentDay}`;
      fetch(URL, {
        method: 'POST',
      })
        .then((response) => response.json())
        .then((zodiacData) => {
          this.setState({ zodiacData: zodiacData });
        });
    }
  }

  render() {
    return (
      <div>
        <>
          <section className="sign-details">
            <div className="sign-styling">
              <p className="current-sign current-sign-title">{this.props.id}</p>
              <p className="current-sign date_range">
                {this.state.zodiacData.date_range}
              </p>
              <div className="horoscope-styling">
                <p className="current_date">
                  Daily Horoscope: {this.state.zodiacData.current_date}
                </p>
                <p className="description">
                  {this.state.zodiacData.description}
                </p>
                <p className="compatibility">
                  Compatability: {this.state.zodiacData.compatibility}
                </p>
                <p className="mood">Mood: {this.state.zodiacData.mood} </p>
                <p className="color">
                  Spirit Color: {this.state.zodiacData.color}{' '}
                </p>
                <p className="lucky_number">
                  Lucky Number: {this.state.zodiacData.lucky_number}
                </p>
                <p className="lucky_time">
                  Lucky Time of Day: {this.state.zodiacData.lucky_time}
                </p>
                <div className="day-button-styling">
                  <Link to={`yesterday`}>
                    <button className="day-button yesterday-day-button">
                      Yesterday
                    </button>
                  </Link>
                  <Link to={`today`}>
                    <button className="day-button today-day-button">
                      Today
                    </button>
                  </Link>
                  <Link to={`tomorrow`}>
                    <button className="day-button tomorrow-day-button">
                      Tomorrow
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      </div>
    );
  }
}

export default SingleZodiac;

import './App.css';
import SingleZodiac from './SingleZodiac';
import ZodiacSignContainer from './ZodiacSignContainer';
import Header from './Header';
import React, { Component } from 'react';
import './sag.jpg';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
      id: '',
      day: 'today',
      isLoading: true,
    };
  }

  updateDay = (day) => {
    this.setState({ day: day });
    // console.log(day);
  };

  render() {
    return (
      <main className="App">
        <Header updateDay={this.updateDay} />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <ZodiacSignContainer />
              </>
            );
          }}
        />
        <Route
          exact
          path="/:id/:day"
          render={({ match }) => {
            let currentZodiacId = match.params.id;
            let day = match.params.day;
            return <SingleZodiac id={currentZodiacId} day={day} />;
          }}
        />
        {/* <Route
          exact
          path="/:id/today"
          render={({ match }) => {
            let currentZodiacId = match.params.id;
            return <SingleZodiac id={currentZodiacId} />;
          }} */}
        {/* /> */}
      </main>
    );
  }
}

export default App;

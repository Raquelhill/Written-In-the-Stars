import './App.css';
import SingleZodiac from './SingleZodiac';
import ZodiacSignContainer from './ZodiacSignContainer';
import Header from './Header';
import React, { Component } from 'react';
import './sag.jpg';
import { Route } from 'react-router-dom';

class App extends Component {
  state = { day: 'today' };

  updateDay = (day) => {
    this.setState({ day: day });
  };

  render() {
    return (
      <main className="App">
        <Header />
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
          path="/:id/:day"
          // path="/:id"
          render={({ match }) => {
            console.log('MATCH', match.params);
            console.log('DAY In APP', this.state.day);
            let currentZodiacId = match.params.id;
            let day = match.params.day;
            return (
              <SingleZodiac
                id={currentZodiacId}
                day={day}
                updateDay={this.updateDay}
              />
            );
          }}
        />
      </main>
    );
  }
}

export default App;

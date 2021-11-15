import './App.css';
import SingleZodiac from './SingleZodiac';
import ZodiacSignContainer from './ZodiacSignContainer';
import Header from './Header';
import React, { Component } from 'react';
import './sag.jpg';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = { day: 'today' };

  updateDay = async (day) => {
    await this.setState({ day: day });
    // console.log('STATE', this.state);
  };

  render() {
    return (
      <main className="App">
        <Header />
        <Switch>
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
              let currentZodiacDay = match.params.day;
              // console.log('VARIABLES', currentZodiacId, currentZodiacDay);
              return (
                <SingleZodiac
                  id={currentZodiacId}
                  day={currentZodiacDay}
                  updateDay={this.updateDay}
                />
              );
            }}
          />
          <Route
            exact
            path="/:id"
            render={({ match }) => {
              // console.log('MATCH', match.params);
              let currentZodiacId = match.params.id;
              return (
                <>
                  <SingleZodiac
                    id={currentZodiacId}
                    day={this.state.day}
                    updateDay={this.updateDay}
                  />
                </>
              );
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;

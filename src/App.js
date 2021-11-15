import './App.css';
import SingleZodiac from './SingleZodiac';
import ZodiacSignContainer from './ZodiacSignContainer';
import Header from './Header';
import React, { Component } from 'react';
import './sag.jpg';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = { day: '' };

  updateDay = async (day) => {
    await this.setState({ day: day });
    console.log('STATE', this.state);
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
            path="/:id"
            render={({ match }) => {
              console.log('MATCH', match.params);
              let currentZodiacId = match.params.id;
              return (
                <>
                  <SingleZodiac
                    id={currentZodiacId}
                    day={'today'}
                    updateDay={this.updateDay}
                  />{' '}
                </>
              );
            }}
          />
          <Route
            path="/:id/:day"
            render={({ match }) => {
              let currentZodiacId = match.params.id;
              let currentZodiacDay = match.params.day;
              return (
                <SingleZodiac id={currentZodiacId} day={currentZodiacDay} />
              );
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;

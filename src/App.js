import './App.css';
import SingleZodiac from './SingleZodiac';
import ZodiacSignContainer from './ZodiacSignContainer';
import Header from './Header';
import React, { Component } from 'react';
import './sag.jpg';
import { Route } from 'react-router-dom';

class App extends Component {
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
          render={({ match }) => {
            let currentZodiacId = match.params.id;
            let day = match.params.day;
            return <SingleZodiac id={currentZodiacId} day={day} />;
          }}
        />
      </main>
    );
  }
}

export default App;

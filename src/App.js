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
      day: '',
      isLoading: true,
    };
  }

  render() {
    return (
      <main className="App">
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <Header />
                <ZodiacSignContainer />
              </>
            );
          }}
        />
        <Route
          exact
          path="/:id"
          render={({ match }) => {
            const currentZodiacId = match.params.id;
            return <SingleZodiac id={currentZodiacId} />;
          }}
        />
      </main>
    );
  }
}

export default App;

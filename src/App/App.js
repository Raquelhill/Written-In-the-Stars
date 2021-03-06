import './App.css';
import Error from '../Error/Error';
import SingleZodiac from '../SingleZodiac/SingleZodiac';
import ZodiacCardContainer from '../ZodiacCardContainer/ZodiacCardContainer';
import Header from '../Header/Header';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = { day: 'today' };

  updateDay = (day) => {
    this.setState({ day: day });
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
                  <ZodiacCardContainer />
                </>
              );
            }}
          />
          <Route
            exact
            path="/singlezodiac/:id/:day"
            render={({ match }) => {
              console.log(match);
              let currentZodiacId = match.params.id;
              let currentZodiacDay = match.params.day;
              return (
                <SingleZodiac
                  id={currentZodiacId}
                  day={currentZodiacDay}
                  updateDay={this.updateDay}
                />
              );
            }}
          />
          <Route render={() => <Error />} />
        </Switch>
      </main>
    );
  }
}

export default App;

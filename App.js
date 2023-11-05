import React, { Component } from 'react';
import MovieList from './MovieList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Movie Voting and Review App</h1>
        <MovieList />
      </div>
    );
  }
}

export default App;

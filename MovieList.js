import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
       
      ],
    };
  }

  

  render() {
    const { movies } = this.state;
    return (
      <div>
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;

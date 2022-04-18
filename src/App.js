import React, { useState } from 'react';

import data from "./assets/data/data.json";

import poster1 from './assets/images/inception.jpeg';
import poster2 from './assets/images/lilo.jpeg';
import poster3 from './assets/images/sf2.jpg';
import './assets/css/App.css';
import Movie from './components/movie';

function App() {
  const [ movieRating, setMovieRating ] = useState(data);
  const movieData =     [{
    name: "Inception", rating: 8.8/10, poster: poster1,
    },
    {
      name: "Lilo and Stitch", rating: 7.3/10, poster: poster2, 
    },
    {
      name: "Scarface", rating: 8.3/10, poster: poster3,
    }
  ]

  // let sumRating = 0;
  // let numberOfMovies = 0;
  // for (const movie in movieData){
  //   sumRating = sumRating + movie.rating;
  //   numberOfMovies = numberOfMovies + 1;
  // }
  // console.log(sumRating / numberOfMovies);

  let sumRating = 0;
  movieData.forEach(movie => {
    sumRating = movie.rating + sumRating;
    return sumRating;
  })
  console.log(sumRating / movieData.length)
  console.log(movieData.length)


  return (
    <div className="App">
      {/* {movieData.map(movie => {
          return( 
            <div id="movie1" className="movie-rating">
            <h2>{movie.name}</h2>
            <p><img src={movie.poster} alt="Movie 1" /></p>
            </div>
          )
      })} */}
      <Movie />
      {/* <div id="movie1" className="movie-rating">
        <h2>Movie 1</h2>
        <p><img src={poster1} alt="Movie 1" /></p>
        <p>Let user rate movie here</p>
        <p>Calculate current rating here ie 4.25 from 4 votes</p>
      </div>

      <div id="movie2" className="movie-rating">
        <h2>Movie 2</h2>
        <p><img src={poster2} alt="Movie 1" /></p>
        <p>Let user rate movie here</p>
        <p>Calculate current rating here ie 3.67 from 3 votes</p>
      </div>

      <div id="movie3" className="movie-rating">
        <h2>Movie 3</h2>
        <p><img src={poster3} alt="Movie 3" /></p>
        <p>Let user rate movie here</p>
        <p>Calculate current rating here ie 3.67 from 3 votes</p>
      </div> */}
    </div>


    
  );
}

export default App;

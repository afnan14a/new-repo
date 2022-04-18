import poster1 from '.././assets/images/inception.jpeg';
import poster2 from '.././assets/images/lilo.jpeg';
import poster3 from '.././assets/images/sf2.jpg';
import '.././assets/css/App.css';  

import data from ".././assets/data/data.json";

import React, { useState } from 'react';



function Movie() {
    const obj = [
        {
            "id": 1,
            "name": "Movie 1",
            "img": poster1,
            "rating": [ 5, 4, 5, 3 ]
        },
        {
            "id": 2,
            "name": "Movie 2",
            "img": poster2,
            "rating": [ 3, 4, 4 ]
        }
    ]
    const handleSubmit = () => {
        const newMovieRating = movieRating;
        const newMovieRatingObj = {
            'id': movieRating.length + 1,
            'name': movieTitleForm,
        }
    }
    const [ setMovieRating, movieRating] = useState(obj);
    const [ setMovieTitleForm, movieTitleForm] = useState("");
    const [ setMovieStarForm, movieStarForm] = useState(0);

    // Movie Star Rating Average
    const [setMovieStarRating, movieStarRating] = useState(0);
  
    let sumRating = 0;
    movieRating.forEach(movie => {
      sumRating = movie.rating + sumRating;
      return sumRating;
    })
    console.log(sumRating / movieRating.length)
    setMovieRating(sumRating / movieRating.length);

    console.log(movieRating.length)


    return (
        <div className="Movie">
          {data.map(movie => {
              console.log(movie);
              return( 
                <div id="movie1" className="movie-rating">
                <h2>{movie.name}</h2>
                <p><img src={movie.img} alt="Movie 1" /></p>
                </div>
              )
          })}
          
        
        
        <form onSubit={() => this.handleSubmit()}> 
            <label>
                Add Rating:
                <input value={movieTitleForm} type="text" name="name" />
            </label>
            <label>
                Rating:
                <input value={movieStarForm} type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>

        <div>
            This is the movie star average rating: {movieStarRating}
        </div>
    
          </div>
    )}



export default Movie
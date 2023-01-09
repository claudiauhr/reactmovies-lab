// Import the useState hook from react
import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  // Variable to hold your apiKey
  const API_KEY = "cbf97951";

  // state to hold movie data - movie is a object
  // Add React.useState
  const [movie, setMovie] = useState(null);

  // Function to getMovies
  const getMovie = async (searchTerm) => {
    // Make fetch request and store response
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
    )
    // Parse JSON response into a javascript object
    const data = await response.json();
    // Set the Movie state to the movie
    setMovie(data);
  }

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie('Perfect Blue');
  }, []);

  //We pass the getMovie functio as a prop
  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;

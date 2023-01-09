// Define a function Componet, always make sure to declare the props parameter so you can use props in your Component
// You can also destructure your props directly from the parameter list
import React from "react";

const MovieDisplay = ({ movie }) => {
    // The Component must return some JSX
    // Function to return loaded JSX
    const loaded = () => {
        return (
        <>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Year}</h2>
        </>
        );
    };
    
    // Function to return loading JSX
    const loading = () => {
        return <h1>No Movie to Display</h1>
    };

    //Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
}

export default MovieDisplay;
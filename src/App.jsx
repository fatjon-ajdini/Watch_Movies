import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieListings from "./components/MovieListings";
import ViewAllMovies from "./components/ViewAllMovies";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MovieListings />
      <ViewAllMovies />
    </>
  );
};

export default App;

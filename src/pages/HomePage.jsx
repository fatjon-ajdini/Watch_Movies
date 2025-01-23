import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import MovieListings from "../components/MovieListings";
import ViewAllMovies from "../components/ViewAllMovies";

const HomePage = () => {
  return (
    <>
      <Hero />
      <MovieListings />
      <ViewAllMovies />
    </>
  );
};

export default HomePage;

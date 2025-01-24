import React from "react";
import Hero from "../components/Hero";
import MovieListings from "../components/MovieListings";
import ViewAllMovies from "../components/ViewAllMovies";
import Searchbar from "../components/Searchbar";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Searchbar />
      <MovieListings isHome={true} />
      <ViewAllMovies />
    </>
  );
};

export default HomePage;

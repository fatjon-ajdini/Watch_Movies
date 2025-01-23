import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import MovieListings from "../components/MovieListings";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MovieListings />
    </>
  );
};

export default HomePage;

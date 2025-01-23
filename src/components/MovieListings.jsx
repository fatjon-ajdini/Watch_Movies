import React from "react";
import movies from "../movies.json";
import MovieListing from "./MovieListing";

const MovieListings = () => {
  const recentMovies = movies.slice(0, 6);

  console.log(movies);
  return (
    <>
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {recentMovies.map((movie) => (
          <MovieListing key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieListings;

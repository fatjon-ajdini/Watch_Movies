import React from "react";
import { useState, useEffect } from "react";
import MovieListing from "./MovieListing";
import Spinner from "./Spinner";
import Sort from "./Sort";

const MovieListings = ({ isHome = false }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(isHome);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiURL = isHome ? "/api/movies?_limit=6" : "/api/movies";
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid grid-row mt-5">
          {sort ? "" : <Sort />}
          <div className="relative container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <MovieListing key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieListings;

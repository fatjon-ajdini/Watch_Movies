import React from "react";
import movies from "../movies.json";

const MovieListing = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-64 object-cover"
        src={movie.poster}
        alt={movie.title}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{movie.title}</h3>
        <p className="text-gray-600">{movie.plot}</p>
      </div>
      <a
        href={`/movie/${movie.id}`}
        className="bg-gray-500 text-white-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 transition duration-300"
      >
        Watch It
      </a>
    </div>
  );
};

export default MovieListing;

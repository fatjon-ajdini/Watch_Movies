import React from "react";
import { useState } from "react";

const MovieListing = ({ movie }) => {
  const [showFullDescription, setFullDescription] = useState(false);

  let description = movie.plot;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img
        className="w-full h-64 object-cover"
        src={movie.poster}
        alt={movie.title}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{movie.title}</h3>
        <p className="text-gray-600">{description}</p>
        <button
          onClick={() => setFullDescription((prevState) => !prevState)}
          className="text-sky-600 hover:text-sky-700"
        >
          {showFullDescription ? "Less" : "More"}
        </button>
      </div>
      <div className="p-4 flex justify-center">
        <a
          href={`/movie/${movie.id}`}
          className="bg-sky-600 text-white-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 transition duration-300"
        >
          Watch It
        </a>
      </div>
    </div>
  );
};

export default MovieListing;

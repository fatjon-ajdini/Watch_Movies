import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();
  const movie = useLoaderData();

  return (
    <>
      <div className="max-w-2xl mx-auto my-5 bg-sky-900 text-white shadow-lg rounded-lg overflow-hidden p-6">
        <h2 className="text-3xl font-bold mb-2">
          {movie.title} ({movie.year})
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          {movie.genre} | {movie.rating}
        </p>

        <div className="mb-4">
          <p>
            <span className="font-semibold">Director:</span> {movie.director}
          </p>
          <p>
            <span className="font-semibold">Actors:</span> {movie.actors}
          </p>
          <p>
            <span className="font-semibold">Country:</span> {movie.country}
          </p>
          <p>
            <span className="font-semibold">Language:</span> {movie.language}
          </p>
        </div>

        <p className="mb-4 text-gray-300">{movie.plot}</p>

        <div className="mb-4">
          <p>
            <span className="font-semibold">Box Office:</span> {movie.boxOffice}
          </p>
          <p>
            <span className="font-semibold">Production:</span>
            {movie.production}
          </p>
        </div>

        <div className="w-full h-56 bg-gray-700 flex items-center justify-center rounded-lg overflow-hidden">
          <img
            src={movie.poster}
            alt="Trailer thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 flex justify-center">
          <a
            to={`/movies/${movie.id}`}
            className="bg-sky-600 text-white-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 transition duration-300"
          >
            Watch It
          </a>
        </div>
      </div>
    </>
  );
};

const movieLoader = async ({ params }) => {
  const res = await fetch(`/api/movies/${params.id}`);
  const data = await res.json();
  return data;
};

export { MoviePage as default, movieLoader };

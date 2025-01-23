import React from "react";
import { Link } from "react-router-dom";

const ViewAllMovies = () => {
  return (
    <div className="flex justify-center py-8">
      <Link
        to="/movies"
        className="bg-sky-600 text-white-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 transition duration-300"
      >
        View All Movies
      </Link>
    </div>
  );
};

export default ViewAllMovies;

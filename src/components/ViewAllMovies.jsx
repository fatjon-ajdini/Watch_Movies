import React from "react";

const ViewAllMovies = () => {
  return (
    <div className="flex justify-center py-8">
      <a
        href="/movies"
        className="bg-gray-500 text-white-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 transition duration-300"
      >
        View More
      </a>
    </div>
  );
};

export default ViewAllMovies;

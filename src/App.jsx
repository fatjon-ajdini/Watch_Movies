import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieListings from "./components/MovieListings";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MovieListings />

      {/* More Button */}
      <div className="flex justify-center py-8">
        <button className="bg-gray-500 text-white-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 transition duration-300">
          More
        </button>
      </div>
    </>
  );
};

export default App;

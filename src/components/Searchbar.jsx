import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import SearchResultListing from "./SearchResultListing";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [openListing, setOpenListing] = useState(false);

  const fetchMovies = async (value) => {
    const apiURL = "/api/movies";
    try {
      const res = await fetch(apiURL);
      const data = await res.json();
      const result = data.filter((movie) => {
        return (
          movie && movie.title && movie.title.toLowerCase().includes(value)
        );
      });
      setResults(result);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchMovies(value);
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative mt-8">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch id="search-icon" className="text-sky-600" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for Movies"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-sky-700 dark:focus:blue-800"
          >
            Search
          </button>
        </div>
        <div className="mt-3">
          <SearchResultListing results={results} />
        </div>
      </div>
    </>
  );
};

export default Searchbar;

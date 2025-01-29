import React from "react";

import { useState } from "react";
import SearchResult from "./SearchResult";

import { FaSearch } from "react-icons/fa";

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

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

  const handleClose = () => {
    setInput("");
    setResults([]);
  };

  return (
    <>
      <section className="max-w-sm mx-auto">
        <div className="container relative flex flex-col">
          <div className="relative mt-8 flex flex-row">
            <input
              type="text"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for Movies"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0">
              <div className="pt-2">
                {input === "" ? (
                  <SearchIcon fontSize="large" />
                ) : (
                  <CloseIcon fontSize="large" onClick={handleClose} />
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-3 max-h-40 overflow-x-auto rounded-lg bg-sky-900 shadow-sm z-10 ">
            {results.map((result, id) => {
              return <SearchResult result={result} key={id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Searchbar;

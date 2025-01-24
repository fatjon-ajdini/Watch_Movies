import React from "react";
import Searchbar from "./Searchbar";
import SearchbarResults from "./SearchbarResults";
import { useState } from "react";

const Search = () => {
  const [results, setResults] = useState([]);
  return (
    <>
      <Searchbar setResults={setResults} />
      <SearchbarResults results={results} />
    </>
  );
};

export default Search;

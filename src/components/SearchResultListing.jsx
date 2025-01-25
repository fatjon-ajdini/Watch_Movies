import React from "react";
import SearchResult from "./SearchResult";

const SearchResultListing = ({ results }) => {
  return (
    <div className="max-h-40 overflow-auto rounded-lg bg-sky-900 shadow-sm">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};

export default SearchResultListing;

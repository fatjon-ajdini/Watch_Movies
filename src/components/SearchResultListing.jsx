import React from "react";
import SearchResult from "./SearchResult";

const SearchResultListing = ({ results }) => {
  return (
    <div className="max-h-40 overflow-auto mt-5 mx-auto max-w-md relative flex-col rounded-lg border border-white bg-sky-900 shadow-sm z-20">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};

export default SearchResultListing;

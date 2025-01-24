import React from "react";

const SearchbarResults = ({ results }) => {
  return (
    <div className="result-list max-w-md mx-auto max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      {results.map((result, id) => {
        return <div key={id}>{result.title}</div>;
      })}
    </div>
  );
};

export default SearchbarResults;

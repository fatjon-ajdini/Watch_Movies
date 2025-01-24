import React from "react";

const SearchResult = ({ result }) => {
  return (
    <div className="flex flex-row justify-between max-w-lg my-2 mx-2 py-5 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 rounded-lg hover:text-black">
      <div>{result.title}</div>
      <div>{result.year}</div>
    </div>
  );
};

export default SearchResult;

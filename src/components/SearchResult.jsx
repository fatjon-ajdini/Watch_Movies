import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ result }) => {
  return (
    <div className="w-100 my-2 mx-2 py-5 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 rounded-lg hover:text-black">
      <Link
        to={`/movies/${result.id}`}
        className="flex flex-row justify-between"
      >
        <div>{result.title}</div>
        <div>{result.year}</div>
      </Link>
    </div>
  );
};

export default SearchResult;

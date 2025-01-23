import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-sky-600 flex flex-col items-center h-screen pt-12">
      <p className="text-8xl mt-5 pb-5">Oops!</p>
      <div className="flex flex-row h-100 mt-15 items-center justify-items-center">
        <FaExclamationTriangle className="text-yellow-400 text-[150px]" />
        <p className="text-[100px] pl-20">404</p>
      </div>
      <p className="text-4xl pt-8">Sorry we couldn't find that page!</p>
      <Link
        to="/"
        className="text-white text-4xl bg-sky-900 hover:bg-blue-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;

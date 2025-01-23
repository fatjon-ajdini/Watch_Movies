import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-sky-900 text-white p-4 flex justify-center items-center flex-grow">
      <div className="container mx-auto flex items-center justify-center space-x-8">
        <img src={logo} alt="logo" className="h-10" />
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/movies" className="hover:text-gray-400">
            All Movies
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-gray-400"
            >
              Genre
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-sky-600 shadow-lg mt-2 right-0 w-40 rounded-md z-10">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                    Action
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                    Comedy
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                    Drama
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

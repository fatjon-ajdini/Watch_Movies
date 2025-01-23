import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-sky-600 px-4 py-2 rounded-full"
      : "hover:bg-sky-600 px-4 py-2 rounded-full";

  return (
    <nav className="bg-sky-900 text-white p-4 flex justify-center items-center flex-grow">
      <div className="container mx-auto flex items-center justify-center space-x-8">
        <img src={logo} alt="logo" className="h-10" />
        <div className="flex justify-between items-center space-x-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={linkClass}>
            All Movies
          </NavLink>
          <div className="group relative cursor-pointer py-2">
            <div className="menu-hover hover:bg-sky-600 px-4 py-2 rounded-full">
              Genre
            </div>
            <div className="z-50 invisible absolute flex flex-col bg-sky-600 shadow-lg mt-2 w-full rounded-md group-hover:visible">
              <NavLink
                to="/genre/action"
                className="hover:bg-sky-900 block px-4 py-2 cursor-pointer"
              >
                Action
              </NavLink>
              <NavLink
                to="/genre/comedy"
                className="hover:bg-sky-900 block px-4 py-2 cursor-pointer"
              >
                Comedy
              </NavLink>
              <NavLink
                to="/genre/drama"
                className="hover:bg-sky-900 block px-4 py-2 cursor-pointer"
              >
                Drama
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

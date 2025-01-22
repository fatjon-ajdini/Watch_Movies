import React from "react";
import { useState } from "react";

const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4 flex justify-center items-center flex-grow">
          <div className="container mx-auto flex items-center justify-center space-x-8">
            <div className="text-lg font-bold">MovieApp</div>
            <div className="flex space-x-6">
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
              <a href="/movies" className="hover:text-gray-400">
                All Movies
              </a>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="hover:text-gray-400"
                >
                  Genre
                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-gray-700 shadow-lg mt-2 right-0 w-40 rounded-md z-10">
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

        {/* Hero Section */}
        <section className="bg-gray-700 text-white py-40">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-4">
              Watch the latest movies at Movie R
            </h1>
            <p className="text-lg">
              Stream your favorite movies in high quality. Explore the best
              titles available now.
            </p>
          </div>
        </section>

        {/* Movies Cards Section */}
        <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Movie Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Movie 1"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Movie Title 1</h3>
              <p className="text-gray-600">
                A brief description of the movie goes here.
              </p>
            </div>
          </div>

          {/* Movie Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Movie 2"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Movie Title 2</h3>
              <p className="text-gray-600">
                A brief description of the movie goes here.
              </p>
            </div>
          </div>

          {/* Movie Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Movie 3"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Movie Title 3</h3>
              <p className="text-gray-600">
                A brief description of the movie goes here.
              </p>
            </div>
          </div>

          {/* Movie Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Movie 4"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Movie Title 4</h3>
              <p className="text-gray-600">
                A brief description of the movie goes here.
              </p>
            </div>
          </div>

          {/* Movie Card 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Movie 5"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Movie Title 5</h3>
              <p className="text-gray-600">
                A brief description of the movie goes here.
              </p>
            </div>
          </div>

          {/* Movie Card 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Movie 6"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Movie Title 6</h3>
              <p className="text-gray-600">
                A brief description of the movie goes here.
              </p>
            </div>
          </div>
        </div>
        {/* More Button */}
        <div className="flex justify-center py-8">
          <button className="bg-gray-500 text-white-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 transition duration-300">
            More
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

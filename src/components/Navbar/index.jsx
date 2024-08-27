import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">MyApp</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-white">
            Product and Services
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact us
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About us
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Product and Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

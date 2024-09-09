import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlerLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">{localStorage.getItem("email")}</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`hidden items-center space-x-6 md:flex`}>
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link to="/products" className="text-white hover:text-gray-400">
            Products
          </Link>

          {/* belum dibuat */}
          <button className="relative">
            <IoCartOutline className="text-2xl" />
            <span className="absolute -top-3 text-xs bg-red-800 w-5 rounded-xl">
              12
            </span>
          </button>

          <Button type={"button"} onclick={handlerLogout}>
            Logout
          </Button>
        </div>
      </div>
      <div
        className={`md:hidden transition-transform duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-screen opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        } overflow-hidden`}
      >
        <div className="mt-2 space-y-2">
          <Link to="/" className="block text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="block text-white hover:text-gray-400">
            About
          </Link>
          <Link to="/services" className="block text-white hover:text-gray-400">
            Services
          </Link>
          <Link to="/logout" className="text-white hover:text-gray-400">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

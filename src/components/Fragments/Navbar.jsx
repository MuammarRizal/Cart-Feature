import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { IoCartOutline } from "react-icons/io5";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { DarkModeContext } from "../../context/DarkMode";
const Navbar = () => {
  const cart = useSelector((state) => state.cart.data);
  const usernameLocalStorage = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  const [cartTotal, setCartTotal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const cartTotal = cart.reduce((acc, item) => {
      return (acc += item.qty);
    }, 0);
    setCartTotal(cartTotal);
  }, [cart]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (usernameLocalStorage !== null) {
      setUsername(jwtDecode(usernameLocalStorage).user);
    }
  }, []);

  const handlerLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav
      className={`p-4 sticky top-0 z-10 ${
        isDarkMode
          ? "bg-slate-700 text-slate-200"
          : "bg-slate-200 text-slate-700"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-xl font-bold">
          <Link to="/">{username}</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <button
            className="flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-md transition-all duration-500 hover:scale-110"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </div>
        <div className={`hidden items-center space-x-6 md:flex`}>
          <Link to="/products" className=" hover:text-gray-400">
            Products
          </Link>

          {/* belum dibuat */}
          <button className="relative">
            <IoCartOutline className="text-2xl" />
            <span
              className={`absolute -top-3 text-xs bg-red-800 w-5 rounded-xl text-slate-200`}
            >
              {cartTotal}
            </span>
          </button>

          <button
            onClick={toggleDarkMode}
            className={`flex items-center justify-center w-12 p-3 h-12  rounded-full shadow-md transition-all duration-500 hover:scale-110 ${
              isDarkMode
                ? "bg-slate-200 text-gray-800"
                : "bg-slate-800 text-gray-200"
            }`}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
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
          <Link to="/logout" className=" hover:text-gray-400">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

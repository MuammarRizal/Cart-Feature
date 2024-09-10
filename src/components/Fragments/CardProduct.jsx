import React, { useContext } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlices/actions";
import { DarkModeContext } from "../../context/DarkMode";

const CardProduct = ({ children }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <div
        className={`max-w-xs rounded overflow-hidden shadow-lg p-2 ${
          isDarkMode
            ? "bg-slate-800 text-gray-400"
            : "bg-slate-200 text-slate-800"
        }`}
      >
        <div className="px-4 py-4 h-full justify-between flex flex-col">
          {children}
        </div>
      </div>
    </>
  );
};

const Header = ({ imageUrl, imageAlt, idProduct }) => {
  return (
    <Link to={`/products/${idProduct}`}>
      <img className="w-full h-48 object-cover" src={imageUrl} alt={imageAlt} />
    </Link>
  );
};

const Body = ({ productName, children, count, rate }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold ">{productName}</h2>
        <Rating rate={rate} count={count} />
      </div>
      <div className="card-desc h-full">
        <p className="text-base mt-2">{children}</p>
      </div>
    </>
  );
};

const Footer = ({ title, id, price, category }) => {
  const dispatch = useDispatch();
  const addCartToStore = ({ id, price, qty, title }) => {
    dispatch(addToCart({ id, price, qty, title }));
  };
  return (
    <>
      <div className="flex items-center justify-between mt-4 ">
        <span className="text-xl font-semibold ">
          {price.toLocaleString("us-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
        <button
          className="flex items-center bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-all"
          onClick={() => addCartToStore({ id, price, qty: 1, title })}
        >
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
      <span className="text-sm font-medium text-blue-600 self bg-black rounded-lg p-2 mt-2">
        {category}
      </span>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const CardProduct = ({ children }) => {
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg p-2 bg-slate-800">
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
        <h2 className="text-xl font-bold text-slate-300">{productName}</h2>
        <Rating rate={rate} count={count} />
      </div>
      <div className="card-desc h-full">
        <p className="text-slate-300 text-base mt-2">{children}</p>
      </div>
    </>
  );
};

const Footer = ({ handleToCart, id, price, category }) => {
  return (
    <>
      <div className="flex items-center justify-between mt-4 ">
        <span className="text-xl font-semibold text-slate-300">
          {price.toLocaleString("us-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
        <button
          className="flex items-center bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-all"
          onClick={() => handleToCart({ id, price })}
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

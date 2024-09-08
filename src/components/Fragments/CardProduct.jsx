import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

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

const Header = ({ imageUrl, imageAlt }) => {
  return (
    <img className="w-full h-48 object-cover" src={imageUrl} alt={imageAlt} />
  );
};

const Body = ({ productName, children }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-300">{productName}</h2>
        <div className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-gray-300 mr-1" />
        </div>
      </div>
      <div className="card-desc h-full">
        <p className="text-slate-300 text-base mt-2">{children}</p>
      </div>
    </>
  );
};

const Footer = ({ handleToCart, id }) => {
  return (
    <>
      <div className="flex items-center justify-between mt-4 ">
        <span className="text-xl font-semibold text-slate-300">
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          })}
        </span>
        <button
          className="flex items-center bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-all"
          onClick={() => handleToCart({ id })}
        >
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

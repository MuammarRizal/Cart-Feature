import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-2">Page Not Found</p>
        <p className="text-gray-500 mt-4">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/login"
          className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

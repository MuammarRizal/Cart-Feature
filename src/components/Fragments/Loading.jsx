import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex justify-center w-full h-screen items-center">
      <FaSpinner className="animate-spin text-4xl text-blue-500" />
    </div>
  );
};

export default Loading;

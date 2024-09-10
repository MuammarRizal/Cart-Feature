import React from "react";
import { useLogin } from "../hooks/useLogin";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const ProfilePage = () => {
  const username = useLogin();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <FaUserCircle className="text-gray-400 text-6xl" />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Your Account
        </h2>
        <div className="text-center mb-4">
          <p className="text-gray-600">Username: muammarrizal</p>
          <p className="text-gray-600">Email: muammar@example.com</p>
        </div>
        <button className="flex items-center justify-center w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;

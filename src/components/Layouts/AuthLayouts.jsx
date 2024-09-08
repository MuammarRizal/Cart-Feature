import React from "react";
import { useLocation } from "react-router-dom";
import NavigationLogin from "../Elements/NavigationLogin/LogReg";

const AuthLayouts = ({ children, title }) => {
  const { pathname } = useLocation();
  return (
    <div className="container flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-teal-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <NavigationLogin path={pathname} />
      </div>
    </div>
  );
};

export default AuthLayouts;

import React from "react";

const Label = ({ children, label }) => {
  return (
    <>
      <label className="flex flex-col font-bold">
        {label}
        {children}
      </label>
    </>
  );
};

export default Label;

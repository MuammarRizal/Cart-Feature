import React from "react";

const InputForm = ({ name, type, placeholder = "Select Input" }) => {
  return (
    <input
      type={type}
      className="h-7 mt-2 rounded px-4 border shadow-md my-3 font-normal py-4"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default InputForm;

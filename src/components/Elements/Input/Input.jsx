import React, { forwardRef } from "react";

const InputForm = forwardRef(
  ({ name, type, placeholder = "Select Input" }, ref) => {
    return (
      <input
        type={type}
        className="h-7 mt-2 rounded px-4 border shadow-md my-3 font-normal py-4"
        placeholder={placeholder}
        name={name}
        ref={ref}
        required
      />
    );
  }
);

export default InputForm;

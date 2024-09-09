import { forwardRef } from "react";
import InputForm from "./Input";
import Label from "./Label";

const InputLabel = forwardRef(({ label, placeholder, type, name }, ref) => {
  return (
    <>
      <Label label={label}>
        <InputForm
          type={type}
          placeholder={placeholder}
          name={name}
          ref={ref}
        />
      </Label>
    </>
  );
});

export default InputLabel;

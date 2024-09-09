import InputForm from "./Input";
import Label from "./Label";

const InputLabel = ({ label, placeholder, type, name, focusRef }) => {
  return (
    <>
      <Label label={label}>
        <InputForm
          type={type}
          placeholder={placeholder}
          name={name}
          focusRef={focusRef}
        />
      </Label>
    </>
  );
};

export default InputLabel;

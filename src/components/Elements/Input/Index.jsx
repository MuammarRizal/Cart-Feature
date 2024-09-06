import InputForm from "./Input";
import Label from "./Label";

const InputLabel = ({ label, placeholder, type, name }) => {
  return (
    <>
      <Label label={label}>
        <InputForm type={type} placeholder={placeholder} name={name} />
      </Label>
    </>
  );
};

export default InputLabel;

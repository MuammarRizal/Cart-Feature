import React from "react";
import Button from "../Elements/Button";
import InputLabel from "../Elements/Input/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputLabel
        label="Fullname"
        placeholder="Insert your name here ..."
        type="text"
        name="fullname"
      />
      <InputLabel
        label="username"
        placeholder="Username"
        type="email"
        name="username"
      />
      <InputLabel
        label="Password"
        placeholder="********"
        type="password"
        name="password"
      />
      <InputLabel
        label="Confirm Password"
        placeholder="********"
        type="password"
        name="confirmPassword"
      />
      <Button type={"submit"} bgColor="bg-teal-500" textColor="text-white">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;

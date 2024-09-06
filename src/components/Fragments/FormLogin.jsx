import React from "react";
import Button from "../Elements/Button";
import InputLabel from "../Elements/Input/Index";

const FormLogin = () => {
  return (
    <form action="">
      <InputLabel
        label="Username"
        placeholder="Masukan Username"
        type="email"
        name="username"
      />
      <InputLabel
        label="Password"
        placeholder="********"
        type="password"
        name="password"
      />
      <Button type={"submit"} bgColor="bg-teal-500" textColor="text-white">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;

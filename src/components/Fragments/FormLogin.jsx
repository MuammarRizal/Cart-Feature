import React, { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputLabel from "../Elements/Input/Index";

const FormLogin = () => {
  const loginFocusRef = useRef(null);
  useEffect(() => {
    loginFocusRef.current.focus();
  }, []);
  const handleFormLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleFormLogin}>
      <InputLabel
        label="Username"
        placeholder="Masukan Username"
        type="email"
        name="username"
        focusRef={loginFocusRef}
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

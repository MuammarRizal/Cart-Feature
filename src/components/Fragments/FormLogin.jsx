import React, { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputLabel from "../Elements/Input/Index";
import { postUsername } from "../../services/auth.service.js";
const FormLogin = () => {
  const loginFocusRef = useRef(null);
  const [usernameHandler, setUsernameHandler] = useState("");
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    if (usernameHandler.length > 0) {
      const timer = setTimeout(() => {
        setShowText(true);
        setUsernameHandler("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [usernameHandler]);
  useEffect(() => {
    loginFocusRef.current.focus();
  }, []);
  const handleFormLogin = (event) => {
    event.preventDefault();
    postUsername(
      {
        username: event.target.username.value,
        password: event.target.password.value,
      },
      (res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          window.location.href = "/products";
        } else {
          setShowText(true);
          setUsernameHandler(res.response.data);
        }
      }
    );
  };
  return (
    <form onSubmit={handleFormLogin}>
      <p className="text-2lg text-red-800 font-bold text-center">
        {showText &&
          usernameHandler.length > 0 &&
          usernameHandler.toUpperCase()}
      </p>
      <InputLabel
        label="Username"
        placeholder="Masukan Username"
        type="text"
        name="username"
        ref={loginFocusRef}
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

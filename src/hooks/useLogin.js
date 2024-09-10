// import { jwtDecode } from "jwt-decode";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const useLogin = () => {
  const [username, setUsername] = useState("");

  const getToken = localStorage.getItem("token");
  useEffect(() => {
    if (getToken !== null) {
      const { user } = jwtDecode(getToken);
      setUsername(user);
    } else {
      alert("Silahkan login terlebih dahulu");
      window.location.href = "login";
    }
  }, []);
  return username;
};

export { useLogin };

import axios from "axios";

const postUsername = ({ username, password }, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", {
      username,
      password,
    })
    .then((res) => {
      callback(res);
    })
    .catch((err) => callback(err));
};

export { postUsername };

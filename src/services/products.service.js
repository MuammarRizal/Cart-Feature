import axios from "axios";

const getProducts = async () => {
  const datas = await axios.get("https://fakestoreapi.com/products");
  const response = datas.data;
  return response;
};

const getDetailProducts = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      callback(res);
    })
    .catch((err) => console.log(err));
};

export { getProducts, getDetailProducts };

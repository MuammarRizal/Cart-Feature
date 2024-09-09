import axios from "axios";

const getProducts = async () => {
  const datas = await axios.get("https://fakestoreapi.com/products");
  const response = datas.data;
  return response;
};

export { getProducts };

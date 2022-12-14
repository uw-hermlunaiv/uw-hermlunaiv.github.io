import axios from "axios";

const URL = "https://dummyjson.com/products/";

export const getProducts = () => {
  return axios.get(URL);
};

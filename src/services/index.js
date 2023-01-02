import axios from "axios";

const createHttpInstance = (url = "", config = {}) => {
  return axios.create({
    ...config,
    baseURL: url,
  });
};

export const $dummyHttp = createHttpInstance("https://dummyjson.com");

$dummyHttp.interceptors.response.use(
  (response) => {
    return response?.data || response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

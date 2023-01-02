import { $dummyHttp } from ".";

const resource = "/products";

export const getProducts = async () => {
  return $dummyHttp.get(resource);
};

export const findProduct = async (id) => {
  return $dummyHttp.get(`${resource}/${id}`);
};

import { useState, useEffect } from "react";
import { getProducts } from "../services/product";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await getProducts();

    setProducts(response.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};

export default useProducts;

import { useState, useEffect } from "react";
import { getProducts } from "../services/product";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const response = await getProducts();

    setProducts(response.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading };
};

export default useProducts;

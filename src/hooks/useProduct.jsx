import { useCallback, useEffect, useState } from "react";
import { findProduct } from "../services/product";

const useProduct = (id) => {
  const [product, setProduct] = useState(null);

  const getProduct = useCallback(async () => {
    const response = await findProduct(id);

    setProduct(response);
  }, [id, setProduct]);

  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, [id, getProduct]);

  return product;
};

export default useProduct;

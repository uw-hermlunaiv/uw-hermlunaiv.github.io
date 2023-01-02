import React from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

const Product = () => {
  const params = useParams();
  const product = useProduct(params?.id);

  return <div>{product?.title}</div>;
};

export default Product;

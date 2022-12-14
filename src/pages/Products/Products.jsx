import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import useProducts from "../../hooks/useProducts";

const Products = () => {
  const products = useProducts();

  return (
    <>
      <Navigation />
      <div className="flex flex-col gap-y-4 pb-20">
        <img
          src="https://images.pexels.com/photos/2820640/pexels-photo-2820640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover object-center h-96"
        />
        <div className="container grid grid-cols-5 gap-6 -mt-20">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="shadow-xl rounded-lg bg-white overflow-hidden"
              >
                <div className="h-36 overflow-hidden border-b">
                  <img
                    src={
                      product?.images?.[5] ||
                      product?.images?.[4] ||
                      product?.images?.[3] ||
                      product?.images?.[2] ||
                      product?.images?.[1] ||
                      product?.images?.[0]
                    }
                    className="object-cover object-center h-full w-full"
                    alt=""
                  />
                </div>
                <div className="p-3">
                  <p className="mb-3">{product.title}</p>
                  <p className="mb-2 text-xs text-gray-500">
                    {product.description}
                  </p>
                  <span className="inline-flex flex-shrink text-xs bg-gray-200 rounded-md px-1 py-1">
                    {product.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;

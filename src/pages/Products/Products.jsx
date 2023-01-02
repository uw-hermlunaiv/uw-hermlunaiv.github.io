import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import Navigation from "../../components/Navigation/Navigation";
import useProducts from "../../hooks/useProducts";
import { capitalizeText } from "../../utils";

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
        <div className="container px-4 xl:px-0 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 -mt-20">
          {products.map((product) => {
            return (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
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
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex flex-col flex-1 gap-x-2 truncate">
                      <p className="truncate">
                        {capitalizeText(product.title)}
                      </p>
                      <div className="flex">
                        {Array.from({ length: 5 })
                          .map((x, i) => i + 1)
                          .map((item) => {
                            return (
                              <Icon
                                name="Star"
                                className={classNames(
                                  "h-4 w-4",
                                  item < product.rating
                                    ? "fill-yellow-300 stroke-yellow-300"
                                    : "fill-gray-300 stroke-gray-300"
                                )}
                              />
                            );
                          })}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mb-3">
                    <p className="text-lg font-bold">
                      $
                      {(
                        product.price *
                        ((100 - product.discountPercentage) / 100)
                      ).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-x-2 text-xs">
                      <p className="text-red-600 line-through">
                        ${product.price}
                      </p>
                      <p className="text-gray-300">
                        -{product.discountPercentage}%
                      </p>
                    </div>
                  </div>
                  <p className="mb-2 text-xs text-gray-500">
                    {product.description}
                  </p>
                  <span className="inline-flex flex-shrink text-xs bg-gray-200 rounded-md px-1 py-1">
                    {product.category}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;

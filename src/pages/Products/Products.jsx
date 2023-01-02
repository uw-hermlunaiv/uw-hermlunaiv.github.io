import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import Navigation from "../../components/Navigation/Navigation";
import useProducts from "../../hooks/useProducts";
import { capitalizeText } from "../../utils";

const Products = () => {
  const { products, loading } = useProducts();

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
          {loading &&
            Array.from({ length: 30 })
              .map((x, i) => i + 1)
              .map((item) => (
                <div
                  key={item}
                  className="shadow-xl rounded-lg bg-white min-h-72 overflow-hidden"
                >
                  <div className="bg-gray-300 h-36"></div>
                  <div className="p-3">
                    <div className="rounded-md h-5 w-28 bg-gray-200 mb-1"></div>
                    <div className="flex mb-3">
                      {Array.from({ length: 5 })
                        .map((x, i) => i + 1)
                        .map((item) => {
                          return (
                            <Icon
                              key={`${item}-star`}
                              name="Star"
                              className="h-4 w-4 fill-gray-300 stroke-gray-300"
                            />
                          );
                        })}
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-x-2">
                        <div className="rounded-md h-3 w-12 bg-gray-200 mb-1" />
                        <div className="rounded-md h-3 w-8 bg-gray-200 mb-1" />
                      </div>
                      <div className="rounded-md h-5 w-16 bg-gray-200 mb-1"></div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="rounded-md h-3 w-4/5 bg-gray-200 mb-1" />
                      <div className="rounded-md h-3 w-full bg-gray-200 mb-1" />
                      <div className="rounded-md h-5 w-2/5 bg-gray-200 mb-1" />
                    </div>
                  </div>
                </div>
              ))}
          {!loading &&
            products.map((product) => {
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
                    <div className="flex flex-col mb-1">
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
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-x-2 text-xs">
                        <p className="text-red-600 line-through">
                          ${product.price}
                        </p>
                        <p className="text-gray-300">
                          -{product.discountPercentage}%
                        </p>
                      </div>
                      <p className="text-lg font-bold">
                        $
                        {(
                          product.price *
                          ((100 - product.discountPercentage) / 100)
                        ).toFixed(2)}
                      </p>
                    </div>
                    <p className="mb-2 text-xs text-gray-500">
                      {product.description}
                    </p>
                    <span className="inline-flex flex-shrink text-[0.7rem] text-xs bg-gray-200 rounded-md px-2 py-1">
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

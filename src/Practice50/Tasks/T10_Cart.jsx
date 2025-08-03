import React, { useState } from "react";
import { products } from "../Data";
const T10_Cart = () => {
  //   const [inCart, setInCart] = useState(false);
  //   const [product, setProduct ] = useState(products)
  const [cartItem, setCartItem] = useState(0);
  //   console.log(cartItem)
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Cat Items : {cartItem}</h1>
      <div className="flex flex-wrap gap-2 mt-4">
        {products.map((val, i) => {
          return (
            <div
              key={i}
              className="border p-4 rounded-lg shadow-md w-60 bg-white"
            >
              <h2 className="text-xl font-bold mb-2">{val.name}</h2>
              <p className="text-gray-600 mb-1">Category: {val.category}</p>
              <p className="text-gray-800 font-semibold mb-1">
                Price: ₹{val.price}
              </p>
              <p
                className={`font-medium ${
                  val.inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {val.inStock ? "In Stock" : "Out of Stock"}
              </p>
              <p className="text-xs text-gray-400 mt-2">ID: {val.id}</p>
              <button
                className="bg-yellow-300 mt-2 rounded-md px-3 py-1 font-semibold text-white"
                onClick={() => {
                  setCartItem(cartItem + 1);
                  alert(`${val.name} added to your cart`);
                }}
              >
                {val.inCart ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default T10_Cart;

import { useState } from "react";
import { useCart } from "./useCart";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
      <img
        className="w-32 h-32 object-cover mb-4"
        src={product.image}
        alt={product.title}
      />
      {/*console.log("Image URL:", product.image);*/}
      <h3 className="h-20 text-lg font-bold text-gray-800">{product.title}</h3>
      {showInfo && (
        <p className="text-sm text-gray-700 mt-2 mb-2 text-center">
          {product.description}
        </p>
      )}
      <button
        onClick={toggleInfo}
        className="mb-2 text-blue-500 underline py-1 px-3 rounded hover:text-blue-700 hover:font-bold transition-all duration-300 ease-in-out"
      >
        {showInfo ? "Show less info" : "Show more info"}
      </button>
      <p className="text-gray-600 mb-8">{product.price.toFixed(2)} €</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition-all duration-300 ease-in-out"
      >
        Add to cart
      </button>
    </div>
  );
}

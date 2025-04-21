import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./useCart";

export default function ProductDetail() {
  const { id } = useParams();
  const [showInfo, setShowInfo] = useState(false);
  const { products, loading } = useOutletContext();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (loading) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded mt-6">
      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 transition"
      >
        ← Zurück
      </button>

      <img src={product.image} alt={product.title} className="w-72 mx-auto" />
      <h2 className="text-2xl font-bold mt-4 text-center">{product.title}</h2>

      {showInfo && (
        <p className="text-sm text-gray-700 mt-2 mb-2 text-center">
          {product.description}
        </p>
      )}
      <div
        className="flex
        justify-center
        w-full"
      >
        <button
          onClick={toggleInfo}
          className="mb-2 text-blue-500 underline py-1 px-3 rounded hover:text-blue-700 hover:font-bold transition-all duration-300 ease-in-out"
        >
          {showInfo ? "Show less info" : "Show more info"}
        </button>
      </div>

      <p className="mt-4 mb-4 text-center text-lg font-semibold text-blue-600">
        {product.price.toFixed(2)} €
      </p>

      <div
        className="flex
        justify-center
        w-full"
      >
        <button
          onClick={() => addToCart(product)}
          className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300 ease-in-out"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

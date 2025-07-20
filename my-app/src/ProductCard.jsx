import { useCart } from "./context/useCart";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="p-4 bg-sky-100 shadow-md rounded-lg flex flex-col items-center">
      <img
        className="w-32 h-32 object-cover mb-4"
        src={product.image}
        alt={product.title}
      />
      {/*console.log("Image URL:", product.image);*/}
      <h3 className="h-20 text-lg font-bold text-gray-800">
        <Link
          to={`/products/${product.id}`}
          className="hover:underline text-sky-600"
        >
          {product.title}
        </Link>
      </h3>

      <p className="text-gray-600 mb-8">{product.price.toFixed(2)} €</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-sky-500 text-white py-1 px-3 rounded hover:bg-sky-600 transition-all duration-300 ease-in-out"
      >
        Add to cart
      </button>
    </div>
  );
}

import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useCart } from "./context/useCart";

function Header({ toggleCart, isCartVisible }) {
  const { cart } = useCart();

  return (
    <header className="bg-blue-500 text-white p-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Storelando</h1>

      <nav className="flex items-center space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="products" className="hover:underline">
          Products
        </Link>
      </nav>

      <div className="relative">
        <button
          onClick={toggleCart}
          className="bg-blue-600 py-1 px-3 rounded hover:bg-blue-700 transition-all duration-300 ease-in-out"
        >
          {isCartVisible ? "Close Cart" : "View Cart"}
        </button>
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
            {cart.length}
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;

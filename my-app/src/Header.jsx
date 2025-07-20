import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useCart } from "./context/useCart";

function Header({ toggleCart, isCartVisible }) {
  const { cart } = useCart();

  return (
    <header className="bg-sky-300 text-white p-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Storelando</h1>

      <nav className="flex items-center space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="topsellers" className="hover:underline">
          Top sellers
        </Link>
        <Link to="products" className="hover:underline">
          Products
        </Link>
      </nav>

      <div className="relative">
        <button
          onClick={toggleCart}
          className="bg-sky-500 py-1 px-3 rounded hover:bg-sky-600 transition-all duration-300 ease-in-out"
        >
          {isCartVisible ? "Close Cart" : "View Cart"}
        </button>
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;

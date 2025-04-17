import { useCart } from "./useCart";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const cartSum = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      {/* Show cart */}

      <div className="mt-2 p-4 bg-blue-100">
        <h2 className="text-xl text-center font-semibold mb-8">🛒 Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <h3 className="w-80">{item.title}</h3>
                <div className="flex items-center space-x-4">
                  <h4>{item.price.toFixed(2)} €</h4>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-700 transition-all duration-300 ease-in-out"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-8 flex justify-between">
        <h3>Total price:</h3>
        <h3>{cartSum.toFixed(2)} €</h3>
      </div>
    </div>
  );
}

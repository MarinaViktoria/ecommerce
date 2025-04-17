import { useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "./useCart";
//import { useParams } from "react-router-dom";

function MainPart({ products, loading }) {
  const { addToCart } = useCart();
  const [searchInput, setSearchInput] = useState("");
  //const { id } = useParams();

  //if (!products....) wäre noch zu früh, da products noch eine [] ist...
  //deshalb Fehlermeldung
  //lösen mit dem loading vorher

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  if (!products || products.length === 0) {
    throw new Error("No products available");
  }

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const productsToDisplay = searchInput
    ? filteredProducts
    : products.slice(0, 6);

  return (
    <main className="p-6 bg-gray-100">
      {/*min-h-screen*/}
      {/* Welcome Section */}
      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-blue-700">
          Welcome to Our Store!
        </h2>

        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search products"
          className="mt-4 p-2 border border-gray-300 rounded"
        />

        <p className="mt-4 text-gray-600">
          Discover our amazing products and enjoy exclusive deals.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-center col-span-full">Loading products...</p>
        ) : (
          productsToDisplay.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default MainPart;

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function Products({ products, loading, isCartVisible }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <main
        className={`p-6 bg-gray-100 transition-all duration-300 ease-in-out ${
          isCartVisible ? "lg:mr-[30rem]" : ""
        }`}
      >
        {/* Welcome Section */}
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-sky-600">
            Welcome to Our Store!
          </h2>

          <p className="mt-4 text-gray-600">
            Explore our wide range of products below.
          </p>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mt-4 p-2 border border-gray-300 rounded"
          >
            {categories.map((category, index) => (
              <option key={category + index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </section>

        {/* Product Listings */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-center col-span-full">Loading products...</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

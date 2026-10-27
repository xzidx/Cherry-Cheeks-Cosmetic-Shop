
import React, { useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";

function AllProducts() {
  // Store the products fetched from the JSON file
  const [products, setProducts] = useState([]);

  // Track loading and errors
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products when the component loads
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/student-data/products.json");

        if (!response.ok) {
          throw new Error("Failed to load products. Please try again.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid product data format.");
        }

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Handle Edit Product
  function handleEdit(product) {
    alert(`Edit product: ${product.name}`);
  }

  return (
    <section className="w-full min-w-0 py-1">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Section Heading */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">
            All Products
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
            View and manage all products in your cosmetic shop.
          </p>
        </div>

        {/* Products Container */}
        <div className="min-w-0 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:p-6">
          {/* Card Header */}
          <div className="mb-6 flex items-center justify-between">
            <span className="rounded-full bg-[#FFF5F6] px-3 py-1 text-xs font-medium text-[#F66B87]">
              {products.length} Products
            </span>
          </div>

          {/* Loading, Error, or Product Grid */}
          {isLoading ? (
            <div className="py-12 text-center text-sm text-gray-500">
              Loading products...
            </div>
          ) : error ? (
            <div className="py-12 text-center">
              <p className="text-sm text-red-500">{error}</p>

              <p className="mt-2 text-xs text-gray-400">
                Check that public/student-data/products.json exists and
                contains valid JSON.
              </p>
            </div>
          ) : products.length === 0 ? (
            <div className="py-12 text-center text-sm text-gray-500">
              No products available.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group min-w-0 overflow-hidden rounded-xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Product Image */}
                  <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#FFF9FA] p-5">
                    <span className="absolute left-3 top-3 z-10 rounded-md bg-[#F66B87] px-2 py-1 text-xs font-bold text-white shadow-sm">
                      NEW
                    </span>

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full rounded-lg object-cover drop-shadow-sm transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Product Information */}
                  <div className="p-4">
                    <h3 className="mt-1 truncate text-base font-bold text-gray-900">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-400">
                      {product.weight}
                    </p>

                    {/* Star Rating */}
                    <div className="mt-3 flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FiStar
                          key={star}
                          className={`h-4 w-4 ${
                            star <= product.rating
                              ? "fill-amber-400 text-amber-400"
                              : "fill-gray-200 text-gray-300"
                          }`}
                        />
                      ))}

                      <span className="ml-1 text-xs text-gray-400">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <p className="my-2 text-lg font-bold text-[#F66B87]">
                      ${Number(product.price).toFixed(2)}
                    </p>

                    {/* Edit Button */}
                    <button
                      type="button"
                      onClick={() => handleEdit(product)}
                      className="w-full rounded-xl bg-[#F66B87] py-2 text-sm font-medium text-white transition-colors hover:bg-[#E05571] focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:ring-offset-2"
                    >
                      Edit Product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AllProducts;

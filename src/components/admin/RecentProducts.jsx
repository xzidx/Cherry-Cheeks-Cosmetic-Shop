
import React from "react";
import { FiStar } from "react-icons/fi";

function RecentProducts() {
  const products = [
    {
      id: 1,
      name: "Lancôme Lipstick",
      weight: "4.2g",
      price: "$30.00",
      rating: 4,
      reviews: 145,
      image: "https://placehold.co/400x400/FFF5F6/F66B87?text=Lipstick",
    },
    {
      id: 2,
      name: "Hydrating Face Cream",
      weight: "50ml",
      price: "$25.00",
      rating: 4,
      reviews: 120,
      image: "https://placehold.co/400x400/FFF5F6/F66B87?text=Face+Cream",
    },
    {
      id: 3,
      name: "Facial Cleanser",
      weight: "100ml",
      price: "$18.00",
      rating: 4,
      reviews: 98,
      image: "https://placehold.co/400x400/FFF5F6/F66B87?text=Cleanser",
    },
    {
      id: 4,
      name: "Rose Blush Palette",
      weight: "12g",
      price: "$22.00",
      rating: 4,
      reviews: 86,
      image: "https://placehold.co/400x400/FFF5F6/F66B87?text=Blush+Palette",
    },
  ];

  function handleEdit(product) {
    alert(`Edit product: ${product.name}`);
  }

  return (
    <section className="w-full py-4">
      <div className="mx-auto w-full max-w-[1350px]">

        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="mb-3 text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
            PRODUCT MANAGEMENT
          </h2>

          <h1 className="text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
            Recent Products
          </h1>

          <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
            Explore your latest products and manage your cosmetic collection.
          </p>
        </div>

        {/* Products Container */}
        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">

          {/* Card Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              Latest Products
            </h2>

            <span className="rounded-full bg-[#FFF5F6] px-3 py-1 text-xs font-medium text-[#F66B87]">
              {products.length} Products
            </span>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Product Image */}
                <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#FFF9FA] p-5">
                  {/* NEW Badge */}
                  <span className="absolute left-3 top-3 z-10 rounded-md bg-[#F66B87] px-2 py-1 text-xs font-bold text-white shadow-sm">
                    NEW
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
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
                    {product.price}
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
        </div>
      </div>
    </section>
  );
}

export default RecentProducts;

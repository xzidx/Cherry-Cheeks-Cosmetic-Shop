
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";

function ProductCard({ product, onAddToCart }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const navigate = useNavigate();

  // Navigate to Product Details page
  const handleViewProduct = () => {
    navigate(`/product/${product.id}`);
  };

  // Add product to cart
  const handleAddToCart = () => {
    onAddToCart?.(product);
    setIsAddedToCart(true);
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">

      {/* Product Image - Click to view details */}
      <div
        onClick={handleViewProduct}
        className="cursor-pointer overflow-hidden bg-gray-50"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleViewProduct();
          }
        }}
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-4">

        <p className="mb-2 text-sm text-gray-500">
          {product.category}
        </p>

        <h3
          onClick={handleViewProduct}
          className="mb-3 cursor-pointer text-base font-semibold text-gray-800 hover:text-pink-600"
        >
          {product.name}
        </h3>

        <p className="mt-auto mb-4 text-lg font-bold text-pink-600">
          ${Number(product.price).toFixed(2)}
        </p>

        {/* Add to Cart Button */}
        <Button
          className="w-full"
          onClick={handleAddToCart}
        >
          {isAddedToCart ? "Added to Cart ✓" : "Add to Cart"}
        </Button>

      </div>
    </div>
  );
}

export default ProductCard;

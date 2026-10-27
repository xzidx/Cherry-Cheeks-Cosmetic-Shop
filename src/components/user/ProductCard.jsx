import Button from "../shared/Button";
import { useEffect, useSt } from "react";
function ProductCard({ product, onAddToCart }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart?.(product);
    setIsAddedToCart(true);
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">
      {/* Product Image */}
      <div className="overflow-hidden bg-gray-50">
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

        <h3 className="mb-3 text-base font-semibold text-gray-800">
          {product.name}
        </h3>

        <p className="mt-auto mb-4 text-lg font-bold text-pink-600">
          ${Number(product.price).toFixed(2)}
        </p>

        <Button
          className="w-full"
          onClick={() => onAddToCart?.(product)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
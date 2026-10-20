
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Hydrating Face Cream",
    price: 15.99,
    image: "https://placehold.co/400x400?text=Face+Cream",
    category: "Skincare",
  },
  {
    id: 2,
    name: "Rose Lipstick",
    price: 9.99,
    image: "https://placehold.co/400x400?text=Lipstick",
    category: "Makeup",
  },
  {
    id: 3,
    name: "Facial Cleanser",
    price: 12.5,
    image: "https://placehold.co/400x400?text=Cleanser",
    category: "Skincare",
  },
  {
    id: 4,
    name: "Blush Palette",
    price: 18.99,
    image: "https://placehold.co/400x400?text=Blush",
    category: "Makeup",
  },
];

function ProductGrid({ products: productList = products }) {
  if (productList.length === 0) {
    return (
      <p className="py-10 text-center text-gray-500">
        No products available.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;

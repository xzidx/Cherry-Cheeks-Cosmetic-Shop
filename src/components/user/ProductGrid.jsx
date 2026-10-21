
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
  {
    id: 5,
    name: "Vitamin C Serum",
    price: 22.99,
    image: "https://placehold.co/400x400?text=Vitamin+C+Serum",
    category: "Skincare",
  },
];

function ProductGrid({ products: productList = products }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
      {productList.length === 0 ? (
        <p className="py-10 text-center text-gray-500">
          No products available.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGrid;




import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Lancôme Lipstick",
    weight: "4.2g",
    price: 30,
    rating: 4,
    reviews: 145,
    image: "/images/lancome-lipstick.png",
    isNew: true,
  },
  {
    id: 2,
    name: "Rose Lipstick",
    weight: "3.5g",
    price: 25,
    rating: 5,
    reviews: 120,
    image: "/images/rose-lipstick.png",
    isNew: false,
  },
  {
    id: 3,
    name: "Pink Lip Gloss",
    weight: "5g",
    price: 18,
    rating: 4,
    reviews: 98,
    image: "/images/pink-lip-gloss.png",
    isNew: true,
  },
  {
    id: 4,
    name: "Matte Lipstick",
    weight: "4g",
    price: 22,
    rating: 5,
    reviews: 85,
    image: "/images/matte-lipstick.png",
    isNew: false,
  },
];

function ProductList() {
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        Our Products
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
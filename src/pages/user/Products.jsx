
import { useEffect, useMemo, useState } from "react";
import ProductCard from "../../components/user/ProductCard";
import SearchBar from "../../components/shared/SearchBar";
import Navbar from "../../components/shared/Navbar";
import CategoryFilter from "../../components/user/CategoryFilter";
import Footer from "../../components/shared/Footer";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("default");

  // Fetch all products from JSON
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/data/products.json");

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Sort products
  const sorted = useMemo(() => {
    const list = [...products];

    if (sort === "low") {
      list.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sort === "high") {
      list.sort((a, b) => Number(b.price) - Number(a.price));
    }

    if (sort === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [products, sort]);

  return (
    <div className="min-h-screen bg-slate-50  ">

      {/* Navbar */}
      <Navbar />

      {/* Search Bar */}
      <div className="mx-auto max-w-7xl py-10">
        <SearchBar />
      </div>

      {/* Category Filter */}
      <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <CategoryFilter />
      </div>

      <main className="mx-auto max-w-7xl py-8">

        {/* Page Heading */}
        <h2 className="mb-6 text-3xl font-bold text-pink-600">
          Our Products
        </h2>

        {/* Sorting */}
        <div className="mb-6 flex justify-end">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-pink-500 focus:outline-none"
          >
            <option value="default">Sort by</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>

        {/* Product List */}
        {isLoading ? (
          <p className="py-10 text-center text-gray-500">
            Loading products...
          </p>
        ) : sorted.length === 0 ? (
          <p className="py-20 text-center text-gray-500">
            No products available.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {sorted.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Products;

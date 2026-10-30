
import { useEffect, useMemo, useState } from "react";
import ProductCard from "../../components/user/ProductCard";
import SearchBar from "../../components/shared/SearchBar";
import Navbar from "../../components/shared/Navbar";
import CategoryFilter from "../../components/user/CategoryFilter";
import Footer from "../../components/shared/Footer";
import { useCart } from "../../context/CartContext";
import { CheckCircle } from "lucide-react";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [sort, setSort] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [cartMessage, setCartMessage] = useState("");

  const { addToCart } = useCart();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Fetch products from JSON
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/data/products.json");

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error loading products:", error);
        setError("Unable to load products. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Create categories from JSON
  const categories = useMemo(() => {
    const categoryMap = {};

    products.forEach((product) => {
      if (!product.category) return;

      const categoryName = product.category.trim();
      const categoryId = categoryName.toLowerCase();

      if (!categoryMap[categoryId]) {
        categoryMap[categoryId] = {
          id: categoryId,
          label: categoryName,
          count: 0,
        };
      }

      categoryMap[categoryId].count++;
    });

    return Object.values(categoryMap);
  }, [products]);

  // Filter and sort products
  const displayedProducts = useMemo(() => {
    let list = [...products];

    // Search
    if (search.trim()) {
      list = list.filter((product) =>
        product.name?.toLowerCase().includes(search.trim().toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      list = list.filter(
        (product) =>
          product.category?.trim().toLowerCase() === selectedCategory
      );
    }

    // Sorting
    if (sort === "low") {
      list.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "high") {
      list.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sort === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [products, search, selectedCategory, sort]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, sort]);

  // Pagination calculations
  const totalPages = Math.ceil(
    displayedProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = displayedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Page navigation
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Add product to shared cart
  const handleAddToCart = (product) => {
    addToCart(product);
    setCartMessage(`${product.name} added to your cart!`);

    // Clear the message after a short time
    setTimeout(() => {
      setCartMessage("");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto w-full max-w-[1350px] px-4 py-8 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
            Discover Your Beauty
          </p>

          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
            Our Products
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
            Find the perfect products for your beauty routine.
          </p>
        </div>

        {/* Add to Cart Success Message */}
        {cartMessage && (
          <div
            role="status"
            className="mb-5 flex items-center gap-3 rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
          >
            <CheckCircle size={18} />
            {cartMessage}
          </div>
        )}

        {/* Search */}
        <div className="mb-5">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Categories */}
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onChange={setSelectedCategory}
            totalCount={products.length}
          />
        </div>

        {/* Product Header */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
              {selectedCategory === "all"
                ? "All Products"
                : categories.find(
                    (cat) => cat.id === selectedCategory
                  )?.label || "Products"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {isLoading
                ? "Loading products..."
                : `${displayedProducts.length} products found`}
            </p>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-[#F66B87] sm:w-auto"
          >
            <option value="default">Sort by: Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>
        </div>

        {/* Products */}
        {isLoading ? (
          <div className="py-16 text-center text-sm text-gray-500">
            Loading products...
          </div>
        ) : error ? (
          <div className="py-16 text-center text-sm text-red-500">
            {error}
          </div>
        ) : displayedProducts.length === 0 ? (
          <div className="rounded-xl border border-gray-100 bg-white px-4 py-16 text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              No products found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another search or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
                setSort("default");
              }}
              className="mt-5 rounded-lg bg-[#F66B87] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#e05571]"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">

                <p className="text-sm text-gray-500">
                  Showing {startIndex + 1}–
                  {Math.min(
                    startIndex + productsPerPage,
                    displayedProducts.length
                  )}{" "}
                  of {displayedProducts.length} products
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2">

                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => goToPage(currentPage - 1)}
                    className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:border-[#F66B87] hover:text-[#F66B87] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => goToPage(page)}
                      aria-current={
                        currentPage === page ? "page" : undefined
                      }
                      className={`h-9 w-9 rounded-lg text-sm font-medium transition ${
                        currentPage === page
                          ? "bg-[#F66B87] text-white"
                          : "border border-gray-200 bg-white text-gray-600 hover:border-[#F66B87] hover:text-[#F66B87]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => goToPage(currentPage + 1)}
                    className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:border-[#F66B87] hover:text-[#F66B87] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                  </button>

                </div>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Products;

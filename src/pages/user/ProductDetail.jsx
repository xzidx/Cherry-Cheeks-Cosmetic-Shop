import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ShoppingCart,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

import banner1 from "../../assets/banner.jpg";
import gallery1 from "../../assets/care banner.avif";
import gallery2 from "../../assets/carrrrere.jpeg";
import gallery3 from "../../assets/new 1.jpg";

const CONTAINER = "mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8";

// Reusable section heading
function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
        {label}
      </p>

      <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

// Star rating
function Stars({ value = 0 }) {
  return (
    <div className="flex items-center gap-0.5 text-sm">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={n <= value ? "text-amber-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// Loading and error page
function PageMessage({ message }) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800">
          {message}
        </p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  // Fetch products from JSON
  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      setError("");
      setProduct(null);

      try {
        const response = await fetch("/data/products.json");

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const data = await response.json();

        setProducts(data);

        const selectedProduct = data.find(
          (item) => String(item.id) === String(id)
        );

        if (!selectedProduct) {
          setError("Product not found.");
          return;
        }

        setProduct(selectedProduct);
      } catch (err) {
        console.error("Error loading products:", err);
        setError("Unable to load product details.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [id]);

  // Reset image and quantity when product changes
  useEffect(() => {
    setActiveImage(0);
    setQty(1);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <PageMessage message="Loading product details..." />
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <PageMessage message={error || "Product not found."} />
        <Footer />
      </div>
    );
  }

  // Product images
  const images = product.images?.length
    ? product.images
    : product.image
      ? [product.image]
      : [gallery1, gallery2, gallery3];

  const price = Number(product.price) || 0;
  const total = price * qty;

  // Related products
  const relatedProducts = products
    .filter((item) => String(item.id) !== String(product.id))
    .slice(0, 5);

  const decrease = () => {
    setQty((q) => Math.max(1, q - 1));
  };

  const increase = () => {
    setQty((q) => q + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className={`${CONTAINER} py-8`}>

        {/* Banner */}
        <section className="mb-10 overflow-hidden rounded-2xl border border-gray-100 bg-white">
          <div className="relative h-40 sm:h-52 md:h-60">
            <img
              src={banner1}
              alt="Beauty and cosmetics collection"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Product Detail */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Product Gallery */}
          <div className="min-w-0">

            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-3">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="aspect-square w-full rounded-xl bg-slate-50 object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {images.slice(0, 3).map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`overflow-hidden rounded-xl border bg-white p-1 transition ${
                    activeImage === i
                      ? "border-[#F66B87] ring-2 ring-pink-100"
                      : "border-gray-100 hover:border-pink-300"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="aspect-square w-full rounded-lg object-cover"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* Product Information */}
          <div className="min-w-0 rounded-2xl border border-gray-100 bg-white p-5 sm:p-8">

            <p className="text-sm font-medium uppercase tracking-wider text-[#F66B87]">
              {product.category}
            </p>

            <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-4 text-3xl font-bold text-[#F66B87]">
              ${price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <Stars value={Number(product.rating) || 0} />

              <span className="text-sm text-gray-500">
                ({product.reviews || 0} reviews)
              </span>
            </div>

            <div className="my-6 border-t border-gray-100" />

            {/* Short Description */}
            <p className="text-sm leading-7 text-gray-500">
              {product.shortDescription ||
                product.description ||
                "Discover this product from Cherry Cheeks."}
            </p>

            {/* Shade */}
            {product.shade && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-gray-800">
                  Shade
                </p>

                <span className="inline-block rounded-lg border border-pink-100 bg-pink-50 px-4 py-2 text-sm font-medium text-[#F66B87]">
                  {product.shade}
                </span>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-gray-800">
                Quantity
              </p>

              <div className="inline-flex items-center overflow-hidden rounded-lg border border-gray-200">
                <button
                  type="button"
                  onClick={decrease}
                  aria-label="Decrease quantity"
                  className="px-4 py-2.5 text-gray-600 transition hover:bg-pink-50 hover:text-[#F66B87]"
                >
                  −
                </button>

                <span className="min-w-12 border-x border-gray-200 px-4 py-2.5 text-center text-sm font-semibold text-gray-800">
                  {qty}
                </span>

                <button
                  type="button"
                  onClick={increase}
                  aria-label="Increase quantity"
                  className="px-4 py-2.5 text-gray-600 transition hover:bg-pink-50 hover:text-[#F66B87]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="mt-6 flex items-center justify-between rounded-xl border border-pink-100 bg-pink-50 p-4">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Total Price
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {qty} × ${price.toFixed(2)}
                </p>
              </div>

              <p className="text-2xl font-bold text-[#F66B87]">
                ${total.toFixed(2)}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F66B87] py-3.5 text-sm font-semibold text-white transition hover:bg-[#e05571]"
              >
                <ShoppingCart size={18} />
                Add to Cart · ${total.toFixed(2)}
              </button>

              <button
                type="button"
                className="w-full rounded-lg border border-[#F66B87] bg-white py-3.5 text-sm font-semibold text-[#F66B87] transition hover:bg-pink-50"
              >
                Buy Now
              </button>

            </div>

            {/* Service Information */}
            <div className="mt-7 grid grid-cols-1 gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">

              <div className="flex items-center gap-2">
                <Truck size={20} className="shrink-0 text-[#F66B87]" />

                <span className="text-xs text-gray-500">
                  Delivery Available
                </span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="shrink-0 text-[#F66B87]" />

                <span className="text-xs text-gray-500">
                  Quality Products
                </span>
              </div>

              <div className="flex items-center gap-2">
                <RotateCcw size={20} className="shrink-0 text-[#F66B87]" />

                <span className="text-xs text-gray-500">
                  Customer Support
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* Product Description */}
        <section className="mt-12 rounded-2xl border border-gray-100 bg-white p-5 sm:p-8">

          <SectionHeading
            label="Product Information"
            title="Product Description"
            description="Learn more about this product and what makes it special."
          />

          <p className="text-sm leading-7 text-gray-500 sm:text-base">
            {product.description ||
              product.shortDescription ||
              "No product description available."}
          </p>

          {/* Features */}
          {product.features?.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-4 text-base font-bold text-gray-800">
                Key Features
              </h3>

              <ul className="grid gap-3 sm:grid-cols-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 text-sm text-gray-600"
                  >
                    <span className="font-bold text-[#F66B87]">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Highlights */}
          {product.highlights?.length > 0 && (
            <div className="mt-7 rounded-xl border border-pink-100 bg-pink-50 p-5">
              <h3 className="mb-3 text-base font-bold text-gray-800">
                Why You'll Love It
              </h3>

              <ul className="space-y-3">
                {product.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#F66B87]">
                      ✓
                    </span>

                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </section>

        {/* Related Products */}
        <section className="mt-14 mb-8">

          <SectionHeading
            label="Discover More"
            title="You May Also Like"
            description="Explore more products from our collection."
          />

          {relatedProducts.length === 0 ? (
            <p className="rounded-xl border border-gray-100 bg-white p-8 text-center text-sm text-gray-500">
              No related products available.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

              {relatedProducts.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Product Image */}
                  <div className="overflow-hidden bg-slate-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Product Information */}
                  <div className="p-3 sm:p-4">

                    <p className="text-xs text-gray-400">
                      {item.category}
                    </p>

                    <h3 className="mt-1 line-clamp-2 min-h-10 text-sm font-semibold text-gray-800">
                      {item.name}
                    </h3>

                    <div className="mt-2">
                      <Stars value={Number(item.rating) || 0} />
                    </div>

                    <p className="mt-2 text-base font-bold text-[#F66B87]">
                      ${(Number(item.price) || 0).toFixed(2)}
                    </p>

                    <button
                      type="button"
                      className="mt-3 w-full rounded-lg bg-pink-50 py-2 text-xs font-semibold text-[#F66B87] transition hover:bg-[#F66B87] hover:text-white"
                    >
                      View Product
                    </button>

                  </div>
                </article>
              ))}

            </div>
          )}

        </section>

      </main>

      <Footer />
    </div>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

import banner1 from "../../assets/banner.jpg";
import gallery1 from "../../assets/care banner.avif";
import gallery2 from "../../assets/carrrrere.jpeg";
import gallery3 from "../../assets/new 1.jpg";

const CONTAINER = "mx-auto w-full max-w-7xl px-4";

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
      <div className="py-20 text-center text-gray-500">
        Loading product details...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-gray-500">
          {error || "Product not found."}
        </p>
      </div>
    );
  }

  // Use product gallery if available, otherwise use the main image
  const images = product.images?.length
    ? product.images
    : product.image
      ? [product.image]
      : [gallery1, gallery2, gallery3];

  const price = Number(product.price) || 0;
  const total = price * qty;

  // Get related products from the same JSON file
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
    <>
      <Navbar />

      

      {/* Product Section */}
      <main className={`${CONTAINER} py-10`}>
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* Product Gallery */}
          <div className="min-w-0">
            <img
              src={images[activeImage]}
              alt={product.name}
              className="aspect-square w-full rounded-2xl bg-pink-50 object-cover"
            />

            <div className="mt-4 grid grid-cols-3 gap-3">
              {images.slice(0, 3).map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`overflow-hidden rounded-xl bg-pink-50 transition ${
                    activeImage === i
                      ? "ring-2 ring-pink-500 ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="aspect-square w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-pink-500">
              {product.category}
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-2 text-2xl font-bold text-pink-500">
              ${price.toFixed(2)}
            </p>

            <div className="mt-2 flex items-center gap-2">
              <Stars value={Number(product.rating) || 0} />
              <span className="text-xs text-gray-500">
                ({product.reviews || 0} reviews)
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {product.shortDescription ||
                product.description ||
                "Discover this product from Cherry Cheeks."}
            </p>

            {/* Shade - only show when available */}
            {product.shade && (
              <div className="mt-5">
                <p className="mb-2 text-sm font-medium text-gray-800">
                  Shade
                </p>

                <span className="inline-block rounded-md bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">
                  {product.shade}
                </span>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-5">
              <p className="mb-2 text-sm font-medium text-gray-800">
                Quantity
              </p>

              <div className="inline-flex items-center rounded-lg border border-gray-300">
                <button
                  type="button"
                  onClick={decrease}
                  aria-label="Decrease quantity"
                  className="px-3 py-1.5 text-gray-600 hover:bg-gray-50"
                >
                  −
                </button>

                <span className="min-w-10 px-3 text-center text-sm font-medium">
                  {qty}
                </span>

                <button
                  type="button"
                  onClick={increase}
                  aria-label="Increase quantity"
                  className="px-3 py-1.5 text-gray-600 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="mt-5 flex items-center justify-between rounded-xl bg-pink-50 px-4 py-3">
              <div>
                <p className="text-xs text-gray-500">Total</p>
                <p className="text-xs text-gray-500">
                  {qty} × ${price.toFixed(2)}
                </p>
              </div>

              <p className="text-2xl font-bold text-pink-600">
                ${total.toFixed(2)}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-3">
              <button
                type="button"
                className="w-full rounded-lg bg-pink-500 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
              >
                Add to Cart · ${total.toFixed(2)}
              </button>

              <button
                type="button"
                className="w-full rounded-lg border border-pink-500 py-3 text-sm font-semibold text-pink-500 transition hover:bg-pink-50"
              >
                Buy Now
              </button>
            </div>

            {/* Description */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h2 className="text-base font-bold text-gray-900">
                Description
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {product.description ||
                  product.shortDescription ||
                  "No product description available."}
              </p>

              {product.features?.length > 0 && (
                <>
                  <p className="mt-3 text-sm font-medium text-gray-800">
                    Key features
                  </p>

                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Highlights */}
            {product.highlights?.length > 0 && (
              <div className="mt-6 rounded-lg border border-gray-100 bg-gray-50 p-4">
                <h2 className="mb-2 text-sm font-bold text-gray-900">
                  Why you'll love it
                </h2>

                <ul className="space-y-2">
                  {product.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="text-pink-500">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            You may also like
          </h2>

          {relatedProducts.length === 0 ? (
            <p className="text-sm text-gray-500">
              No related products available.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {relatedProducts.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-square w-full object-cover"
                  />

                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {item.category}
                    </p>

                    <Stars value={Number(item.rating) || 0} />

                    <p className="mt-1 text-sm font-bold text-pink-500">
                      ${Number(item.price).toFixed(2)}
                    </p>

                    <button
                      type="button"
                      className="mt-2 w-full rounded-md bg-pink-500 py-1.5 text-xs font-medium text-white transition hover:bg-pink-600"
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
    </>
  );
}

import { useState } from "react";
import banner1 from "../../assets/banner.jpeg";

import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

// Same container for the banner and the product section, so their edges line up
const CONTAINER = "mx-auto w-full max-w-7xl px-4";

// TODO: ជំនួសដោយទិន្នន័យពិត (API) ពេលក្រោយ
const PRODUCT = {
  id: 1,
  category: "Beauty & Cosmetics",
  name: "Lan Come Lipstick",
  price: 39.0,
  rating: 4,
  reviews: 1,
  shortDescription:
    "Long-lasting lipstick with a rich, creamy finish that glides on smoothly and keeps lips comfortable all day.",
  shade: "Rosy Red",
  images: [
    "src/assets/care banner.avif",
    "src/assets/carrrrere.jpeg",
    "src/assets/new 1.jpg",
  ],
  description:
    "This lipstick delivers bold, vibrant colour with a comfortable, creamy formula. Its smooth texture glides on evenly and stays put for hours without drying out your lips.",
  features: [
    "Rich, long-lasting colour",
    "Creamy, lightweight texture",
    "Hydrating formula",
    "Smudge-resistant finish",
    "Suitable for all skin tones",
    "Cruelty-free",
  ],
  highlights: ["Ready to ship", "30-day easy return", "100% authentic product"],
};

const RELATED = [
  { id: 11, name: "Lan Come Lipstick", category: "Lipstick", price: 30.0, oldPrice: 39.0, rating: 4, image: "https://placehold.co/400x400/fce7f3/be185d?text=Lipstick" },
  { id: 12, name: "Lan Come Lipstick", category: "Lipstick", price: 32.0, oldPrice: 39.0, rating: 5, image: "https://placehold.co/400x400/fbcfe8/be185d?text=Lipstick" },
  { id: 13, name: "Lan Come Lipstick", category: "Lipstick", price: 33.0, oldPrice: 42.0, rating: 4, image: "https://placehold.co/400x400/f9a8d4/831843?text=Lipstick" },
  { id: 14, name: "Lan Come Lipstick", category: "Lipstick", price: 35.0, oldPrice: 45.0, rating: 4, image: "https://placehold.co/400x400/fce7f3/be185d?text=Lipstick" },
  { id: 15, name: "Lan Come Lipstick", category: "Lipstick", price: 36.0, oldPrice: 45.0, rating: 5, image: "https://placehold.co/400x400/fbcfe8/be185d?text=Lipstick" },
];

function Stars({ value }) {
  return (
    <div className="flex items-center gap-0.5 text-sm" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= value ? "text-amber-400" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ProductDetail() {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  const decrease = () => setQty((q) => Math.max(1, q - 1));
  const increase = () => setQty((q) => q + 1);

  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className={`${CONTAINER} pt-4`}>
        <img
          src={banner1}
          alt="Beauty and cosmetics banner"
          className="h-64 w-full rounded-2xl object-cover sm:h-80"
        />
      </div>

      {/* Product section */}
      <main className={`${CONTAINER} py-10`}>
        <section className="grid gap-10 md:grid-cols-2">
          {/* Gallery */}
          <div>
            <img
              src={PRODUCT.images[activeImage]}
              alt={PRODUCT.name}
              className="aspect-square w-full rounded-2xl bg-pink-50 object-cover"
            />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {PRODUCT.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`overflow-hidden rounded-xl bg-pink-50 transition ${
                    activeImage === i
                      ? "ring-2 ring-pink-500 ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-pink-500">
              {PRODUCT.category}
            </p>
            <h1 className="mt-1 text-3xl font-bold text-gray-900">{PRODUCT.name}</h1>
            <p className="mt-2 text-2xl font-bold text-pink-500">${PRODUCT.price.toFixed(2)}</p>

            <div className="mt-2 flex items-center gap-2">
              <Stars value={PRODUCT.rating} />
              <span className="text-xs text-gray-500">({PRODUCT.reviews} review)</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">{PRODUCT.shortDescription}</p>

            {/* Shade */}
            <div className="mt-5">
              <p className="mb-2 text-sm font-medium text-gray-800">Shade</p>
              <span className="inline-block rounded-md bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">
                {PRODUCT.shade}
              </span>
            </div>

            {/* Quantity */}
            <div className="mt-5">
              <p className="mb-2 text-sm font-medium text-gray-800">Quantity</p>
              <div className="inline-flex items-center rounded-lg border border-gray-300">
                <button
                  type="button"
                  onClick={decrease}
                  aria-label="Decrease quantity"
                  className="px-3 py-1.5 text-gray-600 hover:bg-gray-50"
                >
                  −
                </button>
                <span className="min-w-10 px-3 text-center text-sm font-medium">{qty}</span>
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

            {/* Actions */}
            <div className="mt-6 space-y-3">
              <button
                type="button"
                className="w-full rounded-lg bg-pink-500 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
              >
                Add to Cart
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
              <h2 className="text-base font-bold text-gray-900">Description</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{PRODUCT.description}</p>
              <p className="mt-3 text-sm font-medium text-gray-800">Key features</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-gray-600">
                {PRODUCT.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div className="mt-6 rounded-lg border border-gray-100 bg-gray-50 p-4">
              <h2 className="mb-2 text-sm font-bold text-gray-900">Why you'll love it</h2>
              <ul className="space-y-2">
                {PRODUCT.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-pink-500">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* You may also like */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-gray-900">You may also like</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {RELATED.map((p) => (
              <article
                key={p.id}
                className="relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <span className="absolute left-2 top-2 rounded bg-pink-500 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                  Sale
                </span>
                <img src={p.image} alt={p.name} className="aspect-square w-full object-cover" />
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-800">{p.name}</h3>
                  <p className="text-xs text-gray-500">{p.category}</p>
                  <Stars value={p.rating} />
                  <p className="mt-1 text-sm">
                    <span className="font-bold text-pink-500">${p.price.toFixed(2)}</span>{" "}
                    <span className="text-xs text-gray-400 line-through">${p.oldPrice.toFixed(2)}</span>
                  </p>
                  <button
                    type="button"
                    className="mt-2 w-full rounded-md bg-pink-500 py-1.5 text-xs font-medium text-white transition hover:bg-pink-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
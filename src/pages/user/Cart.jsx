
import React, { useState } from "react";
import { ShoppingBag, Sparkles, Tag } from "lucide-react";
import { Link } from "react-router-dom";

import CartItem from "../../components/user/CartItem";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import { useCart } from "../../context/CartContext";


const PROMO_CODES = {
  GLOW10: 0.1,
  BEAUTY20: 0.2,
};

function OrderSummary({ items = [] }) {
  const [promo, setPromo] = useState("");
  const [discountRate, setDiscountRate] = useState(0);
  const [message, setMessage] = useState("");

  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const discount = subtotal * discountRate;
  const shipping = subtotal === 0 || subtotal >= 50 ? 0 : 4.99;
  const total = subtotal - discount + shipping;

  const applyPromo = () => {
    const code = promo.trim().toUpperCase();

    if (!code) {
      setDiscountRate(0);
      setMessage("Please enter a promo code.");
      return;
    }

    if (PROMO_CODES[code]) {
      setDiscountRate(PROMO_CODES[code]);
      setMessage(
        `Promo code applied! You saved ${PROMO_CODES[code] * 100}%.`
      );
    } else {
      setDiscountRate(0);
      setMessage("Invalid promo code. Please try again.");
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="mb-5 border-b border-gray-100 pb-4 text-lg font-semibold text-gray-800 sm:text-xl">
        Order Summary
      </h2>

      {/* Price Details */}
      <div className="space-y-4 text-sm text-gray-500 sm:text-base">
        <div className="flex justify-between gap-4">
          <span>Subtotal</span>
          <span className="font-semibold text-gray-800">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between gap-4 text-emerald-600">
            <span>Discount ({discountRate * 100}%)</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between gap-4">
          <span>Shipping</span>
          <span className="font-semibold text-emerald-600">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        {subtotal > 0 && subtotal < 50 && (
          <p className="text-xs leading-5 text-gray-500">
            Add ${(50 - subtotal).toFixed(2)} more to get free shipping.
          </p>
        )}

        <div className="flex items-baseline justify-between gap-4 border-t border-gray-100 pt-4">
          <span className="text-base font-semibold text-gray-800">
            Total
          </span>
          <span className="text-2xl font-bold text-[#F66B87]">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Promo Code */}
      <div className="mt-6">
        <label
          htmlFor="promo"
          className="mb-2 block text-sm font-semibold text-gray-800"
        >
          Promo Code
        </label>

        <div className="flex gap-2">
          <div className="relative min-w-0 flex-1">
            <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              id="promo"
              type="text"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") applyPromo();
              }}
              placeholder="Enter code"
              className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-9 pr-3 text-sm text-gray-800 outline-none transition focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]"
            />
          </div>

          <button
            type="button"
            onClick={applyPromo}
            className="shrink-0 rounded-lg border border-[#F66B87] px-4 py-3 text-sm font-medium text-[#F66B87] transition hover:bg-[#F66B87] hover:text-white"
          >
            Apply
          </button>
        </div>

        {message && (
          <p
            className={`mt-2 text-xs ${
              discountRate > 0 ? "text-emerald-600" : "text-rose-600"
            }`}
            role="status"
          >
            {message}
          </p>
        )}

        <p className="mt-2 text-xs text-gray-400">
          Try GLOW10 or BEAUTY20.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 space-y-3">
        <button
          type="button"
          disabled={items.length === 0}
          onClick={() => navigate("/payment")}
          className="w-full rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e05571] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Proceed to Checkout
        </button>

        <Link
          to="/products"
          className="block w-full rounded-lg border border-gray-200 bg-white px-6 py-3 text-center text-sm font-medium text-gray-700 transition hover:border-[#F66B87] hover:bg-[#FFF5F6] hover:text-[#F66B87]"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500">
        <Sparkles className="h-4 w-4 text-[#F66B87]" />
        <span>Free returns within 30 days</span>
      </div>
    </div>
  );
}

function Cart() {
  const {
    cartItems: items,
    updateQuantity,
    removeFromCart,
    totalCount,
  } = useCart();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 py-8 sm:py-10">
        <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8">

          {/* Page Heading */}
          <section className="mb-8">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
              Your Shopping Bag
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
                My Cart
              </h1>

              <span className="rounded-lg bg-[#FFF5F6] px-4 py-2 text-sm font-medium text-[#F66B87]">
                {totalCount} {totalCount === 1 ? "Item" : "Items"}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
              Review your favorite products before placing your order.
            </p>
          </section>

          {/* Cart Content */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">

            {/* Cart Items */}
            <section className="min-w-0 lg:col-span-7">
              <h2 className="mb-5 text-lg font-semibold text-gray-800 sm:text-xl">
                Cart Items
              </h2>

              {items.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-gray-200 bg-white px-5 py-16 text-center">
                  <ShoppingBag className="mx-auto mb-4 h-12 w-12 text-[#F66B87]" />

                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Your cart is empty
                  </h3>

                  <p className="mb-6 text-sm leading-6 text-gray-500">
                    You haven't added any products to your cart yet.
                  </p>

                  <Link
                    to="/products"
                    className="inline-block rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e05571]"
                  >
                    Explore Products
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      imageSrc={item.imageSrc}
                      title={item.title}
                      variant={item.variant}
                      price={`$${(
                        item.unitPrice * item.quantity
                      ).toFixed(2)}`}
                      quantity={item.quantity}
                      onQuantityChange={(delta) =>
                        updateQuantity(item.id, delta)
                      }
                      onRemove={() => removeFromCart(item.id)}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* Order Summary */}
            <aside className="min-w-0 lg:col-span-5">
              <OrderSummary items={items} />
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Cart;

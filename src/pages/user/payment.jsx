
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  QrCode,
  Truck,
  ShieldCheck,
  Lock,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

import Navbar from "../../components/shared/Navbar";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
 
  const [selectedPayment, setSelectedPayment] = useState("card");

  const { cartItems } = useCart();

  // Calculate order summary
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const shipping = subtotal === 0 || subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  const totalCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 px-4 pt-8 pb-20 text-slate-800 sm:px-6 lg:px-8">

        {/* HEADER SECTION */}
        <div className="mx-auto mb-10 max-w-7xl">
          <div className="mb-2 flex items-center space-x-2">
            <span className="text-base tracking-widest text-[#F66B87] uppercase">
              Checkout
            </span>
          </div>

          <h1 className="mb-2 text-3xl font-bold text-slate-800 md:text-4xl">
            Complete Your Purchase
          </h1>

          <p className="text-sm text-slate-500">
            Fill in your details and choose your payment method to complete
            your order.
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-3">

          {/* LEFT FORM COLUMN */}
          <div className="space-y-8 lg:col-span-2">

            {/* STEP PROGRESS BAR */}
            <div className="mx-auto flex max-w-6xl items-center justify-between pb-4 text-xs font-medium text-slate-500">
              <div className="flex items-center space-x-2 font-bold text-[#F66B87]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F66B87] text-xs text-white">
                  1
                </span>
                <span>Contact Information</span>
              </div>

              <div className="mx-4 h-px flex-1 bg-slate-200"></div>

              <div className="flex items-center space-x-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-600">
                  2
                </span>
                <span>Shipping Address</span>
              </div>

              <div className="mx-4 h-px flex-1 bg-slate-200"></div>

              <div className="flex items-center space-x-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-600">
                  3
                </span>
                <span>Payment Method</span>
              </div>
            </div>

            {/* SECTION 1: CONTACT INFORMATION */}
            <div className="space-y-4 rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">

              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-[#F66B87]">
                  <User size={20} />
                </div>

                <div>
                  <h2 className="text-base font-bold text-slate-800">
                    1. Contact Information
                  </h2>
                  <p className="text-xs text-slate-400">
                    Please enter your contact details.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Full Name *
                  </label>

                  <div className="relative">
                    <User
                      size={16}
                      className="absolute top-1/2 left-3.5 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-10 text-sm transition focus:border-[#F66B87] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Email Address *
                  </label>

                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute top-1/2 left-3.5 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-10 text-sm transition focus:border-[#F66B87] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600">
                  Phone Number *
                </label>

                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute top-1/2 left-3.5 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    placeholder="+855 12 345 678"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-10 text-sm transition focus:border-[#F66B87] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: SHIPPING ADDRESS */}
            <div className="space-y-4 rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">

              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-[#F66B87]">
                  <Truck size={20} />
                </div>

                <div>
                  <h2 className="text-base font-bold text-slate-800">
                    2. Shipping Address
                  </h2>
                  <p className="text-xs text-slate-400">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Full Name *
                  </label>

                  <div className="relative">
                    <User
                      size={16}
                      className="absolute top-1/2 left-3.5 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-10 text-sm transition focus:border-[#F66B87] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Phone Number *
                  </label>

                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute top-1/2 left-3.5 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      placeholder="+855 12 345 678"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-10 text-sm transition focus:border-[#F66B87] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600">
                  Address *
                </label>

                <div className="relative">
                  <MapPin
                    size={16}
                    className="absolute top-1/2 left-3.5 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Street address, apartment, etc."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-10 text-sm transition focus:border-[#F66B87] focus:outline-none"
                  />
                </div>
              </div>

              {/* Country / Province / Postal Code */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                {/* Country */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Country *
                  </label>

                  <div className="relative">
                    <select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-8 pl-4 text-sm text-slate-600 transition focus:border-[#F66B87] focus:outline-none">
                      <option value="">Select country</option>
                      <option value="cambodia">Cambodia</option>
                      <option value="korea">South Korea</option>
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                </div>

                {/* Province */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Province *
                  </label>

                  <div className="relative">
                    <select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-8 pl-4 text-sm text-slate-600 transition focus:border-[#F66B87] focus:outline-none">
                      <option value="">Select province</option>
                      <option value="phnom-penh">Phnom Penh</option>
                      <option value="banteay-meanchey">Banteay Meanchey</option>
                      <option value="battambang">Battambang</option>
                      <option value="siem-reap">Siem Reap</option>
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                </div>

                {/* Postal Code */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Postal Code *
                  </label>

                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute top-1/2 left-3.5 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      placeholder="e.g. 12000"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-10 text-sm transition focus:border-[#F66B87] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: PAYMENT METHOD */}
            <div className="space-y-4 rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">

              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-[#F66B87]">
                  <CreditCard size={20} />
                </div>

                <div>
                  <h2 className="text-base font-bold text-slate-800">
                    3. Payment Method
                  </h2>
                  <p className="text-xs text-slate-400">
                    Choose your preferred payment method.
                  </p>
                </div>
              </div>

              {/* Payment Select Cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">

                {/* Credit Card */}
                <div
                  onClick={() => setSelectedPayment("card")}
                  className={`flex h-28 cursor-pointer flex-col justify-between rounded-xl border p-3 transition ${
                    selectedPayment === "card"
                      ? "border-[#F66B87] bg-pink-50/20 ring-1 ring-[#F66B87]"
                      : "border-slate-200 bg-white hover:border-pink-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <input
                      type="radio"
                      checked={selectedPayment === "card"}
                      readOnly
                      className="accent-pink-500"
                    />
                    <CreditCard size={18} className="text-[#F66B87]" />
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-slate-800">
                      Credit / Debit Card
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      Visa, Mastercard, JCB
                    </span>
                  </div>
                </div>

                {/* KHQR */}
                <div
                  onClick={() => setSelectedPayment("khqr")}
                  className={`flex h-28 cursor-pointer flex-col justify-between rounded-xl border p-3 transition ${
                    selectedPayment === "khqr"
                      ? "border-[#F66B87] bg-pink-50/20 ring-1 ring-[#F66B87]"
                      : "border-slate-200 bg-white hover:border-pink-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <input
                      type="radio"
                      checked={selectedPayment === "khqr"}
                      readOnly
                      className="accent-pink-500"
                    />
                    <QrCode size={18} className="text-slate-800" />
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-slate-800">
                      KHQR
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      Scan to pay with KHQR
                    </span>
                  </div>
                </div>

                {/* ABA Pay */}
                <div
                  onClick={() => setSelectedPayment("aba")}
                  className={`flex h-28 cursor-pointer flex-col justify-between rounded-xl border p-3 transition ${
                    selectedPayment === "aba"
                      ? "border-[#F66B87] bg-pink-50/20 ring-1 ring-[#F66B87]"
                      : "border-slate-200 bg-white hover:border-pink-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <input
                      type="radio"
                      checked={selectedPayment === "aba"}
                      readOnly
                      className="accent-pink-500"
                    />
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-[9px] font-bold text-white">
                      ABA
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-slate-800">
                      ABA Pay
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      Pay with ABA Mobile
                    </span>
                  </div>
                </div>

                {/* Cash on Delivery */}
                <div
                  onClick={() => setSelectedPayment("cod")}
                  className={`flex h-28 cursor-pointer flex-col justify-between rounded-xl border p-3 transition ${
                    selectedPayment === "cod"
                      ? "border-[#F66B87] bg-pink-50/20 ring-1 ring-[#F66B87]"
                      : "border-slate-200 bg-white hover:border-pink-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <input
                      type="radio"
                      checked={selectedPayment === "cod"}
                      readOnly
                      className="accent-pink-500"
                    />
                    <Truck size={18} className="text-[#F66B87]" />
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-slate-800">
                      Cash on Delivery
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      Pay when you receive
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                disabled={cartItems.length === 0}
                className="mt-4 flex w-full cursor-pointer items-center justify-center space-x-2 rounded-xl bg-[#F66B87] py-3.5 text-sm font-medium text-white shadow-lg shadow-pink-200 transition-all hover:bg-[#e05571] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Lock size={16} />
                <span>Continue to Payment</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY */}
          <div className="sticky top-28 space-y-6 rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">

            <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-[#F66B87]">
                <ShoppingBag size={18} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  Order Summary
                </h3>

                <span className="text-xs text-slate-400">
                  {totalCount} {totalCount === 1 ? "Item" : "Items"}
                </span>
              </div>
            </div>

            {/* Items List */}
            <div className="space-y-4">
              {cartItems.length === 0 ? (
                <p className="py-4 text-center text-sm text-slate-400">
                  Your cart is empty.
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex min-w-0 items-center space-x-3">
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="h-12 w-12 rounded-lg bg-pink-50 object-cover"
                      />

                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-slate-800">
                          {item.title}
                        </h4>

                        <span className="block text-[11px] text-slate-400">
                          {item.variant}
                        </span>

                        <span className="text-[11px] text-slate-400">
                          Qty: {item.quantity}
                        </span>
                      </div>
                    </div>

                    <span className="shrink-0 text-xs font-bold text-slate-800">
                      $
                      {(
                        item.unitPrice * item.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Price Calculations */}
            <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              {subtotal > 0 && subtotal < 50 && (
                <p className="text-[11px] text-slate-400">
                  Add ${(50 - subtotal).toFixed(2)} more to get free shipping.
                </p>
              )}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-sm font-bold text-slate-800">
                Total
              </span>

              <span className="text-xl font-bold text-[#F66B87]">
                ${total.toFixed(2)}
              </span>
            </div>

            {/* Security note */}
            <div className="flex items-center space-x-2 rounded-xl bg-slate-50 p-3 text-[11px] text-slate-400">
              <ShieldCheck
                size={16}
                className="shrink-0 text-[#F66B87]"
              />
              <span>
                Your payment information is secure and protected.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


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
import Footer from "../../components/shared/Footer";

import faceCream from "../../assets/images/p2.jpg";
import lipstick from "../../assets/images/p1 (Copy).png";

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-800 outline-none transition focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]";

function SectionHeading({ label, title, description }) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
        {label}
      </h2>

      <h1 className="mb-4 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
        {title}
      </h1>

      {description && (
        <p className="text-sm leading-6 text-gray-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function InputField({ label, icon: Icon, placeholder, type = "text" }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

        <input
          type={type}
          placeholder={placeholder}
          required
          className={inputClass}
        />
      </div>
    </div>
  );
}

function FormSection({ icon: Icon, title, description, children }) {
  return (
    <section className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF5F6] text-[#F66B87]">
          <Icon size={21} />
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900 sm:text-lg">
            {title}
          </h2>

          <p className="text-xs leading-5 text-gray-500 sm:text-sm">
            {description}
          </p>
        </div>
      </div>

      {children}
    </section>
  );
}

const paymentMethods = [
  {
    id: "card",
    title: "Credit / Debit Card",
    description: "Visa, Mastercard, JCB",
    icon: CreditCard,
  },
  {
    id: "khqr",
    title: "KHQR",
    description: "Scan to pay with KHQR",
    icon: QrCode,
  },
  {
    id: "aba",
    title: "ABA Pay",
    description: "Pay with ABA Mobile",
    icon: CreditCard,
  },
  {
    id: "cod",
    title: "Cash on Delivery",
    description: "Pay when you receive",
    icon: Truck,
  },
];

const orderItems = [
  {
    id: 1,
    name: "Face Cream",
    description: "Hydrating Facial Cream",
    price: 15,
    quantity: 1,
    image: faceCream,
  },
  {
    id: 2,
    name: "Lipstick",
    description: "Matte Lipstick - Pink",
    price: 20,
    quantity: 1,
    image: lipstick,
  },
];

function OrderSummary() {
  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 50 ? 0 : 2;
  const total = subtotal + shipping;

  const totalItems = orderItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <aside className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-24">
      <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF5F6] text-[#F66B87]">
            <ShoppingBag size={19} />
          </div>

          <h2 className="text-lg font-bold text-gray-900">
            Order Summary
          </h2>
        </div>

        <span className="rounded-lg bg-[#FFF5F6] px-3 py-1 text-xs font-semibold text-[#F66B87]">
          {totalItems} Items
        </span>
      </div>

      <div className="space-y-5">
        {orderItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 rounded-lg bg-[#FFF5F6] object-cover"
            />

            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-gray-900">
                {item.name}
              </h3>

              <p className="text-xs text-gray-500">
                {item.description}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Qty: {item.quantity}
              </p>
            </div>

            <span className="text-sm font-semibold text-gray-900">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3 border-t border-gray-100 pt-5 text-sm">
        <div className="flex justify-between text-gray-500">
          <span>Subtotal</span>
          <span className="font-semibold text-gray-900">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-gray-500">
          <span>Shipping</span>
          <span className="font-semibold text-gray-900">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="font-bold text-gray-900">Total</span>

          <span className="text-2xl font-bold text-[#F66B87]">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-lg bg-[#FFF5F6] p-3 text-xs leading-5 text-gray-500">
        <ShieldCheck className="h-5 w-5 shrink-0 text-[#F66B87]" />
        <span>
          Your payment information is secure and protected.
        </span>
      </div>
    </aside>
  );
}

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState("card");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`You selected ${selectedPayment} as your payment method.`);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white py-8">
        <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8">

          {/* PAGE HEADING */}
          <section className="mb-10">
            <SectionHeading
              label="SECURE CHECKOUT"
              title="Complete Your Purchase"
              description="Fill in your details and choose your payment method to complete your order."
            />
          </section>

          {/* CHECKOUT PROGRESS */}
          <div className="mb-8 flex items-center justify-between gap-2 overflow-x-auto rounded-2xl bg-[#FFF5F6] p-4 sm:p-5">
            {[
              "Contact Information",
              "Shipping Address",
              "Payment Method",
            ].map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F66B87] text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <span className="text-xs font-semibold text-gray-700 sm:text-sm">
                    {step}
                  </span>
                </div>

                {index !== 2 && (
                  <div className="h-px min-w-5 flex-1 bg-pink-200" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* MAIN CONTENT */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

              {/* LEFT COLUMN */}
              <div className="space-y-6 lg:col-span-7">

                {/* CONTACT INFORMATION */}
                <FormSection
                  icon={User}
                  title="1. Contact Information"
                  description="Please enter your contact details."
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <InputField
                      label="Full Name *"
                      icon={User}
                      placeholder="Enter your full name"
                    />

                    <InputField
                      label="Email Address *"
                      icon={Mail}
                      placeholder="example@email.com"
                      type="email"
                    />

                    <div className="sm:col-span-2">
                      <InputField
                        label="Phone Number *"
                        icon={Phone}
                        placeholder="+855 12 345 678"
                        type="tel"
                      />
                    </div>
                  </div>
                </FormSection>

                {/* SHIPPING ADDRESS */}
                <FormSection
                  icon={Truck}
                  title="2. Shipping Address"
                  description="Where should we deliver your order?"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <InputField
                      label="Full Name *"
                      icon={User}
                      placeholder="Enter your full name"
                    />

                    <InputField
                      label="Phone Number *"
                      icon={Phone}
                      placeholder="+855 12 345 678"
                      type="tel"
                    />

                    <div className="sm:col-span-2">
                      <InputField
                        label="Street Address *"
                        icon={MapPin}
                        placeholder="Street address, apartment, etc."
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Country *
                      </label>

                      <div className="relative">
                        <select
                          required
                          className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-gray-700 outline-none focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]"
                        >
                          <option value="">Select country</option>
                          <option value="Cambodia">Cambodia</option>
                        </select>

                        <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Province *
                      </label>

                      <div className="relative">
                        <select
                          required
                          className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-gray-700 outline-none focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]"
                        >
                          <option value="">Select province</option>
                          <option value="Phnom Penh">Phnom Penh</option>
                          <option value="Banteay Meanchey">Banteay Meanchey</option>
                          <option value="Battambang">Battambang</option>
                          <option value="Kampong Cham">Kampong Cham</option>
                          <option value="Kampong Chhnang">Kampong Chhnang</option>
                          <option value="Kampong Speu">Kampong Speu</option>
                          <option value="Kampong Thom">Kampong Thom</option>
                          <option value="Kampot">Kampot</option>
                          <option value="Kandal">Kandal</option>
                          <option value="Kep">Kep</option>
                          <option value="Koh Kong">Koh Kong</option>
                          <option value="Kratie">Kratie</option>
                          <option value="Mondulkiri">Mondulkiri</option>
                          <option value="Oddar Meanchey">Oddar Meanchey</option>
                          <option value="Pailin">Pailin</option>
                          <option value="Preah Sihanouk">Preah Sihanouk</option>
                          <option value="Preah Vihear">Preah Vihear</option>
                          <option value="Prey Veng">Prey Veng</option>
                          <option value="Pursat">Pursat</option>
                          <option value="Ratanakiri">Ratanakiri</option>
                          <option value="Siem Reap">Siem Reap</option>
                          <option value="Stung Treng">Stung Treng</option>
                          <option value="Svay Rieng">Svay Rieng</option>
                          <option value="Takeo">Takeo</option>
                          <option value="Tboung Khmum">Tboung Khmum</option>
                        </select>

                        <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <InputField
                      label="District / Khan *"
                      icon={MapPin}
                      placeholder="Enter district or Khan"
                    />

                    <InputField
                      label="Postal Code"
                      icon={Mail}
                      placeholder="e.g. 12000"
                    />
                  </div>
                </FormSection>

                {/* PAYMENT METHOD */}
                <FormSection
                  icon={CreditCard}
                  title="3. Payment Method"
                  description="Choose your preferred payment method."
                >
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      const isSelected = selectedPayment === method.id;

                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setSelectedPayment(method.id)}
                          className={`flex min-h-24 items-center gap-3 rounded-xl border p-4 text-left transition ${
                            isSelected
                              ? "border-[#F66B87] bg-[#FFF5F6] ring-1 ring-[#F66B87]"
                              : "border-gray-200 bg-white hover:border-pink-200"
                          }`}
                        >
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                              isSelected
                                ? "bg-white text-[#F66B87]"
                                : "bg-gray-50 text-gray-500"
                            }`}
                          >
                            <Icon size={20} />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold text-gray-900">
                              {method.title}
                            </span>

                            <span className="mt-1 block text-xs text-gray-500">
                              {method.description}
                            </span>
                          </span>

                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                              isSelected
                                ? "border-[#F66B87]"
                                : "border-gray-300"
                            }`}
                          >
                            {isSelected && (
                              <span className="h-2 w-2 rounded-full bg-[#F66B87]" />
                            )}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e05571]"
                  >
                    <Lock size={16} />
                    Continue to Payment
                    <span>→</span>
                  </button>
                </FormSection>
              </div>

              {/* RIGHT COLUMN */}
              <div className="lg:col-span-5">
                <OrderSummary />
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

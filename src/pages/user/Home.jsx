
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Navbar from "../../components/shared/Navbar";
import ProductGrid from "../../components/user/ProductGrid";
import CategoryCard from "../../components/user/CategoryCard";
import Footer from "../../components/shared/Footer";
import skincareImage from "../../assets/home-product.png";

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

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto w-full max-w-[1350px] px-4 py-8 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <section className="mb-12 grid items-center gap-8 overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 sm:p-8 md:grid-cols-2 lg:p-10">

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
              Natural Skincare
            </p>

            <h1 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Pure Care
              <br />
              <span className="text-[#F66B87]">
                for Your Natural Glow
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
              SinkCare brings you the goodness of nature with
              traditional Cambodian ingredients. Gentle, safe,
              and effective skincare for healthy, radiant skin.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e05571]"
            >
              Shop Now
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="h-[250px] overflow-hidden rounded-xl sm:h-[320px] lg:h-[380px]">
            <img
              src={skincareImage}
              alt="Natural skincare products"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <SectionHeading
            label="Featured Products"
            title="Our Best Sellers"
            description="Discover our favorite products for your everyday beauty routine."
          />

          <ProductGrid limit={5} />

          <div className="mt-8 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-[#F66B87] bg-white px-6 py-2.5 text-sm font-medium text-[#F66B87] transition hover:bg-[#F66B87] hover:text-white"
            >
              View All Products
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* Promotion */}
        <section className="mb-12 grid items-center gap-6 rounded-2xl border border-pink-100 bg-white p-6 sm:p-8 md:grid-cols-2">

          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
              Special Offer
            </p>

            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Get 30% Off Your First Order
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Discover your favorite skincare products and
              enjoy a little extra care for your skin.
              Start your beauty journey with SinkCare today.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e05571]"
            >
              Shop Now
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="h-[220px] overflow-hidden rounded-xl sm:h-[280px]">
            <img
              src={skincareImage}
              alt="SinkCare skincare collection"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <SectionHeading
            label="Shop By Category"
            title="Explore Our Categories"
            description="Find the perfect products for your beauty and skincare needs."
          />

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            <CategoryCard
              category={{
                name: "Skincare",
                image: "/images/products/skincare.jpg",
              }}
            />

            <CategoryCard
              category={{
                name: "Makeup",
                image: "/images/products/makeup.jpg",
              }}
            />

            <CategoryCard
              category={{
                name: "Body Care",
                image: "/images/products/bodycare.jpg",
              }}
            />

            <CategoryCard
              category={{
                name: "Hair Care",
                image: "/images/products/haircare.jpg",
              }}
            />
          </div>
        </section>

        {/* Contact */}
        <section className="mb-8 rounded-xl border border-gray-100 bg-white p-6 text-center sm:p-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
            Need Help?
          </p>

          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Have Questions About Our Products?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
            We are here to help you find the best products
            for your skincare routine.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e05571]"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Home;

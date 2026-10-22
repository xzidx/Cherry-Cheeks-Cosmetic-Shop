import React from "react";
import { Link } from "react-router-dom"; // Or your router's link component
import Navbar from "../../components/shared/Navbar";
import ProductGrid from "../../components/user/ProductGrid";
import CategoryCard from "../../components/user/CategoryCard";
import skincareImage from "../../assets/home-product.png";

/* Reusable section heading: same style everywhere */
function SectionHeading({ label, title, description }) {
  return (
    <>
      <h2 className="mb-4 text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
        {label}
      </h2>

      <p className="mb-6 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
        {title}
      </p>

      {description && (
        <p className="mb-6 text-sm leading-6 text-gray-500 sm:text-base">
          {description}
        </p>
      )}
    </>
  );
}

/* Reusable hero: set reverse to put the image on the left on desktop */
function Hero({ label, title, description, image, imageAlt, reverse = false, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-8 py-6 md:py-10 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } ${className}`}
    >
      {/* Text Section */}
      <div className="mb-6 mt-6 w-full md:mb-12 md:mt-12 md:w-1/2">
        <h2 className="mb-4 text-sm font-medium text-gray-800 sm:text-base md:mt-12 lg:text-lg">
          {label}
        </h2>

        <p className="mb-6 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
          {title}
        </p>

        <p className="mb-6 text-sm leading-6 text-gray-500 sm:text-base">
          {description}
        </p>

        <button className="rounded-lg bg-[#F66B87] px-6 py-3 text-white transition hover:bg-[#e05571]">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg sm:h-[280px] md:h-[250px] md:w-1/2 lg:h-[320px]">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Navbar />

      <main className="py-8">
        {/* Main Container: same padding as the Navbar */}
        <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8">

          {/* Hero 1: image on the right */}
          <Hero
            label="NATURAL SKINCARE"
            title={
              <>
                Pure Care <br />
                for Your Natural Glow
              </>
            }
            description="SinkCare brings you the goodness of nature with traditional Cambodian ingredients. Gentle, safe, and effective skincare for healthy, radiant skin."
            image={skincareImage}
            imageAlt="Natural skincare products"
          />

          {/* Featured Products */}
          <section className="mt-12 w-full">
            <SectionHeading
              label="FEATURED PRODUCTS"
              title="Our Best Sellers"
            />
            <ProductGrid />
          </section>

          {/* Hero 2: image on the left on desktop */}
          <Hero
            className="mt-12"
            reverse
            label="NATURAL SKINCARE"
            title="Get 30% Off Your First Order"
            description="SinkCare brings you the goodness of nature with traditional Cambodian ingredients. Gentle, safe, and effective skincare for healthy, radiant skin."
            image={skincareImage}
            imageAlt="Natural skincare products"
          />

          {/* Shop by Category */}
          <section className="mt-12 w-full">
            <SectionHeading
              label="SHOP BY CATEGORY"
              title="Explore our Categories"
              description="Find the perfect SinkCare product for your needs."
            />

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              <CategoryCard
                category={{ name: "Skincare", image: "https://placehold.co/400x400?text=Skincare" }}
              />
              <CategoryCard
                category={{ name: "Makeup", image: "https://placehold.co/400x400?text=Makeup" }}
              />
              <CategoryCard
                category={{ name: "Body Care", image: "https://placehold.co/400x400?text=Body+Care" }}
              />
              <CategoryCard
                category={{ name: "Hair Care", image: "https://placehold.co/400x400?text=Hair+Care" }}
              />
            </div>
          </section>

          {/* Lightweight Contact CTA Banner */}
          <section className="mt-16 w-full">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#FFF5F6] p-8 sm:p-10 md:flex-row">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Have Questions About Our Products?
                </h3>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  We're here to help you find the best skincare routine for your natural glow.
                </p>
              </div>

             {/* Email Address */}
                    <div className="relative">
                      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address *"
                        className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:border-[#F66B87] focus:outline-none focus:ring-1 focus:ring-[#F66B87]"
                      />
                    </div>

                    
              <Link
                to="/contact"
                className="shrink-0 rounded-lg bg-[#F66B87] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e05571] active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </section>


          

        </div>
      </main>
    </>
  );
}

export default Home;
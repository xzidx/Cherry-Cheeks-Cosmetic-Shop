
import React from "react";
import {
  Leaf,
  Heart,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

import aboutImage from "../../assets/images/p1 (Copy).png";
import brandImage from "../../assets/images/p2.jpg";

function SectionHeading({ label, title, description }) {
  return (
    <>
      <h2 className="mb-4 text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
        {label}
      </h2>

      <h2 className="mb-6 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mb-6 text-sm leading-6 text-gray-500 sm:text-base">
          {description}
        </p>
      )}
    </>
  );
}

function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-[#FFF5F6] p-6 text-center transition hover:-translate-y-1">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#F66B87]">
        <Icon size={25} />
      </div>

      <h3 className="mb-2 text-base font-semibold text-gray-800 sm:text-lg">
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default function About() {
  const scrollToOurStory = () => {
    document.getElementById("our-story")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />

      <main className="py-8">
        <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8">

          {/* SECTION 1: ABOUT US */}
          <section className="flex flex-col items-center justify-between gap-8 py-6 md:flex-row md:py-10">

            <div className="w-full md:w-1/2">
              <SectionHeading
                label="ABOUT US"
                title="More Than Just Skincare"
                description="SinkCare is a Cambodian skincare brand that combines traditional knowledge with natural ingredients. We create safe, effective, and gentle products for your natural beauty."
              />

              <button
                onClick={scrollToOurStory}
                className="rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e05571]"
              >
                Our Story
              </button>
            </div>

            <div className="flex h-[250px] w-full items-center justify-center overflow-hidden rounded-xl sm:h-[320px] md:w-1/2 lg:h-[380px]">
              <img
                src={aboutImage}
                alt="Model holding skincare products"
                className="h-full w-full object-cover object-center"
              />
            </div>

          </section>

          {/* SECTION 2: BRAND INTRODUCTION */}
          <section className="mt-12 w-full border-y border-pink-50 py-10">

            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

              <div className="flex h-[250px] w-full items-center justify-center overflow-hidden rounded-xl sm:h-[320px] md:w-1/2 lg:h-[380px]">
                <img
                  src={brandImage}
                  alt="SinkCare skincare products"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="w-full md:w-1/2">
                <SectionHeading
                  label="BRAND INTRODUCTION"
                  title="Nature's Care, Our Promise"
                  description="SinkCare is a Cambodian skincare brand that brings together the wisdom of nature and the richness of traditional ingredients. We create gentle, safe, and effective skincare products that help you feel confident in your natural beauty."
                />

                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">

                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5F6] text-[#F66B87]">
                      <Leaf size={20} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 sm:text-sm">
                      Natural Ingredients
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5F6] text-[#F66B87]">
                      <Heart size={20} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 sm:text-sm">
                      Gentle & Safe
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5F6] text-[#F66B87]">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 sm:text-sm">
                      Made in Banteay Meanchey
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* SECTION 3: OUR STORY */}
          <section
            id="our-story"
            className="mt-12 flex flex-col items-center justify-between gap-8 py-6 md:flex-row-reverse md:py-10"
          >

            <div className="w-full md:w-1/2">
              <SectionHeading
                label="OUR STORY"
                title="Rooted in Tradition, Inspired by Nature"
                description="Our journey began in Banteay Meanchey, a place known for its rich natural resources and deep cultural heritage. Inspired by traditional Khmer skincare, we started SinkCare to share the beauty of natural ingredients with the world."
              />

              <p className="mb-6 text-sm leading-6 text-gray-500 sm:text-base">
                From local herbs to time-honored recipes, every product is made with care, supporting local communities and empowering women.
              </p>
            </div>

            <div className="flex h-[250px] w-full items-center justify-center overflow-hidden rounded-xl sm:h-[320px] md:w-1/2 lg:h-[380px]">
              <img
                src={aboutImage}
                alt="Natural skincare products"
                className="h-full w-full object-cover object-center"
              />
            </div>

          </section>

          {/* SECTION 4: MISSION & VALUES */}
          <section className="mt-12 w-full border-t border-pink-50 py-10">

            <div className="mb-10 text-center">
              <SectionHeading
                label="OUR MISSION & VALUES"
                title="For a Healthier You and a Better Tomorrow"
                description="We are committed to creating natural, sustainable, and effective skincare products that bring out your natural glow — today and for future generations."
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <ValueCard
                icon={Leaf}
                title="Natural"
                description="We use pure and safe natural ingredients."
              />

              <ValueCard
                icon={Heart}
                title="Care"
                description="We care for your skin, our community, and the environment."
              />

              <ValueCard
                icon={Users}
                title="Empower"
                description="We empower women and support local communities."
              />

              <ValueCard
                icon={Sparkles}
                title="Sustainable"
                description="We create beauty that lasts, for you and future generations."
              />

            </div>
          </section>

          {/* CONTACT BANNER */}
          <section className="mt-12 w-full">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#FFF5F6] p-8 sm:p-10 md:flex-row">

              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Love Our Story?
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                  Discover our natural skincare products and find the perfect care for your skin.
                </p>
              </div>

              <a
                href="/shop"
                className="shrink-0 rounded-lg bg-[#F66B87] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e05571]"
              >
                Shop Now
              </a>

            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

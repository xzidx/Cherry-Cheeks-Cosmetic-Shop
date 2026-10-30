
import React from "react";
import {
  Leaf,
  Heart,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
  HandHeart,
  Flower2,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

function SectionHeading({ label, title, description, center = false }) {
  return (
    <div className={`mb-8 ${center ? "text-center" : ""}`}>
      <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
        {label}
      </p>

      <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFF5F6]">
        <Icon className="text-2xl text-[#F66B87]" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

function About() {
  const values = [
    {
      icon: Leaf,
      title: "Natural",
      description:
        "We appreciate nature and the beauty of natural ingredients in skincare.",
    },
    {
      icon: Heart,
      title: "Care",
      description:
        "We care about our customers and want everyone to feel confident.",
    },
    {
      icon: Users,
      title: "Empower",
      description:
        "We believe in supporting local communities and creating opportunities.",
    },
    {
      icon: Sparkles,
      title: "Sustainable",
      description:
        "We aim to make thoughtful choices for a better future.",
    },
  ];

  const promises = [
    {
      icon: Leaf,
      title: "Nature Inspired",
      description:
        "Our brand takes inspiration from nature and traditional Cambodian beauty practices.",
    },
    {
      icon: ShieldCheck,
      title: "Gentle Care",
      description:
        "We believe skincare should be a comfortable and enjoyable part of everyday life.",
    },
    {
      icon: HandHeart,
      title: "Made with Care",
      description:
        "We value care, quality, and attention in everything we do.",
    },
    {
      icon: Flower2,
      title: "Feel Confident",
      description:
        "Our goal is to help everyone feel beautiful and confident in their own skin.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto w-full max-w-[1350px] px-4 py-8 sm:px-6 lg:px-8">

        {/* About Us */}
        <section className="mb-16 overflow-hidden rounded-xl bg-white">
          <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-10 lg:gap-12">
            <div>
              <SectionHeading
                label="About SinkCare"
                title="More Than Just Skincare"
                description="We are passionate about bringing beauty and nature together. Inspired by traditional Cambodian knowledge and natural ingredients, SinkCare wants to make skincare a simple and enjoyable experience for everyone."
              />

              <a
                href="#our-story"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e05571]"
              >
                Discover Our Story
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="h-72 overflow-hidden rounded-xl sm:h-96">
              <img
                src="/images/about/p1.png"
                alt="SinkCare skincare products"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Brand Introduction */}
        <section className="mb-16">
          <div className="grid items-center gap-8 rounded-xl bg-white p-6 md:grid-cols-2 md:p-10">
            <div className="h-72 overflow-hidden rounded-xl sm:h-96">
              <img
                src="/images/about/p2.jpg"
                alt="Natural skincare ingredients"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <SectionHeading
                label="Who We Are"
                title="Nature's Care, Our Promise"
                description="At SinkCare, we believe that beauty begins with care. We combine inspiration from nature with our passion for skincare to create a brand that celebrates natural beauty."
              />

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Leaf className="shrink-0 text-[#F66B87]" />
                  <p className="text-sm text-gray-600">
                    Natural Ingredients
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Heart className="shrink-0 text-[#F66B87]" />
                  <p className="text-sm text-gray-600">
                    Gentle Care for Your Skin
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Sparkles className="shrink-0 text-[#F66B87]" />
                  <p className="text-sm text-gray-600">
                    Inspired by Cambodian Beauty
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section id="our-story" className="mb-16 scroll-mt-24">
          <div className="grid items-center gap-8 rounded-xl bg-white p-6 md:grid-cols-2 md:p-10">
            <div>
              <SectionHeading
                label="Our Journey"
                title="Rooted in Tradition, Inspired by Nature"
                description="Our story begins in Banteay Meanchey, Cambodia. Inspired by Khmer beauty traditions and local natural ingredients, we want to share the beauty of Cambodian skincare with more people. We also believe in supporting local communities and creating opportunities for women."
              />

              <p className="text-sm leading-7 text-gray-500">
                We believe that beauty is not only about appearance. It is
                also about confidence, self-care, and appreciating the
                natural beauty around us.
              </p>
            </div>

            <div className="h-72 overflow-hidden rounded-xl sm:h-96">
              <img
                src="/images/about/p3.png"
                alt="Our skincare journey"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="mb-16">
          <SectionHeading
            label="What We Believe"
            title="For a Healthier You and a Better Tomorrow"
            description="Our mission is to celebrate natural beauty while caring for people and the environment. These values guide everything we do."
            center
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </section>

        {/* Brand Promise - New Section */}
        <section className="mb-16 rounded-xl bg-white px-6 py-10 md:px-10">
          <SectionHeading
            label="Our Promise to You"
            title="Beauty with Care and Purpose"
            description="Every part of our brand reflects our commitment to natural beauty, thoughtful care, and helping people feel confident."
            center
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((promise) => (
              <ValueCard key={promise.title} {...promise} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-10 rounded-xl bg-[#FFF5F6] px-6 py-12 text-center sm:px-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white">
            <Heart className="text-2xl text-[#F66B87]" />
          </div>

          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
            Stay Connected
          </p>

          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Have questions or want to know more about SinkCare? We are
            always happy to connect with you.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e05571]"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-lg border border-[#F66B87] bg-white px-6 py-3 text-sm font-medium text-[#F66B87] transition hover:bg-[#FFF5F6]"
            >
              Explore Products
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default About;

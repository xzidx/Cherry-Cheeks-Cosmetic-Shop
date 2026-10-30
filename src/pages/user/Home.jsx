import React from 'react';
import { Leaf, Heart, ShieldCheck, Users, Sparkles } from 'lucide-react';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/shared/Footer';

export default function SkincareLanding() {
  const scrollToOurStory = () => {
    const storySection = document.getElementById('our-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />

      <div className="text-gray-800 selection:bg-pink-200 scroll-smooth">
        {/* Main Container: same padding as Navbar & Home */}
        <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8">

          {/* SECTION 1: ABOUT US */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-10 md:py-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium uppercase text-gray-800 sm:text-base lg:text-lg">About Us</span>
              </div>
              <h1 className="-ml-1 text-2xl font-bold leading-tight text-[#F66B87] sm:text-3xl lg:text-4xl">
                More Than Just Skincare
              </h1>
              <p className="text-sm leading-6 text-gray-500 sm:text-base">
                SinkCare is a Cambodian skincare brand that combines traditional knowledge with natural ingredients. We create safe, effective, and gentle products for your natural beauty.
              </p>
              <div>
                <button
                  onClick={scrollToOurStory}
                  className="bg-[#F66B87] hover:bg-[#e05571] text-white px-8 py-3 rounded-xl shadow-lg shadow-rose-200 transition-all duration-300 flex items-center space-x-2 cursor-pointer hover:scale-105"
                >
                  <span>Our Story</span>
                </button>
              </div>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-xl bg-pink-100">
              <img
                src="src/assets/images/p1 (Copy).png"
                alt="Model holding skincare"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </section>

          {/* SECTION 2: BRAND INTRODUCTION */}
          <section className="py-10 md:py-12 border-y border-pink-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-xl bg-pink-50 order-2 md:order-1">
                <img
                  src="src/assets/images/p2.jpg"
                  alt="Skincare products lineup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium uppercase text-gray-800 sm:text-base lg:text-lg">Brand Introduction</span>
                </div>
                <h2 className="text-2xl font-bold leading-tight text-[#F66B87] sm:text-3xl lg:text-4xl">
                  Nature’s Care, Our Promise
                </h2>
                <p className="text-sm leading-6 text-gray-500 sm:text-base">
                  SinkCare is a Cambodian skincare brand that brings together the wisdom of nature and the richness of traditional ingredients. We create gentle, safe, and effective skincare products that help you feel confident in your natural beauty.
                </p>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center">
                      <Leaf size={20} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 sm:text-sm">Natural Ingredients</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center">
                      <Heart size={20} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 sm:text-sm">Gentle & Safe for Your Skin</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 sm:text-sm">Made in Banteay Meanchey</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: ROOTED IN TRADITION (Target for "Our Story" click) */}
          <section id="our-story" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-10 md:py-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium uppercase text-gray-800 sm:text-base lg:text-lg">Our Story</span>
              </div>
              <h2 className="text-2xl font-bold leading-tight text-[#F66B87] sm:text-3xl lg:text-4xl">
                Rooted in Tradition, Inspired by Nature
              </h2>
              <p className="text-sm leading-6 text-gray-500 sm:text-base">
                Our journey began in Banteay Meanchey, a place known for its rich natural resources and deep cultural heritage. Inspired by traditional Khmer skincare, we started SinkCare to share the beauty of natural ingredients with the world.
              </p>
              <p className="text-sm leading-6 text-gray-500 sm:text-base">
                From local herbs to time-honored recipes, every product is made with care, supporting local communities and empowering women.
              </p>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-xl bg-pink-100">
              <img
                src="src/assets/brand name.jpeg"
                alt="Natural beauty product showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* SECTION 4: MISSION & VALUES */}
          <section className="bg-white py-10 md:py-12 border-t border-pink-50">
            <div className="max-w-6xl mx-auto text-center space-y-4 mb-10 md:mb-16">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm font-medium uppercase text-gray-800 sm:text-base lg:text-lg">Our Mission & Values</span>
              </div>
              <h2 className="text-2xl font-bold leading-tight text-[#F66B87] sm:text-3xl lg:text-4xl">
                For a Healthier You and a Better Tomorrow
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                We are committed to creating natural, sustainable, and effective skincare products that bring out your natural glow — today and for future generations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

              {/* Value 1 */}
              <div className="flex flex-col items-center bg-[#FFF5F6] text-center space-y-3 p-6 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center shadow-sm">
                  <Leaf size={28} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">Natural</h3>
                <p className="text-sm leading-6 text-gray-500">
                  We use pure and safe natural ingredients.
                </p>
              </div>

              {/* Value 2 */}
              <div className="flex flex-col items-center bg-[#FFF5F6] text-center space-y-3 p-6 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center shadow-sm">
                  <Heart size={28} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">Care</h3>
                <p className="text-sm leading-6 text-gray-500">
                  We care for your skin, our community, and the environment.
                </p>
              </div>

              {/* Value 3 */}
              <div className="flex flex-col items-center bg-[#FFF5F6] text-center space-y-3 p-6 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center shadow-sm">
                  <Users size={28} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">Empower</h3>
                <p className="text-sm leading-6 text-gray-500">
                  We empower women and support local communities.
                </p>
              </div>

              {/* Value 4 */}
              <div className="flex flex-col items-center bg-[#FFF5F6] text-center space-y-3 p-6 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center shadow-sm">
                  <Sparkles size={28} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">Sustainable</h3>
                <p className="text-sm leading-6 text-gray-500">
                  We create beauty that lasts, for you and for future generations.
                </p>
              </div>

            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}
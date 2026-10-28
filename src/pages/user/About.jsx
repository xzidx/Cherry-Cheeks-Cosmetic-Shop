import React from 'react';
import { Leaf, Heart, ShieldCheck, Users, Sparkles, Award } from 'lucide-react';
import Navbar from '../../components/shared/Navbar';

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
      
      <div className=" text-gray-800 selection:bg-pink-200 scroll-smooth">
        
        {/* SECTION 1: ABOUT US */}
        <section className="max-w-7xl mx-auto py-16 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-normal tracking-wide uppercase block text-gray-800">About Us</span>
              {/* <div className="w-8 h-[1px] bg-gray-800"></div> */}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F66B87] leading-tight">
              More Than Just Skincare
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              SinkCare is a Cambodian skincare brand that combines traditional knowledge with natural ingredients. We create safe, effective, and gentle products for your natural beauty.
            </p>
            <div>
              <button 
                onClick={scrollToOurStory}
                className="bg-[#F66B87] hover:bg-[#e05571] text-white font-medium px-8 py-3 rounded-full shadow-lg shadow-rose-200 transition-all duration-300 flex items-center space-x-2 text-sm cursor-pointer hover:scale-105"
              >
                <span>Our Story</span>
                <span>→</span>
              </button>
            </div>
          </div>

          <div className="relative flex justify-end">
            <div className="w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-xl bg-pink-100">
              <img 
                src="src/assets/images/p1 (Copy).png" 
                alt="Model holding skincare" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: BRAND INTRODUCTION */}
        <section className="py-16 md:py-12 border-y  border-pink-50">
          <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg rounded-3xl overflow-hidden shadow-lg bg-pink-50">
              <img 
                src="src/assets/images/p2.jpg" 
                alt="Skincare products lineup" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-normal tracking-wide uppercase block text-gray-800">Brand Introduction</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F66B87] leading-tight">
                Nature’s Care, Our Promise
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                SinkCare is a Cambodian skincare brand that brings together the wisdom of nature and the richness of traditional ingredients. We create gentle, safe, and effective skincare products that help you feel confident in your natural beauty.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center">
                    <Leaf size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">Natural Ingredients</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center">
                    <Heart size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">Gentle & Safe for Your Skin</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">Made in Banteay Meanchey</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ROOTED IN TRADITION (Target for "Our Story" click) */}
        <section id="our-story" className="max-w-7xl  mx-auto py-16 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-normal tracking-wide uppercase block text-gray-800">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F66B87] leading-tight">
              Rooted in Tradition, Inspired by Nature
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our journey began in Banteay Meanchey, a place known for its rich natural resources and deep cultural heritage. Inspired by traditional Khmer skincare, we started SinkCare to share the beauty of natural ingredients with the world.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              From local herbs to time-honored recipes, every product is made with care, supporting local communities and empowering women.
            </p>
          </div>

          <div className=" rounded-[2.5rem] overflow-hidden shadow-xl bg-pink-100 h-[600px]">
            <img 
              src="src/assets/images/p1 (Copy).png" 
              alt="Natural beauty product showcase" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* SECTION 4: MISSION & VALUES */}
        <section className="bg-white py-16 md:py-8 border-t border-pink-50">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm font-normal tracking-wide uppercase block text-gray-800">Our Mission & Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F66B87]">
              For a Healthier You and a Better Tomorrow
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              We are committed to creating natural, sustainable, and effective skincare products that bring out your natural glow — today and for future generations.
            </p>
          </div>

          <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Value 1 */}
            <div className="flex flex-col items-center bg-[#FFF5F6] text-center space-y-3 p-6 rounded-2xl hover:bg-[#FFF5F6] transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center shadow-sm">
                <Leaf size={28} />
              </div>
              <h3 className="font-bold text-gray-800 text-lg">Natural</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We use pure and safe natural ingredients.
              </p>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col items-center bg-[#FFF5F6]  text-center space-y-3 p-6 rounded-2xl hover:bg-[#FFF5F6] transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center shadow-sm">
                <Heart size={28} />
              </div>
              <h3 className="font-bold text-gray-800 text-lg">Care</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We care for your skin, our community, and the environment.
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col items-center bg-[#FFF5F6] text-center space-y-3 p-6 rounded-2xl hover:bg-[#FFF5F6] transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center shadow-sm">
                <Users size={28} />
              </div>
              <h3 className="font-bold text-gray-800 text-lg">Empower</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We empower women and support local communities.
              </p>
            </div>

            {/* Value 4 */}
            <div className="flex flex-col items-center bg-[#FFF5F6] text-center space-y-3 p-6 rounded-2xl hover:bg-[#FFF5F6] transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#FFF5F6] text-[#F66B87] flex items-center justify-center shadow-sm">
                <Sparkles size={28} />
              </div>
              <h3 className="font-bold text-gray-800 text-lg">Sustainable</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We create beauty that lasts, for you and for future generations.
              </p>
            </div>

          </div>
        </section>

      </div>
    </>
  );
  
}
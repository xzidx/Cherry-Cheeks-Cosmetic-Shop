import Navbar from "../../components/shared/Navbar";
import ProductGrid from "../../components/user/ProductGrid";
import skincareImage from "../../assets/home-product.png";

function Home() {
  return (
    <>
      {/* Normal User Navbar */}
      <Navbar />

      <main className="py-8">
        {/* Main Container */}
        <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <div className="flex flex-col items-center justify-between gap-8 rounded-lg px-4 py-6 sm:px-6 md:flex-row md:py-10">

            {/* Text Section */}
            <div className="mb-6 mt-6 w-full md:mb-12 md:mt-12 md:w-1/2">

              <h1 className="mb-4 text-sm font-medium text-gray-800 sm:text-base md:mt-12 lg:text-lg">
                NATURAL SKINCARE
              </h1>

              <p className="mb-6 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
                Pure Care <br />
                for Your Natural Glow
              </p>

              <p className="mb-6 text-sm leading-6 text-gray-500 sm:text-base">
                SinkCare brings you the goodness of nature with traditional
                Cambodian ingredients. Gentle, safe, and effective skincare
                for healthy, radiant skin.
              </p>

              {/* Shop Now Button */}
              <button className="rounded-lg bg-pink-500 px-6 py-3 text-white transition hover:bg-pink-600">
                Shop Now
              </button>

            </div>

            {/* Image Section */}
            <div className="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg sm:h-[280px] md:h-[250px] md:w-1/2 lg:h-[320px]">

              <img
                src={skincareImage}
                alt="Natural skincare products"
                className="h-full w-full object-cover object-center"
              />

            </div>

          </div>

          {/* Featured Products Section */}
          <section className="mt-12 w-full px-2 sm:px-4">

            <h1 className="mb-4 text-sm font-medium text-gray-800 sm:text-base lg:text-lg lg:px-2">
              FEATURED PRODUCTS
            </h1>

            <p className="mb-6 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl lg:px-2">
              Our Best Sellers
            </p>

            {/* Product Grid */}
            <ProductGrid />

          </section>

        </div>
      </main>
    </>
  );
}

export default Home;
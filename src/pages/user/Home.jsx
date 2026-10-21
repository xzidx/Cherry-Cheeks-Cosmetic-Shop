import Navbar from "../../components/shared/Navbar";
import ProductGrid from "../../components/user/ProductGrid";
import skincareImage from "../../assets/home-product.png";

function Home() {
  return (
    <>
      {/* Normal User Navbar */}
      <Navbar />

      <main className="py-8">
        <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
              
        <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-8 rounded-lg px-4 py-6 sm:px-6 md:flex-row md:py-10">

                {/* Text Section */}
                <div className="w-full md:w-1/2">
                  <h1 className="mb-4 text-lg font-medium text-gray-800">
                    NATURAL SKINCARE
                  </h1>

                  <p className="mb-6 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
                    Pure Care <br />
                    for Your Natural Glow
                  </p>

                  <p className="text-sm leading-6 text-gray-500 sm:text-base">
                    SinkCare brings you the goodness of nature with traditional
                    Cambodian ingredients. Gentle, safe, and effective skincare
                    for healthy, radiant skin.
                  </p>
                </div>

                {/* Image Section */}
                <div className="h-[200px] w-full overflow-hidden rounded-lg sm:h-[280px] md:h-[250px] md:w-1/2 lg:h-[320px]">
                  <img
                    src={skincareImage}
                    alt="Natural skincare products"
                    className=" object-cover"
                  />
                </div>

              </div>
        </div>

        </div>

     
      </main>
    </>
  );
}

export default Home;
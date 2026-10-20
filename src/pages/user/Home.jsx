import Navbar from "../../components/shared/Navbar";
import ProductGrid from "../../components/user/ProductGrid";

function Home() {
  return (
    <>
      {/* Normal User Navbar */}
      <Navbar />

      <main className="py-8">
        <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Our Products
          </h1>
        </div>

        {/* Product Grid */}
        <ProductGrid />
      </main>
    </>
  );
}

export default Home;
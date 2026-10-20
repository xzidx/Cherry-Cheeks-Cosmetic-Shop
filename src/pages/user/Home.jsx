import ProductGrid from "../../components/user/ProductGrid";

function Home() {
  return (
    <main className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Our Products</h1>
      <ProductGrid />
    </main>
  );
}

export default Home;
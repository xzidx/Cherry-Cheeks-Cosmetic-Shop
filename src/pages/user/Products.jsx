import ProductCard from "../../components/user/ProductCard";
function App() {
  return (

    
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm py-4 px-6">
        <h1 className="text-xl font-bold text-slate-900">My Beauty Store</h1>
      </header>

      {/* Using your ProductList component here */}
      <main>
        <ProductCard />
      </main>
    </div>
  );
}

export default App;
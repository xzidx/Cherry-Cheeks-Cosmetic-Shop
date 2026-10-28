import { useMemo, useState } from "react";
import SearchBar from "../../components/shared/SearchBar";
import Navbar from "../../components/shared/Navbar";
import CategoryFilter from "../../components/user/CategoryFilter";
import Footer from "../../components/shared/Footer";

// TODO: ជំនួសដោយទិន្នន័យពិត (API ឬ file data) ពេលក្រោយ
const PRODUCTS = [
  { id: 1, name: "Cherry Velvet Lipstick", category: "Lipstick", price: 12.5, image: "https://placehold.co/400x400?text=Lipstick+1" },
  { id: 2, name: "Rose Matte Lipstick", category: "Lipstick", price: 10.0, image: "https://placehold.co/400x400?text=Lipstick+2" },
  { id: 3, name: "Glossy Berry Lip Tint", category: "Lipstick", price: 8.9, image: "https://placehold.co/400x400?text=Lip+Tint" },
  { id: 4, name: "Hydrating Face Serum", category: "Skincare", price: 24.0, image: "https://placehold.co/400x400?text=Serum" },
  { id: 5, name: "Daily Moisturizer SPF30", category: "Skincare", price: 18.5, image: "https://placehold.co/400x400?text=Moisturizer" },
  { id: 6, name: "Gentle Foam Cleanser", category: "Skincare", price: 11.0, image: "https://placehold.co/400x400?text=Cleanser" },
];

function App() {
  const [sort, setSort] = useState("default");

  const sorted = useMemo(() => {
    let list = [...PRODUCTS];

    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [sort]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar/>
    <div className="mx-auto max-w-7xl  py-10">
       <SearchBar/>
    </div>
  
   <CategoryFilter/>
      <main className="mx-auto max-w-7xl py-10">
        <h2 className="mb-6 text-3xl font-bold text-pink-600">Our Products</h2>

        {/* Toolbar */}
        <div className="mb-6 flex justify-end">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-pink-500 focus:outline-none"
          >
            <option value="default">Sort by</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>

        {/* Product grid */}
        {sorted.length === 0 ? (
          <p className="py-20 text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {sorted.map((p) => (
              <article
                key={p.id}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <img src={p.image} alt={p.name} className="aspect-square w-full object-cover" />
                <div className="p-4">
                  <span className="text-xs font-medium uppercase text-pink-500">{p.category}</span>
                  <h3 className="mt-1 text-sm font-semibold text-gray-800">{p.name}</h3>
                  <p className="mt-2 text-lg font-bold text-gray-900">${p.price.toFixed(2)}</p>
                  <button
                    type="button"
                    className="mt-3 w-full rounded-lg bg-pink-500 py-2 text-sm font-medium text-white transition hover:bg-pink-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
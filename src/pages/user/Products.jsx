function Products() {
  return (
    <div className=" bg-pink-50 p-8 text-center">
      <h1 className="mb-4 text-3xl font-bold text-pink-600">
        Our Products 💄
      </h1>

      <p className="mb-8 text-gray-600">
        Discover your favorite beauty products at Cherry Cheeks.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Lip Gloss</h2>
          <p className="mt-2 text-pink-600">$8</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
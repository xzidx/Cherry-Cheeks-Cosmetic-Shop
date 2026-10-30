
function CategoryFilter({
  categories = [],
  selected = "all",
  onChange,
  totalCount = 0,
}) {
  const allCategories = [
    {
      id: "all",
      label: "All Products",
      count: totalCount,
    },
    ...categories,
  ];

  return (
    <div className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Shop by Category
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Explore our beauty collection.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {allCategories.map((category) => {
          const active = selected === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange?.(category.id)}
              aria-pressed={active}
              className={`flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-200 ${
                active
                  ? "border-[#F66B87] bg-[#F66B87] text-white shadow-sm"
                  : "border-gray-200 bg-white text-gray-600 hover:border-[#F66B87] hover:bg-[#FFF5F6] hover:text-[#F66B87]"
              }`}
            >
              <span>
                {category.id === "all" ? "▦" : "✦"}
              </span>

              {category.label}

              <span className="text-xs opacity-80">
                ({category.count ?? 0})
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryFilter;

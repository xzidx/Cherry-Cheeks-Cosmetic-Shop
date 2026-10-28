import { useState } from "react";

const DEFAULT_CATEGORIES = [
  { id: "lipstick", label: "Lipstick" },
  { id: "skincare", label: "Skincare" },
  { id: "mask-care", label: "Mask Care" },
  { id: "jell", label: "Jell" },
];

export default function CategoryFilter({
  categories = DEFAULT_CATEGORIES,
  selected,
  onChange,
  showAll = true,
  allLabel = "All",
  totalCount,
}) {
  // បើ parent មិនផ្ញើ selected/onChange → component គ្រប់គ្រង state ខ្លួនឯង
  const [innerSelected, setInnerSelected] = useState("all");
  const current = selected !== undefined ? selected : innerSelected;

  const handleClick = (id) => {
    setInnerSelected(id);
    if (onChange) onChange(id);
  };

  const items = showAll
    ? [{ id: "all", label: allLabel, count: totalCount }, ...categories]
    : categories;

  return (
    <div
      role="group"
      aria-label="Filter products by category"
      className="flex flex-wrap gap-2.5 py-3.5
                 max-sm:flex-nowrap max-sm:justify-start max-sm:overflow-x-auto
                 max-sm:px-4 max-sm:pt-1.5 max-sm:pb-3"
    >
      {items.map((cat) => {
        const isActive = current === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => handleClick(cat.id)}
            className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full border
              px-5 py-2 text-sm transition-colors duration-200
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-[#b5456e]
              ${
                isActive
                  ? "border-[#b5456e] bg-[#b5456e] text-white"
                  : "border-[#ed93b1] bg-white text-[#4b1528] hover:bg-[#fbeaf0] hover:text-[#72243e]"
              }`}
          >
            {cat.label}
            {typeof cat.count === "number" && (
              <span className="ml-1.5 text-xs opacity-80">({cat.count})</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
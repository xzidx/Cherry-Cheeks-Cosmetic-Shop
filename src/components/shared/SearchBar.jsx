
import { FiSearch, FiX } from "react-icons/fi";

function SearchBar({ value = "", onChange }) {
  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 transition focus-within:border-[#F66B87]">

        {/* Search Icon */}
        <FiSearch
          className="shrink-0 text-lg text-gray-400"
          aria-hidden="true"
        />

        {/* Search Input */}
        <input
          type="search"
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          placeholder="Search cosmetic products..."
          aria-label="Search cosmetic products by name"
          className="w-full min-w-0 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />

        {/* Clear Search Button */}
        {value && (
          <button
            type="button"
            onClick={() => onChange?.("")}
            aria-label="Clear search"
            className="shrink-0 rounded-lg p-1 text-gray-400 transition hover:bg-[#FFF5F6] hover:text-[#F66B87]"
          >
            <FiX className="text-lg" />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

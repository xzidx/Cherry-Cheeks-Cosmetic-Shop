import { FiSearch, FiX } from "react-icons/fi";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-100">
        {/* Search Icon */}
        <FiSearch
          className="shrink-0 text-xl text-gray-400"
          aria-hidden="true"
        />

        {/* Search Input */}
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search cosmetic products..."
          aria-label="Search cosmetic products by name"
          className="w-full min-w-0 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
        />

        {/* Clear Search Button */}
        {searchTerm && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
            className="shrink-0 rounded-full p-1 text-gray-400 transition-colors hover:bg-pink-50 hover:text-pink-600"
          >
            <FiX className="text-lg" />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(category.name)}`}
      className="group block"
    >
      {/* Image */}
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Name */}
      <p className="mt-3 text-center text-sm font-medium text-gray-800 transition-colors group-hover:text-pink-600 sm:text-base">
        {category.name}
      </p>
    </Link>
  );
}

export default CategoryCard;
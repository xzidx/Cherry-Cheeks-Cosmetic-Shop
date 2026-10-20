

import { Link } from "react-router-dom";

function Star({ filled }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={`h-5 w-5 ${
                filled ? "fill-amber-200 stroke-amber-400" : "fill-slate-100 stroke-slate-300"
            }`}
            strokeWidth="1.6"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="M12 2.8l2.78 5.64 6.22.9-4.5 4.39 1.06 6.2L12 17.01l-5.56 2.92 1.06-6.2L3 9.34l6.22-.9L12 2.8z" />
        </svg>
    );
    }

    function ProductCard({
    product = {
        id: 1,
        name: "Lan Come Lipstick",
        weight: "4.2g",
        price: 30,
        rating: 4,
        reviews: 145,
        image: "/images/lancome-lipstick.png",
        isNew: true,
    },
    onAddToCart,
    }) {
    const { id, name, weight, price, rating, reviews, image, isNew } = product;

    return (
        <article className="relative flex w-full max-w-sm flex-col rounded-xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            {isNew && (
                <span className="absolute left-6 top-6 z-10 rounded-lg bg-rose-400 px-4 py-1.5 text-sm font-bold text-white">
                    NEW
                </span>
            )}

            <Link to={`/shop/${id}`} className="block">
                <div className="flex aspect-[4/3] items-center justify-center">
                    <img
                        src={image}
                        alt={name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                    />
                </div>
            </Link>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
                <p className="mt-1 text-base text-slate-500">{weight}</p>

                <div className="mt-3 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} filled={n <= rating} />
                    ))}
                    <span className="ml-1 text-sm text-slate-500">({reviews})</span>
                </div>

                <p className="mt-5 text-2xl font-bold text-rose-400">
                    ${Number(price).toFixed(2)}
                </p>
            </div>

            <button
                type="button"
                onClick={() => onAddToCart?.(product)}
                className="mt-5 w-full rounded-xl bg-rose-400 py-1.5 text-lg font-semibold text-white transition hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500">

                Add to Cart

            </button>
        
        </article>
    );
}

export default ProductCard;
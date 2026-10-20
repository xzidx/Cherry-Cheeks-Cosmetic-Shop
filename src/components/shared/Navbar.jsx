import { Link, NavLink } from "react-router-dom";

function Header() {
  const navClass = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive
        ? "text-stone-950 font-semibold"
        : "text-stone-500 hover:text-stone-950"
    }`;

  return (
    <header className="border-b border-stone-200 bg-[#fffdf9]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="text-2xl font-serif tracking-wide text-stone-900">
            CHERRY CHEEKS
          </Link>

          <nav className="flex items-center gap-8">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={navClass}>
              Shop
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </nav>

          <Link
            to="/shop"
            className="border border-stone-900 px-6 py-3 text-xs font-medium uppercase tracking-widest text-stone-900 transition hover:bg-stone-900 hover:text-white"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
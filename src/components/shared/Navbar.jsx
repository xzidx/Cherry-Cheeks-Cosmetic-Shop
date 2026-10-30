import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `inline-block whitespace-nowrap transition-colors duration-200 hover:text-pink-600 ${
      isActive ? "text-pink-600" : "text-gray-700"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Main Navbar Container */}
      <div className="mx-auto flex w-full max-w-[1350px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Brand Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Cherry Cheeks"
            className="-ml-3 h-16 w-auto object-contain sm:-ml-4 sm:h-[72px] lg:-ml-5 lg:h-20"
          />
        </Link>

        {/* Desktop Navigation - Laptop and Desktop */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Cart and Account - Laptop and Desktop */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            to="/payment"
            aria-label="Shopping cart"
            className="text-xl text-gray-700 transition-colors hover:text-pink-600"
          >
            <FiShoppingCart />
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2 whitespace-nowrap text-gray-700 transition-colors hover:text-pink-600"
          >
            <FiUser />
            <span>Login</span>
          </Link>
        </div>

        {/* Mobile and Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex items-center justify-center p-2 text-2xl text-gray-700 transition-colors hover:text-pink-600 lg:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile and Tablet Navigation Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white py-5 lg:hidden">
          <div className="mx-auto flex w-full max-w-[1350px] flex-col gap-5 px-4 sm:px-6 lg:px-8">

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={closeMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Contact
            </NavLink>

            {/* Cart and Login - Mobile and Tablet */}
            <div className="flex items-center gap-6 border-t border-gray-100 pt-4">
              <Link
                to="/cart"
                onClick={closeMenu}
                aria-label="Shopping cart"
                className="flex items-center gap-2 text-gray-700 transition-colors hover:text-pink-600"
              >
                <FiShoppingCart className="text-xl" />
                <span>Cart</span>
              </Link>

              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center gap-2 text-gray-700 transition-colors hover:text-pink-600"
              >
                <FiUser className="text-xl" />
                <span>Login</span>
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
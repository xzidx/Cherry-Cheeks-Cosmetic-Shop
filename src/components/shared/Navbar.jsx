
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
    `relative py-2 text-sm font-medium transition-colors duration-200
    ${
      isActive
        ? "text-[#F66B87] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-[#F66B87]"
        : "text-gray-600 hover:text-[#F66B87]"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">

      {/* MAIN NAVBAR */}
      <div className="mx-auto flex w-full max-w-[1350px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Cherry Cheeks"
            className="h-14 w-auto object-contain sm:h-16 lg:h-[72px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">

          <NavLink to="/" end className={navLinkClass}>
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

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* CART */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF5F6] text-lg text-gray-700 transition hover:bg-[#F66B87] hover:text-white"
          >
            <FiShoppingCart />
          </Link>

          {/* LOGIN */}
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-[#F66B87] hover:bg-[#FFF5F6] hover:text-[#F66B87]"
          >
            <FiUser className="text-base" />
            Login
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-gray-700 transition hover:bg-[#FFF5F6] hover:text-[#F66B87] lg:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE AND TABLET MENU */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-[1350px] flex-col gap-1 px-4 py-5 sm:px-6 lg:px-8">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#FFF5F6] text-[#F66B87]"
                    : "text-gray-600 hover:bg-[#FFF5F6] hover:text-[#F66B87]"
                }`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#FFF5F6] text-[#F66B87]"
                    : "text-gray-600 hover:bg-[#FFF5F6] hover:text-[#F66B87]"
                }`
              }
              onClick={closeMenu}
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#FFF5F6] text-[#F66B87]"
                    : "text-gray-600 hover:bg-[#FFF5F6] hover:text-[#F66B87]"
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#FFF5F6] text-[#F66B87]"
                    : "text-gray-600 hover:bg-[#FFF5F6] hover:text-[#F66B87]"
                }`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>

            {/* MOBILE ACTIONS */}
            <div className="mt-3 flex items-center gap-3 border-t border-gray-100 pt-4">

              <Link
                to="/cart"
                onClick={closeMenu}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#FFF5F6] px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#F66B87] hover:text-white"
              >
                <FiShoppingCart className="text-lg" />
                Cart
              </Link>

              <Link
                to="/login"
                onClick={closeMenu}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-[#F66B87] hover:bg-[#FFF5F6] hover:text-[#F66B87]"
              >
                <FiUser className="text-lg" />
                Login
              </Link>

            </div>

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;

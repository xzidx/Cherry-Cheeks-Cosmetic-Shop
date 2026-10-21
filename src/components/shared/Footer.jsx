
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const customerLinks = [
  { name: "FAQs", path: "/faqs" },
  { name: "Shipping", path: "/shipping" },
  { name: "Returns", path: "/returns" },
  { name: "Privacy Policy", path: "/privacy" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    console.log("Subscribe:", email);
    setEmail("");
  };

  const linkStyle =
    "text-sm text-[#6b6a80] transition hover:text-[#fb5c8c]";

  return (
    <footer className=" font-sans text-[#6b6a80]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-2 md:grid-cols-4 md:gap-10 md:px-8 md:py-12">

        {/* Brand */}
        <div>
          <Link to="/" aria-label="Cherry Cheeks Home">
            <img
              src={logo}
              alt="Cherry Cheeks Cosmetic Shop"
              className="mb-4 w-44 max-w-full"
            />
          </Link>

          <p className="max-w-xs text-sm leading-6">
            Discover your natural glow with beauty products
            made for your everyday routine.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-bold text-[#1b1b2f]">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className={linkStyle}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="mb-4 font-bold text-[#1b1b2f]">
            Customer Care
          </h3>

          <ul className="space-y-3">
            {customerLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className={linkStyle}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 font-bold text-[#1b1b2f]">
            Stay Connected
          </h3>

          <p className="mb-4 text-sm leading-6">
            Get beauty tips and updates on new arrivals.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex overflow-hidden rounded-full border border-[#fb5c8c] bg-white focus-within:ring-2 focus-within:ring-[#fb5c8c]/30"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>

            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#1b1b2f] outline-none"
            />

            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="bg-[#fb5c8c] px-4 text-white transition hover:bg-[#ee4579]"
            >
              <FiMail size={18} />
            </button>
          </form>

          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full bg-white p-2 text-[#fb5c8c] transition hover:bg-[#fb5c8c] hover:text-white"
            >
              <FiInstagram size={19} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-white p-2 text-[#fb5c8c] transition hover:bg-[#fb5c8c] hover:text-white"
            >
              <FiFacebook size={19} />
            </a>

            <a
              href="#"
              aria-label="TikTok"
              className="rounded-full bg-white p-2 text-[#fb5c8c] transition hover:bg-[#fb5c8c] hover:text-white"
            >
              <FaTiktok size={19} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#f8c3d3]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs sm:flex-row sm:px-8 sm:text-left">
          <p>
            © 2026 Cherry Cheeks Cosmetic Shop. All rights reserved.
          </p>

          <Link
            to="/terms"
            className="transition hover:text-[#fb5c8c]"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

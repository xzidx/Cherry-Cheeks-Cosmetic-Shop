
import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function RegisterConcept2() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    if (!formData.agreeTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    console.log("Register submitted:", formData);
    alert("Registration form submitted successfully!");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white lg:flex-row">

      {/* LEFT BRAND PANEL */}
      <div className="relative flex min-h-[350px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#F66B87] to-[#e05571] p-6 text-white sm:p-10 lg:min-h-screen lg:w-1/2 lg:p-16">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />

        {/* LOGO */}
        <div className="relative z-10">
          <Link to="/">
            <img
              src={logo}
              alt="Cherry Cheeks"
              className="h-14 w-auto brightness-0 invert sm:h-16"
            />
          </Link>
        </div>

        {/* BRAND CONTENT */}
        <div className="relative z-10 my-auto max-w-md py-12">

          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-medium backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Join Our Community
          </span>

          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Start Your
            <br />
            Beauty Journey
          </h1>

          <p className="text-sm leading-7 text-pink-100 sm:text-base">
            Create an account to save your favorite products, unlock
            exclusive member discounts, and enjoy fast checkout.
          </p>

          {/* BENEFITS */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3 text-sm text-pink-50">
              <ShieldCheck className="h-5 w-5 shrink-0 text-pink-200" />
              <span>100% Authentic Cosmetic Products</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-pink-50">
              <Heart className="h-5 w-5 shrink-0 text-pink-200" />
              <span>Special Rewards & Wishlist Savings</span>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="relative z-10 text-xs text-pink-200">
          © 2026 Cherry Cheeks. All rights reserved.
        </div>
      </div>

      {/* RIGHT REGISTER PANEL */}
      <div className="flex flex-1 flex-col justify-center bg-white px-4 py-12 sm:px-8 lg:w-1/2 lg:px-16">

        <div className="mx-auto w-full max-w-lg">

          {/* HEADING */}
          <div className="mb-8">

            <p className="mb-4 text-sm font-medium text-gray-800 sm:text-base">
              JOIN CHERRY CHEEKS
            </p>

            <h2 className="mb-3 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
              Create an Account
            </h2>

            <p className="text-sm leading-6 text-gray-500 sm:text-base">
              Fill in your information to get started with Cherry Cheeks.
            </p>

          </div>

          {/* REGISTER FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* FULL NAME */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name *
              </label>

              <div className="relative">
                <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]"
                />
              </div>
            </div>

            {/* EMAIL AND PHONE */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address *
                </label>

                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]"
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+855 12 345 678"
                    className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]"
                  />
                </div>
              </div>

            </div>

            {/* PASSWORD AND CONFIRM PASSWORD */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password *
                </label>

                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    required
                    minLength={8}
                    className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-10 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#F66B87]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Confirm Password *
                </label>

                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    required
                    minLength={8}
                    className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-10 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#F66B87]"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* TERMS AND CONDITIONS */}
            <div className="flex items-start gap-3 py-1">

              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 accent-[#F66B87] focus:ring-[#F66B87]"
              />

              <p className="text-sm leading-6 text-gray-500">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-semibold text-[#F66B87] hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-semibold text-[#F66B87] hover:underline"
                >
                  Privacy Policy
                </Link>
              </p>

            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <p className="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-600">
                {error}
              </p>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#F66B87] py-3.5 text-sm font-semibold text-white shadow-md shadow-pink-200 transition hover:bg-[#e05571]"
            >
              Create Account

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

          </form>

          {/* LOGIN LINK */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}

            <Link
              to="/login"
              className="font-semibold text-[#F66B87] transition hover:text-[#e05571] hover:underline"
            >
              Log in here
            </Link>
          </p>

          {/* BACK TO HOME */}
          <div className="mt-8 border-t border-gray-100 pt-6 text-center">
            <Link
              to="/"
              className="text-sm text-gray-400 transition hover:text-[#F66B87]"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

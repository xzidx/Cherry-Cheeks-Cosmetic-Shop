
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

export default function Register() {
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

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (!formData.agreeTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    setError("");

    // Connect your registration API here.
    console.log("Register submitted:", formData);
  };

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]";

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 lg:flex-row">

      {/* LEFT BRAND PANEL */}
      <section className="relative flex min-h-[350px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#F66B87] to-[#E05571] p-6 text-white sm:p-10 lg:min-h-screen lg:w-1/2 lg:p-14">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

        {/* Logo */}
        <div className="relative z-10">
          <Link to="/">
            <img
              src={logo}
              alt="Cherry Cheeks"
              className="h-14 w-auto object-contain brightness-0 invert sm:h-16"
            />
          </Link>
        </div>

        {/* Brand Content */}
        <div className="relative z-10 my-auto max-w-lg py-12">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
            <Sparkles size={15} />
            Join Our Beauty Community
          </div>

          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Start Your
            <br />
            Beauty Journey
          </h1>

          <p className="max-w-md text-sm leading-7 text-white/90 sm:text-base">
            Create an account to explore your favorite products and enjoy
            a more personal shopping experience with Cherry Cheeks.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3 text-sm text-white/95">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <ShieldCheck size={18} />
              </div>
              <span>Explore our cosmetic collections</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/95">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <Heart size={18} />
              </div>
              <span>Save your favorite beauty products</span>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="relative z-10 text-xs text-white/70">
          © 2026 Cherry Cheeks. All rights reserved.
        </div>

      </section>

      {/* RIGHT REGISTER PANEL */}
      <section className="flex flex-1 items-center justify-center px-4 py-10 sm:px-8 lg:w-1/2 lg:px-12 lg:py-12">

        <div className="w-full max-w-lg rounded-xl border border-gray-100 bg-white p-6 shadow-sm sm:p-9">

          {/* Heading */}
          <div className="mb-7">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
              Create Your Account
            </p>

            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Join Cherry Cheeks
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Fill in your information to get started.
            </p>
          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+855 12 345 678"
                    autoComplete="tel"
                    className={inputClass}
                  />
                </div>
              </div>

            </div>

            {/* Password and Confirm Password */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className={`${inputClass} pr-11`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#F66B87]"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    autoComplete="new-password"
                    required
                    className={`${inputClass} pr-11`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#F66B87]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Terms and Conditions */}
            <div className="pt-2">
              <label className="flex cursor-pointer items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 accent-[#F66B87] focus:ring-[#F66B87]"
                />

                <span className="leading-6">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="font-medium text-[#F66B87] hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="font-medium text-[#F66B87] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <p
                role="alert"
                className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </p>
            )}

            {/* Create Account Button */}
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#e05571]"
            >
              Create Account
              <ArrowRight size={18} />
            </button>

          </form>

          {/* Login Link */}
          <div className="mt-7 border-t border-gray-100 pt-6 text-center">

            <p className="text-sm text-gray-500">
              Already have an account?

              <Link
                to="/login"
                className="ml-1 font-semibold text-[#F66B87] transition hover:text-[#e05571] hover:underline"
              >
                Sign In
              </Link>
            </p>

          </div>

          {/* Back to Home */}
          <div className="mt-5 text-center">
            <Link
              to="/"
              className="text-sm text-gray-400 transition hover:text-[#F66B87]"
            >
              ← Back to Home
            </Link>
          </div>

        </div>

      </section>
    </div>
  );
}

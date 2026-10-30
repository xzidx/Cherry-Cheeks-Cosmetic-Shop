
import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your login API here.
    console.log("Login information:", form);
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
            Pure Care & Beauty
          </div>

          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Welcome to
            <br />
            Cherry Cheeks
          </h1>

          <p className="max-w-md text-sm leading-7 text-white/90 sm:text-base">
            Discover gentle, nature-inspired beauty products designed
            to make your everyday skincare routine simple and enjoyable.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3 text-sm text-white/95">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <ShieldCheck size={18} />
              </div>
              <span>Beauty and skincare you can explore</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/95">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <Heart size={18} />
              </div>
              <span>Care for your everyday beauty routine</span>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="relative z-10 text-xs text-white/70">
          © 2026 Cherry Cheeks. All rights reserved.
        </div>

      </section>

      {/* RIGHT LOGIN PANEL */}
      <section className="flex flex-1 items-center justify-center px-4 py-12 sm:px-8 lg:w-1/2 lg:px-12 lg:py-16">

        <div className="w-full max-w-md rounded-xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
              Welcome Back
            </p>

            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Sign In to Your Account
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Enter your email and password to access your account.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

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
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
              </div>
            </div>

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
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className={`${inputClass} pr-12`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#F66B87]"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex flex-wrap items-center justify-between gap-3">

              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 accent-[#F66B87] focus:ring-[#F66B87]"
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-[#F66B87] transition hover:text-[#e05571] hover:underline"
              >
                Forgot password?
              </Link>

            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#e05571]"
            >
              Sign In
              <ArrowRight size={18} />
            </button>

          </form>

          {/* Register Link */}
          <div className="mt-8 border-t border-gray-100 pt-6 text-center">

            <p className="text-sm text-gray-500">
              Don't have an account?
              <Link
                to="/register"
                className="ml-1 font-semibold text-[#F66B87] transition hover:text-[#e05571] hover:underline"
              >
                Create an account
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

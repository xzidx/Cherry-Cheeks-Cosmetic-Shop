
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

export default function LoginConcept2() {
  const [showPassword, setShowPassword] = useState(false);

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
            Pure Care & Beauty
          </span>

          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Welcome to
            <br />
            Cherry Cheeks
          </h1>

          <p className="text-sm leading-7 text-pink-100 sm:text-base">
            Discover gentle, natural beauty products designed for your
            everyday radiance and glow.
          </p>

          {/* BENEFITS */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3 text-sm text-pink-50">
              <ShieldCheck className="h-5 w-5 shrink-0 text-pink-200" />
              <span>100% Authentic Cosmetic Products</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-pink-50">
              <Heart className="h-5 w-5 shrink-0 text-pink-200" />
              <span>Free Delivery on First Orders</span>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="relative z-10 text-xs text-pink-200">
          © 2026 Cherry Cheeks. All rights reserved.
        </div>
      </div>

      {/* RIGHT LOGIN PANEL */}
      <div className="flex flex-1 flex-col justify-center bg-white px-4 py-12 sm:px-8 lg:w-1/2 lg:px-16">

        <div className="mx-auto w-full max-w-md">

          {/* HEADING */}
          <div className="mb-8">

            <p className="mb-4 text-sm font-medium text-gray-800 sm:text-base">
              WELCOME BACK
            </p>

            <h2 className="mb-3 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
              Sign In
            </h2>

            <p className="text-sm leading-6 text-gray-500 sm:text-base">
              Enter your email and password to log into your account.
            </p>

          </div>

          {/* LOGIN FORM */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-lg border border-gray-200 bg-white py-3.5 pl-10 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-200 bg-white py-3.5 pl-10 pr-12 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#F66B87]"
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

            {/* REMEMBER ME */}
            <div className="flex items-center justify-between gap-3 text-sm">

              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-[#F66B87] focus:ring-[#F66B87]"
                />

                <span className="text-gray-500">
                  Remember me
                </span>
              </label>

              <Link
                to="/forgot-password"
                className="font-medium text-[#F66B87] transition hover:text-[#e05571] hover:underline"
              >
                Forgot password?
              </Link>

            </div>

            {/* SIGN IN BUTTON */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#F66B87] py-3.5 text-sm font-semibold text-white shadow-md shadow-pink-200 transition hover:bg-[#e05571]"
            >
              Sign In

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

          </form>

          {/* REGISTER LINK */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}

            <Link
              to="/register"
              className="font-semibold text-[#F66B87] transition hover:text-[#e05571] hover:underline"
            >
              Create one here
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

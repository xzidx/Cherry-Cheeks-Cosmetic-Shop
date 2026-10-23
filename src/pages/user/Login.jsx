import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

export default function LoginConcept2() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans">
      {/* Left Brand Panel */}
      <div 
        className="lg:w-1/2 p-8 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden min-h-[300px] lg:min-h-screen"
        style={{ background: 'linear-gradient(135deg, #F66B87 0%, #E05370 100%)' }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
        
        <div className="relative z-10">
          <img src={logo} alt="Cherry Cheeks" className="h-16 w-auto brightness-0 invert" />
        </div>

        <div className="relative z-10 max-w-md my-auto py-12">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 text-xs font-medium mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pure Care & Beauty</span>
          </span>
          <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
            Welcome to <br /> Cherry Cheeks
          </h1>
          <p className="text-pink-100 text-sm lg:text-base leading-relaxed">
            Discover gentle, natural beauty products designed for your everyday radiance and glow.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center space-x-3 text-xs lg:text-sm text-pink-50">
              <ShieldCheck className="w-4 h-4 text-pink-200" />
              <span>100% Authentic Cosmetic Products</span>
            </div>
            <div className="flex items-center space-x-3 text-xs lg:text-sm text-pink-50">
              <Heart className="w-4 h-4 text-pink-200" />
              <span>Free Delivery on First Orders</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-pink-200">
          &copy; 2026 Cherry Cheeks. All rights reserved.
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="lg:w-1/2 p-8 lg:p-20 bg-white flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Sign in</h2>
            <p className="text-sm text-gray-500 mt-2">Enter your email and password to log into your account.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F66B87]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs py-1">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-[#F66B87] focus:ring-[#F66B87]" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#forgot" className="text-[#F66B87] font-semibold hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              style={{ backgroundColor: '#F66B87' }}
              className="w-full py-4 text-white font-semibold rounded-xl shadow-lg shadow-[#F66B87]/25 hover:opacity-95 transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#F66B87] font-bold hover:underline">
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
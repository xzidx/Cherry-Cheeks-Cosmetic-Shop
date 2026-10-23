import React, { useState } from 'react';
import { User, Mail, Lock, Phone, Eye, EyeOff, Sparkles, ArrowRight, Heart } from 'lucide-react';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0F3] via-pink-50 to-[#FFE4E8] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-5xl bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-white/60">
        
        {/* LEFT COLUMN: Clean White Form Side (Perfect for Pink Logo) */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 bg-white flex flex-col justify-between">
          <div>
            {/* Logo Area */}
            <div className="flex items-center space-x-3 mb-6">
              {/* Replace this div with your <img src="/path-to-logo.png" alt="Cherry Cheeks" className="h-12" /> */}
              <div className="w-12 h-12 bg-[#FFF0F3] rounded-2xl flex items-center justify-center border border-[#F66B87]/20 text-[#F66B87]">
                <Sparkles className="w-6 h-6 fill-[#F66B87]" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight leading-none text-[#F66B87]">Cherry Cheeks</h2>
                <span className="text-[10px] tracking-widest uppercase font-medium text-gray-400">Cosmetic Shop</span>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Create an account</h2>
              <p className="text-xs text-gray-500 mt-1">Fill in your information to get started.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Chan Samnang"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-[#FFF5F7] border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-[#FFF5F7] border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+855 12 345 678"
                      className="w-full pl-10 pr-4 py-2.5 bg-[#FFF5F7] border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Password & Confirm Password Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 pr-10 py-2.5 bg-[#FFF5F7] border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#F66B87] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 pr-10 py-2.5 bg-[#FFF5F7] border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#F66B87] transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center text-xs py-1">
                <label className="flex items-start space-x-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                    className="rounded border-gray-300 text-[#F66B87] focus:ring-[#F66B87] w-4 h-4 mt-0.5"
                  />
                  <span className="text-gray-600">
                    I agree to the{' '}
                    <a href="#terms" className="text-[#F66B87] font-semibold underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#privacy" className="text-[#F66B87] font-semibold underline">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{ backgroundColor: '#F66B87' }}
                className="w-full mt-2 py-3.5 px-4 text-white font-semibold rounded-xl shadow-lg shadow-[#F66B87]/25 hover:opacity-90 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="mt-8 text-center text-xs text-gray-500 pt-4 border-t border-gray-100">
            Already have an account?{' '}
            <a href="/login" className="text-[#F66B87] font-bold hover:underline">
              Sign in here
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Colorful Brand Hero */}
        <div 
          className="lg:col-span-5 p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #F66B87 0%, #E05370 100%)' }}
        >
          {/* Ambient Background Orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white border border-white/20">
              <Heart className="w-3.5 h-3.5 fill-pink-100 text-pink-100" />
              <span>Join Us Today</span>
            </div>
          </div>

          {/* Title / Description */}
          <div className="relative z-10 my-8 lg:my-0">
            <h1 className="text-3xl lg:text-4xl font-black leading-tight mb-3">
              Join Our <br />
              <span className="text-pink-100">Glow Family</span>
            </h1>
            <p className="text-pink-50 text-sm leading-relaxed">
              Create an account to unlock special beauty perks, save your preferences, and order easily.
            </p>
          </div>

          <div className="relative z-10 text-[11px] text-pink-100 pt-4 border-t border-white/15">
            &copy; 2026 Cherry Cheeks. All rights reserved.
          </div>
        </div>

      </div>
    </div>
  );
}
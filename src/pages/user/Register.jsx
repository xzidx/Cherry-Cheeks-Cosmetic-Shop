import React, { useState } from 'react';
import { Mail, Lock, User, Phone, Eye, EyeOff, ArrowRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

export default function RegisterConcept2() {
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
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans">
      
      {/* Left Brand Panel */}
      <div 
        className="lg:w-1/2 p-8 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden min-h-[320px] lg:min-h-screen"
        style={{ background: 'linear-gradient(135deg, #F66B87 0%, #E05370 100%)' }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
        
        {/* Logo Header */}
        <div className="relative z-10">
          <img src={logo} alt="Cherry Cheeks" className="h-16 w-auto brightness-0 invert" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-md my-auto py-10">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 text-xs font-medium mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Team</span>
          </span>
          <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
            Start Your <br /> Beauty Journey
          </h1>
          <p className="text-pink-100 text-sm lg:text-base leading-relaxed">
            Create an account to save your favorite products, unlock exclusive member discounts, and enjoy fast checkout.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center space-x-3 text-xs lg:text-sm text-pink-50">
              <ShieldCheck className="w-4 h-4 text-pink-200" />
              <span>100% Authentic Cosmetic Products</span>
            </div>
            <div className="flex items-center space-x-3 text-xs lg:text-sm text-pink-50">
              <Heart className="w-4 h-4 text-pink-200" />
              <span>Special Rewards & Wishlist Savings</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-xs text-pink-200">
          &copy; 2026 Cherry Cheeks. All rights reserved.
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="lg:w-1/2 p-8 lg:p-16 bg-white flex flex-col justify-center">
        <div className="max-w-lg w-full mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
            <p className="text-sm text-gray-500 mt-2">Fill in your information to get started with Cherry Cheeks.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Chan Samnang"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+855 12 345 678"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Password & Confirm Password Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F66B87]"
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
                  <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F66B87]"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
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
                  <a href="#terms" className="text-[#F66B87] font-semibold hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#privacy" className="text-[#F66B87] font-semibold hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{ backgroundColor: '#F66B87' }}
              className="w-full py-3.5 text-white font-semibold rounded-xl shadow-lg shadow-[#F66B87]/25 hover:opacity-95 transition-all flex items-center justify-center space-x-2 group cursor-pointer mt-2"
            >
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-[#F66B87] font-bold hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
}
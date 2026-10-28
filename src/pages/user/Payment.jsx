import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard, 
  QrCode, 
  Truck, 
  ShieldCheck, 
  Lock, 
  ShoppingBag,
  ChevronDown 
} from 'lucide-react';
import Navbar from '../../components/shared/Navbar';

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState('card');

  return (
    <>
      <Navbar />
      
    <div className="min-h-screen text-slate-800 pt-16 pb-20">
        
        {/* HEADER SECTION */}
        <div className="max-w-7xl mx-auto  mb-10">
            <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs font-bold tracking-widest text-pink-500 uppercase">Checkout</span>
                <div className="w-8 h-[1px] bg-pink-300"></div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                Complete Your Purchase
            </h1>
            <p className="text-slate-500 text-sm">
                Fill in your details and choose your payment method to complete your order.
            </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT FORM COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* STEP PROGRESS BAR */}
            <div className="flex items-center justify-between max-w-6xl mx-auto text-xs font-medium text-slate-500 pb-4">
                <div className="flex items-center space-x-2 text-pink-500 font-bold">
                    <span className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs">1</span>
                    <span>Contact Information</span>
                </div>
                <div className="h-[1px] bg-slate-200 flex-1 mx-4"></div>
                <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs">2</span>
                    <span>Shipping Address</span>
                </div>
                <div className="h-[1px] bg-slate-200 flex-1 mx-4"></div>
                <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs">3</span>
                    <span>Payment Method</span>
                </div>
            </div>

            {/* SECTION 1: CONTACT INFORMATION */}
            <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center">
                        <User size={20} />
                    </div>
                    <div>
                        <h2 className="text-base font-bold text-slate-800">1. Contact Information</h2>
                        <p className="text-xs text-slate-400">Please enter your contact details.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Full Name *</label>
                    <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                        type="text" 
                        placeholder="Enter your full name" 
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-pink-400 transition"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Email Address *</label>
                    <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                        type="email" 
                        placeholder="example@email.com" 
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-pink-400 transition"
                        />
                    </div>
                    </div>
                </div>

              {/* Phone Number */}
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Phone Number *</label>
                    <div className="relative">
                        <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                            type="tel" 
                            placeholder="+855 12 345 678" 
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-pink-400 transition"
                        />
                    </div>
                </div>
            </div>

            {/* SECTION 2: SHIPPING ADDRESS */}
            <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center">
                        <Truck size={20} />
                        </div>
                        <div>
                        <h2 className="text-base font-bold text-slate-800">2. Shipping Address</h2>
                        <p className="text-xs text-slate-400">Where should we deliver your order?</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-600">Full Name *</label>
                        <div className="relative">
                            <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input 
                            type="text" 
                            placeholder="Enter your full name" 
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-pink-400 transition"
                            />
                        </div>
                    </div>

                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Phone Number *</label>
                    <div className="relative">
                            <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input 
                            type="tel" 
                            placeholder="+855 12 345 678" 
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-pink-400 transition"
                            />
                    </div>
                    </div>
            </div>

              {/* Address */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600">Address *</label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Street address, apartment, etc." 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-pink-400 transition"
                  />
                </div>
              </div>

              {/* county / Province / Postal Code */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">County *</label>
                  <div className="relative">
                    <select className="w-full pl-4 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm appearance-none focus:outline-none focus:border-pink-400 transition text-slate-600">
                      <option value="">Select county </option>
                      <option value="phnom-penh">Cambodia</option>
                      <option value="siem-reap">Korean</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">Province *</label>
                  <div className="relative">
                    <select className="w-full pl-4 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm appearance-none focus:outline-none focus:border-pink-400 transition text-slate-600">
                      <option value="">Select province</option>
                      <option value="banteay-meanchey">Banteay Meanchey</option>
                      <option value="battambang">Battambang</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">Postal Code *</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. 12000" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-pink-400 transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: PAYMENT METHOD */}
            <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-800">3. Payment Method</h2>
                  <p className="text-xs text-slate-400">Choose your preferred payment method.</p>
                </div>
              </div>

              {/* Payment Select Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                
                {/* Credit Card */}
                <div 
                  onClick={() => setSelectedPayment('card')}
                  className={`p-3 rounded-xl border cursor-pointer transition flex flex-col justify-between h-28 ${
                    selectedPayment === 'card' 
                      ? 'border-pink-400 bg-pink-50/20 ring-1 ring-pink-400' 
                      : 'border-slate-200 bg-white hover:border-pink-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <input type="radio" checked={selectedPayment === 'card'} readOnly className="accent-pink-500" />
                    <CreditCard size={18} className="text-pink-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-slate-800">Credit / Debit Card</span>
                    <span className="text-[10px] text-slate-400 block">Visa, Mastercard, JCB</span>
                  </div>
                </div>

                {/* KHQR */}
                <div 
                  onClick={() => setSelectedPayment('khqr')}
                  className={`p-3 rounded-xl border cursor-pointer transition flex flex-col justify-between h-28 ${
                    selectedPayment === 'khqr' 
                      ? 'border-pink-400 bg-pink-50/20 ring-1 ring-pink-400' 
                      : 'border-slate-200 bg-white hover:border-pink-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <input type="radio" checked={selectedPayment === 'khqr'} readOnly className="accent-pink-500" />
                    <QrCode size={18} className="text-slate-800" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-slate-800">KHQR</span>
                    <span className="text-[10px] text-slate-400 block">Scan to pay with KHQR</span>
                  </div>
                </div>

                {/* ABA Pay */}
                <div 
                  onClick={() => setSelectedPayment('aba')}
                  className={`p-3 rounded-xl border cursor-pointer transition flex flex-col justify-between h-28 ${
                    selectedPayment === 'aba' 
                      ? 'border-pink-400 bg-pink-50/20 ring-1 ring-pink-400' 
                      : 'border-slate-200 bg-white hover:border-pink-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <input type="radio" checked={selectedPayment === 'aba'} readOnly className="accent-pink-500" />
                    <div className="w-5 h-5 bg-blue-600 rounded text-white text-[9px] font-bold flex items-center justify-center">ABA</div>
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-slate-800">ABA Pay</span>
                    <span className="text-[10px] text-slate-400 block">Pay with ABA Mobile</span>
                  </div>
                </div>

                {/* Cash on Delivery */}
                <div 
                  onClick={() => setSelectedPayment('cod')}
                  className={`p-3 rounded-xl border cursor-pointer transition flex flex-col justify-between h-28 ${
                    selectedPayment === 'cod' 
                      ? 'border-pink-400 bg-pink-50/20 ring-1 ring-pink-400' 
                      : 'border-slate-200 bg-white hover:border-pink-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <input type="radio" checked={selectedPayment === 'cod'} readOnly className="accent-pink-500" />
                    <Truck size={18} className="text-pink-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-slate-800">Cash on Delivery</span>
                    <span className="text-[10px] text-slate-400 block">Pay when you receive</span>
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <button className="w-full bg-pink-400 hover:bg-pink-500 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-pink-200 transition-all flex items-center justify-center space-x-2 text-sm mt-4 cursor-pointer">
                <Lock size={16} />
                <span>Continue to Payment</span>
                <span>→</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY */}
          <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm space-y-6 lg:sticky lg:top-28">
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm">Order Summary</h3>
                <span className="text-xs text-slate-400">2 Items</span>
              </div>
            </div>

            {/* Items List */}
            <div className="space-y-4">
              
              {/* Item 1 */}
              <div className="flex items-center justify-between space-x-3">
                <div className="flex items-center space-x-3">
                  <img 
                    src="src/assets/images/p2.jpg" 
                    alt="Face Cream" 
                    className="w-12 h-12 rounded-lg object-cover bg-pink-50"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Face Cream</h4>
                    <span className="text-[11px] text-slate-400 block">Hydrating Facial Cream</span>
                    <span className="text-[11px] text-slate-400">Qty: 1</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-800">$15.00</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between space-x-3">
                <div className="flex items-center space-x-3">
                  <img 
                    src="src/assets/images/p1 (Copy).png" 
                    alt="Lipstick" 
                    className="w-12 h-12 rounded-lg object-cover bg-pink-50"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Lipstick</h4>
                    <span className="text-[11px] text-slate-400 block">Matte Lipstick - Pink</span>
                    <span className="text-[11px] text-slate-400">Qty: 1</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-800">$20.00</span>
              </div>

            </div>

            {/* Price Calculations */}
            <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">$35.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">$2.00</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
              <span className="font-bold text-slate-800 text-sm">Total</span>
              <span className="font-bold text-pink-500 text-xl">$37.00</span>
            </div>

            {/* Security note */}
            <div className="flex items-center space-x-2 text-[11px] text-slate-400 bg-slate-50 p-3 rounded-xl">
              <ShieldCheck size={16} className="text-pink-400 flex-shrink-0" />
              <span>Your payment information is secure and protected.</span>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
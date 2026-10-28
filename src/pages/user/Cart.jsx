import React, { useState } from 'react';
import { ShoppingBag, CheckCircle2, Sparkles } from 'lucide-react';
import CartItem from '../../components/user/CartItem';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/shared/Footer';

const PROMO_CODES = { GLOW10: 0.1, BEAUTY20: 0.2 };

function OrderSummary({ items = [] }) {
    const [promo, setPromo] = useState('');
    const [discountRate, setDiscountRate] = useState(0);
    const [message, setMessage] = useState('');

    const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const discount = subtotal * discountRate;
    const shipping = subtotal === 0 || subtotal >= 50 ? 0 : 4.99;
    const total = subtotal - discount + shipping;

  return (
        <div className="bg-[#fff5f6] border border-rose-100 rounded-3xl p-6 sm:p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-rose-100">
                Order Summary
            </h2>

            <div className="space-y-3.5 text-sm text-gray-600 font-medium">
                <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                <div className="flex justify-between text-emerald-600">
                    <span>Discount ({discountRate * 100}%)</span>
                    <span>-${discount.toFixed(2)}</span>
                </div>
                )}

                <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-emerald-600">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
                </div>

                <div className="pt-4 border-t border-rose-200 flex justify-between items-baseline">
                <span className="text-base font-extrabold text-gray-900">Total</span>
                <span className="text-2xl font-black text-[#F66B87]">${total.toFixed(2)}</span>
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 space-y-3">
                <button
                disabled={items.length === 0}
                onClick={() => console.log('Checkout', items)}
                className="w-full py-3.5 px-6 rounded-2xl font-bold text-white bg-[#F66B87] hover:bg-rose-600 shadow-lg shadow-rose-200 transition-all disabled:bg-rose-300 disabled:shadow-none disabled:cursor-not-allowed"
                >
                Proceed to Checkout
                </button>

                <button
                onClick={() => console.log('Continue shopping')}
                className="w-full py-3 px-6 rounded-2xl font-bold text-sm text-[#F66B87] border-2 border-rose-200 bg-white hover:bg-rose-50 hover:border-rose-300 transition-colors"
                >
                Continue Shopping
                </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#F66B87]" />
                <span>Free returns within 30 days</span>
            </div>
        </div>
       
    );
}
//    3. Main Shopping Cart Page
const INITIAL_CART = [
  {
    id: '1',
    title: 'Lan Come Lipstick',
    variant: '4.2g • Mblue',
    unitPrice: 29.99,
    quantity: 1,
    imageSrc: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '2',
    title: 'Grow Export Night Cream',
    variant: '4.2g • Mblue',
    unitPrice: 39.99,
    quantity: 1,
    imageSrc: 'src/assets/images/p2.jpg',
  },
  
];
export default function ShoppingCartPage() {
  const [items, setItems] = useState(INITIAL_CART);

  const handleQuantityChange = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };
  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
        <Navbar/>         

        <div className="min-h-screen bg-rose-50/40 text-slate-800 font-sans antialiased pb-16">
        {/* Top Banner */}
        <div className="w-full bg-[#fca5a5]/30 border-b border-rose-100">
            <div className="max-w-7xl mx-auto h-44 md:h-56 flex items-center justify-center space-x-6 px-4">
            <div className="w-16 h-28 md:w-20 md:h-36 bg-white/80 rounded-t-full shadow-md flex items-center justify-center -rotate-6 border border-white/40">
                <div className="w-6 h-6 rounded-full bg-rose-300 border border-rose-400"></div>
            </div>
            <div className="w-14 h-32 md:w-16 md:h-40 bg-white/90 rounded-t-lg shadow-md flex flex-col items-center justify-between p-2 rotate-3 border border-white/50">
                <div className="w-full h-3 bg-rose-200 rounded"></div>
                <div className="w-3 h-10 bg-gray-200 rounded-t"></div>
            </div>
            <div className="w-12 h-24 md:w-16 md:h-32 bg-white/80 rounded-full shadow-md flex items-center justify-center border border-white/40">
                <div className="w-3 h-10 bg-amber-200 rounded-full"></div>
            </div>
            </div>
        </div>

        {/* Main Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 -mt-8 relative z-20">
            <div className="bg-white rounded-3xl shadow-xl border border-rose-100 p-6 md:p-20">
                <div className="mb-8">
                    <span className="text-xs font-bold tracking-widest text-[#F66B87] uppercase block mb-1">
                    Your Shopping Bag
                    </span>
                    <div className="flex items-center justify-between">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">My Cart</h1>
                    <span className="text-sm font-semibold text-[#F66B87] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                        {totalCount} {totalCount === 1 ? 'Item' : 'Items'}
                    </span>
                    </div>
                </div>

                 {/* item  */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">                   
                    {/* Left: Items List using your CartItem component */}
                    <div className="lg:col-span-7 space-y-4">
                        {items.length === 0 ? (
                            <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-rose-200 bg-rose-50/20">
                            <ShoppingBag className="w-14 h-14 mx-auto text-rose-300 mb-3" />
                            <h3 className="text-lg font-bold text-gray-800 mb-1">Your cart is empty</h3>
                            <p className="text-sm text-gray-400">Add items to view them here.</p>
                            </div>
                        ) : (
                            items.map((item) => (
                            <CartItem
                                key={item.id}
                                imageSrc={item.imageSrc}
                                title={item.title}
                                variant={item.variant}
                                price={`$${(item.unitPrice * item.quantity).toFixed(2)}`}
                                quantity={item.quantity}
                                onQuantityChange={(delta) => handleQuantityChange(item.id, delta)}
                                onRemove={() => handleRemoveItem(item.id)}
                                
                            />                          
                            ))
                        )}
                    </div>

                    {/* Right: Order Summary */}
                    <div className="lg:col-span-5">
                        <OrderSummary items={items} />
                    </div>

                </div>
            </div>
        </main>
        </div>
        <Footer/>
    </>
  );
}
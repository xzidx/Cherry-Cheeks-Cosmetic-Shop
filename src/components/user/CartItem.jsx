import React, { useState } from 'react';

export default function CartItem({
  imageSrc = "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=200&q=80",
  title = "Lan Come Lipstick",
  variant = "4.2g • Mblue",
  price = "$30.00",
  initialQuantity = 1,
  onRemove = () => {}
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl shadow-sm w-full max-w-2xl">
      {/* Left side: Image and Details */}
      <div className="flex items-center gap-4">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-20 h-20 object-contain rounded-lg bg-gray-50 p-2"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
          <p className="text-sm text-gray-500 mb-1">{variant}</p>
          <span className="font-semibold text-rose-500 text-lg">{price}</span>
        </div>
      </div>

      {/* Right side: Quantity control and Remove button */}
      <div className="flex flex-col items-end gap-2">
        {/* Quantity Selector */}
        <div className="flex items-center border border-gray-200 rounded-lg bg-white px-2 py-1 shadow-sm">
          <button 
            onClick={handleDecrease}
            className="px-2 text-gray-600 hover:text-black transition-colors text-sm font-medium"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="px-3 text-sm font-semibold text-gray-800">{quantity}</span>
          <button 
            onClick={handleIncrease}
            className="px-2 text-gray-600 hover:text-black transition-colors text-sm font-medium"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <button 
          onClick={onRemove}
          className="text-xs font-medium text-rose-500 hover:text-rose-600 underline underline-offset-2 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
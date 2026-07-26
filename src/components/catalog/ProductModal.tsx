'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';

export function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart } = useShop();
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) return null;

  const handleAdd = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
    setQuantity(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-earth/60 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Container */}
      <div className="bg-linen w-full max-w-4xl rounded-3xl border-2 border-stone shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close button */}
        <button
          onClick={() => { setSelectedProduct(null); setQuantity(1); }}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-linen/90 hover:bg-stone text-wood font-bold flex items-center justify-center shadow-md transition-transform hover:scale-110 cursor-pointer"
          title="Close inspection window"
        >
          ✕
        </button>

        {/* Left: High-Res Image */}
        <div className="md:w-1/2 relative aspect-square md:aspect-auto bg-stone/40 min-h-[280px]">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-linen/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-wood shadow-md border border-stone">
            🌿 100% Authentic Handcraft
          </div>
        </div>

        {/* Right: Details & Craftsmanship */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-6 flex flex-col justify-between">
          
          <div className="space-y-4">
            {/* Header badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-olive/10 text-olive text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedProduct.category}
              </span>
              <span className="bg-stone text-wood text-xs font-semibold px-3 py-1 rounded-full">
                For: {selectedProduct.demographic.join(', ')}
              </span>
              <span className="text-xs font-bold text-wood/80 ml-auto">
                ⭐ {selectedProduct.rating} / 5.0
              </span>
            </div>

            {/* Title & Price */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-earth leading-tight">
                {selectedProduct.name}
              </h2>
              <p className="font-mono text-2xl font-bold text-wood pt-2">
                €{selectedProduct.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-wood/90 leading-relaxed font-normal">
              {selectedProduct.description}
            </p>

            {/* Materials Breakdown */}
            <div className="space-y-2 pt-2 border-t border-stone">
              <h4 className="text-xs font-bold uppercase tracking-wider text-earth flex items-center gap-1.5">
                <span>🐚</span> Raw Materials &amp; Assembly:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProduct.materials.map((mat, i) => (
                  <li key={i} className="text-xs bg-stone/50 px-3 py-2 rounded-xl text-wood font-medium border border-stone/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Heritage Note */}
            <div className="bg-linen p-3.5 rounded-2xl border border-stone/80 text-xs text-wood/80 italic space-y-1">
              <p className="font-bold text-earth not-italic flex items-center gap-1">
                <span>✨</span> Caro &amp; María&apos;s Guarantee
              </p>
              <p>
                Assembled with care in our El Masnou or Mallorca workshops. Need a custom chain length or wrist measurement? Mention it during checkout at no charge!
              </p>
            </div>
          </div>

          {/* Quantity & Add to Tray */}
          <div className="pt-6 border-t border-stone flex items-center gap-4">
            
            {/* Quantity Selector */}
            <div className="flex items-center border border-stone bg-stone/30 rounded-2xl p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-xl hover:bg-stone flex items-center justify-center text-wood font-bold cursor-pointer"
              >
                -
              </button>
              <span className="w-10 text-center font-mono font-bold text-sm text-earth">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-xl hover:bg-stone flex items-center justify-center text-wood font-bold cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Add CTA */}
            <button
              onClick={handleAdd}
              className="flex-1 py-4 bg-wood hover:bg-gold hover:text-earth text-linen font-bold text-sm tracking-wider uppercase rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>🛍️ Add to Tray</span>
              <span className="font-mono opacity-80">(€{(selectedProduct.price * quantity).toFixed(2)})</span>
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

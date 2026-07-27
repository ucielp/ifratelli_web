'use client';

import React from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';

export function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart } = useShop();

  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-earth/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="bg-linen w-full max-w-4xl rounded-3xl border-2 border-stone shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-linen/90 hover:bg-stone text-wood font-bold flex items-center justify-center shadow-md border border-stone transition-transform hover:scale-110 cursor-pointer"
        >
          ✕
        </button>

        {/* Left Column: Image Box */}
        <div className="md:w-1/2 relative bg-stone/50 min-h-[300px] md:min-h-full flex items-center justify-center p-6">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border border-stone">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute top-6 left-6 flex flex-col gap-2">
            {selectedProduct.isNew && (
              <span className="bg-olive text-white text-xs font-bold px-3 py-1 rounded-full shadow-md self-start">
                New
              </span>
            )}
            {selectedProduct.isFeatured && (
              <span className="bg-linen/90 backdrop-blur-md text-wood text-xs font-bold px-3 py-1 rounded-full border border-stone shadow-md self-start">
                Popular
              </span>
            )}
          </div>

          <div className="absolute bottom-6 left-6 right-6 bg-earth/80 backdrop-blur-md text-linen p-3 rounded-2xl flex items-center justify-between text-xs font-mono">
            <span>Made in Spain</span>
            <span>Since 1998</span>
          </div>
        </div>

        {/* Right Column: Details & Narrative */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-6 flex flex-col justify-between text-wood">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-olive font-mono">
              <span>{selectedProduct.category}</span>
              <span className="text-wood/70 font-normal">⭐ {selectedProduct.rating} / 5.0</span>
            </div>

            <h2 className="font-serif text-3xl font-bold text-earth leading-tight">
              {selectedProduct.name}
            </h2>

            <div className="font-mono text-2xl font-bold text-gold">
              €{selectedProduct.price.toFixed(2)}
              <span className="text-xs font-normal text-wood/60 ml-2 block sm:inline font-sans">
                (Free shipping over €60)
              </span>
            </div>

            <p className="text-sm sm:text-base text-wood/90 leading-relaxed pt-2 border-t border-stone/80">
              {selectedProduct.description}
            </p>

            {/* Materials List */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-earth">
                Materials:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="bg-stone/50 text-earth text-xs font-medium px-3 py-1.5 rounded-xl border border-stone shadow-2xs"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Artisan Guarantee Box */}
            <div className="p-4 bg-stone/30 rounded-2xl border border-stone/80 text-xs space-y-1 text-wood">
              <p className="font-bold text-earth">Custom Sizing</p>
              <p className="text-wood/80 leading-relaxed">
                Need a longer cord or adjustment? Leave a note at checkout or ask us at any market stall and we will adjust the size for free.
              </p>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 mt-6 border-t border-stone space-y-3">
            <button
              onClick={() => {
                addToCart(selectedProduct, 1);
                setSelectedProduct(null);
              }}
              className="w-full py-4 bg-wood hover:bg-gold hover:text-earth text-linen font-bold text-xs tracking-wider uppercase rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Add to Cart (€{selectedProduct.price.toFixed(2)})</span>
              <span>&rarr;</span>
            </button>
            <button
              onClick={() => setSelectedProduct(null)}
              className="w-full py-2.5 bg-transparent hover:bg-stone/50 text-wood/80 font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
            >
              Continue Exploring
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

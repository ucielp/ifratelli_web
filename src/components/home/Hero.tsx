'use client';

import React from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { MOCK_PRODUCTS } from '@/lib/mock-data';

export function Hero() {
  const { setSelectedProduct, addToCart } = useShop();
  
  // Featured hero piece: item-01 (1998 Heritage Cowrie Necklace)
  const featuredPiece = MOCK_PRODUCTS[0];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-stone/40 via-linen to-linen">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-olive/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: The 1998 Thesis & Heritage */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone/70 border border-stone text-xs font-semibold tracking-wider text-earth uppercase animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Born in Rosario 1998 • Crafted in El Masnou &amp; Mallorca</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-earth leading-[1.08]">
              Tactile Warmth of the <span className="italic font-bold bg-gradient-to-r from-wood via-earth to-olive bg-clip-text text-transparent">Mediterranean</span>
            </h1>

            <p className="text-base sm:text-lg text-wood font-sans font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              When sisters <strong className="text-earth font-semibold">Caro</strong> and <strong className="text-earth font-semibold">María</strong> began crafting jewelry at ages 15 and 8 in Rosario, Argentina, they learned their mother&apos;s secret: authentic Mediterranean quality is felt in the weight of natural cowrie shells, smooth Mallorca olive wood, and raw cotton cords.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#catalog"
                className="w-full sm:w-auto px-8 py-4 bg-wood hover:bg-gold hover:text-earth text-linen font-bold text-xs uppercase tracking-widest rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl text-center cursor-pointer transform hover:-translate-y-0.5"
              >
                Explore The Tray &rarr;
              </a>
              <a
                href="#story"
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-stone/50 text-earth font-bold text-xs uppercase tracking-widest rounded-2xl border-2 border-stone transition-all duration-300 text-center cursor-pointer"
              >
                Our 28-Year Story
              </a>
            </div>

            {/* Micro-badges */}
            <div className="pt-8 border-t border-stone/80 grid grid-cols-3 gap-4 text-center lg:text-left text-xs text-wood font-medium">
              <div>
                <span className="block font-serif text-lg font-bold text-earth">Free Shipping</span>
                <span className="text-[11px] opacity-80">On orders over €60</span>
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-earth">Custom Sizing</span>
                <span className="text-[11px] opacity-80">Free adjustments</span>
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-earth">Weekly Fairs</span>
                <span className="text-[11px] opacity-80">Mallorca &amp; El Masnou</span>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Heritage Piece */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-linen bg-stone/50 group">
              <Image
                src={featuredPiece.image}
                alt={featuredPiece.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-transparent to-transparent opacity-90" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 text-linen space-y-2">
                <div className="flex items-center justify-between">
                  <span className="bg-gold text-earth text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Featured 1998 Heritage Piece
                  </span>
                  <span className="font-mono text-lg font-bold text-gold">
                    €{featuredPiece.price.toFixed(2)}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold">
                  {featuredPiece.name}
                </h3>
                
                <p className="text-xs text-linen/80 line-clamp-2">
                  {featuredPiece.description}
                </p>

                <div className="pt-2 flex gap-2">
                  <button
                    onClick={() => setSelectedProduct(featuredPiece)}
                    className="flex-1 py-2.5 bg-linen/20 hover:bg-linen/30 backdrop-blur-md text-linen rounded-xl text-xs font-bold transition-colors cursor-pointer border border-linen/30"
                  >
                    Inspect Craftsmanship
                  </button>
                  <button
                    onClick={() => addToCart(featuredPiece, 1)}
                    className="px-4 py-2.5 bg-gold hover:bg-white text-earth font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    + Add to Tray
                  </button>
                </div>
              </div>

              {/* Top Right Tag */}
              <div className="absolute top-4 right-4 bg-linen/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-wood shadow-sm border border-stone">
                100% Authentic Handcraft
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-linen p-4 rounded-2xl shadow-xl border border-stone hidden sm:flex items-center gap-3 animate-float">
              <span className="text-2xl">🐚</span>
              <div>
                <p className="font-bold text-xs text-earth">El Masnou Studio</p>
                <p className="text-[10px] text-wood/80 font-mono">Ready for custom orders</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

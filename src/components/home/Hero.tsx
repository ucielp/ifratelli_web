'use client';

import React from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { MOCK_PRODUCTS } from '@/lib/mock-data';

export function Hero() {
  const { addToCart, setSelectedProduct } = useShop();
  const featuredProduct = MOCK_PRODUCTS[0]; // Rosario Sunlit Cowrie Necklace

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-linen via-linen to-stone/30 border-b border-stone">
      {/* Subtle organic background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-olive/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Thesis & Story Headline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone/80 border border-wood/20 text-wood text-xs font-semibold tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
              <span>Handcrafted in Mallorca &amp; El Masnou</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-earth leading-[1.05] tracking-tight">
              From Rosario to <br className="hidden sm:inline" />
              <span className="font-bold italic text-wood bg-gradient-to-r from-wood via-olive to-wood bg-clip-text">
                the Mediterranean
              </span> since 1998.
            </h1>

            <p className="text-base sm:text-lg text-wood/80 max-w-xl font-normal leading-relaxed">
              Sisters Caro &amp; María blend artisanal family heritage with sunlit organic textures. Raw olive wood, authentic cowrie shells, woven linen, and warm gold—accessible luxury designed to touch the soul.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={scrollToCatalog}
                className="px-8 py-4 bg-wood hover:bg-earth text-linen font-medium rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm tracking-wide cursor-pointer flex items-center gap-2 group"
              >
                <span>Explore The Artisan&apos;s Tray</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>

              <a
                href="#story"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-4 bg-stone/70 hover:bg-stone text-wood font-medium rounded-2xl transition-all duration-200 text-sm border border-wood/10"
              >
                Read Our Story (1998)
              </a>
            </div>

            {/* Quick trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-stone/80 max-w-lg text-wood">
              <div>
                <p className="font-serif font-bold text-lg text-earth">€8 – €30</p>
                <p className="text-xs text-wood/70 font-medium">Accessible Luxury</p>
              </div>
              <div>
                <p className="font-serif font-bold text-lg text-gold">FREE &gt; €60</p>
                <p className="text-xs text-wood/70 font-medium">Mallorca &amp; BCN Shipping</p>
              </div>
              <div>
                <p className="font-serif font-bold text-lg text-olive">100% Raw</p>
                <p className="text-xs text-wood/70 font-medium">Natural Materials</p>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Artisan Card ("The Tray" Preview) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card with Cowrie Shell Rounding */}
              <div className="bg-linen p-4 sm:p-6 rounded-3xl border-2 border-stone shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-500 group">
                
                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-stone/40 mb-5">
                  <Image
                    src={featuredProduct.image}
                    alt={featuredProduct.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute top-3 left-3 bg-linen/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-wood shadow-sm border border-stone">
                    ✨ Featured 1998 Piece
                  </div>
                  <div className="absolute bottom-3 right-3 bg-earth/80 backdrop-blur-md text-linen px-3 py-1 rounded-full text-sm font-mono font-bold shadow-md">
                    €{featuredProduct.price.toFixed(2)}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-bold text-olive">
                      {featuredProduct.category} • {featuredProduct.demographic.join(' / ')}
                    </span>
                    <span className="text-xs text-wood/70 font-medium">⭐ {featuredProduct.rating}</span>
                  </div>

                  <h3 
                    onClick={() => setSelectedProduct(featuredProduct)}
                    className="font-serif text-2xl font-bold text-earth cursor-pointer hover:text-gold transition-colors"
                  >
                    {featuredProduct.name}
                  </h3>

                  <p className="text-xs text-wood/80 line-clamp-2 leading-relaxed">
                    {featuredProduct.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredProduct.materials.map((mat, i) => (
                      <span key={i} className="text-[10px] bg-stone/70 text-wood px-2 py-0.5 rounded-md border border-stone">
                        {mat}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 flex gap-2">
                    <button
                      onClick={() => addToCart(featuredProduct)}
                      className="flex-1 py-3 bg-wood hover:bg-gold hover:text-earth text-linen font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>🛍️ Add to Tray</span>
                    </button>
                    <button
                      onClick={() => setSelectedProduct(featuredProduct)}
                      className="px-4 py-3 bg-stone hover:bg-stone/80 text-wood font-medium text-xs rounded-xl transition-colors"
                    >
                      Inspect &rarr;
                    </button>
                  </div>
                </div>

              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-glass-card p-4 rounded-2xl border border-stone shadow-lg hidden sm:flex items-center gap-3 max-w-xs animate-float">
                <div className="w-10 h-10 rounded-full bg-olive/20 flex items-center justify-center text-xl shrink-0">
                  🌿
                </div>
                <div>
                  <p className="text-xs font-bold text-earth">Sisters Caro &amp; María</p>
                  <p className="text-[11px] text-wood/80">Handmade with love for 28+ years</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

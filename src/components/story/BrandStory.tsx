'use client';

import React from 'react';
import Image from 'next/image';

export function BrandStory() {
  return (
    <section id="story" className="py-24 bg-stone/40 border-t border-b border-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Founders Portrait */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none aspect-4/3 sm:aspect-16/10 rounded-3xl overflow-hidden shadow-2xl border-4 border-linen bg-stone transform -rotate-1 hover:rotate-0 transition-transform duration-700">
              <Image
                src="/foundrs.jpg"
                alt="Founders Caro and María in their artisan workshop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-linen space-y-1">
                <span className="bg-gold text-earth font-mono font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Rosario • 1998
                </span>
                <p className="font-serif text-2xl font-bold">Sisters Caro &amp; María</p>
                <p className="text-xs opacity-90 font-sans">
                  Continuing their mother&apos;s passion for tactile materials and warm community.
                </p>
              </div>
            </div>

            {/* Decorative stamp */}
            <div className="absolute -top-6 -right-6 bg-linen p-4 rounded-2xl border border-stone shadow-lg hidden sm:block rotate-6">
              <p className="font-serif font-bold text-sm text-earth">ifratelli</p>
              <p className="text-[10px] font-mono text-olive font-semibold">28+ YEARS OF CRAFT</p>
            </div>
          </div>

          {/* Right: The Narrative */}
          <div className="lg:col-span-6 space-y-6 text-wood">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen border border-stone text-xs font-bold tracking-wider uppercase text-olive">
              <span>🌿</span>
              <span>Our Family Heritage</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-earth tracking-tight leading-tight">
              A Sisterhood Woven in <span className="italic font-bold bg-gradient-to-r from-wood to-olive bg-clip-text text-transparent">Raw Earth</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-wood/90">
              <p>
                The story of <strong className="text-earth font-bold">ifratelli accesorios</strong> began in 1998 in Rosario, Argentina. Inspired and mentored by their mother, <strong className="text-earth">Caro</strong> took up the craft at just 15 years old, while younger sister <strong className="text-earth">María</strong> began helping at age 8.
              </p>
              <p>
                The brand name <em className="font-serif font-bold text-earth">&quot;ifratelli&quot;</em> (meaning siblings or brothers) is a heartfelt tribute to their enduring family bond. What started around a family table in Argentina has blossomed across the Mediterranean—now operating out of sunlit workshops in <strong className="text-earth">Mallorca and El Masnou, Spain</strong>.
              </p>
              <p>
                Whether displayed on light bamboo stands in local clothing fairs or wrapped in raw linen for our online customers, every piece is designed to offer authentic, accessible luxury that feels as warm as the Spanish coast.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-stone/80 text-xs">
              <div className="bg-linen p-3.5 rounded-2xl border border-stone">
                <p className="font-bold text-earth text-sm font-serif">Rosario, 1998</p>
                <p className="text-wood/70 mt-0.5">Where our mother taught us the first knot.</p>
              </div>
              <div className="bg-linen p-3.5 rounded-2xl border border-stone">
                <p className="font-bold text-earth text-sm font-serif">El Masnou</p>
                <p className="text-wood/70 mt-0.5">Our permanent Barcelona area studio &amp; market.</p>
              </div>
              <div className="bg-linen p-3.5 rounded-2xl border border-stone col-span-2 sm:col-span-1">
                <p className="font-bold text-earth text-sm font-serif">Mallorca Fairs</p>
                <p className="text-wood/70 mt-0.5">Summer artisan pop-ups across the island.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

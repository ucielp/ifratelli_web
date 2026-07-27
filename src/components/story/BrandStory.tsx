'use client';

import React from 'react';
import Image from 'next/image';

export function BrandStory() {
  return (
    <section id="story" className="py-20 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Brand Logo Header in Our Story Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="relative w-72 sm:w-80 h-16 sm:h-20 mx-auto">
            <Image
              src="/ifratelli_logo.svg"
              alt="ifratelli accesorios logo"
              fill
              sizes="320px"
              className="object-contain"
            />
          </div>
          <p className="text-xs font-bold tracking-widest uppercase text-olive font-mono bg-stone/40 px-4 py-1 rounded-full inline-block border border-stone">
            Est. Rosario 1998
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Founders Portrait */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none aspect-4/3 sm:aspect-16/10 rounded-3xl overflow-hidden shadow-xl border-2 border-stone bg-stone">
              <Image
                src="/foundrs.jpg"
                alt="Founders Caro and María in their workshop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-linen space-y-1">
                <span className="bg-gold text-earth font-mono font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Rosario • 1998
                </span>
                <p className="font-serif text-2xl font-bold">Sisters Caro &amp; María</p>
                <p className="text-xs opacity-90 font-sans">
                  Making jewelry together for over 28 years.
                </p>
              </div>
            </div>

            {/* Decorative stamp */}
            <div className="absolute -top-6 -right-6 bg-linen p-4 rounded-2xl border border-stone shadow-md hidden sm:block rotate-6">
              <p className="font-serif font-bold text-sm text-earth">ifratelli</p>
              <p className="text-[10px] font-mono text-olive font-semibold">EST. 1998</p>
            </div>
          </div>

          {/* Right: The Narrative */}
          <div className="lg:col-span-6 space-y-6 text-wood">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone/40 border border-stone text-xs font-bold tracking-wider uppercase text-olive">
              <span>Sisters &amp; Founders</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-earth tracking-tight leading-tight">
              Our Story
            </h1>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-wood/90">
              <p>
                We are sisters <strong className="text-earth font-bold">Caro</strong> and <strong className="text-earth font-bold">María</strong>. We started making jewelry together in Rosario, Argentina back in 1998 when Caro was 15 and María was 8, learning from our mother around the kitchen table.
              </p>
              <p>
                The name <em className="font-serif font-bold text-earth">&quot;ifratelli&quot;</em> means siblings or brothers, celebrating our family roots and bond. Over the years, our workshop moved from Argentina to Spain. Now we design and make all our pieces by hand in our studios in <strong className="text-earth">Mallorca and El Masnou, Barcelona</strong>.
              </p>
              <p>
                We sell our jewelry at local weekend markets and here online. Every piece is assembled by us using natural shells, wood, freshwater pearls, and durable cords. If you ever need a custom size or adjustment, just let us know!
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-stone/80 text-xs">
              <div className="bg-stone/30 p-3.5 rounded-2xl border border-stone">
                <p className="font-bold text-earth text-sm font-serif">Rosario, 1998</p>
                <p className="text-wood/70 mt-0.5">Where we started making jewelry at home.</p>
              </div>
              <div className="bg-stone/30 p-3.5 rounded-2xl border border-stone">
                <p className="font-bold text-earth text-sm font-serif">El Masnou</p>
                <p className="text-wood/70 mt-0.5">Our Barcelona area workshop and market stall.</p>
              </div>
              <div className="bg-stone/30 p-3.5 rounded-2xl border border-stone col-span-2 sm:col-span-1">
                <p className="font-bold text-earth text-sm font-serif">Mallorca</p>
                <p className="text-wood/70 mt-0.5">Our island workshop and summer markets.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

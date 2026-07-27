'use client';

import React from 'react';
import Image from 'next/image';

export function InstagramFeed() {
  return (
    <section id="instagram" className="py-16 sm:py-20 bg-stone/20 border-t border-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          
          <a
            href="https://www.instagram.com/ifratelliaccesorios/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-linen hover:bg-stone px-5 py-2.5 rounded-full border border-stone shadow-xs hover:shadow-md transition-all duration-300 text-wood font-mono text-xs font-bold uppercase tracking-wider group cursor-pointer"
            title="Visit @ifratelli.accesorios on Instagram"
          >
            <div className="relative w-5 h-5 transition-transform group-hover:scale-110">
              <Image src="/icons/instagram.png" alt="Instagram" fill sizes="20px" className="object-contain" />
            </div>
            <span className="group-hover:text-earth transition-colors">@ifratelli.accesorios</span>
            <span className="text-gold font-sans">&rarr;</span>
          </a>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-earth tracking-tight">
            Follow Us on Instagram
          </h2>
          <p className="text-xs sm:text-sm text-wood/80 max-w-md mx-auto leading-relaxed">
            See what Caro and María are making this week in the studio or at the market stalls.
          </p>
        </div>
      </div>
    </section>
  );
}

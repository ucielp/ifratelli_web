'use client';

import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-earth text-linen pt-16 pb-12 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone/20">
          
          {/* Col 1: Brand & Heritage */}
          <div className="md:col-span-4 space-y-4">
            <div className="relative w-48 sm:w-56 h-12">
              <Image
                src="/ifratelli_logo.svg"
                alt="ifratelli accesorios logo"
                fill
                sizes="224px"
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-xs sm:text-sm text-stone/80 font-sans leading-relaxed">
              Handcrafted Mediterranean jewelry born in Rosario, Argentina in 1998. Sisters Caro &amp; María continue their mother&apos;s legacy from sunlit workshops in El Masnou and Mallorca, Spain.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-gold font-mono">
              <span>100% Artisanal Craft</span>
              <span>•</span>
              <span>Raw Shells &amp; Wood</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-gold tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone/80">
              <li><a href="#catalog" className="hover:text-gold transition-colors">The Artisan&apos;s Tray (Catalog)</a></li>
              <li><a href="#story" className="hover:text-gold transition-colors">Our Family Story (Rosario 1998)</a></li>
              <li><a href="#events" className="hover:text-gold transition-colors">Summer Fairs &amp; Markets</a></li>
              <li><a href="#instagram" className="hover:text-gold transition-colors">Instagram Styling Ideas</a></li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Custom Orders */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-gold tracking-wide">
              Sisters&apos; Guarantee
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone/80">
              <li>Free shipping on orders over €60</li>
              <li>Custom sizing &amp; adjustments included</li>
              <li>Direct chat with Caro &amp; María</li>
              <li>Pickup available at local fairs</li>
            </ul>
          </div>

          {/* Col 4: Community & Social (Featuring official links & Joaquín's custom PNG icons!) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-bold text-gold tracking-wide">
              Community
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/ifratelliaccesorios/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone/10 hover:bg-gold hover:text-earth rounded-2xl transition-all duration-300 transform hover:scale-110"
                title="Follow on Instagram"
              >
                <div className="relative w-6 h-6">
                  <Image src="/icons/instagram.png" alt="Instagram" fill sizes="24px" className="object-contain" />
                </div>
              </a>
              <a
                href="https://www.facebook.com/people/Ifratelli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone/10 hover:bg-gold hover:text-earth rounded-2xl transition-all duration-300 transform hover:scale-110"
                title="Follow on Facebook"
              >
                <div className="relative w-6 h-6">
                  <Image src="/icons/facebook.png" alt="Facebook" fill sizes="24px" className="object-contain" />
                </div>
              </a>
              <a
                href="https://wa.me/34623993745?text=Hola%20Caro%20y%20María!%20Vengo%20de%20la%20web%20ifratelli."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone/10 hover:bg-gold hover:text-earth rounded-2xl transition-all duration-300 transform hover:scale-110"
                title="Chat on WhatsApp (+34 623 99 37 45)"
              >
                <div className="relative w-6 h-6">
                  <Image src="/icons/whatsapp.png" alt="WhatsApp" fill sizes="24px" className="object-contain" />
                </div>
              </a>
            </div>
            <p className="text-[11px] text-stone/60">
              Tag <strong className="text-stone">#ifratelli</strong> to be featured!
            </p>
          </div>

        </div>

        {/* REQUIRED ATTRIBUTION BANNER (Constraint 6) */}
        <div className="mt-8 pt-4 text-center">
          <div className="inline-block bg-stone/10 border border-stone/20 rounded-2xl px-6 py-3.5 shadow-inner">
            <p className="text-xs sm:text-sm font-mono tracking-wide text-linen/90 font-semibold">
              💻 Designed with ❤️ by <span className="text-gold font-bold">Joaquín (10)</span> | Built with ⚙️ by <span className="text-gold font-bold">Marco (10)</span>
            </p>
          </div>
          <p className="text-[11px] text-stone/50 mt-4">
            &copy; {new Date().getFullYear()} ifratelli accesorios. All rights reserved. El Masnou &amp; Mallorca, Spain.
          </p>
        </div>

      </div>
    </footer>
  );
}

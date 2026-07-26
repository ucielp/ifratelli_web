'use client';

import React from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';

export function Footer() {
  const { setIsChatOpen } = useShop();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone/60 border-t border-stone pt-16 pb-12 mt-24 text-wood">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Heritage */}
          <div className="md:col-span-1 space-y-4">
            <div className="relative w-40 h-10">
              <Image
                src="/ifratelli_logo.svg"
                alt="ifratelli accesorios"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs leading-relaxed text-wood/80 font-sans">
              Handcrafted Mediterranean jewelry born in Rosario in 1998. Sisters Caro &amp; María create accessible luxury using natural wood, cowrie shells, linen, and warm gold.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#instagram"
                onClick={(e) => { e.preventDefault(); scrollTo('instagram'); }}
                className="p-2 bg-linen rounded-full hover:scale-110 transition-transform shadow-sm"
                title="Instagram"
              >
                <div className="relative w-5 h-5">
                  <Image src="/icons/instagram.png" alt="Instagram" fill className="object-contain" />
                </div>
              </a>
              <a
                href="#facebook"
                onClick={(e) => { e.preventDefault(); alert('Follow us on Facebook @ifratelli.accesorios!'); }}
                className="p-2 bg-linen rounded-full hover:scale-110 transition-transform shadow-sm"
                title="Facebook"
              >
                <div className="relative w-5 h-5">
                  <Image src="/icons/facebook.png" alt="Facebook" fill className="object-contain" />
                </div>
              </a>
              <button
                onClick={() => setIsChatOpen(true)}
                className="p-2 bg-linen rounded-full hover:scale-110 transition-transform shadow-sm cursor-pointer"
                title="Chat with us on WhatsApp"
              >
                <div className="relative w-5 h-5">
                  <Image src="/icons/whatsapp.png" alt="WhatsApp" fill className="object-contain" />
                </div>
              </button>
            </div>
          </div>

          {/* Col 2: The Collection */}
          <div>
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase mb-4 text-earth">
              The Collection
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => scrollTo('catalog')} className="hover:text-gold transition-colors">All Necklaces</button></li>
              <li><button onClick={() => scrollTo('catalog')} className="hover:text-gold transition-colors">Woven Bracelets</button></li>
              <li><button onClick={() => scrollTo('catalog')} className="hover:text-gold transition-colors">Baroque Pearl Earrings</button></li>
              <li><button onClick={() => scrollTo('catalog')} className="hover:text-gold transition-colors">Coastal Anklets</button></li>
              <li><button onClick={() => scrollTo('catalog')} className="hover:text-gold transition-colors">Eyeglass Holders</button></li>
            </ul>
          </div>

          {/* Col 3: Workshops & Markets */}
          <div>
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase mb-4 text-earth">
              Workshops &amp; Markets
            </h4>
            <ul className="space-y-2 text-xs text-wood/80">
              <li className="font-medium text-wood">📍 El Masnou Studio</li>
              <li>Carrer de la Mar, Barcelona</li>
              <li className="font-medium text-wood pt-2">📍 Mallorca Summer Fairs</li>
              <li>Port de Sóller &amp; Palma de Mallorca</li>
              <li className="pt-2">
                <button onClick={() => scrollTo('events')} className="text-olive font-bold underline hover:text-gold transition-colors">
                  View upcoming dates &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Care & Shipping */}
          <div>
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase mb-4 text-earth">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-wood/80">
              <li className="flex items-center gap-1.5 text-gold font-bold">
                ✨ FREE Shipping &gt; €60
              </li>
              <li>Barcelona Area &amp; Mallorca delivery</li>
              <li>Custom sizing available on request</li>
              <li>Gold-plating care guide</li>
              <li className="pt-2">
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="bg-wood text-linen px-3 py-1.5 rounded-lg font-medium text-xs hover:bg-olive transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>💬 Ask our Artisan Bot</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Signature */}
        <div className="border-t border-stone/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-wood/90 bg-linen/50 p-6 rounded-2xl border border-stone shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-olive animate-pulse"></span>
            <span>© 1998–2026 ifratelli accesorios. All rights reserved.</span>
          </div>
          <div className="font-bold tracking-wide text-center sm:text-right text-earth bg-gradient-to-r from-wood via-olive to-wood bg-clip-text text-transparent px-3 py-1 rounded bg-stone/40">
            💻 Designed with ❤️ by Joaquín (10) | Built with ⚙️ by Marco (10)
          </div>
        </div>
      </div>
    </footer>
  );
}

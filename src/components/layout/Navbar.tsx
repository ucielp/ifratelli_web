'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';

export function Navbar() {
  const { cartCount, setIsCartOpen, setIsAuthOpen, user } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Prominently Displayed Brand Logo (Scaled up per instructions) */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="relative w-56 sm:w-72 h-14 sm:h-16 transition-transform group-hover:scale-102">
            <Image
              src="/ifratelli_logo.svg"
              alt="ifratelli accesorios"
              fill
              sizes="288px"
              className="object-contain object-left"
              priority
            />
          </div>
          <span className="hidden xl:inline-block text-xs font-serif italic text-wood px-2.5 py-1 rounded bg-stone/50 border border-stone">
            Rosario 1998 • Mallorca
          </span>
        </div>

        {/* Navigation Links (Clean & Professional without decorative emojis) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-wood">
          <button
            onClick={() => scrollTo('catalog')}
            className="hover:text-gold transition-colors cursor-pointer tracking-wide uppercase text-xs font-semibold"
          >
            The Artisan&apos;s Tray
          </button>
          <button
            onClick={() => scrollTo('story')}
            className="hover:text-gold transition-colors cursor-pointer tracking-wide uppercase text-xs font-semibold"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollTo('events')}
            className="hover:text-gold transition-colors cursor-pointer tracking-wide uppercase text-xs font-semibold flex items-center gap-1.5"
          >
            Fairs &amp; Events
            <span className="bg-olive text-white text-[10px] px-1.5 py-0.2 rounded-full uppercase tracking-wider font-bold">Live</span>
          </button>
          <button
            onClick={() => scrollTo('instagram')}
            className="hover:text-gold transition-colors cursor-pointer tracking-wide uppercase text-xs font-semibold"
          >
            Styling
          </button>
        </nav>

        {/* Custom UI Icons by Joaquín (age 10) */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search Trigger */}
          <button
            onClick={() => scrollTo('catalog')}
            className="p-2 hover:bg-stone/60 rounded-full transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            title="Search jewelry catalog"
          >
            <div className="relative w-6 h-6">
              <Image
                src="/icons/search.png"
                alt="Search"
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>
          </button>

          {/* User Account / Profile (Joaquín's custom user.png) */}
          <button
            onClick={() => setIsAuthOpen(true)}
            className="p-2 hover:bg-stone/60 rounded-full transition-transform hover:scale-110 active:scale-95 relative flex items-center gap-1.5 cursor-pointer"
            title={user ? `Logged in as ${user.name}` : 'Sign In / Register'}
          >
            <div className="relative w-6 h-6">
              <Image
                src="/icons/user.png"
                alt="User Profile"
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>
            {user && (
              <span className="hidden sm:inline text-xs font-medium text-wood max-w-[80px] truncate">
                {user.name.split(' ')[0]}
              </span>
            )}
          </button>

          {/* Cart Tray Button (Joaquín's custom shop.png) */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-stone hover:bg-wood hover:text-linen text-wood rounded-2xl transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md group cursor-pointer"
            title="Open Shopping Tray"
          >
            <div className="relative w-6 h-6 transition-transform group-hover:scale-110">
              <Image
                src="/icons/shop.png"
                alt="Shopping Tray"
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>
            <span className="text-xs font-bold font-mono">
              Tray
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-earth font-mono font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

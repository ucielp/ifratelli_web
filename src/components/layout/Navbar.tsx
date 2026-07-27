'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-xs'
          : 'bg-linen/90 backdrop-blur-md py-4 border-b border-stone/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Prominently Displayed Brand Logo */}
        <Link 
          href="/"
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="relative w-56 sm:w-64 h-12 sm:h-14 transition-transform group-hover:scale-102">
            <Image
              src="/ifratelli_logo.svg"
              alt="ifratelli accesorios"
              fill
              sizes="256px"
              className="object-contain object-left"
              priority
            />
          </div>
          <span className="hidden lg:inline-block text-[11px] font-serif italic text-wood px-2.5 py-0.5 rounded bg-stone/50 border border-stone">
            Rosario 1998 • Mallorca
          </span>
        </Link>

        {/* Clean Route Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-wood">
          <Link
            href="/"
            className="hover:text-earth transition-colors cursor-pointer tracking-wide uppercase text-xs font-bold"
          >
            Shop
          </Link>
          <Link
            href="/story"
            className="hover:text-earth transition-colors cursor-pointer tracking-wide uppercase text-xs font-bold"
          >
            Our Story
          </Link>
          <Link
            href="/fairs"
            className="hover:text-earth transition-colors cursor-pointer tracking-wide uppercase text-xs font-bold flex items-center gap-1.5"
          >
            Fairs &amp; Markets
            <span className="bg-olive text-white text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">Live</span>
          </Link>
        </nav>

        {/* Custom UI Icons by Joaquín (age 10) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Trigger (links to shop catalog) */}
          <Link
            href="/"
            className="p-2 hover:bg-stone/60 rounded-full transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            title="Search jewelry collection"
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <Image
                src="/icons/search.png"
                alt="Search"
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* User Account / Profile (Joaquín's custom user.png) */}
          <button
            onClick={() => setIsAuthOpen(true)}
            className="p-2 hover:bg-stone/60 rounded-full transition-transform hover:scale-110 active:scale-95 relative flex items-center gap-1.5 cursor-pointer"
            title={user ? `Logged in as ${user.name}` : 'Sign In / Register'}
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
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
            className="relative px-3 py-2 bg-stone hover:bg-wood hover:text-linen text-wood rounded-2xl transition-all duration-300 flex items-center gap-2 shadow-2xs hover:shadow-md group cursor-pointer"
            title="Open Shopping Tray"
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110">
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

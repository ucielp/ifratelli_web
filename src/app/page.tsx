'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ArtisansTray } from '@/components/catalog/ArtisansTray';
import { BrandStory } from '@/components/story/BrandStory';
import { EventCalendar } from '@/components/events/EventCalendar';
import { InstagramFeed } from '@/components/instagram/InstagramFeed';
import { ProductModal } from '@/components/catalog/ProductModal';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { CheckoutModal } from '@/components/cart/CheckoutModal';
import { AuthModal } from '@/components/auth/AuthModal';
import { ChatbotModal } from '@/components/chat/ChatbotModal';
import { useShop } from '@/context/ShopContext';

function NotificationToast() {
  const { notification } = useShop();

  if (!notification) return null;

  return (
    <div className="fixed top-24 right-6 z-50 bg-earth text-linen px-5 py-3.5 rounded-2xl shadow-2xl border border-stone/30 flex items-center gap-3 animate-bounce text-xs sm:text-sm font-medium font-sans">
      <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0 animate-ping" />
      <span>{notification}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero: Thesis & Featured 1998 Piece */}
      <Hero />

      {/* Catalog: The Artisan's Tray */}
      <ArtisansTray />

      {/* Story: Caro & María from Rosario to Spain */}
      <BrandStory />

      {/* Events: Timezone-Safe Local Fair Schedule */}
      <EventCalendar />

      {/* Styling: Instagram Feed Showcase */}
      <InstagramFeed />

      {/* Footer Attribution & Links */}
      <Footer />

      {/* Modals & Overlays */}
      <ProductModal />
      <CartDrawer />
      <CheckoutModal />
      <AuthModal />
      <ChatbotModal />

      {/* Live Feedback Toast */}
      <NotificationToast />
    </main>
  );
}

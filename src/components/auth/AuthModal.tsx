'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';

export function AuthModal() {
  const { isAuthOpen, setIsAuthOpen, user, login, logout } = useShop();
  const [email, setEmail] = useState('caro.maria@ifratelli.es');

  if (!isAuthOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-earth/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="bg-linen w-full max-w-lg rounded-3xl border-2 border-stone shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-stone bg-stone/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7">
              <Image src="/icons/user.png" alt="User" fill className="object-contain" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-earth">
                {user ? 'Your Artisan Account' : 'Welcome to ifratelli'}
              </h2>
              <p className="text-xs text-wood/80">
                {user ? 'Saved addresses & order history' : 'Sign in to access your saved profile'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAuthOpen(false)}
            className="w-8 h-8 rounded-full bg-linen hover:bg-stone text-wood font-bold flex items-center justify-center shadow-xs transition-transform hover:scale-110 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {user ? (
            /* LOGGED IN VIEW */
            <div className="space-y-6">
              
              {/* User badge */}
              <div className="bg-stone/50 p-4 rounded-2xl border border-stone flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-wood text-linen font-serif text-xl font-bold flex items-center justify-center shrink-0">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-earth text-base">{user.name}</h3>
                  <p className="text-xs text-wood/80 font-mono">{user.email}</p>
                  <p className="text-xs text-olive font-semibold mt-0.5">✨ Phase 1 Verified Client</p>
                </div>
              </div>

              {/* Saved Addresses */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-earth flex items-center gap-1.5">
                  <span>📍</span> Saved Addresses ({user.addresses.length}):
                </h4>
                <div className="space-y-2">
                  {user.addresses.map((addr) => (
                    <div key={addr.id} className="p-3 bg-linen rounded-xl border border-stone text-xs text-wood">
                      <p className="font-bold text-earth">{addr.label} • <span className="text-olive">{addr.region}</span></p>
                      <p>{addr.street}, {addr.postalCode} {addr.city}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order History */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-earth flex items-center gap-1.5">
                  <span>🛍️</span> Recent Orders ({user.orders.length}):
                </h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {user.orders.length === 0 ? (
                    <p className="text-xs text-wood/70 italic py-2">No past orders yet. Explore our collection!</p>
                  ) : (
                    user.orders.map((ord) => (
                      <div key={ord.id} className="p-3 bg-stone/30 rounded-xl border border-stone/80 text-xs space-y-1">
                        <div className="flex justify-between font-bold text-earth">
                          <span>Order {ord.id}</span>
                          <span className="font-mono text-wood">€{ord.total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-wood/80">
                          <span>Date: {ord.date}</span>
                          <span className="bg-olive/20 text-olive px-2 py-0.5 rounded font-semibold text-[10px]">
                            {ord.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-wood/70 line-clamp-1">
                          Items: {ord.items.map(i => `${i.product.name} (x${i.quantity})`).join(', ')}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Logout CTA */}
              <button
                onClick={logout}
                className="w-full py-3 bg-linen hover:bg-stone text-wood font-bold text-xs rounded-xl border border-stone transition-colors cursor-pointer"
              >
                Sign Out
              </button>

            </div>
          ) : (
            /* LOGGED OUT FORM */
            <form
              onSubmit={(e) => {
                e.preventDefault();
                login(email);
              }}
              className="space-y-5"
            >
              <div className="bg-linen p-4 rounded-2xl border border-stone text-xs text-wood/90 space-y-2 leading-relaxed">
                <p className="font-bold text-earth">✨ Simulated Phase 1 Access</p>
                <p>
                  As requested, we have pre-configured a mock customer account so you can test viewing saved addresses in El Masnou and Mallorca immediately!
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-wood block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-linen px-4 py-3 rounded-xl border border-stone text-xs text-earth focus:outline-none focus:border-wood"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-wood hover:bg-gold hover:text-earth text-linen font-bold text-xs tracking-wider uppercase rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>✨ Sign In to Account</span>
                <span>&rarr;</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}

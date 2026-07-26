'use client';

import React from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';

export function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    setIsCheckoutOpen
  } = useShop();

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 60;
  const progress = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-earth/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-linen shadow-2xl border-l-2 border-stone flex flex-col justify-between animate-slideLeft">
          
          {/* Header */}
          <div className="p-6 bg-stone/40 border-b border-stone flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-6 h-6">
                <Image src="/icons/shop.png" alt="Cart" fill sizes="24px" className="object-contain" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-earth">
                The Artisan&apos;s Tray ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full bg-linen hover:bg-stone text-wood font-bold flex items-center justify-center shadow-xs transition-transform hover:scale-110 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-linen px-6 py-4 border-b border-stone/80">
            <div className="flex justify-between text-xs font-mono mb-1.5 font-bold">
              {remainingForFree > 0 ? (
                <span className="text-wood">
                  Add <strong className="text-earth">€{remainingForFree.toFixed(2)}</strong> more for Free Shipping
                </span>
              ) : (
                <span className="text-olive font-bold">
                  Free Shipping Unlocked!
                </span>
              )}
              <span className="text-earth">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-stone h-2.5 rounded-full overflow-hidden p-0.5">
              <div
                className="bg-gradient-to-r from-wood to-olive h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[11px] text-wood/70 font-sans mt-1.5 italic">
              Local artisan shipping (€4.50 base) or free pickup at our weekly market stalls.
            </p>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4 text-wood/80">
                <div className="text-5xl">🐚</div>
                <p className="font-serif text-lg font-bold text-earth">Your tray is currently empty</p>
                <p className="text-xs max-w-xs mx-auto">
                  Explore Caro &amp; María&apos;s Mediterranean collection and add pieces to inspect in your tray.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-wood text-linen rounded-xl text-xs font-bold shadow-sm hover:bg-gold hover:text-earth transition-colors cursor-pointer"
                >
                  Browse Catalog
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-stone/30 rounded-2xl border border-stone/80 items-center justify-between"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-stone/60 shrink-0 border border-stone">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-earth truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs font-mono text-gold font-bold">
                      €{item.product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-lg bg-linen text-wood font-bold text-xs flex items-center justify-center border border-stone hover:bg-stone cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xs font-mono font-bold w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-lg bg-linen text-wood font-bold text-xs flex items-center justify-center border border-stone hover:bg-stone cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right flex flex-col justify-between h-16">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-wood/50 hover:text-red-500 text-xs font-bold self-end cursor-pointer"
                      title="Remove piece"
                    >
                      ✕
                    </button>
                    <span className="font-mono font-bold text-sm text-earth">
                      €{(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 bg-stone/40 border-t border-stone space-y-4">
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-wood">
                  <span>Subtotal:</span>
                  <span className="font-bold text-earth">€{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-wood">
                  <span>Estimated Shipping:</span>
                  {remainingForFree > 0 ? (
                    <span className="font-bold">€4.50</span>
                  ) : (
                    <span className="text-olive font-bold">FREE</span>
                  )}
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-earth pt-2 border-t border-stone/80">
                  <span>Total Tray Amount:</span>
                  <span className="font-mono text-gold">
                    €{(cartTotal + (remainingForFree > 0 ? 4.50 : 0)).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full py-4 bg-wood hover:bg-gold hover:text-earth text-linen font-bold text-xs tracking-wider uppercase rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Phase 1 Checkout</span>
                  <span>&rarr;</span>
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-2 bg-transparent hover:bg-stone/50 text-wood font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
                >
                  Continue Shopping
                </button>
              </div>

              <div className="text-[10px] text-wood/60 text-center font-sans">
                Secure SSL phase 1 verification • Hand wrapped in Mallorca &amp; El Masnou
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

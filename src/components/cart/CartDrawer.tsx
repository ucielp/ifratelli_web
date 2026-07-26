'use client';

import React from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';

export function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartTotal,
    cartCount,
    shippingFee,
    freeShippingProgress,
    amountNeededForFreeShipping,
    updateQuantity,
    removeFromCart,
    clearCart,
    setIsCheckoutOpen
  } = useShop();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-earth/50 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-linen shadow-2xl flex flex-col border-l border-stone animate-slideLeft">
          
          {/* Header */}
          <div className="p-6 border-b border-stone flex items-center justify-between bg-stone/30">
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7">
                <Image src="/icons/shop.png" alt="Tray" fill className="object-contain" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-earth">
                Your Artisan&apos;s Tray ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-stone rounded-full transition-transform hover:scale-110 cursor-pointer"
              title="Close Tray"
            >
              <div className="relative w-6 h-6">
                <Image src="/icons/close.png" alt="Close" fill className="object-contain" />
              </div>
            </button>
          </div>

          {/* FREE SHIPPING PROGRESS BAR */}
          <div className="p-4 bg-stone/50 border-b border-stone space-y-2">
            {amountNeededForFreeShipping === 0 ? (
              <div className="p-3 bg-olive text-white rounded-2xl text-xs font-bold text-center shadow-sm animate-pulse-gold flex items-center justify-center gap-2">
                <span>🎉</span>
                <span>FREE DELIVERY UNLOCKED across Mallorca &amp; Barcelona Area!</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-wood">
                  <span>Add <strong className="text-earth font-mono">€{amountNeededForFreeShipping.toFixed(2)}</strong> for FREE Delivery!</span>
                  <span className="font-mono text-earth">{Math.round(freeShippingProgress)}%</span>
                </div>
                <div className="w-full h-2.5 bg-linen rounded-full overflow-hidden border border-stone">
                  <div
                    className="h-full bg-gradient-to-r from-wood via-gold to-olive transition-all duration-500 rounded-full"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            )}
            <p className="text-[11px] text-wood/70 text-center italic">
              📍 Local artisan shipping (€4.50 base) or Free pickup at our weekly market stalls.
            </p>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="text-5xl">🛍️</div>
                <h3 className="font-serif text-xl font-bold text-earth">Your tray is empty</h3>
                <p className="text-xs text-wood/80 max-w-xs mx-auto">
                  Explore our Mediterranean necklaces, bracelets, earrings, and anklets crafted in El Masnou &amp; Mallorca.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-wood text-linen rounded-xl text-xs font-bold shadow-sm hover:bg-earth transition-colors cursor-pointer"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-stone/30 rounded-2xl border border-stone/80 hover:bg-stone/50 transition-colors"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-stone/60 shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="font-serif font-bold text-sm text-earth line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1 hover:bg-linen rounded-lg transition-colors text-wood/70 hover:text-earth cursor-pointer shrink-0"
                          title="Remove item"
                        >
                          <div className="relative w-4 h-4">
                            <Image src="/icons/trash.png" alt="Delete" fill className="object-contain" />
                          </div>
                        </button>
                      </div>
                      <p className="text-[11px] text-wood/80 uppercase font-semibold">
                        {item.product.category}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-stone bg-linen rounded-xl px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-5 text-center font-bold text-wood hover:text-earth cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-mono text-xs font-bold text-earth">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-5 text-center font-bold text-wood hover:text-earth cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-mono font-bold text-sm text-earth">
                        €{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-stone bg-stone/30 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-wood">
                  <span>Subtotal ({cartCount} items)</span>
                  <span className="font-mono font-semibold">€{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-wood">
                  <span>Estimated Delivery</span>
                  <span className="font-mono font-semibold">
                    {shippingFee === 0 ? (
                      <span className="text-olive font-bold">FREE ✨</span>
                    ) : (
                      `€${shippingFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-earth pt-2 border-t border-stone">
                  <span>Total Due</span>
                  <span className="font-mono text-lg text-wood">€{(cartTotal + shippingFee).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={clearCart}
                  className="px-4 py-3.5 bg-linen hover:bg-stone text-wood/80 hover:text-earth rounded-2xl text-xs font-bold border border-stone transition-colors cursor-pointer"
                  title="Empty Tray"
                >
                  Clear
                </button>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="flex-1 py-3.5 bg-wood hover:bg-gold hover:text-earth text-linen font-bold text-xs uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <span>&rarr;</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

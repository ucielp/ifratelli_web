'use client';

import React, { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { Order, UserAddress } from '@/types';
import { MOCK_USER } from '@/lib/mock-data';

export function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartTotal,
    shippingFee,
    user,
    addOrder
  } = useShop();

  const [deliveryType, setDeliveryType] = useState<'ship' | 'fair'>('ship');
  const [selectedAddrId, setSelectedAddrId] = useState<string>(
    user?.addresses?.[0]?.id || 'addr-1'
  );
  const [customNote, setCustomNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bizum' | 'fair'>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const currentAddresses = user?.addresses || MOCK_USER.addresses;
  const chosenAddress = currentAddresses.find(a => a.id === selectedAddrId) || currentAddresses[0];
  const finalShipping = deliveryType === 'fair' ? 0 : shippingFee;
  const finalTotal = cartTotal + finalShipping;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder: Order = {
        id: `ORD-2026-${Math.floor(100 + Math.random() * 900)}`,
        date: new Date().toISOString().split('T')[0],
        items: [...cart],
        total: finalTotal,
        shippingFee: finalShipping,
        status: deliveryType === 'fair' ? 'Ready for Pickup at Fair' : 'Processing',
        address: chosenAddress
      };

      setIsSubmitting(false);
      addOrder(newOrder);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-earth/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="bg-linen w-full max-w-2xl rounded-3xl border-2 border-stone shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-stone bg-stone/30 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-earth">
              Complete Your Order
            </h2>
            <p className="text-xs text-wood/80">
              Handcrafted in Mallorca &amp; El Masnou • Safe &amp; Direct
            </p>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="w-8 h-8 rounded-full bg-linen hover:bg-stone text-wood font-bold flex items-center justify-center shadow-xs transition-transform hover:scale-110 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmitOrder} className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* 1. Delivery Option */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-earth">
              1. Delivery Method
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                onClick={() => setDeliveryType('ship')}
                className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                  deliveryType === 'ship'
                    ? 'border-wood bg-stone/60 shadow-sm'
                    : 'border-stone bg-linen hover:bg-stone/30'
                }`}
              >
                <p className="text-xs font-bold text-earth flex items-center justify-between">
                  <span>🚚 Home Delivery</span>
                  <span className="font-mono text-gold">{shippingFee === 0 ? 'FREE' : `€${shippingFee.toFixed(2)}`}</span>
                </p>
                <p className="text-[11px] text-wood/80 mt-1">
                  Barcelona area, El Masnou, Mallorca, and mainland Spain.
                </p>
              </div>

              <div
                onClick={() => setDeliveryType('fair')}
                className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                  deliveryType === 'fair'
                    ? 'border-wood bg-stone/60 shadow-sm'
                    : 'border-stone bg-linen hover:bg-stone/30'
                }`}
              >
                <p className="text-xs font-bold text-earth flex items-center justify-between">
                  <span>🎪 Pickup at Local Fair</span>
                  <span className="font-mono text-olive font-bold">FREE €0.00</span>
                </p>
                <p className="text-[11px] text-wood/80 mt-1">
                  Meet Caro &amp; María at our next stall in El Masnou or Mallorca!
                </p>
              </div>
            </div>
          </div>

          {/* 2. Address Selection */}
          {deliveryType === 'ship' && (
            <div className="space-y-3 pt-2 border-t border-stone/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-earth">
                2. Shipping Address
              </h3>
              <div className="space-y-2">
                {currentAddresses.map((addr) => (
                  <label
                    key={addr.id}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      selectedAddrId === addr.id
                        ? 'border-wood bg-stone/40 font-medium'
                        : 'border-stone bg-linen hover:bg-stone/20'
                    }`}
                  >
                    <input
                      type="radio"
                      name="address"
                      checked={selectedAddrId === addr.id}
                      onChange={() => setSelectedAddrId(addr.id)}
                      className="mt-1 accent-wood"
                    />
                    <div className="text-xs text-wood">
                      <p className="font-bold text-earth">{addr.label} ({addr.region})</p>
                      <p>{addr.street}, {addr.postalCode} {addr.city}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* 3. Custom Sizing / Note to Sisters */}
          <div className="space-y-2 pt-2 border-t border-stone/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-earth flex items-center justify-between">
              <span>3. Custom Measurement or Note (Optional)</span>
              <span className="text-[10px] text-olive font-normal">Free service</span>
            </h3>
            <textarea
              placeholder="e.g., Please make the anklet 23cm, or wrap as a gift for a birthday in Mallorca!"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              rows={2}
              className="w-full bg-linen p-3 rounded-xl border border-stone text-xs text-earth placeholder-wood/50 focus:outline-none focus:border-wood"
            />
          </div>

          {/* 4. Payment Method */}
          <div className="space-y-3 pt-2 border-t border-stone/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-earth">
              4. Payment Method
            </h3>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border font-bold transition-all cursor-pointer ${
                  paymentMethod === 'card' ? 'bg-wood text-linen border-wood' : 'bg-linen text-wood border-stone hover:bg-stone/30'
                }`}
              >
                💳 Card / Apple Pay
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('bizum')}
                className={`p-3 rounded-xl border font-bold transition-all cursor-pointer ${
                  paymentMethod === 'bizum' ? 'bg-wood text-linen border-wood' : 'bg-linen text-wood border-stone hover:bg-stone/30'
                }`}
              >
                📱 Bizum / Transfer
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('fair')}
                className={`p-3 rounded-xl border font-bold transition-all cursor-pointer ${
                  paymentMethod === 'fair' ? 'bg-wood text-linen border-wood' : 'bg-linen text-wood border-stone hover:bg-stone/30'
                }`}
              >
                🤝 Pay in Person
              </button>
            </div>
          </div>

          {/* Order Summary & Submit */}
          <div className="pt-4 border-t-2 border-stone space-y-3 bg-stone/30 p-4 rounded-2xl">
            <div className="flex justify-between text-xs text-wood">
              <span>Items Total ({cart.length} creations)</span>
              <span className="font-mono">€{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-wood">
              <span>Delivery Fee ({deliveryType === 'fair' ? 'Fair Pickup' : 'Home Delivery'})</span>
              <span className="font-mono">
                {finalShipping === 0 ? <strong className="text-olive">FREE ✨</strong> : `€${finalShipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between text-base font-bold text-earth pt-2 border-t border-stone">
              <span>Total to Pay</span>
              <span className="font-mono text-lg text-wood">€{finalTotal.toFixed(2)}</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-wood hover:bg-gold hover:text-earth text-linen font-bold text-sm tracking-wider uppercase rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>⏳ Assembling Order...</span>
              ) : (
                <>
                  <span>✨ Confirm Order (€{finalTotal.toFixed(2)})</span>
                  <span>&rarr;</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

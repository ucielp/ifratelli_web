'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';

export function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartTotal,
    clearCart,
    user
  } = useShop();

  const [step, setStep] = useState<'details' | 'success'>('details');
  
  // Form State
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [phone, setPhone] = useState('+34 ');
  const [address, setAddress] = useState(user?.addresses[0]?.street || '');
  const [city, setCity] = useState(user?.addresses[0]?.city || '');
  const [postalCode, setPostalCode] = useState(user?.addresses[0]?.postalCode || '');
  const [deliveryMethod, setDeliveryMethod] = useState<'shipping' | 'pickup'>('shipping');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bizum' | 'cash'>('card');
  const [notes, setNotes] = useState('');

  if (!isCheckoutOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 60;
  const shippingCost = deliveryMethod === 'pickup' ? 0 : (cartTotal >= FREE_SHIPPING_THRESHOLD ? 0 : 4.50);
  const finalTotal = cartTotal + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleFinish = () => {
    clearCart();
    setStep('details');
    setIsCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-earth/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      
      <div className="bg-linen w-full max-w-2xl rounded-3xl border-2 border-stone shadow-2xl overflow-hidden relative my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-wood text-linen flex items-center justify-between border-b border-stone">
          <div>
            <h2 className="font-serif text-2xl font-bold">
              {step === 'details' ? 'Artisanal Checkout' : 'Order Confirmed'}
            </h2>
            <p className="text-xs text-linen/80 font-mono">
              {step === 'details' ? 'Phase 1 verification • Free shipping > €60' : 'Thank you for supporting 28 years of family craft'}
            </p>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="w-8 h-8 rounded-full bg-linen/20 hover:bg-linen/30 text-linen font-bold flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Step 1: Checkout Details Form */}
        {step === 'details' && (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 text-wood">
            
            {/* Order summary pill */}
            <div className="bg-stone/40 p-4 rounded-2xl border border-stone/80 flex items-center justify-between text-xs font-mono">
              <span>Tray Items ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
              <span className="font-bold text-earth text-sm">Subtotal: €{cartTotal.toFixed(2)}</span>
            </div>

            {/* Delivery Method Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-earth block">
                1. Choose Delivery Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryMethod('shipping')}
                  className={`p-3 rounded-2xl border text-left text-xs transition-all cursor-pointer ${
                    deliveryMethod === 'shipping'
                      ? 'bg-wood text-linen border-wood shadow-md'
                      : 'bg-linen hover:bg-stone/50 text-wood border-stone'
                  }`}
                >
                  <p className="font-bold">Standard Shipping</p>
                  <p className="text-[11px] opacity-80 mt-0.5">
                    {cartTotal >= FREE_SHIPPING_THRESHOLD ? 'FREE (Orders > €60)' : '€4.50 (2-3 business days)'}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryMethod('pickup')}
                  className={`p-3 rounded-2xl border text-left text-xs transition-all cursor-pointer ${
                    deliveryMethod === 'pickup'
                      ? 'bg-wood text-linen border-wood shadow-md'
                      : 'bg-linen hover:bg-stone/50 text-wood border-stone'
                  }`}
                >
                  <p className="font-bold">Free Fair Pickup</p>
                  <p className="text-[11px] opacity-80 mt-0.5">
                    Collect at our Mallorca or El Masnou market stalls
                  </p>
                </button>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-earth block">
                2. Contact &amp; Shipping Details
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-wood block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. María González"
                    className="w-full bg-linen px-3.5 py-2.5 rounded-xl border border-stone text-xs text-earth focus:outline-none focus:border-wood"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-wood block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maria@example.com"
                    className="w-full bg-linen px-3.5 py-2.5 rounded-xl border border-stone text-xs text-earth focus:outline-none focus:border-wood"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-1">
                  <label className="text-[11px] font-semibold text-wood block mb-1">Phone (for courier) *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+34 600 000 000"
                    className="w-full bg-linen px-3.5 py-2.5 rounded-xl border border-stone text-xs text-earth focus:outline-none focus:border-wood"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[11px] font-semibold text-wood block mb-1">Street Address *</label>
                  <input
                    type="text"
                    required={deliveryMethod === 'shipping'}
                    disabled={deliveryMethod === 'pickup'}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={deliveryMethod === 'pickup' ? 'Not needed for fair pickup' : 'Street name and apartment number'}
                    className="w-full bg-linen px-3.5 py-2.5 rounded-xl border border-stone text-xs text-earth focus:outline-none focus:border-wood disabled:opacity-50"
                  />
                </div>
              </div>

              {deliveryMethod === 'shipping' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-wood block mb-1">City / Town *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Palma de Mallorca"
                      className="w-full bg-linen px-3.5 py-2.5 rounded-xl border border-stone text-xs text-earth focus:outline-none focus:border-wood"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-wood block mb-1">Postal Code *</label>
                    <input
                      type="text"
                      required
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="e.g. 07001"
                      className="w-full bg-linen px-3.5 py-2.5 rounded-xl border border-stone text-xs text-earth focus:outline-none focus:border-wood"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-earth block">
                3. Payment Method (Phase 1 Simulated)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['card', 'bizum', 'cash'] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setPaymentMethod(method)}
                    className={`p-3 rounded-xl border text-center text-xs uppercase font-bold tracking-wide transition-all cursor-pointer ${
                      paymentMethod === method
                        ? 'bg-olive text-white border-olive shadow-sm'
                        : 'bg-linen hover:bg-stone/50 text-wood border-stone'
                    }`}
                  >
                    {method === 'card' && 'Credit Card'}
                    {method === 'bizum' && 'Bizum Instant'}
                    {method === 'cash' && 'Cash on Pickup'}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Notes */}
            <div>
              <label className="text-[11px] font-semibold text-wood block mb-1">
                Custom Sizing or Artisan Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Please make the necklace cotton cord 2cm longer..."
                className="w-full bg-linen px-3.5 py-2 rounded-xl border border-stone text-xs text-earth focus:outline-none focus:border-wood resize-none"
              />
            </div>

            {/* Final Breakdown & Submit */}
            <div className="p-4 bg-stone/50 rounded-2xl border border-stone space-y-2">
              <div className="flex justify-between text-xs text-wood">
                <span>Subtotal ({cart.reduce((a, b) => a + b.quantity, 0)} items):</span>
                <span>€{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-wood">
                <span>Shipping ({deliveryMethod === 'pickup' ? 'Fair Pickup' : 'Standard'}):</span>
                {shippingCost === 0 ? <strong className="text-olive">FREE</strong> : `€${shippingCost.toFixed(2)}`}
              </div>
              <div className="flex justify-between font-serif text-lg font-bold text-earth pt-2 border-t border-stone/80">
                <span>Total Due:</span>
                <span className="font-mono text-gold">€{finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-wood hover:bg-gold hover:text-earth text-linen font-bold text-xs tracking-widest uppercase rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Confirm Order (€{finalTotal.toFixed(2)})</span>
              <span>&rarr;</span>
            </button>

          </form>
        )}

        {/* Step 2: Order Confirmed View */}
        {step === 'success' && (
          <div className="p-8 text-center space-y-6 my-auto">
            <div className="w-20 h-20 bg-olive/20 text-olive rounded-full flex items-center justify-center mx-auto text-4xl shadow-inner border-2 border-olive">
              ✓
            </div>
            
            <div className="space-y-2">
              <h3 className="font-serif text-3xl font-bold text-earth">
                Order Confirmed!
              </h3>
              <p className="text-xs sm:text-sm text-wood max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-earth">{name || 'Artisan Lover'}</strong>! Your order has been received by Caro &amp; María in our studio. We will begin preparing your handcrafted jewelry immediately.
              </p>
            </div>

            <div className="bg-stone/30 p-4 rounded-2xl border border-stone max-w-md mx-auto text-left text-xs space-y-1.5 font-mono text-wood">
              <p><strong className="text-earth">Order Number:</strong> #IFR-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p><strong className="text-earth">Delivery Method:</strong> {deliveryMethod === 'pickup' ? 'Fair Pickup (Mallorca/El Masnou)' : 'Standard Shipping'}</p>
              <p><strong className="text-earth">Payment:</strong> {paymentMethod.toUpperCase()}</p>
              <p><strong className="text-earth">Total Amount Paid:</strong> €{finalTotal.toFixed(2)}</p>
            </div>

            <p className="text-xs text-olive font-semibold">
              A confirmation summary has been simulated for your email ({email || 'your email'}).
            </p>

            <div className="pt-4">
              <button
                onClick={handleFinish}
                className="px-8 py-3.5 bg-wood hover:bg-gold hover:text-earth text-linen font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md cursor-pointer"
              >
                Return to Artisan Catalog
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

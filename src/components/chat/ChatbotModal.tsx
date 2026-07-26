'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { MOCK_FAQS } from '@/lib/mock-data';

interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export function ChatbotModal() {
  const { isChatOpen, setIsChatOpen } = useShop();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: '¡Hola! Welcome to ifratelli accesorios. I am your automated artisan assistant, trained by sisters Caro and María. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [customInput, setCustomInput] = useState('');

  const handleSendFAQ = (question: string, answer: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: question, time },
      { sender: 'bot', text: answer, time }
    ]);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const query = customInput.trim();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setMessages((prev) => [...prev, { sender: 'user', text: query, time }]);
    setCustomInput('');

    setTimeout(() => {
      // Find matching keyword or default response
      const qLower = query.toLowerCase();
      let botReply = "Thank you for reaching out! Since every piece is handcrafted by Caro and María, feel free to click 'Chat on WhatsApp' below to speak with them directly for custom inquiries.";

      if (qLower.includes('ship') || qLower.includes('free') || qLower.includes('cost') || qLower.includes('delivery')) {
        botReply = MOCK_FAQS[0].answer;
      } else if (qLower.includes('fair') || qLower.includes('where') || qLower.includes('market') || qLower.includes('location')) {
        botReply = MOCK_FAQS[1].answer;
      } else if (qLower.includes('water') || qLower.includes('material') || qLower.includes('gold') || qLower.includes('shell') || qLower.includes('wood')) {
        botReply = MOCK_FAQS[2].answer;
      } else if (qLower.includes('size') || qLower.includes('custom') || qLower.includes('wrist') || qLower.includes('length')) {
        botReply = MOCK_FAQS[3].answer;
      } else if (qLower.includes('name') || qLower.includes('sister') || qLower.includes('caro') || qLower.includes('maria') || qLower.includes('1998')) {
        botReply = MOCK_FAQS[4].answer;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-40 p-3 sm:p-4 bg-wood hover:bg-gold hover:text-earth text-linen rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 cursor-pointer border-2 border-linen group"
        title="Open Artisan Chat Assistant"
      >
        <div className="relative w-7 h-7">
          <Image src="/icons/whatsapp.png" alt="Chat" fill sizes="28px" className="object-contain" />
        </div>
        <span className="hidden sm:inline font-bold text-xs pr-1 font-sans">
          Ask the Sisters
        </span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-olive rounded-full border-2 border-linen animate-ping" />
      </button>

      {/* Modal Widget */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-[400px] bg-linen rounded-3xl border-2 border-stone shadow-2xl overflow-hidden flex flex-col max-h-[600px] animate-slideUp">
          
          {/* Header */}
          <div className="p-4 bg-wood text-linen flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-linen p-1 shrink-0">
                <Image src="/icons/whatsapp.png" alt="Bot" fill sizes="32px" className="object-contain p-0.5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base leading-tight">
                  ifratelli Artisan Bot
                </h3>
                <p className="text-[10px] text-linen/80 font-mono">
                  Online • Trained by Caro &amp; María
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="w-7 h-7 rounded-full bg-linen/20 hover:bg-linen/30 text-linen font-bold text-xs flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone/20 min-h-[250px] max-h-[340px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-wood text-linen rounded-br-none font-medium'
                      : 'bg-linen text-earth border border-stone rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] font-mono text-wood/60 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}
          </div>

          {/* Clickable FAQ Pills */}
          <div className="p-3 bg-stone/40 border-t border-b border-stone/80 overflow-x-auto">
            <p className="text-[10px] font-bold uppercase tracking-wider text-wood/70 mb-1.5 px-1">
              Click a frequent question:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {MOCK_FAQS.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => handleSendFAQ(faq.question, faq.answer)}
                  className="bg-linen hover:bg-stone text-wood text-[11px] px-2.5 py-1 rounded-full border border-stone/80 text-left transition-colors cursor-pointer shrink-0 font-medium"
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Input & WhatsApp fallback with official number +34 623 99 37 45 */}
          <div className="p-3 bg-linen space-y-2">
            <form onSubmit={handleSendCustom} className="flex gap-2">
              <input
                type="text"
                placeholder="Ask about materials, fairs..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className="flex-1 bg-stone/40 px-3 py-2 rounded-xl text-xs text-earth placeholder-wood/50 border border-stone focus:outline-none focus:border-wood"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-wood text-linen text-xs font-bold rounded-xl hover:bg-gold hover:text-earth transition-colors cursor-pointer shrink-0"
              >
                Send
              </button>
            </form>

            <a
              href="https://wa.me/34623993745?text=Hola%20Caro%20y%20María!%20Vengo%20de%20la%20web%20ifratelli."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-olive hover:bg-olive/90 text-white text-[11px] font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              <span>Connect on WhatsApp (+34 623 99 37 45)</span>
              <span>&rarr;</span>
            </a>
          </div>

        </div>
      )}
    </>
  );
}

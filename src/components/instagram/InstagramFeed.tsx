'use client';

import React from 'react';
import Image from 'next/image';

const INSTA_POSTS = [
  { id: 'p1', image: '/items/item-03.jpeg', likes: 284, caption: 'Mallorca Breeze drop earrings catching the late afternoon sun in Port de Sóller. #ifratelli #handmade' },
  { id: 'p2', image: '/items/item-05.jpeg', likes: 198, caption: 'Never lose your sunglasses again! Valldemossa tortoiseshell links in action. Available at El Masnou fair!' },
  { id: 'p3', image: '/items/item-06.jpeg', likes: 342, caption: 'The iconic golden fish motif! Inspired by 28 years of family craft starting in Rosario, 1998.' },
  { id: 'p4', image: '/items/item-09.jpeg', likes: 415, caption: 'Serra de Tramuntana carved wood & lava rock necklace. Bold, earthy, and lightweight.' }
];

export function InstagramFeed() {
  return (
    <section id="instagram" className="py-24 bg-stone/30 border-t border-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          
          {/* Prominently Clickable Instagram Handle & Icon linking directly to official URL */}
          <a
            href="https://www.instagram.com/ifratelliaccesorios/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-linen hover:bg-stone px-5 py-2 rounded-full border border-stone shadow-sm hover:shadow-md transition-all duration-300 text-wood font-mono text-xs sm:text-sm font-bold uppercase tracking-wider group cursor-pointer"
            title="Visit @ifratelli.accesorios on Instagram"
          >
            <div className="relative w-6 h-6 transition-transform group-hover:scale-110">
              <Image src="/icons/instagram.png" alt="Instagram" fill sizes="24px" className="object-contain" />
            </div>
            <span className="group-hover:text-earth transition-colors">@ifratelli.accesorios</span>
            <span className="text-gold font-sans">&rarr;</span>
          </a>

          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-earth tracking-tight">
            Mediterranean Styling &amp; Market Vibes
          </h2>
          <p className="text-xs sm:text-sm text-wood/80 leading-relaxed">
            Tag us in your photos from Barcelona, El Masnou, or Mallorca to be featured in our weekly studio stories!
          </p>
        </div>

        {/* Instagram 4-Col Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTA_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/ifratelliaccesorios/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-linen rounded-2xl overflow-hidden border border-stone shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer block"
            >
              <div className="relative aspect-square w-full bg-stone/50 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-earth/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 text-linen font-bold text-sm">
                  <div className="flex items-center gap-1.5 bg-linen/90 text-earth px-3 py-1.5 rounded-full shadow-md">
                    <div className="relative w-4 h-4">
                      <Image src="/icons/like.png" alt="Likes" fill sizes="16px" className="object-contain" />
                    </div>
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-wood text-linen text-[10px] font-bold flex items-center justify-center font-serif">
                    i
                  </div>
                  <span className="text-[11px] font-bold text-earth">ifratelli.accesorios</span>
                </div>
                <p className="text-xs text-wood/90 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/ifratelliaccesorios/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-wood hover:bg-gold hover:text-earth text-linen text-xs font-bold uppercase tracking-widest rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Follow Our Story on Instagram</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}

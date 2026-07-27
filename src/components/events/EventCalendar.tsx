'use client';

import React, { useState } from 'react';
import { MOCK_FAIRS } from '@/lib/mock-data';
import { format } from 'date-fns';

/**
 * Robust local date parser to prevent UTC timezone shifting
 */
function formatLocalDateSafe(dateStr: string): { monthDay: string; weekdayYear: string; monthOnly: string } {
  try {
    const [year, month, day] = dateStr.split('-').map(Number);
    const localDate = new Date(year, month - 1, day);
    return {
      monthDay: format(localDate, 'MMMM d'),
      weekdayYear: format(localDate, 'EEEE, yyyy'),
      monthOnly: format(localDate, 'MMM')
    };
  } catch {
    return { monthDay: dateStr, weekdayYear: '', monthOnly: 'Event' };
  }
}

export function EventCalendar() {
  const [selectedCity, setSelectedCity] = useState<'All' | 'Mallorca' | 'El Masnou' | 'Barcelona'>('All');

  const filteredFairs = MOCK_FAIRS.filter(fair => 
    selectedCity === 'All' || fair.city === selectedCity
  );

  return (
    <section id="events" className="py-20 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-olive font-mono bg-stone/40 px-3.5 py-1.5 rounded-full border border-stone">
            2026 Season
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-earth tracking-tight">
            Fairs &amp; Markets
          </h1>
          <p className="text-sm sm:text-base text-wood/80">
            Come see us in person at our market stalls in Mallorca, El Masnou, and Barcelona. You can try on pieces or pick up online orders for free.
          </p>

          {/* City Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {(['All', 'Mallorca', 'El Masnou', 'Barcelona'] as const).map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  selectedCity === city
                    ? 'bg-wood text-linen shadow-md transform scale-105'
                    : 'bg-stone/50 hover:bg-stone text-wood border border-stone'
                }`}
              >
                {city === 'All' ? 'All Locations' : city}
              </button>
            ))}
          </div>
        </div>

        {/* Fairs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredFairs.map((fair) => {
            const dateParsed = formatLocalDateSafe(fair.dateStr);
            
            return (
              <div
                key={fair.id}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  fair.featured
                    ? 'bg-gradient-to-br from-stone/70 to-stone/30 border-wood/30 shadow-lg'
                    : 'bg-stone/30 border-stone hover:bg-stone/50 shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Top bar: Date Box & City Badge */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="bg-linen px-4 py-2.5 rounded-2xl border border-stone shadow-xs text-center min-w-[100px]">
                      <p className="text-[10px] font-mono font-bold uppercase text-olive">
                        {dateParsed.monthOnly}
                      </p>
                      <p className="font-serif text-xl font-bold text-earth">
                        {dateParsed.monthDay.split(' ')[1] || dateParsed.monthDay}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="bg-wood text-linen text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
                        {fair.city}
                      </span>
                      <span className="text-[11px] font-mono text-wood/80 font-medium">
                        {fair.timeStr}
                      </span>
                    </div>
                  </div>

                  {/* Title & Location */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-earth group-hover:text-gold transition-colors">
                      {fair.title}
                    </h3>
                    <p className="text-xs font-semibold text-olive pt-1">
                      {fair.location} • <span className="font-normal text-wood/80">{fair.booth}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-wood/90 leading-relaxed font-normal">
                    {fair.description}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-stone/80 flex items-center justify-between text-xs">
                  <span className="text-wood/70 italic font-medium">
                    Free custom sizing &amp; adjustments on site
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${fair.title} ${fair.location} ${fair.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-linen hover:bg-stone text-wood font-bold rounded-xl border border-stone transition-colors shadow-2xs"
                  >
                    Map Directions &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { EventCalendar } from '@/components/events/EventCalendar';
import { InstagramFeed } from '@/components/instagram/InstagramFeed';

export default function FairsPage() {
  return (
    <>
      <EventCalendar />
      <InstagramFeed />
    </>
  );
}

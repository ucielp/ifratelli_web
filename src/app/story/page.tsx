'use client';

import React from 'react';
import { BrandStory } from '@/components/story/BrandStory';
import { InstagramFeed } from '@/components/instagram/InstagramFeed';

export default function StoryPage() {
  return (
    <>
      <BrandStory />
      <InstagramFeed />
    </>
  );
}

'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { ProductCategory, Demographic, Product } from '@/types';

const CATEGORIES: ProductCategory[] = [
  'All',
  'Necklaces',
  'Bracelets',
  'Earrings',
  'Anklets',
  'Eyeglass holders'
];

const DEMOGRAPHICS: Demographic[] = [
  'All',
  'Women',
  'Men',
  'Teens',
  'Kids'
];

export function ArtisansTray() {
  const {
    products,
    activeCategory,
    setActiveCategory,
    activeDemographic,
    setActiveDemographic,
    addToCart,
    setSelectedProduct
  } = useShop();

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Category check
      const matchCat = activeCategory === 'All' || prod.category === activeCategory;
      // Demographic check
      const matchDemo = activeDemographic === 'All' || prod.demographic.includes(activeDemographic);
      // Search query check
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        prod.name.toLowerCase().includes(q) || 
        prod.description.toLowerCase().includes(q) ||
        prod.materials.some(m => m.toLowerCase().includes(q));

      return matchCat && matchDemo && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [products, activeCategory, activeDemographic, searchQuery, sortBy]);

  return (
    <section id="catalog" className="py-20 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-olive font-mono bg-olive/10 px-3 py-1 rounded-full">
            The Artisan&apos;s Tray • 14 Unique Creations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-earth tracking-tight">
            Curated from Natural Earth &amp; Sea
          </h2>
          <p className="text-sm sm:text-base text-wood/80 leading-relaxed">
            Every piece is assembled by Caro and María using raw Mallorca wood, natural shells, and warm metals. Filter by category or explore pieces tailored for women, men, teens, and children.
          </p>
        </div>

        {/* Filter Bar & Controls Container */}
        <div className="bg-stone/50 p-6 rounded-3xl border border-stone shadow-sm mb-12 space-y-6">
          
          {/* Row 1: Search & Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search by material (e.g., cowrie, wood, pearl)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-linen pl-10 pr-4 py-2.5 rounded-xl border border-stone text-xs text-earth placeholder-wood/50 focus:outline-none focus:border-wood transition-colors"
              />
              <span className="absolute left-3.5 top-3 text-wood/60 text-sm">🔍</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-wood/60 hover:text-earth font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="text-xs font-medium text-wood">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-linen px-3 py-2 rounded-xl border border-stone text-xs font-medium text-earth focus:outline-none cursor-pointer"
              >
                <option value="featured">✨ Featured Craft</option>
                <option value="price-asc">Price: Low to High (€8+)</option>
                <option value="price-desc">Price: High to Low (€30)</option>
                <option value="rating">⭐ Customer Rating</option>
              </select>
            </div>
          </div>

          {/* Row 2: Demographic Pills */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-wood/70 block">
              Audience / Demographic:
            </label>
            <div className="flex flex-wrap gap-2">
              {DEMOGRAPHICS.map((demo) => (
                <button
                  key={demo}
                  onClick={() => setActiveDemographic(demo)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    activeDemographic === demo
                      ? 'bg-olive text-white shadow-md transform scale-105'
                      : 'bg-linen hover:bg-stone text-wood border border-stone'
                  }`}
                >
                  {demo === 'All' ? '✨ All Audiences' : demo}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Product Category Pills */}
          <div className="space-y-2 pt-2 border-t border-stone/60">
            <label className="text-[11px] font-bold uppercase tracking-wider text-wood/70 block">
              Jewelry Category:
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-wood text-linen shadow-md transform scale-105'
                      : 'bg-linen hover:bg-stone text-wood border border-stone'
                  }`}
                >
                  {cat === 'All' ? '🌿 Entire Tray (All Categories)' : cat}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-wood font-medium px-2">
          <span>Showing <strong className="text-earth font-bold">{filteredProducts.length}</strong> handcrafted items</span>
          {(activeCategory !== 'All' || activeDemographic !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveDemographic('All');
                setSearchQuery('');
              }}
              className="text-gold underline font-bold hover:text-earth transition-colors"
            >
              Reset filters &times;
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-stone/30 rounded-3xl border border-stone/80 space-y-4">
            <div className="text-4xl">🐚</div>
            <h3 className="font-serif text-2xl font-bold text-earth">No jewelry matches your current filters</h3>
            <p className="text-xs text-wood/80 max-w-sm mx-auto">
              Caro and María are always designing new items! Try resetting your search or demographic filter to view all 14 creations.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveDemographic('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-wood text-linen rounded-xl text-xs font-bold shadow-sm hover:bg-earth transition-colors cursor-pointer"
            >
              Show All Jewelry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={() => setSelectedProduct(product)}
                onAdd={() => addToCart(product)}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

function ProductCard({
  product,
  onSelect,
  onAdd
}: {
  product: Product;
  onSelect: () => void;
  onAdd: () => void;
}) {
  return (
    <div className="group bg-stone/40 hover:bg-stone/70 p-4 rounded-3xl border border-stone/80 transition-all duration-300 flex flex-col justify-between hover:shadow-xl transform hover:-translate-y-1">
      
      {/* Top Image Box */}
      <div>
        <div 
          onClick={onSelect}
          className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-stone/60 mb-4 cursor-pointer"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-olive text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
              ✨ New Craft
            </span>
          )}
          {product.isFeatured && !product.isNew && (
            <span className="absolute top-3 left-3 bg-linen/90 backdrop-blur-md text-wood text-[10px] font-bold px-2.5 py-1 rounded-full border border-stone shadow-2xs">
              🌿 1998 Favorite
            </span>
          )}
          <div className="absolute bottom-3 right-3 bg-earth/80 backdrop-blur-md text-linen font-mono font-bold text-xs px-2.5 py-1 rounded-full shadow-md">
            €{product.price.toFixed(2)}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1.5 px-1">
          <div className="flex items-center justify-between text-[11px] text-olive font-bold tracking-wider uppercase">
            <span>{product.category}</span>
            <span className="text-wood/70 font-normal">⭐ {product.rating}</span>
          </div>

          <h3
            onClick={onSelect}
            className="font-serif text-lg font-bold text-earth group-hover:text-gold transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-wood/80 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-1 pt-2">
            {product.materials.slice(0, 2).map((mat, i) => (
              <span key={i} className="text-[10px] bg-linen text-wood px-2 py-0.5 rounded border border-stone truncate max-w-[140px]">
                {mat}
              </span>
            ))}
            {product.materials.length > 2 && (
              <span className="text-[10px] bg-linen text-wood/60 px-1.5 py-0.5 rounded border border-stone">
                +{product.materials.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-5 mt-4 border-t border-stone/80 flex gap-2">
        <button
          onClick={onAdd}
          className="flex-1 py-2.5 bg-wood hover:bg-gold hover:text-earth text-linen font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-200 shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>🛍️ Add to Tray</span>
        </button>
        <button
          onClick={onSelect}
          className="px-3 py-2.5 bg-linen hover:bg-stone text-wood rounded-xl text-xs font-bold border border-stone transition-colors cursor-pointer"
          title="Inspect Materials & Story"
        >
          🔍
        </button>
      </div>

    </div>
  );
}

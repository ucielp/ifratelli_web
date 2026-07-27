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
      const matchCat = activeCategory === 'All' || prod.category === activeCategory;
      const matchDemo = activeDemographic === 'All' || prod.demographic.includes(activeDemographic);
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
    <section id="catalog" className="py-12 bg-linen min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Shop Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-earth tracking-tight">
            Collection
          </h1>
          <p className="text-xs sm:text-sm text-wood/80">
            Handmade in Spain • Free shipping on orders over €60
          </p>
        </div>

        {/* Minimal Filter Bar */}
        <div className="bg-stone/30 p-5 rounded-2xl border border-stone shadow-2xs mb-10 space-y-4">
          
          {/* Row 1: Search and Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:max-w-xs">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pieces..."
                className="w-full bg-linen pl-9 pr-4 py-2 rounded-xl border border-stone text-xs text-earth placeholder-wood/50 focus:outline-none focus:border-wood transition-colors"
              />
              <span className="absolute left-3 top-2.5 text-wood/60 text-xs">🔍</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-xs text-wood/60 hover:text-earth font-bold"
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
                className="bg-linen px-3 py-1.5 rounded-xl border border-stone text-xs font-medium text-earth focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          {/* Row 2: Categories */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 border-t border-stone/50">
            <span className="text-[11px] font-bold uppercase tracking-wider text-wood/60 mr-1 hidden sm:inline">
              Category:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-wood text-linen shadow-xs'
                    : 'bg-linen hover:bg-stone text-wood border border-stone/80'
                }`}
              >
                {cat === 'All' ? 'All Pieces' : cat}
              </button>
            ))}
          </div>

          {/* Row 3: Demographics */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 border-t border-stone/50">
            <span className="text-[11px] font-bold uppercase tracking-wider text-wood/60 mr-1 hidden sm:inline">
              For:
            </span>
            {DEMOGRAPHICS.map((demo) => (
              <button
                key={demo}
                onClick={() => setActiveDemographic(demo)}
                className={`px-3.5 py-1 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  activeDemographic === demo
                    ? 'bg-olive text-white shadow-2xs'
                    : 'bg-transparent hover:bg-stone/60 text-wood/80'
                }`}
              >
                {demo === 'All' ? 'Everyone' : demo}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-wood font-medium px-1">
          <span>Showing <strong className="text-earth font-bold">{filteredProducts.length}</strong> items</span>
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

        {/* Product Grid: Modern Fashion E-commerce Style (Zara / Mango) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-stone/20 rounded-3xl border border-stone/80 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-earth">No jewelry matches your filters</h3>
            <p className="text-xs text-wood/80 max-w-sm mx-auto">
              Try resetting your search or demographic filter to view all pieces.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveDemographic('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-wood text-linen rounded-xl text-xs font-bold shadow-xs hover:bg-earth transition-colors cursor-pointer"
            >
              Show All Jewelry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={() => setSelectedProduct(product)}
                onAdd={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
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
  onAdd: (e: React.MouseEvent) => void;
}) {
  return (
    <div 
      onClick={onSelect}
      className="group flex flex-col cursor-pointer transition-all duration-300"
    >
      {/* Large Striking Photo Box */}
      <div className="relative aspect-3/4 w-full rounded-2xl overflow-hidden bg-stone/40 mb-3 shadow-2xs group-hover:shadow-lg transition-all duration-500">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Minimal Badges */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-olive/95 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs uppercase tracking-wider">
            New
          </span>
        )}

        {/* Quick Add Button on Hover */}
        <button
          onClick={onAdd}
          title="Add to Cart"
          className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-linen/95 hover:bg-wood hover:text-linen text-earth shadow-md flex items-center justify-center transition-all duration-200 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 active:scale-95 sm:flex"
        >
          <span className="text-lg font-bold leading-none">+</span>
        </button>
      </div>

      {/* Minimal Typography: Name & Price ONLY */}
      <div className="flex items-start justify-between gap-2 px-0.5">
        <h3 className="font-sans text-xs sm:text-sm font-medium text-earth group-hover:text-gold transition-colors line-clamp-1">
          {product.name}
        </h3>
        <span className="font-mono text-xs sm:text-sm font-bold text-earth shrink-0">
          €{product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

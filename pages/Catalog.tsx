
import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product, Category } from '../types';
import ProductCard from '../components/ProductCard';

interface CatalogProps {
  onViewProduct: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onViewProduct, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [sortBy, setSortBy] = useState('relevant');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    if (sortBy === 'low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'high') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 space-y-8 flex-shrink-0">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 sticky top-28">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black text-slate-900">Filtrar por</h2>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="text-xs font-bold text-primary hover:underline uppercase tracking-wider"
              >
                Limpiar todo
              </button>
            </div>

            {/* Categories */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">Categorías</h3>
              <div className="space-y-4">
                {['All', ...Object.values(Category)].map((cat) => (
                  <label key={cat} className="flex items-center gap-4 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat as any)}
                      className="size-5 rounded border-slate-300 text-primary focus:ring-primary transition-all cursor-pointer"
                    />
                    <span className={`text-sm font-semibold transition-colors ${selectedCategory === cat ? 'text-primary' : 'text-slate-500 group-hover:text-primary'}`}>
                      {cat === 'All' ? 'Todos' : cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range - Visual Placeholder */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] mb-8">Rango de Precio</h3>
              <div className="px-2">
                <div className="relative h-1.5 bg-slate-100 rounded-full mb-10">
                  <div className="absolute h-full left-0 right-1/4 bg-primary rounded-full"></div>
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 size-5 bg-white border-4 border-primary rounded-full shadow-lg cursor-grab"></div>
                  <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 size-5 bg-white border-4 border-primary rounded-full shadow-lg cursor-grab"></div>
                  
                  <div className="absolute -bottom-8 left-0 -translate-x-1/2 text-[11px] font-black text-slate-400">$0</div>
                  <div className="absolute -bottom-8 left-3/4 -translate-x-1/2 text-[11px] font-black text-slate-400">$2.500</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
            <h2 className="text-xl font-extrabold text-slate-900">
              Mostrando <span className="text-primary">{filteredProducts.length}</span> productos
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Ordenar por:</span>
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-slate-100 border-none rounded-2xl py-3 pl-5 pr-12 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-primary/20 cursor-pointer transition-all"
                >
                  <option value="relevant">Más relevantes</option>
                  <option value="low">Menor precio</option>
                  <option value="high">Mayor precio</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onView={onViewProduct} 
                onAddToCart={onAddToCart} 
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center pt-10 gap-3">
            <button className="size-12 flex items-center justify-center rounded-2xl bg-white text-slate-400 border border-slate-200 hover:bg-primary hover:text-slate-900 transition-all hover:border-primary shadow-sm">
              <span className="material-symbols-outlined font-bold">chevron_left</span>
            </button>
            {[1, 2, 3].map(p => (
              <button 
                key={p} 
                className={`size-12 flex items-center justify-center rounded-2xl font-black text-sm transition-all shadow-sm ${p === 1 ? 'bg-primary text-slate-900' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'}`}
              >
                {p}
              </button>
            ))}
            <span className="px-2 text-slate-400 font-bold">...</span>
            <button className="size-12 flex items-center justify-center rounded-2xl bg-white text-slate-400 border border-slate-200 hover:bg-primary hover:text-slate-900 transition-all hover:border-primary shadow-sm">
              <span className="material-symbols-outlined font-bold">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

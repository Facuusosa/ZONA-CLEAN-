
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onView: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onView, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-3xl p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full hover:-translate-y-2">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-5">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isFeatured && (
            <span className="bg-primary text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">
              Destacado
            </span>
          )}
          {product.isNew && (
            <span className="bg-turquoise text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-turquoise/20">
              Nuevo
            </span>
          )}
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="absolute bottom-4 right-4 size-12 bg-white rounded-2xl flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary text-slate-800"
        >
          <span className="material-symbols-outlined font-bold">add_shopping_cart</span>
        </button>
      </div>

      <div className="flex flex-col flex-1 cursor-pointer" onClick={() => onView(product.id)}>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">{product.category}</span>
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-3">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-turquoise">${product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <span className="text-sm text-slate-400 line-through font-medium">${product.oldPrice.toLocaleString()}</span>
              )}
            </div>
            <div className="flex items-center text-amber-400">
              <span className="material-symbols-outlined text-sm fill-current-symbol">star</span>
              <span className="text-xs font-bold text-slate-500 ml-1">{product.rating}</span>
            </div>
          </div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="w-full py-4 bg-primary hover:bg-primary-hover text-slate-900 font-extrabold rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-primary/10 group/btn"
          >
            <span className="material-symbols-outlined font-bold text-xl group-hover:rotate-12 transition-transform">shopping_bag</span>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

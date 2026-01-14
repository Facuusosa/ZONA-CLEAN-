
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductDetailProps {
  productId: string;
  onAddToCart: (product: Product, quantity: number) => void;
  onViewProduct: (id: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onAddToCart, onViewProduct }) => {
  const product = PRODUCTS.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-lg group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className={`aspect-square rounded-2xl overflow-hidden bg-white border-2 cursor-pointer transition-all hover:scale-105 ${i === 0 ? 'border-primary' : 'border-transparent hover:border-primary/50 opacity-60 hover:opacity-100'}`}>
                <img src={product.image} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-wider">En Stock</span>
              <div className="flex items-center text-amber-400">
                {[1, 2, 3, 4, 5].map(s => (
                  <span key={s} className={`material-symbols-outlined text-xl ${s <= Math.round(product.rating) ? 'fill-current-symbol' : ''}`}>star</span>
                ))}
                <span className="ml-2 text-slate-400 text-sm font-bold">({product.reviews} reseñas)</span>
              </div>
            </div>
            <h1 className="text-5xl font-black text-slate-900 leading-tight tracking-tight">{product.name}</h1>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">SKU: {product.sku} | Categoría: {product.category}</p>
          </div>

          <div className="space-y-1">
            {product.oldPrice && <p className="text-slate-400 text-lg font-bold line-through">${product.oldPrice.toLocaleString()}</p>}
            <div className="flex items-baseline gap-4">
              <span className="text-6xl font-black text-turquoise">${product.price.toLocaleString()}</span>
              <span className="text-slate-400 text-xl font-medium">/ unidad</span>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm space-y-6">
             <div className="flex border-b border-slate-100">
               <button 
                onClick={() => setActiveTab('desc')}
                className={`pb-4 px-2 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === 'desc' ? 'text-primary' : 'text-slate-400'}`}
               >
                 Descripción
                 {activeTab === 'desc' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />}
               </button>
               <button 
                onClick={() => setActiveTab('details')}
                className={`pb-4 px-8 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === 'details' ? 'text-primary' : 'text-slate-400'}`}
               >
                 Detalles
                 {activeTab === 'details' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />}
               </button>
             </div>
             
             <div className="min-h-[100px]">
               {activeTab === 'desc' ? (
                 <p className="text-slate-600 leading-relaxed font-medium">{product.description}</p>
               ) : (
                 <ul className="space-y-3">
                   <li className="flex justify-between text-sm"><span className="text-slate-400 font-bold uppercase">Material</span> <span className="text-slate-800 font-black">Fórmula Biodegradable</span></li>
                   <li className="flex justify-between text-sm"><span className="text-slate-400 font-bold uppercase">País</span> <span className="text-slate-800 font-black">Argentina</span></li>
                   <li className="flex justify-between text-sm"><span className="text-slate-400 font-bold uppercase">Garantía</span> <span className="text-slate-800 font-black">30 días</span></li>
                 </ul>
               )}
             </div>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center bg-slate-100 p-2 rounded-2xl">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="size-12 flex items-center justify-center rounded-xl bg-white shadow-sm hover:bg-primary transition-colors"
                >
                  <span className="material-symbols-outlined font-black">remove</span>
                </button>
                <span className="w-16 text-center text-xl font-black">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="size-12 flex items-center justify-center rounded-xl bg-white shadow-sm hover:bg-primary transition-colors"
                >
                  <span className="material-symbols-outlined font-black">add</span>
                </button>
              </div>
              <button 
                onClick={() => onAddToCart(product, quantity)}
                className="flex-1 h-16 bg-primary hover:bg-primary-hover text-slate-900 font-black text-xl rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-4 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined font-bold">shopping_cart</span>
                Agregar al Carrito
              </button>
            </div>
            <button className="h-14 w-full border-2 border-slate-100 text-slate-600 font-extrabold rounded-2xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">favorite</span>
              Añadir a Deseados
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-4 text-slate-500 font-bold text-sm">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              Envío Gratis hoy
            </div>
            <div className="flex items-center gap-4 text-slate-500 font-bold text-sm">
              <div className="size-10 rounded-xl bg-turquoise/10 flex items-center justify-center text-turquoise">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              Garantía 1 año
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-32 space-y-12">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-black text-slate-900">Productos relacionados</h3>
          <button className="text-primary font-bold flex items-center gap-1 group hover:underline">
            Ver todo
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4).map(item => (
            <div 
              key={item.id} 
              className="group bg-white p-6 rounded-[2rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
              onClick={() => {
                onViewProduct(item.id);
                window.scrollTo(0,0);
              }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-4">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{item.category}</span>
              <h4 className="font-extrabold text-slate-900 mt-2 line-clamp-1 group-hover:text-primary transition-colors">{item.name}</h4>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-black text-turquoise">${item.price.toLocaleString()}</span>
                <button className="size-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-slate-900 transition-colors">
                  <span className="material-symbols-outlined text-sm font-black">add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

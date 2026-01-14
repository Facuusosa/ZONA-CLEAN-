
import React from 'react';
import { CATEGORIES, PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  onViewProduct: (id: string) => void;
  onAddToCart: (product: Product) => void;
  onViewCatalog: () => void;
}

const Home: React.FC<HomeProps> = ({ onViewProduct, onAddToCart, onViewCatalog }) => {
  return (
    <div className="space-y-20 pb-20 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="px-4 lg:px-8 mt-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 min-h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=2070")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
          
          <div className="relative z-10 max-w-2xl px-12 lg:px-20 space-y-8">
            <span className="inline-block py-2 px-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest">
              Nuevas Fórmulas 2024
            </span>
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight tracking-tight">
              Limpieza <br/>
              <span className="text-primary italic">profunda</span> <br/>
              para tu hogar
            </h1>
            <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-lg">
              Productos de alta gama diseñados para eliminar el 99.9% de gérmenes sin dañar tus superficies favoritas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onViewCatalog}
                className="px-10 py-5 bg-primary hover:bg-primary-hover text-slate-900 font-black rounded-2xl text-lg transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
              >
                Explorar Catálogo
              </button>
              <button className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl text-lg backdrop-blur-md transition-all border border-white/10">
                Ver Ofertas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-12 rounded-[2rem] shadow-sm border border-slate-100">
          {[
            { icon: 'local_shipping', title: 'Envío rápido', desc: 'Recibe en 24/48hs hábiles', color: 'bg-primary/10 text-primary' },
            { icon: 'verified_user', title: 'Pago seguro', desc: '100% transacciones seguras', color: 'bg-turquoise/10 text-turquoise' },
            { icon: 'star', title: 'Calidad garantizada', desc: 'Mejores marcas del mercado', color: 'bg-amber-100 text-amber-500' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 group hover:scale-105 transition-transform">
              <div className={`size-16 rounded-2xl ${item.color} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-extrabold text-xl text-slate-800">{item.title}</h4>
                <p className="text-slate-500 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <span className="text-turquoise font-black uppercase tracking-widest text-xs">Colecciones</span>
            <h2 className="text-4xl font-black text-slate-900 leading-tight">Categorías Destacadas</h2>
          </div>
          <button 
            onClick={onViewCatalog}
            className="group flex items-center gap-2 text-slate-900 font-bold hover:text-primary transition-all"
          >
            Ver catálogo completo
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <div 
              key={idx} 
              className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={onViewCatalog}
            >
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                <div>
                  <h3 className="text-white text-2xl font-black">{cat.name}</h3>
                  <p className="text-white/70 font-medium text-sm">Explorar productos</p>
                </div>
                <div className="size-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
                   <span className="material-symbols-outlined">{cat.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <span className="text-turquoise font-black uppercase tracking-widest text-xs">Lo más buscado</span>
            <h2 className="text-4xl font-black text-slate-900 leading-tight">Productos Más Vendidos</h2>
          </div>
          <button className="text-primary font-bold hover:underline">Ver todos</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onView={onViewProduct} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

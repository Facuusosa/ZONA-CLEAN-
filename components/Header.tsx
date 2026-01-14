
import React from 'react';
import { View } from '../types';

interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView, cartCount }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-10">
            <button 
              onClick={() => setView('home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-slate-900 shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined font-bold">cleaning_services</span>
              </div>
              <h1 className="text-2xl font-black tracking-tight text-slate-900">Zona Clean</h1>
            </button>
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => setView('home')}
                className={`text-sm font-semibold transition-colors ${currentView === 'home' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
              >
                Inicio
              </button>
              <button 
                onClick={() => setView('catalog')}
                className={`text-sm font-semibold transition-colors ${currentView === 'catalog' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
              >
                Catálogo
              </button>
              <button className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Ofertas</button>
              <button className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Contacto</button>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-slate-100 rounded-2xl px-4 py-2.5 w-72 group focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/30 transition-all">
              <span className="material-symbols-outlined text-slate-400 text-xl group-focus-within:text-primary transition-colors">search</span>
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400 font-medium ml-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setView('cart')}
                className="relative p-3 text-slate-700 hover:bg-slate-100 rounded-2xl transition-all group"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">shopping_cart</span>
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-turquoise text-white text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="p-3 text-slate-700 hover:bg-slate-100 rounded-2xl transition-all">
                <span className="material-symbols-outlined">person</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

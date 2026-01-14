
import React, { useState, useEffect, useCallback } from 'react';
import { View, Product, CartItem } from './types';
import Header from './components/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { assistant } from './services/geminiService';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [assistantInput, setAssistantInput] = useState('');
  const [assistantMessages, setAssistantMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, quantity }];
    });
    // Optional: Auto-redirect to cart or show toast
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleViewProduct = (id: string) => {
    setSelectedProductId(id);
    setCurrentView('product');
    window.scrollTo(0, 0);
  };

  const handleAssistantSend = async () => {
    if (!assistantInput.trim()) return;
    
    const userMsg = assistantInput;
    setAssistantMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setAssistantInput('');
    setIsTyping(true);

    const response = await assistant.getCleaningTip(userMsg);
    setAssistantMessages(prev => [...prev, { role: 'ai', text: response || '' }]);
    setIsTyping(false);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-primary/30">
      <Header currentView={currentView} setView={setCurrentView} cartCount={cartCount} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <Home 
            onViewProduct={handleViewProduct} 
            onAddToCart={handleAddToCart} 
            onViewCatalog={() => setCurrentView('catalog')}
          />
        )}
        {currentView === 'catalog' && (
          <Catalog 
            onViewProduct={handleViewProduct} 
            onAddToCart={handleAddToCart} 
          />
        )}
        {currentView === 'product' && selectedProductId && (
          <ProductDetail 
            productId={selectedProductId} 
            onAddToCart={handleAddToCart}
            onViewProduct={handleViewProduct}
          />
        )}
        {currentView === 'cart' && (
          <Cart 
            items={cart} 
            updateQuantity={updateQuantity} 
            removeItem={removeItem}
            onContinueShopping={() => setCurrentView('catalog')}
          />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-slate-900">
                  <span className="material-symbols-outlined font-bold">cleaning_services</span>
                </div>
                <h2 className="text-2xl font-black tracking-tight text-slate-900">Zona Clean</h2>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">
                Haciendo que la limpieza de tu hogar sea más fácil, rápida y profesional con productos de vanguardia.
              </p>
              <div className="flex gap-4">
                {['public', 'share', 'thumb_up'].map(icon => (
                  <button key={icon} className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-slate-900 transition-all">
                    <span className="material-symbols-outlined">{icon}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {[
              { title: 'Compañía', links: ['Sobre Nosotros', 'Sustentabilidad', 'Blog', 'Carreras'] },
              { title: 'Soporte', links: ['Centro de Ayuda', 'Seguimiento', 'Devoluciones', 'FAQ'] }
            ].map((col, idx) => (
              <div key={idx} className="space-y-8">
                <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-slate-500 font-medium hover:text-primary transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-8">
              <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest">Suscríbete</h4>
              <p className="text-slate-500 font-medium">Recibe ofertas exclusivas y consejos de limpieza.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Tu email..." 
                  className="w-full bg-slate-50 border-slate-100 rounded-2xl px-5 py-4 text-sm font-medium focus:ring-primary focus:border-primary transition-all"
                />
                <button className="w-full bg-primary py-4 rounded-2xl font-black text-slate-900 shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-100 text-center">
             <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">© 2024 Zona Clean S.A. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Smart Assistant Button */}
      <button 
        onClick={() => setIsAssistantOpen(!isAssistantOpen)}
        className="fixed bottom-8 right-8 size-16 bg-turquoise hover:bg-turquoise-dark text-white rounded-[2rem] shadow-2xl shadow-turquoise/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-[60] group"
      >
        <span className="material-symbols-outlined text-3xl font-bold group-hover:rotate-12 transition-transform">
          {isAssistantOpen ? 'close' : 'smart_toy'}
        </span>
      </button>

      {/* Assistant Panel */}
      {isAssistantOpen && (
        <div className="fixed bottom-28 right-8 w-[400px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col z-[60] overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-300">
          <div className="bg-turquoise p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="size-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <span className="material-symbols-outlined text-2xl font-black">robot_2</span>
              </div>
              <div>
                <h3 className="text-xl font-black">Asistente Zona Clean</h3>
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Impulsado por Gemini</p>
              </div>
            </div>
          </div>
          <div className="flex-grow p-8 overflow-y-auto space-y-6">
            <div className="flex gap-4">
              <div className="size-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                <span className="material-symbols-outlined text-lg">robot_2</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100">
                <p className="text-sm font-medium text-slate-600">¡Hola! Soy tu experto en limpieza. ¿Tienes alguna mancha difícil o necesitas una recomendación de producto?</p>
              </div>
            </div>
            {assistantMessages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`size-8 rounded-xl flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-primary/20 text-primary' : 'bg-slate-100 text-slate-400'}`}>
                  <span className="material-symbols-outlined text-lg">{msg.role === 'user' ? 'person' : 'robot_2'}</span>
                </div>
                <div className={`p-4 rounded-2xl border ${msg.role === 'user' ? 'bg-primary text-slate-900 border-primary rounded-tr-none' : 'bg-white border-slate-100 rounded-tl-none shadow-sm'}`}>
                  <p className="text-sm font-semibold whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-4 animate-pulse">
                <div className="size-8 rounded-xl bg-slate-100" />
                <div className="h-10 w-24 bg-slate-50 rounded-2xl" />
              </div>
            )}
          </div>
          <div className="p-6 border-t border-slate-100 bg-slate-50/50">
            <div className="relative">
              <input 
                type="text" 
                value={assistantInput}
                onChange={(e) => setAssistantInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAssistantSend()}
                placeholder="Escribe tu duda aquí..."
                className="w-full bg-white border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold focus:ring-turquoise focus:border-turquoise transition-all pr-16"
              />
              <button 
                onClick={handleAssistantSend}
                disabled={isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 size-12 bg-turquoise text-white rounded-xl flex items-center justify-center shadow-lg shadow-turquoise/20 hover:bg-turquoise-dark transition-all disabled:opacity-50"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;


import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  onContinueShopping: () => void;
}

const Cart: React.FC<CartProps> = ({ items, updateQuantity, removeItem, onContinueShopping }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = subtotal > 10000 ? subtotal * 0.1 : 0;
  const shipping = subtotal > 25000 ? 0 : 2000;
  const total = subtotal - discount + shipping;
  const freeShippingThreshold = 25000;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Free Shipping Alert */}
      <div className="bg-white rounded-[2rem] p-8 mb-12 shadow-sm border border-slate-100">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-800 text-lg font-black">
              {progress >= 100 
                ? '¡Felicidades! Tienes envío gratis' 
                : `Te faltan $${(freeShippingThreshold - subtotal).toLocaleString()} para Envío Gratis!`}
            </p>
            <p className="text-turquoise text-xl font-black">${subtotal.toLocaleString()} / $${freeShippingThreshold.toLocaleString()}</p>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3.5 relative overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ease-out shadow-lg ${progress >= 100 ? 'bg-primary' : 'bg-turquoise'}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
            <p>Sigue agregando productos para ahorrar</p>
            <p>Meta: $25.000</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Items */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-black tracking-tight text-slate-900">
              Tu Carrito <span className="text-slate-300 font-bold ml-2">({items.length} productos)</span>
            </h1>
            <button className="text-sm font-black text-slate-400 hover:text-red-500 flex items-center gap-2 transition-colors uppercase tracking-widest">
              <span className="material-symbols-outlined text-lg">delete_sweep</span>
              Vaciar carrito
            </button>
          </div>

          <div className="space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-200">
                <span className="material-symbols-outlined text-6xl text-slate-200 mb-6">shopping_basket</span>
                <p className="text-slate-400 font-bold text-xl mb-8">Tu carrito está vacío</p>
                <button 
                  onClick={onContinueShopping}
                  className="px-10 py-4 bg-primary text-slate-900 font-black rounded-2xl hover:scale-105 transition-all"
                >
                  Ir a comprar
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="group bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center gap-8 transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="size-32 rounded-2xl overflow-hidden bg-slate-50 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-grow space-y-2 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                      <div>
                        <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
                        <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">{item.category}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-slate-200 hover:text-red-500 transition-colors self-center sm:self-start"
                      >
                        <span className="material-symbols-outlined text-2xl">delete</span>
                      </button>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-6">
                      <div className="flex items-center bg-slate-50 p-1.5 rounded-2xl">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="size-10 flex items-center justify-center rounded-xl bg-white shadow-sm hover:bg-primary transition-colors font-black"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-black text-lg">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="size-10 flex items-center justify-center rounded-xl bg-white shadow-sm hover:bg-primary transition-colors font-black"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        {item.oldPrice && <p className="text-xs text-slate-300 line-through font-bold">${(item.oldPrice * item.quantity).toLocaleString()}</p>}
                        <p className="text-2xl font-black text-turquoise">${(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <button 
            onClick={onContinueShopping}
            className="mt-12 flex items-center gap-3 text-slate-400 hover:text-primary font-black uppercase tracking-widest text-sm transition-all group"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Continuar comprando
          </button>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white p-10 rounded-[2.5rem] shadow-2xl border-2 border-primary/10 space-y-8">
            <h2 className="text-2xl font-black text-slate-900">Resumen del Pedido</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-slate-400 uppercase tracking-widest">Subtotal</span>
                <span className="text-slate-800">${subtotal.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-400 uppercase tracking-widest">Descuento (10%)</span>
                  <span className="text-turquoise">-${discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-slate-400 uppercase tracking-widest">Envío</span>
                <span className={shipping === 0 ? 'text-green-500' : 'text-slate-800'}>
                  {shipping === 0 ? 'Gratis' : `$${shipping.toLocaleString()}`}
                </span>
              </div>
              <div className="pt-6 border-t border-slate-100 flex justify-between items-end">
                <span className="text-xl font-black text-slate-900 uppercase">Total</span>
                <div className="text-right">
                  <p className="text-4xl font-black text-slate-900 leading-none">${total.toLocaleString()}</p>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mt-2">IVA Incluido</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-primary-hover text-slate-900 font-black py-5 rounded-[1.5rem] flex items-center justify-center gap-4 shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 text-lg">
              Finalizar Compra
              <span className="material-symbols-outlined font-bold">shopping_bag</span>
            </button>

            <div className="space-y-6">
              <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Medios de Pago Aceptados</p>
              <div className="flex justify-center items-center gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                {['VISA', 'MASTERCARD', 'MERCADOPAGO', 'PAYPAL'].map(m => (
                  <div key={m} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-black text-slate-400">{m}</div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 space-y-4">
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Cupón de Descuento</p>
              <div className="flex gap-3">
                <input 
                  type="text" 
                  placeholder="CÓDIGO..." 
                  className="bg-white border-slate-200 rounded-xl text-xs flex-grow focus:ring-primary font-bold uppercase px-4"
                />
                <button className="bg-slate-200 px-6 py-2 rounded-xl text-xs font-black hover:bg-slate-300 transition-colors uppercase">Aplicar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

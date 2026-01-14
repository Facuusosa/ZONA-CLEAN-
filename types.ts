
export enum Category {
  Cocina = 'Cocina',
  Baño = 'Baño',
  Pisos = 'Pisos',
  Lavandería = 'Lavandería',
  Accesorios = 'Accesorios',
  Industrial = 'Industrial'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  sku: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type View = 'home' | 'catalog' | 'product' | 'cart';

export interface AppState {
  currentView: View;
  selectedProductId: string | null;
  cart: CartItem[];
  searchQuery: string;
}

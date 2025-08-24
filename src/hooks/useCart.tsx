import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';
import { trackAddToCart, trackViewCart } from '@/lib/analytics';

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  specifications?: Record<string, string>;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        
        const total = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const itemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        
        return { items: updatedItems, total, itemCount };
      }
      
      const newItems = [...state.items, action.payload];
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return { items: newItems, total, itemCount };
    }
    
    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      const total = filteredItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = filteredItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return { items: filteredItems, total, itemCount };
    }
    
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      
      const total = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return { items: updatedItems, total, itemCount };
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Initialize cart from localStorage
  const getInitialState = (): CartState => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('bb_cart');
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            items: parsed.items || [],
            total: parsed.total || 0,
            itemCount: parsed.itemCount || 0
          };
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
    return { items: [], total: 0, itemCount: 0 };
  };

  const [state, dispatch] = useReducer(cartReducer, getInitialState());

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('bb_cart', JSON.stringify(state));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
  }, [state]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity: 1 } });
    
    // Track analytics event
    trackAddToCart(item.id, item.name, item.price);
    
    toast({
      title: "Agregado al carrito",
      description: `${item.name} se agregó al carrito`,
    });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    toast({
      title: "Producto eliminado",
      description: "El producto se eliminó del carrito",
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: "Carrito vacío",
      description: "Se eliminaron todos los productos del carrito",
    });
  };

  return (
    <CartContext.Provider value={{
      state,
      dispatch,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
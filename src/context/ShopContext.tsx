'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ProductCategory, Demographic, User, Order } from '@/types';
import { MOCK_PRODUCTS, MOCK_USER } from '@/lib/mock-data';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  cartTotal: number;
  cartCount: number;
  shippingFee: number;
  freeShippingProgress: number;
  amountNeededForFreeShipping: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  activeCategory: ProductCategory;
  setActiveCategory: (category: ProductCategory) => void;
  activeDemographic: Demographic;
  setActiveDemographic: (demographic: Demographic) => void;
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  addOrder: (order: Order) => void;
  notification: string | null;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 60.00;
const BASE_SHIPPING_FEE = 4.50;

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [products] = useState<Product[]>(MOCK_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');
  const [activeDemographic, setActiveDemographic] = useState<Demographic>('All');
  const [user, setUser] = useState<User | null>(MOCK_USER);
  const [notification, setNotification] = useState<string | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('ifratelli_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse saved cart', e);
      }
    }
    const savedUser = localStorage.getItem('ifratelli_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse saved user', e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('ifratelli_cart', JSON.stringify(cart));
  }, [cart]);

  // Save user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('ifratelli_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('ifratelli_user');
    }
  }, [user]);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showNotification(`Added "${product.name}" to your tray ✨`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const login = (email: string) => {
    // Simulated phase 1 auth
    const loggedInUser: User = {
      ...MOCK_USER,
      email: email || MOCK_USER.email
    };
    setUser(loggedInUser);
    setIsAuthOpen(false);
    showNotification(`Welcome back to ifratelli! 🌿`);
  };

  const logout = () => {
    setUser(null);
    showNotification('Logged out successfully.');
  };

  const addOrder = (order: Order) => {
    if (user) {
      const updatedUser = {
        ...user,
        orders: [order, ...user.orders]
      };
      setUser(updatedUser);
    }
    clearCart();
    setIsCheckoutOpen(false);
    showNotification(`Order #${order.id} placed! Gracias ❤️`);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const shippingFee = cartTotal === 0 ? 0 : cartTotal >= FREE_SHIPPING_THRESHOLD ? 0 : BASE_SHIPPING_FEE;
  const freeShippingProgress = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        cartTotal,
        cartCount,
        shippingFee,
        freeShippingProgress,
        amountNeededForFreeShipping,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isAuthOpen,
        setIsAuthOpen,
        isChatOpen,
        setIsChatOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        selectedProduct,
        setSelectedProduct,
        activeCategory,
        setActiveCategory,
        activeDemographic,
        setActiveDemographic,
        user,
        login,
        logout,
        addOrder,
        notification
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}

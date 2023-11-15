"use client";
import { Product } from "@/types/product";
import { create, useStore } from "zustand";

function calculateCartTotal(items: Product[]): number {
  return items.reduce((total, item) => total + (item.quantity || 1) * parseFloat(item.price), 0);
}

type MyStore = {
  cartItems: Product[];
  cartTotal: number;
  addToCart: (product: Product) => void;
  removeCartItem: (productId: number) => void;
};

const store = create<MyStore>((set) => ({
  cartItems: [],
  cartTotal: 0,

  addToCart: (product) =>
    set((state) => {
      const productExists = state.cartItems.find((item) => item.id === product.id);
      if (productExists) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
        return {
          cartItems: updatedCartItems,
          cartTotal: calculateCartTotal(updatedCartItems),
        };
      }
      return {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        cartTotal: calculateCartTotal([...state.cartItems, { ...product, quantity: 1 }]),
      };
    }),
  removeCartItem: (productId) =>
  set((state) => {
    const productExists = state.cartItems.find((item) => item.id === productId);
    if (productExists && productExists.quantity && productExists.quantity > 1) {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === productExists.id ? { ...item, quantity: item.quantity as number - 1 } : item
      );
      return {
        cartItems: updatedCartItems,
        cartTotal: calculateCartTotal(updatedCartItems),
      };
    } else {
      const updatedCartItems = state.cartItems.filter((item) => item.id !== productId);
      return {
        cartItems: updatedCartItems,
        cartTotal: calculateCartTotal(updatedCartItems),
      };
    }
  })
}));

function useCartState() {
  const state = useStore(store);
  const { addToCart, cartItems, cartTotal, removeCartItem } = state;

  return {
    addToCart,
    cartItems,
    cartTotal,
    removeCartItem,
  };
}

export default useCartState;

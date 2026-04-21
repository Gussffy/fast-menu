import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import type { ImageSourcePropType } from "react-native";

type CartItem = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
  image?: ImageSourcePropType;
};

type AddToCartPayload = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  quantity?: number;
  image?: ImageSourcePropType;
};

type CartContextData = {
  cartItems: CartItem[];
  cartItemsCount: number;
  cartTotal: number;
  addToCart: (payload: AddToCartPayload) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextData | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (payload: AddToCartPayload) => {
    const quantityToAdd = payload.quantity ?? 1;

    setCartItems((current) => {
      const existing = current.find((item) => item.id === payload.id);

      if (existing) {
        return current.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item,
        );
      }

      return [
        ...current,
        {
          id: payload.id,
          title: payload.title,
          subtitle: payload.subtitle,
          price: payload.price,
          quantity: quantityToAdd,
          image: payload.image,
        },
      ];
    });
  };

  const incrementItem = (id: string) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrementItem = (id: string) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemsCount = useMemo(
    () =>
      cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0),
    [cartItems],
  );

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
        0,
      ),
    [cartItems],
  );

  const value: CartContextData = {
    cartItems,
    cartItemsCount,
    cartTotal,
    addToCart,
    incrementItem,
    decrementItem,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
};

export type { AddToCartPayload, CartItem };

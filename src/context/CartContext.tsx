import { FC, PropsWithChildren, createContext, useState } from "react";

import { ICartItem } from "../types/cart";

export interface ICartContext {
  items: ICartItem[];
  addItem: (item: ICartItem) => void;
  removeItem: (id: number) => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

export const CartContext = createContext({} as ICartContext);

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<ICartItem[]>([]);

  const addItem = (item: ICartItem) => setItems((prev) => [...prev, item]);
  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((item) => item.id !== id));
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const value: ICartContext = {
    isOpen,
    items,
    addItem,
    removeItem,
    openCart,
    closeCart,
    toggleCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

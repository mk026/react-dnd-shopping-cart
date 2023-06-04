import { FC, PropsWithChildren, createContext, useState } from "react";

import { IProduct } from "../types/product";

export interface ICartItem {
  product: IProduct;
  amount: number;
}

export interface ICartContext {
  items: ICartItem[];
  addItem: (item: ICartItem) => void;
  isOpen: boolean;
  toggle: () => void;
}

export const CartContext = createContext({} as ICartContext);

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<ICartItem[]>([]);

  const addItem = (item: ICartItem) => setItems((prev) => [...prev, item]);
  const toggle = () => setIsOpen((prev) => !prev);

  const value: ICartContext = {
    isOpen,
    items,
    addItem,
    toggle,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

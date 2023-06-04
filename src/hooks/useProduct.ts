import { useDrag } from "react-dnd";

import { IProduct } from "../types/product";
import { useEffect } from "react";
import { useCartContext } from "./useCartContext";

export const PRODUCT_TYPE = "product";

export const useProduct = (product: IProduct) => {
  const [{ isDragging }, ref] = useDrag(() => ({
    type: PRODUCT_TYPE,
    item: product,
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));
  const { isOpen, openCart, closeCart } = useCartContext();

  useEffect(() => {
    if (isDragging && !isOpen) {
      openCart();
    }
    if (!isDragging) {
      closeCart();
    }
  }, [isDragging]);

  return { isDragging, ref };
};

import { useDrop } from "react-dnd";

import { PRODUCT_TYPE } from "./useProduct";
import { useCartContext } from "./useCartContext";

export const useCart = () => {
  const [{ isOver }, ref] = useDrop(() => ({
    accept: PRODUCT_TYPE,
    collect: (monitor) => ({ isOver: monitor.isOver }),
  }));
  const { isOpen } = useCartContext();

  return { isOpen, isOver, ref };
};

import { useDrag } from "react-dnd";

import { IProduct } from "../types/product";

export const PRODUCT_TYPE = "product";

export const useProduct = (product: IProduct) =>
  useDrag(() => ({
    type: PRODUCT_TYPE,
    item: product,
    collect: (monitor) => ({ isDragging: monitor.isDragging }),
  }));

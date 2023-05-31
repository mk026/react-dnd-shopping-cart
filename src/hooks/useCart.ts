import { useDrop } from "react-dnd";

import { PRODUCT_TYPE } from "./useProduct";

export const useCart = () =>
  useDrop(() => ({
    accept: PRODUCT_TYPE,
    collect: (monitor) => ({ isOver: monitor.isOver }),
  }));

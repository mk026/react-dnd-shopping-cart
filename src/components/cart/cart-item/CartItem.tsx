import { FC } from "react";

import { IProduct } from "../../../types/product";

interface CartItemProps {
  product: IProduct;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default CartItem;

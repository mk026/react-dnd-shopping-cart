import { FC } from "react";

import CartControls from "./cart-controls";
import CartTotal from "./cart-total";

interface CartProps {
  isOpen: boolean;
}

const Cart: FC<CartProps> = ({ isOpen }) => {
  return isOpen ? (
    <div>
      <p>Cart</p>
      <CartTotal total={0} />
      <CartControls />
    </div>
  ) : null;
};

export default Cart;

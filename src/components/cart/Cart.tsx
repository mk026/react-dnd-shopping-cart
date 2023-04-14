import { FC } from "react";

import CartControls from "./cart-controls";
import CartTotal from "./cart-total";

const Cart: FC = () => {
  return (
    <div>
      <p>Cart</p>
      <CartTotal />
      <CartControls />
    </div>
  );
};

export default Cart;

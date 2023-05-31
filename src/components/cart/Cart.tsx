import { FC } from "react";
import { Card } from "@mui/material";

import CartControls from "./cart-controls";
import CartTotal from "./cart-total";
import { useCart } from "../../hooks/useCart";

import classes from "./Cart.module.css";

interface CartProps {
  isOpen: boolean;
}

const Cart: FC<CartProps> = ({ isOpen }) => {
  const [, ref] = useCart();

  return isOpen ? (
    <Card className={classes.cart} ref={ref}>
      <p>Cart</p>
      <CartTotal total={0} />
      <CartControls />
    </Card>
  ) : null;
};

export default Cart;

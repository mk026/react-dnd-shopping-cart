import { FC } from "react";
import { Card } from "@mui/material";

import CartControls from "./cart-controls";
import CartTotal from "./cart-total";

import classes from "./Cart.module.css";

interface CartProps {
  isOpen: boolean;
}

const Cart: FC<CartProps> = ({ isOpen }) => {
  return isOpen ? (
    <Card className={classes.cart}>
      <p>Cart</p>
      <CartTotal total={0} />
      <CartControls />
    </Card>
  ) : null;
};

export default Cart;

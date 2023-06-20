import { FC } from "react";
import { Card } from "@mui/material";

import CartControls from "./cart-controls";
import CartTotal from "./cart-total";
import { useCart } from "../../hooks/useCart";

import classes from "./Cart.module.css";

const Cart: FC = () => {
  const { isOpen, isOver, ref } = useCart();

  if (!isOpen) {
    return null;
  }

  const styles = [classes.cart];

  if (isOver) {
    styles.push(classes.hovering);
  }

  return (
    <Card className={classes.cart} ref={ref}>
      <p>Cart</p>
      <CartTotal total={0} />
      <CartControls />
    </Card>
  );
};

export default Cart;

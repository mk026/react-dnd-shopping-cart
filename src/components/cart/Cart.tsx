import { FC } from "react";
import { Card, Stack } from "@mui/material";

import { useCart } from "../../hooks/useCart";
import CartItem from "./cart-item";
import CartControls from "./cart-controls";
import CartTotal from "./cart-total";

import classes from "./Cart.module.css";

const Cart: FC = () => {
  const { isOpen, items, isOver, ref } = useCart();

  if (!isOpen) {
    return null;
  }

  const styles = [classes.cart];

  if (isOver) {
    styles.push(classes.hovering);
  }

  return (
    <Card className={styles.join(" ")} ref={ref}>
      <Stack>
        {items.map((item) => (
          <CartItem item={item} />
        ))}
      </Stack>
      <CartTotal total={0} />
      <CartControls />
    </Card>
  );
};

export default Cart;

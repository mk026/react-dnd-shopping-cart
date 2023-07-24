import { Stack } from "@mui/material";
import { FC } from "react";

import CartItem from "./cart-item";
import { ICartItem } from "../../../types/cart";

import classes from "./CartItems.module.css";

interface CartItemsProps {
  items: ICartItem[];
}

const CartItems: FC<CartItemsProps> = ({ items }) => {
  return (
    <Stack className={classes.items}>
      {items.map((item) => (
        <CartItem item={item} />
      ))}
    </Stack>
  );
};

export default CartItems;

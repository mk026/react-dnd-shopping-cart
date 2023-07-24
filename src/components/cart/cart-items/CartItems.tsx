import { Stack } from "@mui/material";
import { FC } from "react";

import CartItem from "./cart-item";
import { ICartItem } from "../../../types/cart";

interface CartItemsProps {
  items: ICartItem[];
}

const CartItems: FC<CartItemsProps> = ({ items }) => {
  return (
    <Stack>
      {items.map((item) => (
        <CartItem item={item} />
      ))}
    </Stack>
  );
};

export default CartItems;

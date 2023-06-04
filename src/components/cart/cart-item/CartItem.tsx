import { FC } from "react";
import { Button, Card, Typography } from "@mui/material";

import { ICartItem } from "../../../types/cart";

interface CartItemProps {
  item: ICartItem;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  return (
    <Card>
      <Typography>{item.title}</Typography>
      <Typography>{item.description}</Typography>
      <Typography>{item.price}</Typography>
      <Typography>{item.amount}</Typography>
      <Button>Remove</Button>
    </Card>
  );
};

export default CartItem;

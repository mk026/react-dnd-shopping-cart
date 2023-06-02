import { FC } from "react";
import { Button, Card, Typography } from "@mui/material";

import { IProduct } from "../../../types/product";

interface CartItemProps {
  product: IProduct;
  amount: number;
}

const CartItem: FC<CartItemProps> = ({ product, amount }) => {
  return (
    <Card>
      <Typography>{product.title}</Typography>
      <Typography>{product.description}</Typography>
      <Typography>{product.price}</Typography>
      <Typography>{amount}</Typography>
      <Button>Remove</Button>
    </Card>
  );
};

export default CartItem;

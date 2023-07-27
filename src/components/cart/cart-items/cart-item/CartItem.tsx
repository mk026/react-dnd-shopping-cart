import { FC } from "react";
import { Button, Card, Typography } from "@mui/material";

import { ICartItem } from "../../../../types/cart";

import classes from "./CartItem.module.css";

interface CartItemProps {
  item: ICartItem;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  return (
    <Card className={classes.item}>
      <Typography className={classes.title}>{item.title}</Typography>
      <Typography className={classes.description}>
        {item.description}
      </Typography>
      <Typography className={classes.price}>{item.price}</Typography>
      <Typography className={classes.amount}>{item.amount}</Typography>
      <Button>Remove</Button>
    </Card>
  );
};

export default CartItem;

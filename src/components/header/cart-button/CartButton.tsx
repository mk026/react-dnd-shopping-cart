import { FC } from "react";
import { Badge, Button } from "@mui/material";

import { useCartContext } from "../../../hooks/useCartContext";

import classes from "./CartButton.module.css";

const CartButton: FC = () => {
  const { toggleCart, items } = useCartContext();

  return (
    <Badge badgeContent={items.length}>
      <Button className={classes.button} onClick={toggleCart}>
        Cart
      </Button>
    </Badge>
  );
};

export default CartButton;

import { FC } from "react";
import { Button } from "@mui/material";

import { useCartContext } from "../../../hooks/useCartContext";

import classes from "./CartButton.module.css";

const CartButton: FC = () => {
  const { toggleCart } = useCartContext();

  return (
    <Button className={classes.button} onClick={toggleCart}>
      Cart
    </Button>
  );
};

export default CartButton;

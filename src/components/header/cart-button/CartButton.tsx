import { FC } from "react";
import { Button } from "@mui/material";

import classes from "./CartButton.module.css";

interface CartButtonProps {
  toggleCart: () => void;
}

const CartButton: FC<CartButtonProps> = ({ toggleCart }) => {
  return (
    <Button className={classes.button} onClick={toggleCart}>
      Cart
    </Button>
  );
};

export default CartButton;

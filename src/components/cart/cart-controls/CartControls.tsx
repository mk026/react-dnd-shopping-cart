import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { useCartContext } from "../../../hooks/useCartContext";
import { Paths } from "../../../routes";

import classes from "./CartControls.module.css";

const CartControls: FC = () => {
  const { closeCart } = useCartContext();

  return (
    <Stack direction="row" className={classes.controls}>
      <Button
        component={Link}
        to={Paths.ORDER}
        className={classes["order-btn"]}
      >
        Order
      </Button>
      <Button onClick={closeCart} className={classes["close-btn"]}>
        Close
      </Button>
    </Stack>
  );
};

export default CartControls;

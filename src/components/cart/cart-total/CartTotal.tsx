import { FC } from "react";
import { Typography } from "@mui/material";

import classes from "./CartTotal.module.css";

interface CartTotalProps {
  total: number;
}

const CartTotal: FC<CartTotalProps> = ({ total }) => {
  return <Typography className={classes.total}>Total: {total}</Typography>;
};

export default CartTotal;

import { FC } from "react";
import { AppBar } from "@mui/material";

import CartButton from "./cart-button";
import AppTitle from "./app-title";
import Cart from "../cart";

import classes from "./Header.module.css";

const Header: FC = () => {
  return (
    <AppBar className={classes.header}>
      <AppTitle />
      <CartButton />
      <Cart />
    </AppBar>
  );
};

export default Header;

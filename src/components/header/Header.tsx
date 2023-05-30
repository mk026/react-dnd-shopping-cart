import { FC, useState } from "react";
import { AppBar } from "@mui/material";

import CartButton from "./cart-button";
import AppTitle from "./app-title";

import classes from "./Header.module.css";
import Cart from "../cart/Cart";

const Header: FC = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleCart = () => setCartIsOpen((prev) => !prev);

  return (
    <AppBar className={classes.header}>
      <AppTitle />
      <CartButton toggleCart={toggleCart} />
      <Cart isOpen={cartIsOpen} />
    </AppBar>
  );
};

export default Header;

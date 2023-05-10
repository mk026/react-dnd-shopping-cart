import { FC } from "react";

import CartButton from "./cart-button";
import AppTitle from "./app-title";

const Header: FC = () => {
  return (
    <header>
      <AppTitle />
      <CartButton />
    </header>
  );
};

export default Header;

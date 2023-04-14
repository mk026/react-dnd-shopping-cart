import { FC } from "react";

import CartButton from "./cart-button";
import AppTitle from "./app-title";

const Header: FC = () => {
  return (
    <div>
      <AppTitle />
      <CartButton />
    </div>
  );
};

export default Header;

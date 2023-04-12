import { FC } from "react";

import CartButton from "./cart-button";

const Header: FC = () => {
  return (
    <div>
      <h1>React dnd shopping cart</h1>
      <CartButton />
    </div>
  );
};

export default Header;

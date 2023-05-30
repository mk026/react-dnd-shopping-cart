import { FC } from "react";

interface CartButtonProps {
  toggleCart: () => void;
}

const CartButton: FC<CartButtonProps> = ({ toggleCart }) => {
  return <button onClick={toggleCart}>Cart</button>;
};

export default CartButton;

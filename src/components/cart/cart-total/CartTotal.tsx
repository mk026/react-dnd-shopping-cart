import { FC } from "react";

interface CartTotalProps {
  total: number;
}

const CartTotal: FC<CartTotalProps> = ({ total }) => {
  return (
    <div>
      <p>Total: {total}</p>
    </div>
  );
};

export default CartTotal;

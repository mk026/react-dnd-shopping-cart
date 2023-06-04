import { FC } from "react";
import { Button, Stack } from "@mui/material";

import { useCartContext } from "../../../hooks/useCartContext";

const CartControls: FC = () => {
  const { closeCart } = useCartContext();

  return (
    <Stack direction="row">
      <Button>Order</Button>
      <Button onClick={closeCart}>Close</Button>
    </Stack>
  );
};

export default CartControls;

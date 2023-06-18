import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { useCartContext } from "../../../hooks/useCartContext";
import { Paths } from "../../../routes";

const CartControls: FC = () => {
  const { closeCart } = useCartContext();

  return (
    <Stack direction="row">
      <Button component={Link} to={Paths.ORDER}>
        Order
      </Button>
      <Button onClick={closeCart}>Close</Button>
    </Stack>
  );
};

export default CartControls;

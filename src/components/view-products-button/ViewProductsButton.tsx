import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { Paths } from "../../routes";

import classes from "./ViewProductsButton.module.css";

const ViewProductsButton: FC = () => {
  return (
    <Button component={Link} to={Paths.PRODUCTS} className={classes.button}>
      View Products
    </Button>
  );
};

export default ViewProductsButton;

import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import { Paths } from "../../../routes";

import classes from "./AppTitle.module.css";

const AppTitle: FC = () => {
  return (
    <Typography
      variant="h1"
      component={Link}
      to={Paths.HOME}
      className={classes.title}
    >
      React dnd shopping cart
    </Typography>
  );
};

export default AppTitle;

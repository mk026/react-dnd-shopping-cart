import { FC } from "react";
import { Typography } from "@mui/material";

import classes from "./AppTitle.module.css";

const AppTitle: FC = () => {
  return (
    <Typography variant="h1" className={classes.title}>
      React dnd shopping cart
    </Typography>
  );
};

export default AppTitle;

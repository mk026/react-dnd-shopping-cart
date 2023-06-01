import { FC } from "react";
import { Paper, Typography } from "@mui/material";

import classes from "./AppInfo.module.css";

const AppInfo: FC = () => {
  return (
    <Paper className={classes.container}>
      <Typography variant="body2" className={classes.info}>
        Welcome to React DnD shopping cart demo app
      </Typography>
    </Paper>
  );
};

export default AppInfo;

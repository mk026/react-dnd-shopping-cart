import { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import classes from "./Notification.module.css";

interface NotificationProps {
  open: boolean;
  onClose: () => void;
}

const Notification: FC<NotificationProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className={classes.title}>Notification</DialogTitle>
      <DialogContent>
        <Typography variant="body2">Success Notification</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Notification;

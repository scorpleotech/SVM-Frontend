import React, { useState } from "react";
import classes from "./component.module.css";
import { Snackbar, Slide } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionRight(props) {
  return <Slide {...props} direction="left" />;
}

const AlertBox = ({ type, message, stateName, callback }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const handleClose = (event) => {
    setOpen(false);
    stateName(false);
    if (callback) {
      callback();
    }
  };
  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        TransitionComponent={TransitionRight}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        className={classes.alertBoxMain}
      >
        <Alert
          onClose={handleClose}
          severity={type}
          sx={{ width: "100%", zIndex: 99 }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertBox;

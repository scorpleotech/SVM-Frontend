import React from "react";
import classes from "./loader.module.css";
import { Backdrop } from "@mui/material";

const LoaderComponent = ({ loading }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <div class={classes.loader}></div>;
    </Backdrop>
  );
};

export default LoaderComponent;

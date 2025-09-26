import React, { useEffect } from "react";
import classes from "./store.module.css";
import Section1 from "./section1";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const StoreIndex = () => {

  
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }, []);
  return (
    <div>
      <Helmet>
      <title>Prana Electric Bike Showroom & Service Center</title>
         <meta property="og:title" content="Prana Electric Bike Showroom & Service Center" />
         <meta property="og:description" content="Visit the showroom & service centre of Prana Electric Bikes." />
        <meta
         name="keywords"
         content="Prana Electric Bike Showroom, Prana Electric Bike Service Center"
       />
        </Helmet>
    <div className={classes.StoreMainContainer}>
      <Typography className={classes.StoreFloatText1}>EXPERIENCE</Typography>
      <Typography
        className={`${classes.StoreFloatText1} ${classes.StoreFloatText2}`}
      >
        CENTER
      </Typography>
      <Section1 />
    </div>
    </div>
  );
};

export default StoreIndex;

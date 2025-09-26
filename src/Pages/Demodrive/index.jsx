import React, { useEffect } from "react";
import classes from "./demoDrive.module.css";
import Section1 from "./section1";
import Section2 from "./section2";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const DemoDriveIndex = () => {

  
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Prana E-Bikes | Book a Test Drive</title>
        <meta property="og:title" content="Prana E-Bikes | Book a Test Drive" />
        <meta
          property="og:description"
          content="Book your Prana e-bikes for a test drive."
        />
        <meta
          name="keywords"
          content="Test Drive Prana E Bikes, Book a Test Drive"
        />
      </Helmet>
      <div className={classes.demoDriveMainContainer}>
        <Typography className={classes.StoreFloatText1}>DEMO</Typography>
        <Typography
          className={`${classes.StoreFloatText1} ${classes.StoreFloatText2}`}
        >
          RIDE
        </Typography>
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
};

export default DemoDriveIndex;

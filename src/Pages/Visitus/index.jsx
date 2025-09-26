import React, { useEffect, useState } from "react";
import classes from "./visitUs.module.css";
import Section1 from "./section1";
import Section2 from "./section2";
import { useDispatch } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import { getStoreList } from "../../Redux/Actions/demoDriveActions";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const VisitUsIndex = () => {
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getStoreList(setErrorAlert, "showroom", ""));
    dispatch(pageLoader(false));
  });

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }, []);


  return (
    <div>
      <Helmet>
        <title>Contact - Prana E-Bikes</title>
        <meta property="og:title" content="Contact - Prana E-Bikes" />
        <meta
          property="og:description"
          content="Contact Prana E-bikes: +91 80 98 20 20 30 / +91 63 74 99 92 16, email: info@srivarumotors.com for all your e-bike queries"
        />
        <meta name="keywords" content="Enquiry , Contact Us" />
      </Helmet>
      <div className={classes.VisitUsMainContainer}>
        <Typography className={classes.StoreFloatText1}>CONTACT</Typography>
        <Typography
          className={`${classes.StoreFloatText1} ${classes.StoreFloatText2}`}
        >
          US
        </Typography>
        <Section1 />
        {/* <Section2 /> */}
      </div>
    </div>
  );
};

export default VisitUsIndex;

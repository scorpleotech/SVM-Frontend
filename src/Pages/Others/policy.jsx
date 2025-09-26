import React, { useEffect, useState } from "react";
import classes from "./others.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import { getTermsandConditions } from "../../Redux/Actions/otherActions";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const Policy = () => {
  const [errorAlert, setErrorAlert] = useState(false);
  const dispatch = useDispatch();
  const { terms, policy, error } = useSelector((state) => state.otherDatas);

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getTermsandConditions(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);
  return (
    <>
    <Helmet>
    <title>Srivaru Motors | Policy</title>
       <meta property="og:title" content="Srivaru Motors | Policy" />
       <meta property="og:description" content="Privacy Policy of Srivaru Motors. Visit us to book you ebike online." />
       <meta
         name="keywords"
         content="Privacy Policy"
       />
       </Helmet>
    <div>
      {/* <img
        src={`${process.env.REACT_APP_API_URL}${policy?.image}`}
        alt="terms"
        className={classes.termsBanner}
      /> */}
      <Typography className={classes.termsHeading} variant="h3">
        {policy?.title}
      </Typography>
      <div className={classes.TermsMainContainer}>
        <div dangerouslySetInnerHTML={{ __html: policy?.description }} />
      </div>
    </div>
    // <div className={classes.TermsMainContainer}>
    //   <h1>{policy?.title}</h1>
    //   <div dangerouslySetInnerHTML={{ __html: policy?.description }} />;
    // </div>
    </>
  );
};

export default Policy;

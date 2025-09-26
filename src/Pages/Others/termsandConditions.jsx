import React, { useEffect, useState } from "react";
import classes from "./others.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import { getTermsandConditions } from "../../Redux/Actions/otherActions";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const TermsandConditions = () => {
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
    <title>Srivaru Motors | Terms & Conditions</title>
       <meta property="og:title" content="Srivaru Motors | Terms & Conditions" />
       <meta property="og:description" content="Terms and Conditions of Srivaru Motors. Book your eBike Online" />
       <meta
         name="keywords"
         content="Terms and Condition"
       />
       </Helmet>
    <div>
      <Typography className={classes.termsHeading} variant="h3">
        {terms?.title}
      </Typography>
      <div className={classes.TermsMainContainer}>
        <div dangerouslySetInnerHTML={{ __html: terms?.description }} />
      </div>
    </div>
    </>
  );
};

export default TermsandConditions;

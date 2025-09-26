import React, { useEffect, useState } from "react";
import classes from "./others.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import { getTermsandConditions } from "../../Redux/Actions/otherActions";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const RefundPolicy = () => {
  const [errorAlert, setErrorAlert] = useState(false);
  const dispatch = useDispatch();
  const { refund, policy, error } = useSelector((state) => state.otherDatas);

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getTermsandConditions(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);
  return (
    <>
    <Helmet>
    <title>Srivaru Motors | Refund Policy</title>
       <meta property="og:title" content="Srivaru Motors | Refund Policy" />
       <meta property="og:description" content="Refund Policies of Srivaru Motors. Book your ebike with us." />
       <meta
         name="keywords"
         content="Refund Policy"
       />
       </Helmet>
    <div>
      <Typography className={classes.termsHeading} variant="h3">
        {refund?.title}
      </Typography>
      <div className={classes.TermsMainContainer}>
        <div dangerouslySetInnerHTML={{ __html: refund?.description }} />
      </div>
    </div>
    </>
  );
};

export default RefundPolicy;

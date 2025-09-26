import React, { useEffect, useState } from "react";
import classes from "./others.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import {
  getOneNewsDetails,
  getTermsandConditions,
} from "../../Redux/Actions/otherActions";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const NewsViewPage = () => {
  const [errorAlert, setErrorAlert] = useState(false);
  const dispatch = useDispatch();
  const { oneNews, error } = useSelector((state) => state.otherDatas);

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    dispatch(pageLoader(true));
    dispatch(getOneNewsDetails(id, setErrorAlert));
    dispatch(pageLoader(false));
  }, [window.location.pathname]);
  console.log("oneNews =",oneNews)
  return (
    <div>
       <Helmet>
       <title>{oneNews?.metaTitle}</title>
           <meta property="og:title" content={oneNews?.metaTitle} />
           <meta property="og:description" content={oneNews?.metaDescription} />
        {/* <meta
         name="keywords"
         content="E-Bike Blogs"
       /> */}
        </Helmet>
      <Typography className={classes.termsHeading} variant="h3">
        {oneNews?.title}
      </Typography>
      <div className={classes.TermsMainContainer}>
        <div dangerouslySetInnerHTML={{ __html: oneNews?.description }} />
      </div>
    </div>
  );
};

export default NewsViewPage;

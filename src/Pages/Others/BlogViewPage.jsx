import React, { useEffect, useState } from "react";
import classes from "./others.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import {
  getOneBlogDetails,
  getOneNewsDetails,
  getTermsandConditions,
} from "../../Redux/Actions/otherActions";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const BlogViewPage = () => {
  const [errorAlert, setErrorAlert] = useState(false);
  const dispatch = useDispatch();
  const { oneNews, error, oneBlog } = useSelector((state) => state.otherDatas);
  const _page = window.location.pathname.split("/").pop();
  console.log("_page =",_page)
  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    dispatch(pageLoader(true));
    dispatch(getOneBlogDetails(id, setErrorAlert));
    dispatch(pageLoader(false));
  }, [window.location.pathname]);
  return (
    <div>
      <Helmet>
      <title>{oneBlog?.metaTitle}</title>
           <meta property="og:title" content={oneBlog?.metaTitle} />
           <meta property="og:description" content={oneBlog?.metaDescription} />
        {/* <meta
         name="keywords"
         content="E-Bike Blogs"
       /> */}
        </Helmet>
      <Typography className={classes.termsHeading} variant="h1">
        {oneBlog?.title}
      </Typography>
      <div className={classes.TermsMainContainer}>
        <div dangerouslySetInnerHTML={{ __html: oneBlog?.description }} />
      </div>
    </div>
  );
};

export default BlogViewPage;

import React, { useEffect, useState } from "react";
import classes from "./others.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import { getTermsandConditions } from "../../Redux/Actions/otherActions";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const CookiePolicy = () => {
  const [errorAlert, setErrorAlert] = useState(false);
  const dispatch = useDispatch();
  const { terms, policy, error, cookies } = useSelector(
    (state) => state.otherDatas
  );

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getTermsandConditions(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);
  return (
    <>
     <Helmet>
     <title>Srivaru Motors | Cookie Policies</title>
        <meta property="og:title" content="Srivaru Motors | Cookie Policies" />
        <meta property="og:description" content="Cookie Policies of Srivaru Motors. Click to know more about ebikes." />
        <meta
         name="keywords"
         content="Cookie Policies"
       />
        </Helmet>
    
    <div>
      <Typography className={classes.termsHeading} variant="h1">
        Cookies Policy
      </Typography>
      <div className={classes.TermsMainContainer}>
        <p>
          Welcome to{" "}
          <a href="https://srivarumotors.com" target="_blank">
            https://srivarumotors.com
          </a>{" "}
          (the "Website"), operated by Srivaru Motors Private Limited. This
          Cookie Policy explains how we use cookies and similar technologies to
          recognize you when you visit our Website. It explains what these
          technologies are and why we use them, as well as your rights to
          control our use of them.
        </p>
        <h4>
          <b>What are cookies?</b>
        </h4>
        <p>
          Cookies are small text files that are stored on your browser or the
          hard drive of your computer or device when you visit certain web
          pages. They are widely used to make websites work, or work more
          efficiently, as well as to provide information to the owners of the
          site.
        </p>
        <h4>
          <b>Why do we use cookies?</b>
        </h4>
        <p>
          We use cookies for several reasons. Some cookies are required for
          technical reasons in order for our Website to operate, and we refer to
          these as "essential" or "strictly necessary" cookies. Other cookies
          also enable us to track and target the interests of our users to
          enhance the experience on our Website.
        </p>
        <h4>
          <b>How can you control cookies?</b>
        </h4>
        <p>
          You have the right to decide whether to accept or reject cookies. You
          can exercise your cookie preferences by clicking on the "Cookie
          Settings" link provided in the footer of our website. You can also set
          or amend your web browser controls to accept or refuse cookies. If you
          choose to reject cookies, you may still use our website though your
          access to some functionality and areas of our website may be
          restricted.
        </p>
        <h4>
          <b>Changes to this Cookie Policy</b>
        </h4>
        <p>
          We may update this Cookie Policy from time to time. If we make
          changes, we will notify you by revising the date at the top of this
          policy. We encourage you to review this Cookie Policy frequently to
          stay informed about our use of cookies and related technologies.
        </p>
        <h4>
          <b>Contact Us</b>
        </h4>
        <p>
          If you have any questions about our use of cookies or this Cookie
          Policy, please contact us at{" "}
          <a href="mailto:info@srivarumotors.com" target="_blank">
            info@srivarumotors.com
          </a>{" "}
          / +91 8098202030.
        </p>
        {/* <div dangerouslySetInnerHTML={{ __html: cookies?.description }} /> */}
      </div>
    </div>
    </>
  );
};

export default CookiePolicy;

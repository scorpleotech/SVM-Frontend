import React, { useEffect, useState } from "react";
import classes from "./component.module.css";
import { Card, Typography, Button } from "@mui/material";
import { MdOutlineCookie } from "react-icons/md";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const CookieContainer = () => {
  const [showBanner, setShowBanner] = useState(false);

  // const handleSetCookie = async () => {
  //   await localStorage.setItem("cookieCheck", true);
  //   modalClose(false);
  // };
  const handleAccept = () => {
    // localStorage.setItem("my_cookie",true);
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setShowBanner(false);
  };

  const handleDecline = () => {
    Cookies.set("cookie_consent", "declined", { expires: 365 });
    setShowBanner(false);
  };

  useEffect(() => {
    const cookieConsent = Cookies.get("cookie_consent");
    if (!cookieConsent) {
      setTimeout(() => {
        setShowBanner(true);
      }, 3000);
    }
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <Card className={classes.cookieContainer}>
      <div className={`mb-4 ${classes.cookieHEaderContainer}`}>
        <Typography className={classes.cookieHeader} variant="h1">
          We use cookies
        </Typography>
        <MdOutlineCookie />
      </div>
      <Typography className={classes.cookieText}>
        We use cookies to ensure you get the best experience on our website. For
        more information on how we use cookies, please see our cookie policy.
      </Typography>
      <Typography className={`mt-3 ${classes.cookieText}`}>
        By clicking "Accept", you agree to our use of cookies.{" "}
        <Link to={"/cookie-policies"}>Learn more.</Link>
      </Typography>
      <div className={`mt-4 ${classes.CookieBtnContainer}`}>
        <Button
          variant="contained"
          className={classes.cookieAcceptBtn}
          onClick={() => handleAccept()}
        >
          Accept
        </Button>
        <Button
          variant="outlined"
          className={classes.cookieDeclineBtn}
          onClick={() => handleDecline()}
        >
          Decline
        </Button>
      </div>
    </Card>
  );
};

export default CookieContainer;

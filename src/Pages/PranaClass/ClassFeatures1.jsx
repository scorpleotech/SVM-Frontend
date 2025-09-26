import React, { useEffect, useState } from "react";
import classes from "./ClassCss/ClassFeatures1.module.css";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import assets images
import speedometer from "../../Assets/Images/prana_class/CEF_1.png";
import wheel from "../../Assets/Images/prana_class/CEF_2.png";
import handbar from "../../Assets/Images/prana_class/CEF_3.png";

const ClassFeatures1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState();
  const { error, partnersList } = useSelector((state) => state.homeDatas);

  // Asset images object
  const featureImages = {
    dashboard: speedometer,
    battery: wheel,
    controls: handbar
  };

  return (
    <div className={`${classes.section5MainContainer}`}>
      <Typography className={classes.Sectio4Header}>
        Explore PRANA Class:
      </Typography>
      <Typography className={classes.Sectio4HeaderText}>
        Revolutionary Performance on Two Wheels
      </Typography>
      <div className={classes.section5RightContainer}>
        <div className={classes.section5TextContainer}>
          <div>
            <div className={classes.section5MainHeader}>
              <Typography className={classes.Section5SubHeader}>
                Power That Excites

              </Typography>
              <Typography className={classes.Section5SubHeader1}>
               Thrilling, Reliable & Unstoppable

              </Typography>
            </div>
            <Typography className={classes.Section5Text}>
              PRANA Class is engineered for those who crave more from every ride. 
              With robust torque, superior acceleration, and precision handling, it transforms daily travel into an exhilarating experience. 
              Whether it’s the highway or city streets, PRANA delivers unmatched performance every time.
              Feel the rush of raw power combined with advanced stability features, making every ride not just faster, but safer and more reliable.

            </Typography>
          </div>
          <img
            src={featureImages.dashboard}
            alt="ALIVE Dashboard"
            className={classes.section5SpecImage}
            loading="lazy"
          />
        </div>
        <div className={classes.Section5VerticalDivider} />
        <div className={classes.section5TextContainer}>
          <div>
            <div className={classes.section5MainHeader}>
              <Typography className={classes.Section5SubHeader}>
                Smarter Efficiency, Greater Savings
              </Typography>
              <Typography className={classes.Section5SubHeader1}>
                High Performance Meets Low Running Cost

              </Typography>
            </div>
            <Typography className={classes.Section5Text}>
              Ride farther, spend less. 
              With PRANA’s intelligent energy management and long-lasting battery, you get maximum range without compromising on performance. 
              Its efficient design means fewer charging stops, lower maintenance, and a lifetime of savings on every journey.
              PRANA isn’t just a bike, it’s a smarter mobility solution built for today and tomorrow.



            </Typography>
          </div>
          <img
            src={featureImages.battery}
            alt="ALIVE Battery System"
            className={classes.section5SpecImage}
            loading="lazy"
          />
        </div>
        <div className={classes.Section5VerticalDivider} />
        <div className={classes.section5TextContainer}>
          <div>
            <div className={classes.section5MainHeader}>
              <Typography className={classes.Section5SubHeader}>
                Style in Motion
              </Typography>
              <Typography className={classes.Section5SubHeader1}>
                Bold Design, Modern Edge

              </Typography>
            </div>
            <Typography className={classes.Section5Text}>
              Turn heads wherever you go. 
              PRANA Class brings together sporty design, aerodynamic build, and cutting-edge tech to deliver a bike that looks as powerful as it rides.
              With advanced features like smart connectivity, ergonomic comfort, and futuristic styling,
               PRANA isn’t just transportation — it’s a statement of confidence, freedom, and individuality.
            </Typography>
          </div>
          <img
            src={featureImages.controls}
            alt="ALIVE Controls"
            className={classes.section5SpecImage}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassFeatures1;

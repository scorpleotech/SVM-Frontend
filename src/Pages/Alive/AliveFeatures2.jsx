import React, { useEffect, useState } from "react";
import classes from "./AliveCss/AliveFeatures2.module.css";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import assets images
import speedometer from "../../Assets/Images/Alive/CEF_1.png";
import wheel from "../../Assets/Images/Alive/CEF_2.png";
import handbar from "../../Assets/Images/Alive/CEF_3.png";

const AliveFeatures = () => {
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
        Explore Alive's Latest:
      </Typography>
      <Typography className={classes.Sectio4HeaderText}>
        Cutting-Edge Features
      </Typography>
      <div className={classes.section5RightContainer}>
        <div className={classes.section5TextContainer}>
          <div>
            <div className={classes.section5MainHeader}>
              <Typography className={classes.Section5SubHeader}>
                Perfect Family Companion
              </Typography>
              <Typography className={classes.Section5SubHeader1}>
                Safe, Spacious & Comfortable
              </Typography>
            </div>
            <Typography className={classes.Section5Text}>
              Alive is designed keeping families in mind  with ample seat space,
               ergonomic design, and reliable safety features.
               Whether it's school rides, grocery runs, or weekend outings, 
               Alive makes every family trip effortless and enjoyable.
               Enjoy a smooth, stable ride that ensures comfort for every age group. 
              With Alive, every journey becomes a safe and happy family memory.
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
                Smart Savings, Everyday
              </Typography>
              <Typography className={classes.Section5SubHeader1}>
                Cost-Effective Mobility for All
              </Typography>
            </div>
            <Typography className={classes.Section5Text}>
              Switch to Alive and experience unmatched affordability. 
              With low running costs, minimal maintenance, and maximum efficiency, 
              this scooter ensures your daily commute is light on your wallet and heavy on performance.
              Save more with every ride, thanks to intelligent power usage and superior battery life. 
              Alive is not just a scooter, it's a long-term investment in smarter mobility.
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
                Effortless Ride, Modern Style 
              </Typography>
              <Typography className={classes.Section5SubHeader1}>
                Comfort Meets Innovation
              </Typography>
            </div>
            <Typography className={classes.Section5Text}>
              Alive combines sleek design with practical convenience. 
              From easy maneuvering in city traffic to advanced connectivity features, 
              it's built to simplify your rides while keeping you stylish and confident on every journey.
              Experience technology that adapts to your lifestyle quick start, easy navigation, and comfort-driven engineering.
               With Alive, riding becomes effortless, modern, and truly yours.
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

export default AliveFeatures;

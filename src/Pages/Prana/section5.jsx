import React, { useEffect, useState } from "react";
import classes from "./prana.module.css";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import image1 from "../../Assets/Images/handbar.webp";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import image5 from "../../Assets/Images/wheel.webp";
import speedometer from "../../Assets/Images/speedometer.png";

const Section5 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState();
  const { error, partnersList } = useSelector((state) => state.homeDatas);

  return (
    <div className={`${classes.section5MainContainer}`}>
      <Typography className={classes.Sectio4Header}>
        Explore PRANA's Latest:
      </Typography>
      <Typography className={classes.Sectio4HeaderText}>
        Cutting-Edge Features
      </Typography>
      <div className={classes.section5RightContainer}>
        <div className={classes.section5TextContainer}>
          <div>
            <div className={classes.section5MainHeader}>
              <Typography className={classes.Section5SubHeader}>
                Smart Riding and Ultimate Connectivity
              </Typography>
              <Typography className={classes.Section5SubHeader1}>
                Digital Speedo Meter and CAN Communication Unveiled
              </Typography>
            </div>
            <Typography className={classes.Section5Text}>
              Navigate with ease! PRANA 2.0 comes equipped with a digital
              speedometer featuring GPS access. Stay connected, stay informed.
              Your ride, your rules! Elevating the riding experience to the next
              level! SVM PRANA 2.0 introduces CAN communication, where every
              single component has its control center. Seamlessly connect and
              control your ride like never before. Welcome to the era of
              ultimate connectivity!
            </Typography>
          </div>
          <img
            src={speedometer}
            alt="bikeImge"
            className={classes.section5SpecImage}
          />
        </div>
        <div className={classes.Section5VerticalDivider} />
        <div className={classes.section5TextContainer}>
          <div>
            <div className={classes.section5MainHeader}>
              <Typography className={classes.Section5SubHeader}>
                Safety First
              </Typography>
              <Typography className={classes.Section5SubHeader1}>
                Patented Battery Pack - Sequential Braking System
              </Typography>
            </div>
            <Typography className={classes.Section5Text}>
              Thanks to our sequential braking system, skidding belongs to the
              past. Our patented LFP battery solution comes within a steel pack
              and outperforms any other EV bike in India by performance, reach,
              and life span. We are the 1st in India to provide such a battery
              pack solution.
            </Typography>
          </div>
          <img
            src={image5}
            alt="bikeImge"
            className={classes.section5SpecImage}
          />
        </div>
        <div className={classes.Section5VerticalDivider} />
        <div className={classes.section5TextContainer}>
          <div>
            <div className={classes.section5MainHeader}>
              <Typography className={classes.Section5SubHeader}>                
                {/* T9 Changes */}
                {/* Silent. Strong & Seriosly Fun */}
                Ride Bold, Live Unbound.                
              </Typography>
              <Typography className={classes.Section5SubHeader1}>
                Express Yourself and Have Freedom of Choice
              </Typography>
            </div>
            <Typography className={classes.Section5Text}>
              We provide you with a 4-Mode driving option, including reverse
              gear for parking assistance! An unparalleled performance and reach
              thanks to our technology and innovation. PRANA is a personalized
              riding experience that creates a relationship unlike any other
              between the rider and the machine.
            </Typography>
          </div>
          <img
            src={image1}
            alt="bikeImge"
            className={classes.section5SpecImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;

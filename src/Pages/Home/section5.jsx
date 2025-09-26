import React from "react";
import classes from "./home.module.css";
import { Row, Col } from "react-bootstrap";
import { Typography, Button } from "@mui/material";
import image1 from "../../Assets/Images/led-lights.webp";
import image2 from "../../Assets/Images/speedometer.webp";
// import image3 from "../../Assets/Images/section5Image3.webp";
import image3 from "../../Assets/Images/battery.webp";
import image4 from "../../Assets/Images/riding-mode.webp";
import image5 from "../../Assets/Images/safety.webp";
import image6 from "../../Assets/Images/motors.webp";

const Section5 = () => {
  return (
    <div className={`${classes.section5Maincontainer}`}>
      <div className="position-relative">
        <img
          src={image1}
          alt="black e-bike"
          className={classes.section5Image}
        />
        <div className={classes.section5Image1TextContainer}>
          <Typography className={`${classes.section5HeaderText}`}>
            LED Lights
          </Typography>
          <Typography className={`mt-1 ${classes.section5Text1}`}>
            All the lights used in the vehicle are LED, enhances the vision to
            the road and gain the attraction from the crowd (ppl)
          </Typography>
        </div>
      </div>
      <div className="position-relative">
        <img
          src={image2}
          alt="black e-bike"
          className={classes.section5Image}
        />
        <div
          className={`${classes.section5Image1TextContainer} ${classes.section5Image3TextContainer}`}
        >
          <Typography className={`${classes.section5HeaderText}`}>
            Top Speed
          </Typography>
          <Typography className={`mt-1 ${classes.section5Text3}`}>
            {`Speed 123KM/H | Range - 150KM, 0-60 KM/HR < 4 SEC `}
          </Typography>
        </div>
      </div>
      <div className="position-relative">
        <img
          src={image3}
          alt="black e-bike"
          className={classes.section5Image}
        />
        <div
          className={`${classes.section5Image1TextContainer} ${classes.section5Image3TextContainer}`}
        >
          <Typography className={`${classes.section5HeaderText}`}>
            Battery & Stability
          </Typography>
          <Typography className={`mt-1 ${classes.section5Text3}`}>
            {`72V Lithium-ion (LFP),5.0 kWh | 8.44 kWh, IEC<60320>, BS 546 – 15A plug with 1500 cycles and more stability.`}
          </Typography>
        </div>
      </div>
      <div className="position-relative">
        <img
          src={image4}
          alt="black e-bike"
          className={classes.section5Image}
        />
        <div className={classes.section5Image1TextContainer}>
          <Typography className={`${classes.section5HeaderText}`}>
            Riding Mode
          </Typography>
          <Typography className={`mt-1 ${classes.section5Text1}`}>
            Variable torque, speed, and direction which helps you to PRACTICE
            and DRIVE and then warp ( SPORTS) and in case of parking. You have
            your assistant REVERSE.
          </Typography>
        </div>
      </div>
      <div className="position-relative">
        <img
          src={image5}
          alt="black e-bike"
          className={classes.section5Image}
        />
        <div
          className={`${classes.section5Image1TextContainer} ${classes.section5Image3TextContainer}`}
        >
          <Typography className={`${classes.section5HeaderText}`}>
            Safety
          </Typography>
          <Typography className={`mt-1 ${classes.section5Text3}`}>
            Dual disc brakes at the front and single-disc electronic
            regenerative braking at the rear. Will give you fastest braking.
            Shortest braking distance.
          </Typography>
        </div>
      </div>
      <div className="position-relative">
        <img
          src={image6}
          alt="black e-bike"
          className={classes.section5Image}
        />
        <div
          className={`${classes.section5Image1TextContainer} ${classes.section5Image3TextContainer}`}
        >
          <Typography className={`${classes.section5HeaderText}`}>
            Motors
          </Typography>
          <Typography className={`mt-1 ${classes.section5Text3}`}>
            BLDC Motor, Intelligent air-cooled BLDC controller with operating
            voltage range of 42-72 V DC. Can function at 50 degrees ambient
            temperature.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Section5;

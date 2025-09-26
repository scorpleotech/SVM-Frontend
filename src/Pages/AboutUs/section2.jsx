import React, { useEffect, useState } from "react";
import classes from "./aboutus.module.css";
import { Col, Row } from "react-bootstrap";
import { Typography, Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";

const Section2 = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(window.innerWidth > 850 ? true : false);
  }, [window.innerWidth]);

  return (
    <div className={classes.section2MainContainer}>
      <Row className={classes.section2Row}>
        <Col lg={6}>
          <div className={classes.section2TextContainer}>
            {open ? (
              <Typography className={classes.section2Text} variant="h1">
                <span
                  className={`${classes.section2headerText2} ${classes.SvmSecondHeading}`}
                >
                  SVM
                </span>{" "}
                is dedicated to designing and manufacturing premium electric
                motorbikes in India. We revolutionize the two-wheeler vehicles
                and propel the industry forward by leveraging sustainable energy
                solutions without compromising the quality of the rider’s
                experience. SVM creates unique E2W vehicles that provide an
                exceptional riding experience with the highest rider comfort.
                The result of intensive research and design innovations gives
                our customers an unparalleled product with an automated
                3-channel sequential braking system, a low centre of gravity to
                improve stability, a zero-vibration riding feel and
                best-in-class safety features. We offer the highest product
                specifications in terms of reach and every bike comes with an
                easy plug-and-play charging solution. SVM has a broad array of
                intellectual property, including a patent chassis and drive
                acceleration system. Our much-celebrated customer reviews speak
                volumes and are a testament to our hard work to create a new era
                of electric bikes in India and beyond.
              </Typography>
            ) : (
              <Typography
                className={`mt-4  ${classes.section2Text} ${classes.section2SplSubText}`}
              >
                Prana is our PRIDE. Now comes PRANA 2.0. With PRANA we want to
                signify a <b>Purpose and Freedom of Choice</b>. We have
                test-driven our products for 2 years before entering the market.
                We don’t simply build, we listen first. We understand that the
                Youth and Leaders of tomorrow seek products with a purpose,
                which makes lives better and symbolizes freedom of choice. Our
                answer to this is PRANA. A personalized riding experience which
                creates a relationship unlike any other between the rider and
                the machine. PRANA significantly outperforms any traditional
                bike within the 350cc+ class.
                <br />
                The influential US online portal{" "}
                <a href="https://motorwatt.com/" target="_blank">
                  www.motorwatt.com
                </a>{" "}
                calls PRANA a game-changer, we call it a masterpiece with the
                attributes of {/* T9 Changes */}
                {/* SILENT, STRONG & SERIOUSLY FUN */}
                Ride Bold, Live Unbound.
              </Typography>
            )}
            {/* <div
              className={classes.section2BtnContainer}
            >
              <span className={classes.Section3BtnIcon}>
                <FaArrowRight />
              </span>
              <Button
                variant="outlined"
                className={`mt-3 ${classes.Section3Btn}`}
              >
                <span>Know More</span>
              </Button>
            </div> */}
          </div>
        </Col>
        <Col lg={6}>
          <div className={classes.section2rightMainContainer}>
            <div className={classes.section2headerContainer}>
              <Typography className={classes.section2headerText1}>
                About
              </Typography>
              <Typography className={classes.section2headerText2}>
                PRANA
              </Typography>
              <div className={classes.section2headerText2Style} />
              <Typography className={`mt-3 ${classes.section2headerText1}`}>
                {/* T9 Changes */}
                {/* SILENT, STRONG & SERIOUSLY FUN */}
                Ride Bold, Live Unbound
              </Typography>
              {/* <Typography className={classes.section2headerText1}>
                Passionate Precision
              </Typography> */}
            </div>
            {!open ? (
              <Typography
                className={`${classes.margintopstyle} ${classes.section2Text}`}
              >
                <span
                  className={`${classes.section2headerText2} ${classes.SvmSecondHeading}`}
                >
                  SVM
                </span>{" "}
                is dedicated to designing and manufacturing premium electric
                motorbikes in India. We revolutionize the two-wheeler vehicles
                and propel the industry forward by leveraging sustainable energy
                solutions without compromising the quality of the rider’s
                experience. SVM creates unique E2W vehicles that provide an
                exceptional riding experience with the highest rider comfort.
                The result of intensive research and design innovations gives
                our customers an unparalleled product with an automated
                3-channel sequential braking system, a low centre of gravity to
                improve stability, a zero-vibration riding feel and
                best-in-class safety features. We offer the highest product
                specifications in terms of reach and every bike comes with an
                easy plug-and-play charging solution. SVM has a broad array of
                intellectual property, including a patent chassis and drive
                acceleration system. Our much-celebrated customer reviews speak
                volumes and are a testament to our hard work to create a new era
                of electric bikes in India and beyond.
              </Typography>
            ) : (
              <Typography
                className={`mt-4  ${classes.section2Text} ${classes.section2SplSubText}`}
              >
                Prana is our PRIDE. Now comes PRANA 2.0. With PRANA we want to
                signify a <b>Purpose and Freedom of Choice</b>. We have
                test-driven our products for 2 years before entering the market.
                We don’t simply build, we listen first. We understand that the
                Youth and Leaders of tomorrow seek products with a purpose,
                which makes lives better and symbolizes freedom of choice. Our
                answer to this is PRANA. A personalized riding experience which
                creates a relationship unlike any other between the rider and
                the machine. PRANA significantly outperforms any traditional
                bike within the 350cc+ class.
                <br />
                The influential US online portal{" "}
                <a href="https://motorwatt.com/" target="_blank">
                  www.motorwatt.com
                </a>{" "}
                calls PRANA a game-changer, we call it a masterpiece with the
                attributes of {/* T9 Changes */}
                {/* SILENT, STRONG & SERIOUSLY FUN */}
                Ride Bold, Live Unbound.
              </Typography>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section2;

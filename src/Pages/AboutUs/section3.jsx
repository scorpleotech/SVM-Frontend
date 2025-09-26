import React from "react";
import classes from "./aboutus.module.css";
import { Col, Row } from "react-bootstrap";
import { Typography, Button } from "@mui/material";
import logo from "../../Assets/Images/Updated-Logo.png";

const Section3 = () => {
  return (
    <div>
      <div className={classes.Section3FirstDiv}>
        <Typography className={classes.section3FutureText} variant="h1">
          {/* T9 Changes */}
          {/* “The Future of Urban Mobility” */}
          PERFORMANCE THAT INSPIRES
        </Typography>
        <img src={logo} alt="logo" className={classes.section3Logo} />
      </div>
      <div className={classes.section3MainContainer}>
        <Typography className={classes.section3VisitionBigText}>
          Vision
        </Typography>
        <Typography
          className={`${classes.section3VisitionBigText} ${classes.section3MissionBigText}`}
        >
          Mission
        </Typography>
        <Typography className={classes.section3VisitionSmallText}>
          Vision
        </Typography>
        <Typography
          className={`${classes.section3VisitionSmallText} ${classes.section3MissionSmallText}`}
        >
          Mission
        </Typography>
        {/* <img src={vision} alt="vision" className={classes.section2VisionImage} /> */}
        {/* <img
        src={missionBig}
        alt="visionBig"
        className={classes.section2MissionBigImage}
      /> */}
        {/* <img
        src={mission}
        alt="vision"
        className={classes.section2MissionImage}
      /> */}
        <div className={classes.section3SubContainer}>
          <Row className={classes.section3Row}>
            <Col lg={5}>
              <Typography className={classes.section3Text}>
                To revolutionize the two-wheeler industry with world-class
                products powered by renewable energy; building a relationship
                unlike any other between rider and machine
              </Typography>
            </Col>
            <Col lg={2} className={classes.empltyColumn} />
            <Col lg={5}>
              <Typography
                className={`${classes.section3Text} ${classes.section3Text2}`}
              >
                To design, develop, manufacture, sell and service the best
                electric motorcycles powered by sustainable energy
              </Typography>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Section3;

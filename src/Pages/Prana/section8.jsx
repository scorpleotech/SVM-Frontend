import React from "react";
import classes from "./prana.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { Typography } from "@mui/material";
import image1 from "../../Assets/Images/Battery.png";

const Section8 = () => {
  return (
    <div className={classes.section8MainContainer}>
      <Row className={classes.section8Row}>
        <Col lg={6}>
          <img
            src={image1}
            alt="long life battery"
            className={classes.section8Image}
          />
        </Col>
        <Col lg={6}>
          <div className={classes.section8TextContainer}>
            <div>
              <Typography
                className={`${classes.Sectio4Header} ${classes.section8HeaderText}`}
              >
                PRANA 2.0
              </Typography>
              <Typography
                className={`${classes.Sectio4HeaderText} ${classes.section8SubHader1}`}
              >
                Power Packed Battery
              </Typography>
            </div>
            <Typography className={classes.section8SubHader2}>
              {
                "Unleash the power within! PRANA 2.0 packs a punch with a high-performance battery – choose yours 5kWh in GRAND & 8.44kWh in Elite."
              }
            </Typography>
            <Typography className={`${classes.section8Hader2}`}>
              Your ride, your energy, your choice
            </Typography>
            {/* <Button className={classes.section8Button} variant="text">
              Learn more about chargers --
            </Button> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section8;

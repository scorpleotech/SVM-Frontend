import React from "react";
import classes from "./demoDrive.module.css";
import { Typography, Card } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import {
  DemoLocationIcon,
  DemoZoomInIcon,
  DemoZoomOutIcon,
} from "../../Assets/Icons/icons";
import demologo1 from "../../Assets/Images/demoLogo1.png";
import demologo2 from "../../Assets/Images/demologo2.png";
import demologo3 from "../../Assets/Images/demologo3.png";

const section1 = () => {
  return (
    <div className={classes.section1MainContainer}>
      {/*  aphy className={classes.DemoFloatingText1}> DEMO</Typography> */}
      <Typography className={classes.section1HeaderText} variant="h1">
        Schedule a Demo Ride
      </Typography>
      <div className={classes.Section1MainRow}>
        <Card className={classes.ColumnCard}>
          <div className={classes.CardIconContainer}>
            <img src={demologo1} alt="demologo1" className={classes.CardIcon} />
          </div>
          <div className={classes.CardTextContainer}>
            <Typography className={classes.CardText}>
              30 Minute Demo Ride.
            </Typography>
          </div>
        </Card>
        <Card className={classes.ColumnCard}>
          <div className={classes.CardIconContainer}>
            <img src={demologo3} alt="demologo1" className={classes.CardIcon} />
          </div>
          <div className={classes.CardTextContainer}>
            <Typography className={classes.CardText}>
              Experience the prana on Road.
            </Typography>
          </div>
        </Card>
        <Card className={classes.ColumnCard}>
          <div className={classes.CardIconContainer}>
            <img src={demologo2} alt="demologo1" className={classes.CardIcon} />
          </div>
          <div className={classes.CardTextContainer}>
            <Typography className={classes.CardText}>
              Learn More About Charging & Savings
            </Typography>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default section1;

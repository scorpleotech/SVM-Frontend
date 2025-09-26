import React, { useEffect, useState } from "react";
import classes from "./home.module.css";
import { Typography, Button } from "@mui/material";
import { Row, Col } from "react-bootstrap";
// import { createOdometer } from "../../Utils/commonFunctions";
import "odometer/themes/odometer-theme-default.css";
import { useNavigate } from "react-router-dom";

const Odometer = React.lazy(() => import("react-odometerjs"));

const Section2 = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0.1);

  const handleScroll = () => {
    // const element = document.querySelector(`.${classes.featureRightDiv}`); 
    // T9 Changes
    const element = document.querySelector(
      `.${classes.featureRightDiv.replace("+", "\\+").replace(".", "\\.")}`
    );
    const rect = element?.getBoundingClientRect();
    const isFirstTransistion =
      rect?.top >= 0 && rect.bottom <= window.innerHeight;
    if (isFirstTransistion && !isVisible) {
      // console.log("isVisible", isVisible);
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      handleScroll();
    };

    window.addEventListener("scroll", scrollListener);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    const updateOdometers = () => {
      if (isVisible) {
        setValue1(250);
        setValue2(123);
        setValue3(40);
      }
    };

    const timeoutId = setTimeout(updateOdometers);

    return () => clearTimeout(timeoutId);
  }, [isVisible]);
  useEffect(() => {
    // Clear odometer values when isVisible becomes false
    if (!isVisible) {
      setValue1(0);
      setValue2(0);
      setValue3(0.1);
    }
  }, [isVisible]);

  useEffect(() => {
    // setTimeout(() => {
    handleScroll();
    // },2000)
  }, []);

  return (
    <div>
      <Row
        className={`mt-4  justify-content-md-center ${classes.featureDivContainer1} `}
      >
        <Col md={3}>
          <div className={classes.featureLeftDiv}>
            <Typography className={classes.featureText1} variant="h1">
              Jolt into the future of mobility.
            </Typography>
          </div>
        </Col>
        <Col md={3}>
          <div className={classes.featureRightDiv}>
            <div className={classes.odometerDiv}>
              <div className={classes.odometer}>
                <Odometer value={value1} format="dd" />
                <span>km*</span>
              </div>
            </div>
            <Typography>Range</Typography>
          </div>
        </Col>
        <Col md={3}>
          <div className={classes.featureRightDiv}>
            <div className={classes.odometerDiv}>
              <div className={classes.odometer}>
                <Odometer value={value2} format="dd" />
                <span>km/h*</span>
              </div>
            </div>
            <Typography>Top-Speed</Typography>
          </div>
        </Col>
        <Col md={3}>
          <div className={classes.featureRightDiv}>
            <div className={classes.odometerDiv}>
              <div className={classes.odometer}>
                <span className={classes.anotherText}>{"<"}</span>
                <Odometer
                  className={classes.anotherText}
                  value={value3}
                  format="(d.d)"
                />
                <span className={classes.anotherText}>s</span>
              </div>
            </div>
            <Typography>0-60km/hr</Typography>
          </div>
        </Col>
      </Row>
      <div className={classes.sectio2OrderBtnContainer}>
        <Button
          variant="contained"
          className={` ${classes.orderBtn}`}
          onClick={() => navigate("/book-now")}
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default Section2;

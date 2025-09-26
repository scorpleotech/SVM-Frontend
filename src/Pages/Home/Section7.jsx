import React, { useEffect, useState } from "react";
import classes from "./home.module.css";
import { Row, Col } from "react-bootstrap";
import { Typography } from "@mui/material";
// import white from "../../Assets/Images/white staright.webp";
// import red from "../../Assets/Images/red straight.webp";
// import green from "../../Assets/Images/green staright.webp";
// import black from "../../Assets/Images/black staight.webp";
import white from "../../Assets/Images/PRANA 2.0 BLUE BIKE FRONT VIEW.webp";
import red from "../../Assets/Images/PRANA 2.0 RED BIKE FRONT VIEW.webp";
import green from "../../Assets/Images/PRANA 2.0 MAROON BIKE FRONT VIEW.webp";
import black from "../../Assets/Images/PRANA 2.0 BLACK BIKE FRONT VIEW.webp";

const Section7 = () => {
  const [isFistTransitionVisible, setIsFirstTransitionVisible] =
    useState(false);

  const [isSecondTransitionVisible, setIsSecondTransitionVisible] =
    useState(false);

  const handleScroll = () => {
    const element = document.querySelector(`.${classes.firstTransition}`);
    const element1 = document.querySelector(`.${classes.secondTransition}`);
    // console.log(element);
    // const element = document.getElementById("yourComponentId"); // Replace with the actual ID of your component
    if (element && element1) {
      const rect1 = element?.getBoundingClientRect();
      const rect2 = element1?.getBoundingClientRect();

      // Add an offset to the top and bottom limits
      let offset = 0;
      if (window.innerWidth > 1440) {
        offset = 450;
      } else if (window.innerWidth < 1440 && window.innerWidth > 1024) {
        offset = 300;
      } else if (window.innerWidth < 1024 && window.innerWidth > 850) {
        offset = 100;
      } else if (window.innerWidth < 850 && window.innerWidth > 450) {
        offset = 1600;
      } else if (window.innerWidth < 450) offset = 1300; // Adjust this value based on your needs

      const isVisible1 =
        rect1.top + offset >= 0 && rect1.bottom - offset <= window.innerHeight;
      const isVisible2 =
        rect2.top + offset >= 0 && rect2.bottom - offset <= window.innerHeight;

      if (!isFistTransitionVisible && isVisible1) {
        setIsFirstTransitionVisible(true);
      }
      if (!isSecondTransitionVisible && isVisible2) {
        setIsSecondTransitionVisible(true);
      }
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
  return (
    <div className={`${classes.section7MainDiv}`}>
      <div
        className={`${classes.Prana1Container} ${
          isSecondTransitionVisible && classes.Prana1ContainerTransistion
        }`}
      >
        <Typography className={classes.section7RunningText1}>PRANA</Typography>
        <img
          src={white}
          alt="Blue elecctric bike front view"
          className={`${classes.section7PranaBikeImage}`}
        />
      </div>
      <Typography
        className={`${classes.section7RunningText1} ${classes.prana2nd} ${
          isSecondTransitionVisible && classes.prana2ndTransistion
        }`}
      >
        PRANA
      </Typography>
      {/* <Typography
        className={`${classes.section7RunningText1} ${classes.prana3rd} ${
          isSecondTransitionVisible && classes.prana2ndTransistion
        }`}
      >
        PRANA
      </Typography> */}
      {/* <img
          src={white}
          alt="image1"
          className={`${classes.section7PranaBikeImage}`}
        /> */}
      <div className={`${classes.firstTransition}`}>
        <img
          src={white}
          alt="Blue elecctric bike front view"
          className={`${classes.section7RedBikeImage} ${
            isFistTransitionVisible && classes.section7RedImageVisible
          }`}
        />
        <img
          src={black}
          alt="Black elecctric bike front view"
          className={`${classes.section7black1Image} ${
            isFistTransitionVisible && classes.section7black1ImageVisible
          }`}
        />
        <img
          src={green}
          alt="Green elecctric bike front view"
          className={`${classes.section7green1Image} ${
            isFistTransitionVisible && classes.section7green1ImageVisible
          }`}
        />
        <img
          src={red}
          alt="Red elecctric bike front view"
          className={`${classes.section7Image} ${
            isFistTransitionVisible && classes.Section7MainImage1Tramsition
          }`}
        />
        <div
          className={`${classes.section7InnerDiv1} ${
            isFistTransitionVisible && classes.section7InnerDiv1Visible
          }`}
        >
          <Row className="row-custom-style">
            <Col lg={5}>
              <Typography className={classes.MainheaderText1}>
                Everlasting Elite Prestige
              </Typography>
              <Typography className={`mt-3 ${classes.section7SubText1}`}>
                The Prana Elite – where uncompromising performance meets luxury
                in the realm of electric motorbikes. Crafted for those who
                demand the pinnacle of sophistication and cutting-edge
                technology, the Prana Elite is designed to redefine your riding
                experience.
              </Typography>
            </Col>
            <Col lg={5}>
              <div className={classes.section7FeaturesContainer}>
                <Typography className={`${classes.FeaturesListText}`}>
                  <b>8.44</b> <span>kwh</span>
                </Typography>
                <Typography className={`${classes.FeaturesListText}`}>
                  <b>250 km</b> <span>in Single Charge</span>
                </Typography>
                <Typography className={`${classes.FeaturesListText}`}>
                  <b>Dual</b> <span>LED</span>
                </Typography>
                <Typography className={`${classes.FeaturesListText}`}>
                  <b>Sequential</b> <span>Braking</span>
                </Typography>
              </div>
            </Col>
            <Col
              lg={2}
              // style={{ position: "relative" }}
              className={classes.section7Imagecontainer}
            ></Col>
          </Row>
        </div>
      </div>
      <div className={`${classes.secondTransition}`}>
        <img
          src={white}
          alt="Blue elecctric bike front view"
          className={`${classes.section7white2BikeImage} ${
            isSecondTransitionVisible &&
            classes.section7white2BikeImageTransition
          }`}
        />
        <img
          src={green}
          alt="Green elecctric bike front view"
          className={`${classes.section7green2BikeImage} ${
            isSecondTransitionVisible &&
            classes.section7green2BikeImageTransition
          }`}
        />
        <img
          src={red}
          alt="Red elecctric bike front view"
          className={`${classes.section7red2BikeImage} ${
            isSecondTransitionVisible && classes.section7red2BikeImageTransition
          }`}
        />
        <img
          src={black}
          alt="Black elecctric bike front view"
          className={` ${classes.BlacImaghesection7} ${
            isSecondTransitionVisible && classes.Section7MainImage2Tramsition
          }`}
        />
        <div
          className={`${classes.section7InnerDiv1} ${
            classes.section7InnerDiv2
          } ${isSecondTransitionVisible && classes.section7InnerDiv2Visible}`}
        >
          <Row className="row-custom-style">
            <Col
              lg={3}
              className={`position-relative ${classes.section7Imagecontainer}`}
            ></Col>
            <Col lg={5}>
              <Typography
                className={`${classes.MainheaderText1} ${classes.MainheaderText2}`}
              >
                Grand Future Unfolds
              </Typography>
              <Typography className={`mt-3 ${classes.section7SubText1}`}>
                The Prana Grand is not just a mode of transport; it's a
                lifestyle statement. With its sleek, aerodynamic silhouette and
                dynamic lines, this electric marvel embodies a new era of
                eco-conscious riding.
              </Typography>
            </Col>
            <Col lg={4}>
              <div className={classes.section7FeaturesContainer}>
                <Typography
                  className={`${classes.FeaturesListText} ${classes.FeaturesListText1}`}
                >
                  <b>5.0</b> <span>kwh</span>
                </Typography>
                <Typography
                  className={`${classes.FeaturesListText} ${classes.FeaturesListText1}`}
                >
                  <b>150 km</b> <span>in Single Charge</span>
                </Typography>
                <Typography
                  className={`${classes.FeaturesListText} ${classes.FeaturesListText1}`}
                >
                  <b>Dual</b> <span>LED</span>
                </Typography>
                <Typography
                  className={`${classes.FeaturesListText} ${classes.FeaturesListText1}`}
                >
                  <b>Sequential</b> <span>Braking</span>
                </Typography>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Section7;

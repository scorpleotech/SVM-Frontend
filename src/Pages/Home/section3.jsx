import React, { useState } from "react";
import classes from "./home.module.css";
import { Row, Col } from "react-bootstrap";
import image2 from "../../Assets/Images/home-about.webp";
import { Typography, Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Section3 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleBtnClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => {
      navigate("/about-us");
      setIsClicked(false);
    }, 1000);
  };

  return (
    <Row className={`mt-4 ${classes.section3row}`}>
      <Col lg={6}>
        <img
          alt="premium electric bike in india"
          src={image2}
          width="100%"
          height="100%"
          className={classes.Section3Image}
        />
      </Col>
      <Col lg={6}>
        <Typography className={`${classes.Section3HeadText}`} variant="h1">
          About <b className={classes.boldClass}>SVM</b>
        </Typography>
        <Typography className={`mb-2 ${classes.Section3NrmlText}`}>
          SVM is dedicated to designing and manufacturing premium electric
          motorbikes in India. We revolutionize the two-wheeler vehicles and
          propel the industry forward by leveraging sustainable energy solutions
          without compromising the quality of the rider’s experience.
        </Typography>
        <div className="position-relative">
          <span
            className={`${classes.Section2BtnIcon} ${isClicked && classes.arrowTransist}`}
          >
            <FaArrowRight />
          </span>
          <Button
            variant="outlined"
            className={`${classes.Section2Btn} ${isClicked && classes.BtnTransist}`}
            onClick={() => {
              handleBtnClick();
            }}
          >
            <span>Know More</span>
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Section3;

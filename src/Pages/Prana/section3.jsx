import React, { useState } from "react";
import classes from "./prana.module.css";
import { Typography, Card } from "@mui/material";
import sampleImage1 from "../../Assets/Images/section5Image4.webp";
import sampleImage2 from "../../Assets/Images/cap-img-2.png";
import { Row, Col } from "react-bootstrap";

const Section3 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className={classes.section3MainContainer}>
      <div className={classes.section3SubContainer}>
        <Typography className={`mb-3 ${classes.section3MainHeader}`}>
          Performance Packed with Features
        </Typography>
        <div
          className={`${classes.section3Row} ${
            isHovered ? classes.shrink : ""
          }`}
        >
          {[sampleImage1, sampleImage1, sampleImage2].map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt={`hoverImage${index}`}
                className={`${classes.section3CardImage} ${
                  hoveredIndex === index && classes.hovered
                }`}
                onMouseEnter={() => {
                  handleHover(index);
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  handleHover(null);
                  setIsHovered(false);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section3;

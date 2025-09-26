import React, { useEffect, useRef, useState } from "react";
import classes from "./prana.module.css";
import { Row, Col } from "react-bootstrap";
import ThreeSixty from "react-360-view-simple";
import { Typography } from "@mui/material";
import { TbView360Number } from "react-icons/tb";
const Section4 = () => {
  const [selectedColour, setSelectedColour] = useState("white");
  const [basePath, setBasePath] = useState(
    `https://api.svm.apps.org.in/images/uploads/3dimages/red`
  );

  useEffect(() => {
    setBasePath(
      `https://api.svm.apps.org.in/images/uploads/3dimages/${selectedColour}`
    );
  }, [selectedColour]);

  const handleSelectColor = (color) => {
    setSelectedColour(color);
  };

  const getThreSixtyImage = () => {
    try {
      return (
        <ThreeSixty
          key={basePath} // This will force re-render when basePath changes
          amount={37}
          imagePath={basePath}
          fileName={`output_{index}.png`}
        />
      );
    } catch (error) {
      console.error("Error rendering 360-degree image:", error);
      return null;
    }
  };

  return (
    <div className={classes.section4MainContainer}>
      <Row className={classes.section4Row}>
        <Col lg={6}>
          <div className={classes.section4TextContainer}>
            <Typography className={classes.Sectio4Header}>
              Ride in Style:
            </Typography>
            <Typography className={classes.Sectio4HeaderText}>
              PRANA's Chromatic <br />
              Collection
            </Typography>
            <Typography className={`mt-2 ${classes.Sectio4SubText}`}>
              Choose your color, redefine your ride.
            </Typography>
            <Row className={classes.variantColourContainer}>
              <Col>
                <Typography>Elite</Typography>
                <div className={classes.ColourDivContainer}>
                  {["white", "green"].map((color, index) => {
                    return (
                      <div key={color}>
                        <div
                          style={{
                            backgroundColor: color,
                          }}
                          className={`${classes.colourVariantBox} `}
                          onClick={() => {
                            handleSelectColor(color);
                          }}
                          key={index}
                        >
                          {color === selectedColour && (
                            <div className={classes.highlightBorder}></div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
              <Col>
                <Typography>Grand</Typography>
                <div className={classes.ColourDivContainer}>
                  {["red", "black"].map((color, index) => {
                    return (
                      <div key={color}>
                        <div
                          style={{
                            backgroundColor: color,
                          }}
                          className={`${classes.colourVariantBox} `}
                          onClick={() => {
                            handleSelectColor(color);
                          }}
                          key={index}
                        >
                          {color === selectedColour && (
                            <div className={classes.highlightBorder}></div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={6}>
          <div className={classes.section4ThreeSixty}>
            {getThreSixtyImage()}
          </div>
          <Typography className={classes.NoteTextFor360}>
            Drag the bike to view <TbView360Number />.
          </Typography>
        </Col>
      </Row>
    </div>
  );
};

export default Section4;

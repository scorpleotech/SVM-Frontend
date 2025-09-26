import React from "react";
import classes from "./aboutus.module.css";
import { Typography } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import image1Light from "../../Assets/Images/aboutJourney6.png";
import image2SVM from "../../Assets/Images/aboutJourney5.png";
import image3ThumbsUp from "../../Assets/Images/aboutJourney1.png";
import image4SportBike from "../../Assets/Images/aboutJourney3.png";
import image5prana from "../../Assets/Images/aboutJourney2.png";
import image6Bike from "../../Assets/Images/aboutJourney7.png";
import image7Eco from "../../Assets/Images/aboutJourney4.png";
import image8Nasdaq from "../../Assets/Images/2023 Icon.png";
import image9Prana from "../../Assets/Images/2024 Icon.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 850 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
  },
};

const Section4 = () => {
  return (
    <div>
      <div className={`${classes.section4Maincontainer}`}>
        <Typography className={classes.section4HeaderText} variant="h1">
          Our Journey
        </Typography>
        <div className={classes.section4SubContainer}>
          <Row className={classes.RowContainer1}>
            <Col>
              <div className={classes.ColumnContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Recognized That EVS Are The Future And Took A Job At Tesla
                    To Learn It At The Source.
                  </Typography>
                </div>
                <div
                  className={`${classes.section4SmallImagesContainer} ${classes.SplContainer1}`}
                >
                  <img
                    src={image1Light}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2012
                  </Typography>
                </div>
              </div>
            </Col>
            <Col>
              <div className={classes.ColumnContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Formalised SVM As A PVT Limited Company And Started Making
                    Prana's Production Version.
                  </Typography>
                </div>
                <div className={classes.section4SmallImagesContainer}>
                  <img
                    src={image2SVM}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2018
                  </Typography>
                </div>
              </div>
            </Col>
            <Col>
              <div className={classes.ColumnContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    # Prana Gets The Thumbs Up
                    <br /># Prana Unveiled
                    <br /># Prana Hits The Road.
                  </Typography>
                </div>
                <div className={classes.section4SmallImagesContainer}>
                  <img
                    src={image3ThumbsUp}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2019
                  </Typography>
                </div>
              </div>
            </Col>
            <Col>
              <div className={classes.ColumnContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    First Batch Of Vehicle Delivery
                  </Typography>
                </div>
                <div className={classes.section4SmallImagesContainer}>
                  <img
                    src={image4SportBike}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2021
                  </Typography>
                </div>
              </div>
            </Col>
            <Col>
              <div className={classes.ColumnContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    <b>Prana 2.0 Unveiled</b>
                  </Typography>
                </div>
                <div className={classes.section4SmallImagesContainer}>
                  <img
                    src={image9Prana}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2024
                  </Typography>
                </div>
              </div>
            </Col>
          </Row>
          <div className={classes.section4ColorDividerLine} />
          <Row className={`${classes.RowContainer2}`}>
            <Col lg={3}>
              <div
                className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
              >
                <div className={classes.section4SmallTextContainer}>
                  <div className={classes.section4SmallTextContainer}>
                    <Typography className={classes.section4SubHeaderText}>
                      Prana's Concept Began
                    </Typography>
                  </div>
                </div>
                <div
                  className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
                >
                  <img
                    src={image5prana}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2014
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div
                className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
              >
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Prototype Testing
                  </Typography>
                </div>
                <div
                  className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
                >
                  <img
                    src={image6Bike}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2018
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div
                className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
              >
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Pre Bookings Started
                    <br /># Dealership Infrastructure
                    <br />
                    Development
                  </Typography>
                </div>
                <div
                  className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
                >
                  <img
                    src={image7Eco}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2020
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div
                className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
              >
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Listed in Nasdaq
                  </Typography>
                </div>
                <div
                  className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
                >
                  <img
                    src={image8Nasdaq}
                    alt="image1"
                    className={classes.section4SmallImages}
                  />
                  <Typography className={classes.section4YearText}>
                    2023
                  </Typography>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={classes.MobileResponsiveContainer}>
          <Carousel
            responsive={responsive}
            // autoPlay={true}
            // autoPlaySpeed={1500}
            infinite={true}
            arrows={true}
            className={classes.TimelineCorosel}
          >
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Recognized That EVS Are The Future And Took A Job At Tesla To
                  Learn It At The Source.
                </Typography>
              </div>
              <div
                className={`${classes.section4SmallImagesContainer} ${classes.SplContainer1}`}
              >
                <img
                  src={image1Light}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2012
                </Typography>
              </div>
            </div>
            <div
              className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
            >
              <div className={classes.section4SmallTextContainer}>
                <div className={classes.section4SmallTextContainer}>
                  <Typography className={classes.section4SubHeaderText}>
                    Prana's Concept Began
                  </Typography>
                </div>
              </div>
              <div
                className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
              >
                <img
                  src={image5prana}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2014
                </Typography>
              </div>
            </div>
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Formalised SVM As A PVT Limited Company And Started Making
                  Prana's Production Version.
                </Typography>
              </div>
              <div className={classes.section4SmallImagesContainer}>
                <img
                  src={image2SVM}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2018
                </Typography>
              </div>
            </div>
            <div
              className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
            >
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Prototype Testing
                </Typography>
              </div>
              <div
                className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
              >
                <img
                  src={image6Bike}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2018
                </Typography>
              </div>
            </div>
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  # Prana Gets The Thumbs Up
                  <br /># Prana Unveiled
                  <br /># Prana Hits The Road.
                </Typography>
              </div>
              <div className={classes.section4SmallImagesContainer}>
                <img
                  src={image3ThumbsUp}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2019
                </Typography>
              </div>
            </div>
            <div
              className={`${classes.ColumnContainer} ${classes.reverseColumn}`}
            >
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Pre Bookings Started
                  <br /># Dealership Infrastructure
                  <br />
                  Development
                </Typography>
              </div>
              <div
                className={`${classes.section4SmallImagesContainer} ${classes.reverseColumn}`}
              >
                <img
                  src={image7Eco}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2020
                </Typography>
              </div>
            </div>
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  First Batch Of Vehicle Delivery
                </Typography>
              </div>
              <div className={classes.section4SmallImagesContainer}>
                <img
                  src={image4SportBike}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2021
                </Typography>
              </div>
            </div>
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  Listed in Nasdaq
                </Typography>
              </div>
              <div className={classes.section4SmallImagesContainer}>
                <img
                  src={image8Nasdaq}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2023
                </Typography>
              </div>
            </div>
            <div className={classes.ColumnContainer}>
              <div className={classes.section4SmallTextContainer}>
                <Typography className={classes.section4SubHeaderText}>
                  <b>Prana 2.0 Unveiled</b>
                </Typography>
              </div>
              <div className={classes.section4SmallImagesContainer}>
                <img
                  src={image9Prana}
                  alt="image1"
                  className={classes.section4SmallImages}
                />
                <Typography className={classes.section4YearText}>
                  2024
                </Typography>
              </div>
            </div>
          </Carousel>
          {/* <div className={classes.MobileRowContainer}></div> */}
        </div>
      </div>
    </div>
  );
};

export default Section4;

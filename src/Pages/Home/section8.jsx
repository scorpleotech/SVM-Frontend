import React from "react";
import classes from "./home.module.css";
import { Row, Col } from "react-bootstrap";
import { Typography } from "@mui/material";

const Section8 = () => {
  return (
    <div className={`mt-5 ${classes.section8MainContainer}`}>
      <Row className={`row-custom-style ${classes.section8InnerContainer}`}>
        <Col lg={6}>
          <Typography className={classes.section8SplHeadertxt}>
            Revolutionizing Riding:
          </Typography>
          <Typography className={classes.section8Text1}>
            Prana by Srivaru Motors – A Commitment to Sustainability and Style
          </Typography>
        </Col>
        <Col lg={6} className={classes.bigTextContainer}>
          <Typography className={classes.section8Text2}>
            Climate change isn't happening, It has happened. Sustainability is
            not AN option anymore - it is the only one. This perspective
            kickstarted the inception of Srivaru Motors (SVM) and the
            introduction of the Prana. At SVM, two aspects drive us to do what
            we do every day - our desire to facilitate the dreams of every rider
            in the country, and our admiration for the Indian engineer
            community. The primary goal of the Prana, whilst offering the best
            environment-friendly solution to the automobile industry. is to
            provide the country's young riders with a stylish bike that stands
            for their passion. Therefore, we focused on developing a bike that
            provides not only high-impact benefits, but also a remarkable
            contribution to society at large. It is our aim to instill a sense
            of pride in every owner of the Prana and make them aware of how
            important their decision is for the environment & our future. In
            addition to that, creating the best user experience is hugely
            important to us - the Prana is characterised by instant torque and
            excellent performance. Ultimately, the takeaway for every customer
            who chooses the Prana over other bikes is more than what words can
            express!
          </Typography>
        </Col>
      </Row>
    </div>
  );
};

export default Section8;

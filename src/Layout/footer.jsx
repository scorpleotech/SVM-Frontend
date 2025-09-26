import React, { useEffect, useState } from "react";
import classes from "./layout.module.css";
import { Button, Col, Row, Form, InputGroup } from "react-bootstrap";
import footerLogo from "../Assets/Images/Updated-Logo.webp";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Link } from "react-router-dom";
import mastercard from "../Assets/Images/Mastercard.png";
import visa from "../Assets/Images/visa.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { getVisitorsCount } from "../Redux/Actions/otherActions";
import { SubscribeSubmit, pageLoader } from "../Redux/Actions/userActions";

const Footer = () => {
  const dispatch = useDispatch();
  const [initial, setInitial] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [errorAlert, serErrorAlert] = useState(false);
  const [count, setCount] = useState();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const handleClickSubscribe = () => {
    if (validateEmail(email)) {
      const userEntry = {
        email: email,
      };
      if (!email) {
        setErrorMessage(true);
      } else {
        dispatch(pageLoader(true));
        dispatch(
          SubscribeSubmit(
            userEntry,
            setErrorMessage,
            setSuccessMessage,
            setErrorText
          )
        );
        dispatch(pageLoader(false));
      }
    } else {
      setErrorMessage(true);
      setErrorText("Please Enter valid email");
    }
  };
  useEffect(() => {
    if (errorMessage || successMessage) {
      setTimeout(() => {
        setSuccessMessage(false);
        setErrorMessage(false);
      }, 5000);
    }
  }, [errorMessage, successMessage]);

  useEffect(() => {
    if (initial !== true) {
      dispatch(getVisitorsCount(setCount, serErrorAlert));
      setInitial(true);
    }
  }, [initial,dispatch]);

  console.log(errorAlert);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div>
      {window.innerWidth > 850 ? (
        <div className={`${classes.footerMainDiv}`}>
          <Row className={classes.footerRow}>
            <Col xl="auto" md={4} xs={12}>
              <img
                src={footerLogo}
                alt="footerLogo"
                className={classes.footerLogo}
              />
            </Col>
            <Col xl="auto" md={4} xs={12}>
              <Typography className={classes.footerheadingText}>
                PRODUCTS
              </Typography>
              <div className={classes.footerList}>
                <Link to="/prana">
                  <Button variant="text" className={classes.footerBtn}>
                    Prana Elite
                  </Button>
                </Link>
                <Link to="/prana">
                  <Button variant="text" className={classes.footerBtn}>
                    Prana Grand
                  </Button>
                </Link>
              </div>
            </Col>
            <Col xl="auto" md={4} xs={12}>
              <Typography className={classes.footerheadingText}>
                Policy
              </Typography>
              <div className={classes.footerList}>
                <Link to="/terms-condition">
                  <Button variant="text" className={classes.footerBtn}>
                    Terms & Conditions
                  </Button>
                </Link>
                <Link to="/policy">
                  <Button variant="text" className={classes.footerBtn}>
                    Privacy Policy
                  </Button>
                </Link>
                <Link to="/cookie-policies">
                  <Button variant="text" className={classes.footerBtn}>
                    Cookie Policy
                  </Button>
                </Link>
                <Link to="/refund-policy">
                  <Button variant="text" className={classes.footerBtn}>
                    Refund & Cancellation
                  </Button>
                </Link>

                {/* <Link to="#">
                <Button variant="text" className={classes.footerBtn}>
                  Edho policy
                </Button>
              </Link> */}
              </div>
            </Col>
            <Col xl="auto" md={4} xs={12}>
              <Typography className={classes.footerheadingText}>
                Company
              </Typography>
              <div className={classes.footerList}>
                <Link to="/about-us">
                  <Button variant="text" className={classes.footerBtn}>
                    About Us
                  </Button>
                </Link>
                <Link to="https://svmh.ai/" target="_blank">
                  <Button variant="text" className={classes.footerBtn}>
                    Investor Relations
                  </Button>
                </Link>
                <Link to="/news">
                  <Button variant="text" className={classes.footerBtn}>
                    News & Events
                  </Button>
                </Link>
                <Link to="/blogs">
                  <Button variant="text" className={classes.footerBtn}>
                    Blogs
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button variant="text" className={classes.footerBtn}>
                    Careers
                  </Button>
                </Link>
              </div>
            </Col>
            <Col xl="auto" md={4} xs={12}>
              <Typography className={classes.footerheadingText}>
                Support
              </Typography>
              <div className={classes.footerList}>
                <Link to="/contact-us">
                  <Button variant="text" className={classes.footerBtn}>
                    Contact Us
                  </Button>
                </Link>
                <Link to="/become-dealer">
                  <Button variant="text" className={classes.footerBtn}>
                    Become a Dealer
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button variant="text" className={classes.footerBtn}>
                    FAQ
                  </Button>
                </Link>
                <Link to="/total-cost-of-ownership">
                  <Button variant="text" className={classes.footerBtn}>
                    TCO
                  </Button>
                </Link>
                {userData && (
                  <Link to="/myorders">
                    <Button variant="text" className={classes.footerBtn}>
                      My Orders
                    </Button>
                  </Link>
                )}
              </div>
            </Col>
            <Col xl={3} md={4} xs={12}>
              <Typography className={classes.footerheadingText}>
                Subscribe
              </Typography>
              <Typography className={classes.footerSubText}>
                Subscribe to our newsletter, so that you can be the first to
                know about new offers and promotions.
              </Typography>
              <InputGroup className="mt-3">
                <Form.Control
                  placeholder="Enter Email Address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={email}
                  onChange={(e) => {
                    setErrorMessage(false);
                    setErrorText("");
                    setEmail(e.target.value);
                  }}
                  className={classes.footerEmailInput}
                />
                <Button
                  variant="primary"
                  id="button-addon2"
                  className={classes.footerSubscribeBtn}
                  onClick={() => handleClickSubscribe()}
                >
                  Subscribe
                </Button>
              </InputGroup>
              {errorMessage && (
                <Typography className={classes.subscribeError}>
                  {errorText}
                </Typography>
              )}
              {successMessage && (
                <Typography className={classes.subscribeSuccess}>
                  Thank you for subscribing
                </Typography>
              )}
              <Typography className={`mt-4 ${classes.footerSubHeaderText}`}>
                Visitors Count
              </Typography>
              <Typography className={`mt-1 ${classes.footerCountText}`}>
                {count ? count : 0}
              </Typography>
            </Col>
            {/* </Col> */}
          </Row>
          <Typography className={classes.footerCopyrightText}>
            Copyright © {new Date().getFullYear()} Srivaru Motors Private Limited. All Rights
            Reserved.
            {/* © 2024 SVM. All Rights Reserved. designed by:{" "}
            <a
              href="https://www.icore.net.in/"
              target="_blank"
              rel="noreferrer"
            >
              Icore Software Technologies
            </a> */}
          </Typography>
          <div className={classes.footerCardImageContainer}>
            <img
              src={mastercard}
              alt="footerLogo"
              className={classes.footerCardImage}
            />
            <img
              src={visa}
              alt="footerLogo"
              className={classes.footerCardImage}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className={`${classes.footerMainDiv}`}>
            <img
              src={footerLogo}
              alt="footerLogo"
              className={classes.footerLogo}
            />
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className={classes.footerAccordianMain}
            >
              <AccordionSummary
                aria-controls="panel1-content"
                expandIcon={
                  <ExpandMoreIcon
                    className={`${
                      expanded === "panel1"
                        ? classes.expandedIcon
                        : classes.NrmlExpandIcon
                    }`}
                  />
                }
                id="panel1-header"
                className={classes.footerAccordianSummary}
              >
                <Typography className={classes.footerheadingText}>
                  PRODUCTS
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.footerAccordianDetails}>
                <div className={classes.footerList}>
                  <Link to="/prana">
                    <Button variant="text" className={classes.footerBtn}>
                      Prana Elite
                    </Button>
                  </Link>
                  <Link to="/prana">
                    <Button variant="text" className={classes.footerBtn}>
                      Prana Grand
                    </Button>
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className={classes.footerAccordianMain}
            >
              <AccordionSummary
                aria-controls="panel1-content"
                expandIcon={
                  <ExpandMoreIcon
                    className={`${
                      expanded === "panel2"
                        ? classes.expandedIcon
                        : classes.NrmlExpandIcon
                    }`}
                  />
                }
                id="panel1-header"
                className={classes.footerAccordianSummary}
              >
                <Typography className={classes.footerheadingText}>
                  Policy
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.footerAccordianDetails}>
                <div className={classes.footerList}>
                  <Link to="/terms-condition">
                    <Button variant="text" className={classes.footerBtn}>
                      Terms & Conditions
                    </Button>
                  </Link>
                  <Link to="/policy">
                    <Button variant="text" className={classes.footerBtn}>
                      Privacy Policy
                    </Button>
                  </Link>
                  <Link to="/cookie-policies">
                    <Button variant="text" className={classes.footerBtn}>
                      Cookie Policy
                    </Button>
                  </Link>
                  <Link to="/refund-policy">
                    <Button variant="text" className={classes.footerBtn}>
                      Refund & Cancellation
                    </Button>
                  </Link>
                  {/* <Link to="#">
                <Button variant="text" className={classes.footerBtn}>
                  Edho policy
                </Button>
              </Link> */}
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className={classes.footerAccordianMain}
            >
              <AccordionSummary
                aria-controls="panel1-content"
                expandIcon={
                  <ExpandMoreIcon
                    className={`${
                      expanded === "panel3"
                        ? classes.expandedIcon
                        : classes.NrmlExpandIcon
                    }`}
                  />
                }
                id="panel1-header"
                className={classes.footerAccordianSummary}
              >
                <Typography className={classes.footerheadingText}>
                  Company
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.footerAccordianDetails}>
                <div className={classes.footerList}>
                  <Link to="/about-us">
                    <Button variant="text" className={classes.footerBtn}>
                      About Us
                    </Button>
                  </Link>
                  <Link to="https://svmh.ai/" target="_blank">
                    <Button variant="text" className={classes.footerBtn}>
                      Investor Relations
                    </Button>
                  </Link>
                  <Link to="/news">
                    <Button variant="text" className={classes.footerBtn}>
                      News & Events
                    </Button>
                  </Link>
                  <Link to="/blogs">
                    <Button variant="text" className={classes.footerBtn}>
                      Blogs
                    </Button>
                  </Link>
                  <Link to="/careers">
                    <Button variant="text" className={classes.footerBtn}>
                      Careers
                    </Button>
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              className={classes.footerAccordianMain}
            >
              <AccordionSummary
                aria-controls="panel1-content"
                expandIcon={
                  <ExpandMoreIcon
                    className={`${
                      expanded === "panel4"
                        ? classes.expandedIcon
                        : classes.NrmlExpandIcon
                    }`}
                  />
                }
                id="panel1-header"
                className={classes.footerAccordianSummary}
              >
                <Typography className={classes.footerheadingText}>
                  Support
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.footerAccordianDetails}>
                <div className={classes.footerList}>
                  <Link to="/contact-us">
                    <Button variant="text" className={classes.footerBtn}>
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/become-dealer">
                    <Button variant="text" className={classes.footerBtn}>
                      Become a Dealer
                    </Button>
                  </Link>
                  <Link to="/faq">
                    <Button variant="text" className={classes.footerBtn}>
                      FAQ
                    </Button>
                  </Link>
                  <Link to="/total-cost-of-ownership">
                    <Button variant="text" className={classes.footerBtn}>
                      TCO
                    </Button>
                  </Link>
                  {userData && (
                    <Link to="/myorders">
                      <Button variant="text" className={classes.footerBtn}>
                        My Orders
                      </Button>
                    </Link>
                  )}
                </div>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              className={classes.footerAccordianMain}
            >
              <AccordionSummary
                aria-controls="panel1-content"
                expandIcon={
                  <ExpandMoreIcon
                    className={`${
                      expanded === "panel5"
                        ? classes.expandedIcon
                        : classes.NrmlExpandIcon
                    }`}
                  />
                }
                id="panel1-header"
                className={classes.footerAccordianSummary}
              >
                <Typography className={classes.footerheadingText}>
                  Subscribe
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.footerAccordianDetails}>
                <div>
                  <Typography className={classes.footerSubText}>
                    Subscribe to our newsletter, so that you can be the first to
                    know about new offers and promotions.
                  </Typography>
                  <InputGroup className="mt-3">
                    <Form.Control
                      placeholder="Enter Email Address"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className={classes.footerEmailInput}
                    />
                    <Button
                      variant="primary"
                      id="button-addon2"
                      className={classes.footerSubscribeBtn}
                    >
                      Subscribe
                    </Button>
                  </InputGroup>
                </div>
              </AccordionDetails>
            </Accordion> */}
            <Typography className={`mt-3 ${classes.footerSubHeaderText}`}>
              SUBSCRIBE
            </Typography>
            <div>
              <Typography className={classes.footerSubText}>
                Subscribe to our newsletter, so that you can be the first to
                know about new offers and promotions.
              </Typography>
              <InputGroup className="mt-3">
                <Form.Control
                  placeholder="Enter Email Address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={email}
                  onChange={(e) => {
                    setErrorMessage(false);
                    setErrorText("");
                    setEmail(e.target.value);
                  }}
                  className={classes.footerEmailInput}
                />
                <Button
                  variant="primary"
                  id="button-addon2"
                  className={classes.footerSubscribeBtn}
                  onClick={handleClickSubscribe}
                >
                  Subscribe
                </Button>
              </InputGroup>
              {errorMessage && (
                <Typography className={classes.subscribeError}>
                  {errorText}
                </Typography>
              )}
              {successMessage && (
                <Typography className={classes.subscribeSuccess}>
                  Thank you for subscribing
                </Typography>
              )}
            </div>
            <Typography className={`mt-4 ${classes.footerSubHeaderText}`}>
              Visitors Count
            </Typography>
            <Typography className={`mt-1 ${classes.footerCountText}`}>
              {count ? count : 0}
            </Typography>
            <Typography className={classes.footerCopyrightText}>
              Copyright © {new Date().getFullYear()} Srivaru Motors Private Limited. All Rights
              Reserved.
              {/* © 2024 SVM. All Rights Reserved. designed by:{" "}
            <a
              href="https://www.icore.net.in/"
              target="_blank"
              rel="noreferrer"
            >
              Icore Software Technologies
            </a> */}
            </Typography>
            <div className={classes.footerCardImageContainer}>
              <img
                src={mastercard}
                alt="footerLogo"
                className={classes.footerCardImage}
              />
              <img
                src={visa}
                alt="footerLogo"
                className={classes.footerCardImage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;

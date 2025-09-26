import React, { useState } from "react";
import classes from "./prana.module.css";
import {
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EnquiryForm from "../Others/enquiryForm";

const Section9 = () => {
  const navigate = useNavigate();
  const [modalToggle, setModalToggle] = useState(false);
  const { faqList } = useSelector((state) => state.otherDatas);

  const modalClose = () => {
    setModalToggle(false);
  };

  return (
    <div className={classes.section9MainContainer}>
      <Typography className={`${classes.Sectio4Header}`}>
        Curious about PRANA?
      </Typography>
      <Typography className={`${classes.Sectio4HeaderText}`}>
        Find Answers in Our FAQs
      </Typography>
      <Row className={classes.section8Row}>
        <Col md={6}>
          <div className={`${classes.AccordionContainer}`}>
            {faqList.slice(0, 3).map((item, index) => (
              <Accordion
                key={index}
                className={classes.AccordianTab}
                defaultExpanded={index === 0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}
                  className={classes.AccordianMainHeadingtab}
                >
                  <Typography className={classes.AccordianSubMainHeading2}>
                    {item.question.toLowerCase()}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.someNrmlTextContainer}>
                  <Typography className={classes.someNrmlText}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <Button
            className={`${classes.section8Button} ${classes.section9Btn}`}
            variant="text"
            onClick={() => navigate("/faq")}
          >
            <span>View all Questions</span>
            <FaArrowRight />
          </Button>
        </Col>
        <Col md={6}>
          <div
            className={`${classes.section8TextContainer} ${classes.section9TextContainer}`}
          >
            {/* <Typography className={classes.section5HeaderText}>
              Frequently asked
              <br /> question
            </Typography>
            <Typography
              className={`${classes.section8SubHeaderText} ${classes.section9SubHeader}`}
            >
              lorem ipLorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt
            </Typography> */}
            <Typography className={classes.section9Header2}>
              If need any additional information:
            </Typography>
            <Button
              variant="contained"
              className={classes.Section2Btn}
              onClick={() => setModalToggle(true)}
            >
              <span>Request A Call</span>
              <FaArrowRight />
            </Button>
          </div>
        </Col>
      </Row>
      {modalToggle && <EnquiryForm modalClose={modalClose} />}
    </div>
  );
};

export default Section9;

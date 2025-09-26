import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import classes from "./others.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import { getFaqList } from "../../Redux/Actions/otherActions";
import {
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const { faqList } = useSelector((state) => state.otherDatas);
  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getFaqList(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);
  return (
    <>
     <Helmet>
     <title>Srivaru Motors | E-bikes | FAQ</title>
        <meta property="og:title" content="Srivaru Motors | E-bikes | FAQ" />
        <meta property="og:description" content="View the FAQs & Clear your queries on electric bikes through Srivaru Motors." />
        <meta
         name="keywords"
         content="Faq"
       />
        </Helmet>
   
    <div>
      <Typography className={classes.termsHeading} variant="h3">
        {"FAQ"}
      </Typography>
      <div className={`${classes.AccordionContainer}`}>
        {faqList.map((item, index) => (
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
                {index + 1}.{item.question.toLowerCase()}
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
    </div>
    </>
  );
};

export default Faq;

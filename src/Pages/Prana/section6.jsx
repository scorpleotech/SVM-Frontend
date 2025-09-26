import React from "react";
import classes from "./prana.module.css";
import { Typography, Button } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GreenRightIcon } from "../../Assets/Icons/icons";
import { responsiveSlider } from "../../Utils/dummyConstants";
import CommonCorosel from "../../Components/responsiveSlider";

const Section6 = () => {
  const dispatch = useDispatch();
  //   const [errorAlert, setErrorAlert] = useState();
  const { error, accessoriesList } = useSelector(
    (state) => state.demoDriveDatas
  );

  const renderItemFunction = () => {
    const renderedItems = accessoriesList.map((item, index) => {
      return (
        <div key={index} className={classes.section6CoroselItems}>
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}${item.image}`}
            alt="Bike SpecImage"
            className={classes.Section6ColumnImage}
          />
          <Typography className={classes.section6RowHeaderText}>
            {item.name}
          </Typography>
          <Button variant="text" className={classes.section6Button}>
            <span>Purchase Now</span>
            <GreenRightIcon />
          </Button>
        </div>
      );
    });
    return renderedItems;
  };
  return (
    <div className={classes.section6MainContainer}>
      <Typography className={classes.Sectio4Header}>
        Customize, Enhance, Conquer:
      </Typography>
      <Typography className={classes.Sectio4HeaderText}>
        PRANA's Accessory Hub
      </Typography>
      <Row className={classes.section6Row}>
        <CommonCorosel
          renderFunction={renderItemFunction}
          responsive={responsiveSlider}
        />
        {/* {[1, 2, 3].map((item, index) => {
          return <Col md={6} lg={4} key={index}></Col>;
        })} */}
      </Row>
    </div>
  );
};

export default Section6;

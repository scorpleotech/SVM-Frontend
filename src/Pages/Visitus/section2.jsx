import React, { useState } from "react";
import classes from "./visitUs.module.css";
import { Typography, TextField, Card } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import {
  SmallLocationIcon,
  SmallMessageIcon,
  SmallPhoneIcon,
  StoreCallIcon,
} from "../../Assets/Icons/icons";

const Section2 = () => {
  const [value, setValue] = useState("");

  return (
    <div className={classes.Section2MainContainer}>
      <div className={classes.Section2InputContainer}>
        <Typography className={classes.pincodeText}>
          Enter Pincode Or City
        </Typography>
        <TextField
          sx={{
            "& legend": { display: "none" },
            "& fieldset": { top: 0 },
          }}
          variant="outlined"
          className={`mt-3 ${classes.NrmlTextInput}`}
          placeholder=""
          id="address1ControlTextarea"
          value={value}
          size="large"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Card className={`mt-4 ${classes.Section2MapCard}`}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1wIhfXwjELbbB1VrosaZ7pSV5td2m5Rw&ehbc=2E312F&ll=10.798140183511926%2C78.03576679524025&z=7"
          title="map"
          className={classes.MapIframe}
        ></iframe>
      </Card>
      <Row className={classes.Section2Row}>
        <Col md={3} className={classes.ColumnContainer}>
          <SmallPhoneIcon />
          <Typography className={classes.Section2Text}>8098402030</Typography>
        </Col>
        <Col md={3} className={classes.ColumnContainer}>
          <SmallMessageIcon />
          <Typography className={classes.Section2Text}>
            kovaieast@svmblkes.com
          </Typography>
        </Col>
        <Col md={3} className={classes.ColumnContainer}>
          <SmallLocationIcon />
          <Typography className={classes.Section2Text}>
            SVM KOVAI - EAST 91A, B.S Nagar, Near Kumaran Kottam, Trichy Road,t
            Sulur COIMBATORE( India ) Tamil Nadu
          </Typography>
        </Col>
      </Row>
    </div>
  );
};

export default Section2;

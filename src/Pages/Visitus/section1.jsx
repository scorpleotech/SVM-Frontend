import React, { useState } from "react";
import classes from "./visitUs.module.css";
import {
  Typography,
  Card,
  Button,
} from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  FaceBookSmall,
  InstagramSmall,
  InterSectorIcon,
  LinkedInSmall,
  TwitterSmall,
  YoutubeSmall,
} from "../../Assets/Icons/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  submitVisitUsForm,
} from "../../Redux/Actions/demoDriveActions";
import { Alphabetic, Numeric } from "../../Utils/commonFunctions";
import { pageLoader } from "../../Redux/Actions/userActions";
import AlertBox from "../../Components/AlertBox";
import { GrLocation } from "react-icons/gr";
import { FiMail, FiPhone } from "react-icons/fi";

const Section1 = () => {
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const { error, success } = useSelector(
    (state) => state.demoDriveDatas
  );

  const CloseAlert = () => {
    setErrorAlert(false);
    setSuccessAlert(false);
  };

  const handleSubmit = () => {
    const userEntry = {
      name: name,
      email: email,
      phone: mobile,
      description: description,
    };
    console.log(userEntry);
    dispatch(pageLoader(true));
    dispatch(submitVisitUsForm(setErrorAlert, setSuccessAlert, userEntry));
    ResetStateFunction();
  };

  const ResetStateFunction = () => {
    setName("");
    setEmail("");
    setMobile("");
    setDescription("");
  };


  return (
    <div className={classes.Section1MainContainer}>
      <Typography className={classes.section1HeaderText}>
        Have more questions? Write to us.
      </Typography>
      {/* <Typography className={classes.section1SubHeaderText}>
        Have more questions? Write to us.
      </Typography> */}
      <Row className={classes.Section1MainRow}>
        <Col md={4} className={classes.Section1ColumnContainer}>
          <Card className={classes.ColumnCard}>
            <div className={classes.CardIconContainer}>
              <FiPhone />
            </div>
            <div className={classes.CardTextContainer}>
              <Typography className={classes.CardText}>
                +91 80 98 20 20 30 / <br />
                +91 63 74 99 92 16
              </Typography>
            </div>
          </Card>
        </Col>
        <Col md={4} className={classes.Section1ColumnContainer}>
          <Card className={classes.ColumnCard}>
            <div className={classes.CardIconContainer}>
              <FiMail />
            </div>
            <div className={classes.CardTextContainer}>
              <Typography
                className={`${classes.CardText} ${classes.AddressText}`}
              >
                For General Info - info@srivarumotors.com, <br />
                For Dealership - dealership@srivarumotors.com, <br />
                For Careers - talent@srivarumotors.com
              </Typography>
            </div>
          </Card>
        </Col>
        <Col md={4} className={classes.Section1ColumnContainer}>
          <Card className={classes.ColumnCard}>
            <div className={classes.CardIconContainer}>
              <GrLocation />
            </div>
            <div className={classes.CardTextContainer}>
              <Typography
                className={`${classes.CardText} ${classes.AddressText}`}
              >
                SRIVARU MOTORS PRIVATE LIMITED <br />
                SF No.224/2 <br />
                Rd opp to NEPC TEXTILES <br />
                NAICKEN THOTTAM <br />
                KANNAMPALAYAM POST. TRICHY ROAD
                <br /> Sulur,Coimbatore <br />
                Tamil Nadu - 641402
              </Typography>
            </div>
          </Card>
        </Col>
      </Row>
      <Card className={classes.Section1CardFormContainer}>
        <ValidatorForm
          useref="form"
          onSubmit={handleSubmit}
          className={classes.formInputContainer}
        >
          <Row className={classes.Section2formRow2}>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Name
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                id="NameInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onKeyPress={(e) => {
                  Alphabetic(e);
                }}
                validators={["required"]} // Add this line
                errorMessages={["Name is required"]}
              />
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Mail
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                id="emailInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                validators={["required", "isEmail"]} // Add this line
                errorMessages={["Mail is required", "Enter a valid Email"]}
              />
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Mobile
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                id="MobileInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                inputProps={{ maxLength: 10 }}
                onKeyPress={(e) => {
                  Numeric(e);
                }}
                validators={["required", "matchRegexp:[0-9]{10}"]} // Add this line
                errorMessages={[
                  "Mobile Number is required",
                  "Enter a valid Mobile number",
                ]}
              />
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Description
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                id="NameInput"
                placeholder=""
                multiLine
                rows={3}
                className={classes.NrmlTextInput}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                validators={["required"]} // Add this line
                errorMessages={["Description is required"]}
              />
            </Col>
            <Col className={classes.SubmitBtnContainer}>
              <Button
                className={classes.FormSubmitByn}
                variant="outlined"
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </ValidatorForm>
      </Card>
      <Card className={classes.Section1CardForNote}>
        {/* <img src={noteImg} alt="noteImg" className={classes.backgroundImage} /> */}
        <Row className={classes.Section1CardForNoteRow}>
          <Col md={6}>
            <Typography className={`${classes.Section1SubCardHeaderText}`}>
              Lorem Ipsum
            </Typography>
            <Typography className={`mt-2 ${classes.Section1SubCardText}`}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
            </Typography>
          </Col>
          <Col md={6}>
            <Typography className={`mb-2 ${classes.Section1SubCardText}`}>
              9876543210
            </Typography>
            <Typography className={`mb-2 ${classes.Section1SubCardText}`}>
              123@svm.com
            </Typography>
            <div className={classes.SocialIconContainer}>
              <YoutubeSmall />
              <FaceBookSmall />
              <InstagramSmall />
              <LinkedInSmall />
              <TwitterSmall />
            </div>
          </Col>
        </Row>
        <div className={classes.section1InterSectorIcon}>
          <InterSectorIcon />
        </div>
      </Card>
      {errorAlert && error ? (
        <AlertBox type="error" message={error} stateName={CloseAlert} />
      ) : null}

      {successAlert && success ? (
        <AlertBox type="success" message={success} stateName={CloseAlert} />
      ) : null}
    </div>
  );
};

export default Section1;

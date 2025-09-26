import React, { useEffect, useState } from "react";
import classes from "./bookNow.module.css";
import { Button, Checkbox, Divider, Typography } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Alphabetic, Numeric } from "../../Utils/commonFunctions";
import { MdRadioButtonUnchecked } from "react-icons/md";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import { FaArrowRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pageLoader } from "../../Redux/Actions/userActions";
import { addCustomerDeleveryAddress } from "../../Redux/Actions/otherActions";

const AddressDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [firstName1, setFirstName1] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [mobile1, setMobile1] = useState("");
  const [address11, setAddress11] = useState("");
  const [address21, setAddress21] = useState("");
  const [state1, setState1] = useState("");
  const [pincode1, setPincode1] = useState("");
  const [sameAddress, setSameAddress] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleBtnClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      handleSubmit();
      setIsClicked(false);
    }, 1000);
  };

  const handleSubmit = () => {
    const userEntry = {
      customer_id: userData._id,
      billing_address: [
        {
          first_name: firstName,
          last_name: lastName,
          mobile: mobile,
          email: email,
          address_line_1: address1,
          address_line_2: address2,
          pincode: pincode,
          state: state,
        },
      ],
      delivery_address: [
        {
          first_name: firstName1,
          last_name: lastName1,
          mobile: mobile1,
          email: email1,
          address_line_1: address11,
          address_line_2: address21,
          pincode: pincode1,
          state: state1,
        },
      ],
    };
    dispatch(pageLoader(true));
    dispatch(
      addCustomerDeleveryAddress(
        userEntry,
        setErrorAlert,
        setSuccessAlert,
        navigate
      )
    );
    dispatch(pageLoader(false));
  };

  useEffect(() => {
    if (sameAddress) {
      setFirstName1(firstName);
      setLastName1(lastName);
      setEmail1(email);
      setMobile1(mobile);
      setAddress11(address1);
      setAddress21(address2);
      setState1(state);
      setPincode1(pincode);
    } else {
      setFirstName1("");
      setLastName1("");
      setEmail1("");
      setMobile1("");
      setAddress11("");
      setAddress21("");
      setState1("");
      setPincode1("");
    }
  }, [sameAddress]);

  const handleBtnClick1 = () => {};

  return (
    <div>
      <ValidatorForm
        useref="form"
        onSubmit={handleBtnClick}
        className={classes.formInputContainer}
      >
        <div>
          <Typography className={classes.addressHeading} variant="h1">
            Delivery Address
          </Typography>
          <Typography className={classes.addressSubHeading}>
            Enter below details for delivery
          </Typography>
          <Row className={classes.deleveryAddressRow}>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                First Name
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="NameInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                onKeyPress={(e) => {
                  Alphabetic(e);
                }}
                validators={["required"]} // Add this line
                errorMessages={["First Name is required"]}
              />
            </Col>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Last Name
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="NameInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                onKeyPress={(e) => {
                  Alphabetic(e);
                }}
                validators={["required"]} // Add this line
                errorMessages={["Last Name is required"]}
              />
            </Col>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Mobile
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
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
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Mail
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
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
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Address line 1
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="addressLine1Input"
                placeholder=""
                className={classes.NrmlTextInput}
                value={address1}
                onChange={(e) => {
                  setAddress1(e.target.value);
                }}
                validators={["required"]} // Add this line
                errorMessages={["Address Line 1 is required"]}
              />
            </Col>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Address line 2
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="addressLine2Input"
                placeholder=""
                className={classes.NrmlTextInput}
                value={address2}
                onChange={(e) => {
                  setAddress2(e.target.value);
                }}
                validators={["required"]} // Add this line
                errorMessages={["Address Line 2 is required"]}
              />
            </Col>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Pincode
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="pincodeInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={pincode}
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
                inputProps={{ maxLength: 6 }}
                onKeyPress={(e) => {
                  Numeric(e);
                }}
                validators={["required"]} // Add this line
                errorMessages={["Pincode is required"]}
              />
            </Col>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                State
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="stateInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                validators={["required"]} // Add this line
                errorMessages={["State is required"]}
              />
            </Col>
          </Row>
        </div>
        <Divider className={classes.divider} />
        <div>
          <Typography className={classes.addressHeading}>
            Billing Address
          </Typography>
          <Typography className={classes.addressSubHeading}>
            Enter below details for billing
          </Typography>
          <div
            className={`${classes.AcceptTermCheckboxContainer} ${classes.sameCheckBoxContainer}`}
            onClick={() => setSameAddress(!sameAddress)}
          >
            <Checkbox
              icon={<MdRadioButtonUnchecked sx={{ fontSize: "40px" }} />}
              checkedIcon={<CircleCheckedFilled />}
              checked={sameAddress}
              className={`${classes.AcceptTermCheckbox} ${
                sameAddress && classes.checkedAccept
              }`}
            />
            <Typography className={`${classes.sameAsDeleveryText}`}>
              Same as above for Billing Address
            </Typography>
          </div>
          <Row className={classes.deleveryAddressRow}>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                First Name
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="NameInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={firstName1}
                onChange={(e) => {
                  setFirstName1(e.target.value);
                }}
                onKeyPress={(e) => {
                  Alphabetic(e);
                }}
                validators={["required"]} // Add this line
                errorMessages={["First Name is required"]}
              />
            </Col>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Last Name
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="NameInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={lastName1}
                onChange={(e) => {
                  setLastName1(e.target.value);
                }}
                onKeyPress={(e) => {
                  Alphabetic(e);
                }}
                validators={["required"]} // Add this line
                errorMessages={["Last Name is required"]}
              />
            </Col>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Mobile
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="MobileInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={mobile1}
                onChange={(e) => {
                  setMobile1(e.target.value);
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
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Mail
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="emailInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={email1}
                onChange={(e) => {
                  setEmail1(e.target.value);
                }}
                validators={["required", "isEmail"]} // Add this line
                errorMessages={["Mail is required", "Enter a valid Email"]}
              />
            </Col>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Address line 1
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="addressLine1Input"
                placeholder=""
                className={classes.NrmlTextInput}
                value={address11}
                onChange={(e) => {
                  setAddress11(e.target.value);
                }}
                validators={["required"]} // Add this line
                errorMessages={["Address Line 1 is required"]}
              />
            </Col>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Address line 2
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="addressLine2Input"
                placeholder=""
                className={classes.NrmlTextInput}
                value={address21}
                onChange={(e) => {
                  setAddress21(e.target.value);
                }}
                validators={["required"]} // Add this line
                errorMessages={["Address Line 2 is required"]}
              />
            </Col>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Pincode
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="pincodeInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={pincode1}
                onChange={(e) => {
                  setPincode1(e.target.value);
                }}
                inputProps={{ maxLength: 6 }}
                onKeyPress={(e) => {
                  Numeric(e);
                }}
                validators={["required"]} // Add this line
                errorMessages={["Pincode is required"]}
              />
            </Col>
            <Col md={12} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                State
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                fullWidth
                id="stateInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={state1}
                onChange={(e) => {
                  setState1(e.target.value);
                }}
                validators={["required"]} // Add this line
                errorMessages={["State is required"]}
              />
            </Col>
          </Row>
        </div>
        <div className={classes.BooknowSubmitBtnContainer}>
          <span
            className={`${classes.BookNowContinueIcon} ${
              isClicked && classes.arrowTransist
            }`}
          >
            <FaArrowRight />
          </span>
          <Button
            variant="outlined"
            className={`${classes.BookNowBtn} ${
              isClicked && classes.BtnTransist
            }`}
            type="submit"
          >
            <span>Continue</span>
          </Button>
        </div>
      </ValidatorForm>
    </div>
  );
};

export default AddressDetails;

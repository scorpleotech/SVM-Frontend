import React, { useState } from "react";
import classes from "./others.module.css";
import { Modal, Box, Button, Typography } from "@mui/material";
import { CloseIcon, SuccessGreenChecked } from "../../Assets/Icons/icons";
import { Col, Row } from "react-bootstrap";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Alphabetic, Numeric } from "../../Utils/commonFunctions";
import { SubmitEnquiryForm } from "../../Redux/Actions/userActions";
import { useDispatch } from "react-redux";

const EnquiryForm = ({ modalClose }) => {
  const [errorAlert, setErrorAlert] = useState(false);
  const dispatch = useDispatch();
  const [modalToggle, setModalToggle] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const rootRef = React.useRef(null);

  const closeModal = () => {
    setModalToggle(false);
    modalClose();
  };

  const handleSubmit = () => {
    const userEntry = {
      email: email,
      enquiry: message,
      mobile: mobile,
      name: name,
    };
    dispatch(SubmitEnquiryForm(setErrorAlert, userEntry));
    setSuccess(true);
  };

  return (
    <div>
      <Modal
        open={modalToggle}
        onClose={() => closeModal()}
        aria-labelledby="server-modal-title"
        data-testid="register_modal"
        aria-describedby="server-modal-description"
        sx={{
          display: "flex",
          height: "fit-content",
          justifyContent: "center",
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: (theme) => theme.shadows[5],
          }}
          className={classes.loginModalWidth}
        >
          <div className={classes.forgetPasswordmodalclose}>
            <Button
              variant="text"
              sx={{ minWidth: "unset" }}
              className={classes.closebtn}
              onClick={() => closeModal()}
            >
              <CloseIcon />
            </Button>
          </div>
          <Row className={classes.enqiryrow}>
            {/* <Col md={6} className={classes.enqiryImageContainer}>
              <img
                src={EnquiryImage}
                alt="EnquiryImage"
                className={classes.EnquiryFormImage}
              />
            </Col> */}
            <Col md={12} className={classes.enqiryFormContainer}>
              {success ? (
                <div
                  className={`${classes.enquiryFormSection2} ${classes.successmodal}`}
                >
                  <SuccessGreenChecked />
                  <Typography className={`${classes.enQuiryFormHeading}`}>
                    Request Submitted Successfully
                  </Typography>
                  <Typography className={`${classes.enquiryFormSubHeading}`}>
                    Thank You.
                  </Typography>
                </div>
              ) : (
                <div className={classes.enquiryFormSection2}>
                  <Typography className={classes.enQuiryFormHeading}>
                    Quick Enquiry
                  </Typography>
                  <Typography className={classes.enquiryFormSubHeading}>
                    Got a question? Contact us quickly and easily using the
                    following form and we will get back to you ASAP!
                  </Typography>
                  <ValidatorForm
                    onSubmit={handleSubmit}
                    className={classes.valildatorForm}
                  >
                    <TextValidator
                      fullWidth
                      label="Name"
                      id="NameInput"
                      placeholder=""
                      className={classes.SignUpFormInput}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      onKeyPress={(e) => {
                        Alphabetic(e);
                      }}
                      size="small"
                      validators={["required"]} // Add this line
                      errorMessages={["First Name is required"]}
                    />
                    {/* <Typography className={`mb-2 ${classes.Section2formLable}`}>
                      Email Id
                    </Typography> */}
                    <TextValidator
                      // sx={{
                      //   "& legend": { display: "none" },
                      //   "& fieldset": { top: 0 },
                      // }}
                      fullWidth
                      id="emailInput"
                      label="Email Id"
                      placeholder=""
                      className={classes.SignUpFormInput}
                      value={email}
                      size="small"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      validators={["required", "isEmail"]} // Add this line
                      errorMessages={[
                        "Mail is required",
                        "Enter a valid Email",
                      ]}
                    />
                    {/* <Typography className={`mb-2 ${classes.Section2formLable}`}>
                      Mobile
                    </Typography> */}
                    <TextValidator
                      // sx={{
                      //   "& legend": { display: "none" },
                      //   "& fieldset": { top: 0 },
                      // }}
                      fullWidth
                      id="MobileInput"
                      placeholder=""
                      label="Mobile Number"
                      className={classes.SignUpFormInput}
                      value={mobile}
                      size="small"
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
                    {/* <Typography className={`mb-2 ${classes.Section2formLable}`}>
                      Description
                    </Typography> */}
                    <TextValidator
                      // sx={{
                      //   "& legend": { display: "none" },
                      //   "& fieldset": { top: 0 },
                      // }}
                      fullWidth
                      id="mesasgeInput"
                      placeholder=""
                      label="Description"
                      className={classes.SignUpFormInput}
                      value={message}
                      size="small"
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      onKeyPress={(e) => {
                        Alphabetic(e);
                      }}
                      validators={["required"]} // Add this line
                      errorMessages={["Description is required"]}
                    />
                    <Button
                      type="submit"
                      className={`mt-3 ${classes.enquiryBtn}`}
                      variant="outlined"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </ValidatorForm>
                </div>
              )}
            </Col>
          </Row>
        </Box>
      </Modal>
    </div>
  );
};

export default EnquiryForm;

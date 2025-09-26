import React, { useState } from "react";
import classes from "./bookNow.module.css";
import { Modal, Box, Button, Typography } from "@mui/material";
import OtpInput from "react-otp-input";
import {
  CloseIcon,
  FailureCancelIcon,
  SuccessGreenChecked,
} from "../../Assets/Icons/icons";
import { FaArrowRight } from "react-icons/fa6";
import AlertBox from "../../Components/AlertBox";

const OtpModel = ({ modalClose, callback, type }) => {
  const [modalToggle, setModalToggle] = useState(true);
  const [otpError, setOtpError] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [otp, setOtp] = useState("");
  const [isDoneClicked, setIsDoneClicked] = useState(false);
  const otpvalue = localStorage.getItem("OTP");
  const rootRef = React.useRef(null);
  const closeModal = () => {
    setModalToggle(false);
    modalClose();
  };

  const handleDoneBtnClick = () => {
    if (otp.length !== 4) {
      setOtpError("Please Enter a Valid OTP");
    }
    if (otp && otp.length === 4) {
      setIsDoneClicked(!isDoneClicked);
      setTimeout(() => {
        callback(otp);
        setIsDoneClicked(false);
      }, 1000);
    }
  };

  const CloseAlert = () => {
    setErrorAlert(false);
    setOtpError("");
  };
  console.log("type =", type);
  return (
    <div>
      {" "}
      <Modal
        open={modalToggle}
        onClose={() => closeModal()}
        aria-labelledby="server-modal-title"
        data-testid="register_modal"
        aria-describedby="server-modal-description"
        sx={{
          display: "flex",
          top: "10%",
          height: "fit-content",
          marginTop: 10,
          justifyContent: "center",
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={{
            position: "relative",
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: (theme) => theme.shadows[5],
          }}
          style={{
            padding: "30px",
          }}
          className={classes.loginModalWidth}
        >
          <div className={classes.forgetPasswordmodalclose}>
            <Button
              variant="text"
              sx={{ minWidth: "unset" }}
              className={"closebtn"}
              onClick={() => closeModal()}
            >
              <CloseIcon />
            </Button>
          </div>
          {type === "success" ? (
            <div className={classes.successModalContainer}>
              <SuccessGreenChecked />
              <Typography
                className={`${classes.otpModalHeaderText}`}
                variant="h1"
              >
                Booked Successfully
              </Typography>
              <Typography className={`${classes.otpModalSubHeaderText}`}>
                Thank you for booking, your booking has been confirmed
              </Typography>
            </div>
          ) : type === "failure" ? (
            <div className={classes.successModalContainer}>
              <FailureCancelIcon />
              <Typography className={`${classes.otpModalHeaderText}`}>
                Booking Cancelled
              </Typography>
              <Typography className={`${classes.otpModalSubHeaderText}`}>
                Transaction has been Failed
              </Typography>
            </div>
          ) : (
            <div>
              <Typography className={`${classes.otpModalHeaderText}`}>
                Confirm with OTP
              </Typography>
              <Typography className={`${classes.otpModalSubHeaderText}`}>
                and we'll text you a verification code
              </Typography>
              {/* <Typography className={`${classes.otpModalSubHeaderText}`}>
                otp:{otpvalue}
              </Typography> */}
              <div className={classes.otpContainer}>
                <Typography className={`${classes.otpHeaderText}`}>
                  Enter Your Received OTP
                </Typography>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  containerStyle={classes.otpInputContainer}
                  inputStyle={classes.otpInput}
                  renderSeparator={<span> </span>}
                  renderInput={(props) => <input {...props} />}
                />
                <Typography className={`${classes.otpSubHeaderText}`}>
                  By continuing, you agree to T&C & Privacy policy
                </Typography>
                <div className="position-relative">
                  <span
                    className={`${classes.loginArrowBtnIcon} ${
                      isDoneClicked && classes.loginDonearrowTransist
                    }`}
                  >
                    <FaArrowRight />
                  </span>
                  <Button
                    variant="outlined"
                    className={`${classes.loginArrowContainer} ${
                      isDoneClicked && classes.loginDoneBtnTransition
                    }`}
                    onClick={() => {
                      handleDoneBtnClick();
                    }}
                  >
                    <span>Done</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      {errorAlert && otpError && (
        <AlertBox type="error" message={otpError} stateName={CloseAlert} />
      )}
    </div>
  );
};

export default OtpModel;

import {
  Modal,
  Box,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import classes from "./auth.module.css";
import OtpInput from "react-otp-input";
import { useState } from "react";
function AadharConfirmPop(props) {
  const {
    open,
    handleClose,
    otpSuccess,
    otpValidateSuccess,
    errMsg,
    validateErrMsg,
    handleAadharVerify,
    otp,
    setOtp,
    mobile,
    handleAadharValidate,
    otpLoader,
  } = props;

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
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
      >
        <Box className={classes.pop_container}>
          <Typography className={classes.aadhar_verify} variant="h1">
            Aadhar Verification
          </Typography>
          <span className={classes.aadhar_msg}>
            We will sent you an <b>4 digit OTP</b> to your registered mobile
            number <b>{mobile}</b>
          </span>
          <Box textAlign={"center"}>
            <Button
              variant="contained"
              className={classes.verify_btn}
              onClick={handleAadharVerify}
              endIcon={
                otpLoader && (
                  <CircularProgress size={20} sx={{ color: "#fff" }} />
                )
              }
            >
              Send OTP
            </Button>
            {!otpSuccess && (
              <p className={classes.err_msg}>{errMsg && errMsg}</p>
            )}
            {otpSuccess && (
              <p className={classes.success_msg}>OTP Sent Successfully</p>
            )}
          </Box>
          {otpSuccess && (
            <Box mt={4} textAlign={"center"}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                containerStyle={classes.otpInputContainer}
                inputStyle={classes.otpInput}
                renderSeparator={<span> </span>}
                renderInput={(props) => <input {...props} />}
              />
              {!otpValidateSuccess && (
                <p className={classes.err_msg}>
                  {validateErrMsg && validateErrMsg}
                </p>
              )}
              {otpValidateSuccess && (
                <p className={classes.success_msg}>OTP Verified Successfully</p>
              )}
              <Button
                variant="contained"
                className={classes.verify_btn}
                onClick={handleAadharValidate}
              >
                Verify & register
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default AadharConfirmPop;

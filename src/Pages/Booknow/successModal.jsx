import React, { useState } from "react";
import classes from "./bookNow.module.css";
import { Modal, Box, Button, Typography } from "@mui/material";
import OtpInput from "react-otp-input";
import { CloseIcon, SuccessGreenChecked } from "../../Assets/Icons/icons";
import { FaArrowRight } from "react-icons/fa6";
import AlertBox from "../../Components/AlertBox";

const SuccessModel = ({ modalClose, heading, subheading }) => {
  const [modalToggle, setModalToggle] = useState(true);
  const [otpError, setOtpError] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const rootRef = React.useRef(null);
  const closeModal = () => {
    setModalToggle(false);
    modalClose();
  };

  const CloseAlert = () => {
    setErrorAlert(false);
    setOtpError("");
  };

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
          <div className={classes.successModalContainer}>
            <SuccessGreenChecked />
            <Typography
              className={`${classes.otpModalHeaderText}`}
              variant="h1"
            >
              {heading}
            </Typography>
            <Typography className={`${classes.otpModalSubHeaderText}`}>
              {subheading}
            </Typography>
          </div>
        </Box>
      </Modal>
      {errorAlert && otpError && (
        <AlertBox type="error" message={otpError} stateName={CloseAlert} />
      )}
    </div>
  );
};

export default SuccessModel;

import React, { useEffect, useState } from "react";
import classes from "./auth.module.css";
import {
  Typography,
  Button,
  Radio,
  TextField,
  InputAdornment,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import OtpInput from "react-otp-input";
import { Numeric } from "../../Utils/commonFunctions";
import indianFlag from "../../Assets/Images/IndianFlag.png";
import { FaArrowRight } from "react-icons/fa6";
import {
  customerLoginApi,
  dealerLoginApi,
  pageLoader,
  submitOtp,
} from "../../Redux/Actions/userActions";
import Cookies from "js-cookie";
import AlertBox from "../../Components/AlertBox";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const [isDoneClicked, setIsDoneClicked] = useState(false);
  const [isDoneDisplay, setIsDoneDisplay] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [userType, setUserType] = useState("consumer");
  const [otp, setOtp] = useState("");
  const { error, success } = useSelector((state) => state.userLogin);

  const handleBtnClick = () => {
    if (phone === "" || phone.length < 10) {
      setPhoneError(true);
    }

    if (phone !== "" && phone.length === 10) {
      setIsClicked(!isClicked);
      setTimeout(() => {
        setIsDisplay(true);
        if (userType === "dealer") {
          if (password === "" || password.length < 8) {
            setPasswordError(true);
            return;
          }
          handleDealerLogin();
          setIsClicked(false);
        } else {
          handleConsumerLogin();
          setIsClicked(false);
          setOtp("");
        }
      }, 1000);
    }
  };

  const handleClickTerms = () => {
    const userEntry = {
      phone: phone,
      password: password,
    };
    sessionStorage.setItem("logintemsCheck", JSON.stringify(userEntry));
  };

  useEffect(() => {
    const loginData = JSON.parse(sessionStorage.getItem("logintemsCheck"));
    if (loginData) {
      setPhone(loginData?.phone);
      setPassword(loginData?.password);
    }
  }, []);

  const handleDealerLogin = () => {
    const userEntry = {
      username: phone,
      password: password,
    };
    dispatch(pageLoader(true));
    dispatch(dealerLoginApi(setErrorAlert, userEntry));
  };

  const handleConsumerLogin = () => {
    const userEntry = {
      phone: phone,
    };
    dispatch(pageLoader(true));
    dispatch(customerLoginApi(setErrorAlert, userEntry));
  };

  const CloseAlert = () => {
    setErrorAlert(false);
  };

  const handleDoneBtnClick = () => {
    setIsDoneClicked(!isDoneClicked);
    setTimeout(() => {
      setIsDoneClicked(false);
      handleVerifyOtp();
    }, 1000);
  };
  const handleVerifyOtp = () => {
    const userEntry = {
      otp: otp,
      phone: phone,
    };
    dispatch(pageLoader(true));
    dispatch(
      submitOtp(setErrorAlert, userEntry, "login", navigate, "/myorders")
    );
    dispatch(pageLoader(false));
  };

  const handleSelectUserType = (name) => {
    setUserType(name);
    setIsClicked(false);
    setIsDoneClicked(false);
    setIsDisplay(false);
    setPhone("");
    setPassword("");
    setPhoneError(false);
    setPasswordError(false);
  };

  useEffect(() => {
    dispatch(pageLoader(false));
  }, []);

  return (
    <div className={classes.loginMainContainer}>
      {userType === "consumer" ? (
        <Typography className={classes.loginConsumerBackground}>
          CONSUMER
        </Typography>
      ) : (
        <Typography className={classes.loginDealerBackground}>AGENT</Typography>
      )}
      <div className={classes.loginSubContainer}>
        <div>
          <Typography className={classes.loginHeaderText} variant="h1">
            {userType === "consumer" ? "Welcome!" : "Welcome!"}
          </Typography>
          <Typography className={classes.loginSubHeaderText}>
            {userType === "consumer"
              ? "Nice to see you again!"
              : "Nice to see you again!"}
          </Typography>
        </div>
        <div className={classes.loginHeaderBtnDiv}>
          <Button
            className={`${classes.loginBtn} ${classes.logConsumerBtn}`}
            variant="outlined"
            onClick={() => handleSelectUserType("consumer")}
          >
            Consumer
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CircleCheckedFilled />}
              checked={userType === "consumer"}
              className={`${classes.loginCheckBox} ${
                userType === "consumer" ? classes.CardCheckboxChecked : ""
              }`}
            />
            {/* <Checkbox
              icon={<CircleChecked />}
              checkedIcon={<CircleCheckedFilled />}
              checked={selectedType.includes(item._id)}
              className={`${classes.CardCheckbox} ${
                selectedType.includes(item._id)
                  ? classes.CardCheckboxChecked
                  : ""
              }`}
              onChange={() => handleChangeCheckbox(item._id)}
            /> */}
          </Button>
          <Button
            className={`${classes.loginBtn} ${classes.logDealerBtn}`}
            variant="contained"
            onClick={() => handleSelectUserType("dealer")}
          >
            Agent
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={
                <CircleCheckedFilled className={classes.LoginCheckedIcon} />
              }
              checked={userType === "dealer"}
              className={`${classes.loginCheckBox} ${
                userType === "dealer" ? classes.CardCheckboxChecked : ""
              }`}
            />
          </Button>
        </div>
        {userType === "consumer" ? (
          <div className={classes.customerloginFormContainer}>
            <div>
              <Typography className={classes.loginFormLableText}>
                Enter Your Mobile Number
              </Typography>
              {/* <PhoneInput
            country={"in"}
            enableSearch={true}
            value={phone}
            onChange={(phone) => setPhone(phone)}
          /> */}
              <TextField
                sx={{
                  "& legend": {
                    display: "none",
                  },
                  "& fieldset": {
                    top: 0,
                  },
                  textAlign: "left",
                }}
                id="MobileInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError(false);
                  setIsDisplay(false);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      className={classes.flagDiv}
                    >
                      <img
                        src={indianFlag}
                        alt="indianFlag"
                        className={classes.flagImage}
                      />
                      <Typography>+91</Typography>
                    </InputAdornment>
                  ),
                }}
                error={phoneError}
                helperText={
                  phoneError && phone === ""
                    ? "Please Enter Mobile Number"
                    : phoneError && phone.length < 10
                    ? "Please Enter 10 digit Mobile Number"
                    : null
                }
                inputProps={{ maxLength: 10 }}
                onKeyPress={(e) => {
                  Numeric(e);
                }}
              />
              {!isDisplay && (
                <Typography className={classes.termsHealperText}>
                  By continuing, you agree to{" "}
                  <a href="/terms-condition" onClick={handleClickTerms}>
                    T&C
                  </a>{" "}
                  &{" "}
                  <a href="/policy" onClick={handleClickTerms}>
                    Privacy policy
                  </a>
                </Typography>
              )}
            </div>
            {!isDisplay ? (
              <div className="position-relative mt-3">
                <span
                  className={`${classes.loginArrowBtnIcon} ${
                    isClicked && classes.loginarrowTransist
                  }`}
                >
                  <FaArrowRight />
                </span>
                <Button
                  variant="outlined"
                  className={`${classes.loginArrowContainer} ${
                    isClicked && classes.loginBtnTransition
                  }`}
                  onClick={() => {
                    handleBtnClick();
                  }}
                >
                  <span>Proceed</span>
                </Button>
              </div>
            ) : (
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
                  By continuing, you agree to{" "}
                  <a href="/terms-condition" onClick={handleClickTerms}>
                    T&C
                  </a>{" "}
                  &{" "}
                  <a href="/policy" onClick={handleClickTerms} s>
                    Privacy policy
                  </a>
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
                    disabled={!otp || otp.length < 4}
                    onClick={() => {
                      handleDoneBtnClick();
                    }}
                  >
                    <span>Done</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={classes.dealerloginFormContainer}>
            <div>
              <Typography className={classes.loginFormLableText}>
                Enter Your User ID
              </Typography>
              <TextField
                sx={{
                  "& legend": {
                    display: "none",
                  },
                  "& fieldset": {
                    top: 0,
                  },
                  textAlign: "left",
                }}
                id="MobileInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError(false);
                }}
                error={phoneError}
                helperText={
                  phoneError && phone === ""
                    ? "Please Enter Mobile Number"
                    : phoneError && phone.length < 10
                    ? "Please Enter 10 digit Mobile Number"
                    : null
                }
              />
            </div>
            <div className={`mt-3 ${classes.passwordInputContainer}`}>
              <Typography className={classes.loginFormLableText}>
                Password
              </Typography>
              <TextField
                sx={{
                  "& legend": {
                    display: "none",
                  },
                  "& fieldset": {
                    top: 0,
                  },
                  textAlign: "left",
                }}
                id="MobileInput"
                placeholder=""
                className={classes.NrmlTextInput}
                value={password}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                error={passwordError}
                helperText={
                  passwordError && password === ""
                    ? "Please Enter a Password"
                    : passwordError && password.length < 8
                    ? "Password should be 8 characters"
                    : null
                }
              />
            </div>
            <div className="position-relative mt-5">
              <span
                className={`${classes.loginArrowBtnIcon} ${
                  isClicked && classes.dealerLoginarrowTransist
                }`}
              >
                <FaArrowRight />
              </span>
              <Button
                variant="outlined"
                // disabled={!phone || phone.length < 10}
                className={`${classes.loginArrowContainer} ${
                  isClicked && classes.loginBtnTransition
                }`}
                onClick={() => {
                  handleBtnClick();
                }}
              >
                <span>Login</span>
              </Button>
            </div>
            <div className={classes.signupBtnContainer}>
              <Typography className={classes.termsHealperText}>
                Don't have an account ?
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/signup")}
                className={classes.signupBtn}
              >
                <span>Signup </span>
                <FaArrowRight />
              </Button>
            </div>
          </div>
        )}
      </div>
      {errorAlert && error && (
        <AlertBox type="error" message={error} stateName={CloseAlert} />
      )}
    </div>
  );
};

export default Login;

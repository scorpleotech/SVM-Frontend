import React, { useState, useRef, useEffect } from "react";
import {
  Divider,
  Typography,
  Checkbox,
  Button,
  MenuItem,
  Autocomplete,
  TextField,
} from "@mui/material";
import classes from "./auth.module.css";
import dummyProfile from "../../Assets/Images/dummyProfile.png";
import { Row, Col } from "react-bootstrap";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Alphabetic, Numeric } from "../../Utils/commonFunctions";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import { useDispatch, useSelector } from "react-redux";
import {
  aadharOtpValidate,
  aadharOtpVerify,
  greenChampSubmit,
  pageLoader,
} from "../../Redux/Actions/userActions";
import AlertBox from "../../Components/AlertBox";
import SuccessModel from "../Booknow/successModal";
import { useNavigate } from "react-router-dom";
import styles from "../Others/others.module.css";
import AadharConfirmPop from "./AadharConfirmPop";
import {
  getNewCityList,
  getNewStateList,
} from "../../Redux/Actions/otherActions";

const GreenChapSignup = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState(null);
  const [streetName, setStreetName] = useState("");
  const [pincode, setPincode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [verificationValue, setVerificationValue] = useState("");
  const [Experiance, setExperiance] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [haveaShop, setHaveaShop] = useState("");
  const [selectService, setSelectService] = useState();
  const [shopName, setShopName] = useState("");
  const [shopStreetName, setShopStreetName] = useState("");
  const [shopCity, setShopCity] = useState("");
  const [shopState, setShopState] = useState("");
  const [shopPincode, setShopPincode] = useState("");
  const [shopRegistrationNumber, setShopRegistrationNumber] = useState("");
  const [addLocationQuardinates, setAddLocationQuardinates] = useState([]);
  const [otherDescription, setOtherDescription] = useState("");
  const [bankName, setBankName] = useState("");
  const [IfscCode, setIfscCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [aadharPop, setAadharPop] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [validateErrMsg, setValidateErrMsg] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [otpValidateSuccess, setOtpValidateSuccess] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLoader, setOtpLoader] = useState(false);
  const [cityError, setCityError] = useState(false);
  const { error, success } = useSelector((state) => state.userLogin);
  const { oneAccessory, allStates, allCity } = useSelector(
    (state) => state.otherDatas
  );

  const openFileSelector = () => {
    inputRef.current.click();
  };

  const handleClose = () => {
    setAadharPop(false);
    setOtpSuccess(false);
    setErrMsg("");
    setOtp("");
    setOtpValidateSuccess(false);
    setValidateErrMsg("");
  };

  const handleAadharVerify = () => {
    setOtpLoader(true);
    let userEntry = {
      aadhaarNumber: aadharNumber,
      phone: mobile,
    };
    dispatch(
      aadharOtpVerify(userEntry, setErrMsg, setOtpSuccess, setOtpLoader)
    );
  };

  const handleAadharValidate = () => {
    let userEntry = {
      otp: otp,
    };
    dispatch(
      aadharOtpValidate(
        userEntry,
        setValidateErrMsg,
        setOtpValidateSuccess,
        handleSubmit
      )
    );
  };

  const handleFileChange = async (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const objectURL = URL.createObjectURL(fileObj);
    console.log(objectURL);
    setProfilePic(objectURL);
    setSelectedFile(fileObj);
  };

  const handleContinue = () => {
    if (city === null || !city) {
      setCityError(true);
    } else {
      setAadharPop(true);
    }
  };

  const handleSubmit = () => {
    const userEntry = {
      name: name,
      email: email,
      mobile: mobile,
      state: state,
      city: city,
      street_name: streetName,
      pincode: pincode,
      aadhar_number: aadharNumber,
      pan_number: panNumber,
      kyc_verified: false,
      select_service: selectService,
      experience_in_automobile: Experiance,
      own_shop: haveaShop,
      others_service: otherDescription,
      shop_details: {
        shop_name: shopName,
        street_name: shopStreetName,
        city: shopCity,
        state: shopState,
        pincode: shopPincode,
        shop_registration_number: shopRegistrationNumber,
        add_location_coordinates: addLocationQuardinates.toString(),
        select_bank: bankName,
        ifsc_code: IfscCode,
        bank_account_number: accountNumber,
        branch: branch,
      },
    };
    dispatch(pageLoader(true));
    dispatch(
      greenChampSubmit(
        setErrorAlert,
        setSuccessAlert,
        userEntry,
        handleClose,
        setAadharPop
      )
    );
    dispatch(pageLoader(false));
  };
  console.log("city =", city);
  const CloseAlert = () => {
    setErrorAlert(false);
    if (successAlert) {
      setSuccessAlert(false);
      navigate("/");
    }
  };

  useEffect(() => {
    dispatch(getNewStateList(setErrorAlert));
  }, []);

  useEffect(() => {
    if (state !== "" && state != "select") {
      dispatch(getNewCityList(setErrorAlert, state));
    }
  }, [state]);

  // useEffect(() => {
  //   if (setOtpValidateSuccess) {
  //     setTimeout(() => {
  //       // handleClose();
  //       handleSubmit();
  //     }, 2000);
  //   }
  // }, [setOtpValidateSuccess]);

  return (
    <div className={classes.signUpMainContainer}>
      <div className={classes.SignupHeaderMainContainer}>
        <div className={classes.SignupHeaderTextContainer}>
          <Typography className={classes.signUpHeaderText} variant="h1">
            Become a <b>Green Champion !!!</b>
          </Typography>
          <Typography className={classes.signUpSubHeaderText}>
            Enter Below details and sign up
          </Typography>
        </div>
        <div className={classes.SignupProfilePicContainer}>
          <Typography className={classes.SignupProfilePicText1}>
            Profile Picture
          </Typography>
          <input
            ref={inputRef}
            className="disablesInput"
            type="file"
            onChange={handleFileChange}
          />
          {profilePic && profilePic !== "" ? (
            <img
              src={profilePic}
              alt="profilePic"
              className={classes.SignupProfilePic}
            />
          ) : (
            <img
              src={dummyProfile}
              alt="profilePic"
              className={classes.SignupProfilePic}
              onClick={() => openFileSelector()}
            />
          )}
          <Typography className={classes.SignupProfilePicText2}>
            Click to Upload with white Background
          </Typography>
        </div>
      </div>
      <ValidatorForm
        useref="form"
        onSubmit={handleContinue}
        className={classes.SignUpForm}
      >
        <Typography className={styles.dealerSubheading} variant="h5">
          Personal Details
        </Typography>
        <Row className={styles.dealerformInputRow}>
          <Col md={4}>
            <TextValidator
              label="Name"
              name="name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              className={styles.leaderFormInput}
              onKeyPress={(event) => {
                Alphabetic(event);
              }}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
          </Col>
          <Col md={4}>
            <TextValidator
              label="Email Id"
              name="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              className={styles.leaderFormInput}
              validators={["required", "isEmail"]}
              errorMessages={["This field is required", "Enter a valid Email"]}
            />
          </Col>
          <Col md={4}>
            <TextValidator
              label="Mobile Number"
              name="mobile"
              fullWidth
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              variant="outlined"
              className={styles.leaderFormInput}
              inputProps={{ maxLength: 10 }}
              onKeyPress={(event) => {
                Numeric(event);
              }}
              validators={["required", "matchRegexp:^[0-9]{10}"]}
              errorMessages={[
                "This field is required",
                "Mobile number must be 10 digits",
              ]}
            />
          </Col>
          <Col md={4}>
            {/* <TextValidator
              select
              label="State"
              name="state"
              fullWidth
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setCity(null);
              }}
              variant="outlined"
              className={styles.leaderFormInput}
              onKeyPress={(event) => {
                Alphabetic(event);
              }}
              validators={["required"]}
              errorMessages={["This field is required"]}
            >
              {allStates?.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={{ whiteSpace: "normal" }}
                  className="all-listing"
                >
                  {name}
                </MenuItem>
              ))}
            </TextValidator> */}
            <Autocomplete
              id="free-solo-demo"
              // freeSolo
              value={state}
              onChange={(event, value) => {
                setState(value);
              }}
              options={allStates.map((option) => option)}
              renderInput={(params) => (
                <TextValidator
                  label="State"
                  // placeholder="Select City"
                  className="city-autocomplete-agent"
                  {...params}
                  value={state}
                  error={cityError}
                  helperText={cityError && "City is required"}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                />
              )}
            />
          </Col>
          <Col md={4}>
            {/* <TextValidator
              label="City"
              name="city"
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
              variant="outlined"
              className={styles.leaderFormInput}
              onKeyPress={(event) => {
                Alphabetic(event);
              }}
              validators={["required"]}
              errorMessages={["This field is required"]}
            /> */}
            <Autocomplete
              id="free-solo-demo"
              // freeSolo
              value={city}
              onChange={(event, value) => {
                setCityError(false);
                setCity(value);
              }}
              options={allCity.map((option) => option.city)}
              renderInput={(params) => (
                <TextValidator
                  label="City"
                  // placeholder="Select City"
                  className="city-autocomplete-agent"
                  {...params}
                  error={cityError}
                  value={city}
                  helperText={cityError && "City is required"}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                />
              )}
            />
          </Col>
          <Col md={4}>
            <TextValidator
              label="Street Name / Area Name"
              name="street_name"
              fullWidth
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
              variant="outlined"
              className={styles.leaderFormInput}
              onKeyPress={(event) => {
                Alphabetic(event);
              }}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
          </Col>
          <Col md={4}>
            <TextValidator
              label="Pincode"
              name="pincode"
              fullWidth
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              variant="outlined"
              className={styles.leaderFormInput}
              onKeyPress={(event) => {
                Numeric(event);
              }}
              inputProps={{ maxLength: 6 }}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
          </Col>
          <Col md={4}>
            <TextValidator
              label="Aadhar Number"
              name="aadhar_number"
              fullWidth
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              variant="outlined"
              inputProps={{ maxLength: 12 }}
              onKeyPress={(event) => {
                Numeric(event);
              }}
              className={styles.leaderFormInput}
              validators={[
                "required",
                "matchRegexp:^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$",
              ]}
              errorMessages={[
                "This field is required",
                "Enter a valid Aadhar Number",
              ]}
            />
          </Col>
          <Col md={4}>
            <TextValidator
              label="PAN Number"
              name="pan_number"
              fullWidth
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              variant="outlined"
              className={styles.leaderFormInput}
              validators={["required", "matchRegexp:[A-Z]{5}[0-9]{4}[A-Z]{1}"]}
              errorMessages={[
                "This field is required",
                "Enter a valid PAN Number",
              ]}
            />
          </Col>
        </Row>
        <Typography className={`mt-4 ${styles.dealerSubheading}`} variant="h5">
          Shop Details
        </Typography>
        <Row className={styles.dealerformInputRow}>
          <Col md={4}>
            <TextValidator
              label="Select Service"
              name="state"
              fullWidth
              value={selectService}
              onChange={(e) => setSelectService(e.target.value)}
              variant="outlined"
              select
              className={classes.leaderFormInput}
              validators={["required"]}
              errorMessages={["This field is required"]}
            >
              <MenuItem value="2W/4W Service">2W/4W Service</MenuItem>
              <MenuItem value="2W/4W Sales">2W/4W Sales</MenuItem>
              <MenuItem value="2W/4W Sales & Service">
                2W/4W Sales & Service
              </MenuItem>
              <MenuItem value="parts_retailer">Parts Retailer</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </TextValidator>
          </Col>
          {selectService === "others" && (
            <Col md={4}>
              <TextValidator
                label="Other Service"
                name="otherService"
                fullWidth
                value={otherDescription}
                onChange={(e) => setOtherDescription(e.target.value)}
                variant="outlined"
                className={styles.leaderFormInput}
                validators={["required"]}
                errorMessages={["This field is required"]}
              />
            </Col>
          )}
          <Col md={4}>
            <TextValidator
              label="Do you have own a shop?"
              name="haveaShop"
              fullWidth
              value={haveaShop}
              onChange={(e) => setHaveaShop(e.target.value)}
              variant="outlined"
              select
              className={classes.leaderFormInput}
              validators={["required"]}
              errorMessages={["This field is required"]}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextValidator>
          </Col>
          {haveaShop && (
            <Col md={4}>
              <TextValidator
                label="Experiance in Automobiles"
                name="experiance"
                fullWidth
                value={Experiance}
                onChange={(e) => setExperiance(e.target.value)}
                variant="outlined"
                className={styles.leaderFormInput}
                validators={["required"]}
                errorMessages={["This field is required"]}
                helperText="eg: 2 years or 5months"
              />
            </Col>
          )}
          {haveaShop === "yes" && (
            <>
              <Col md={4}>
                <TextValidator
                  label="Shop Name"
                  name="shop_name"
                  fullWidth
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  variant="outlined"
                  className={styles.leaderFormInput}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                  onKeyPress={(e) => {
                    Alphabetic(e);
                  }}
                />
              </Col>
              <Col md={4}>
                <TextValidator
                  label="Street Name / Area Name"
                  name="shop_street_name"
                  fullWidth
                  value={shopStreetName}
                  onChange={(e) => setShopStreetName(e.target.value)}
                  variant="outlined"
                  className={styles.leaderFormInput}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                  onKeyPress={(e) => {
                    Alphabetic(e);
                  }}
                />
              </Col>
              <Col md={4}>
                <TextValidator
                  label="city"
                  name="shop_city"
                  fullWidth
                  value={shopCity}
                  onChange={(e) => setShopCity(e.target.value)}
                  variant="outlined"
                  className={styles.leaderFormInput}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                  onKeyPress={(e) => {
                    Alphabetic(e);
                  }}
                />
              </Col>
              <Col md={4}>
                <TextValidator
                  label="state"
                  name="shop_state"
                  fullWidth
                  value={shopState}
                  onChange={(e) => setShopState(e.target.value)}
                  variant="outlined"
                  className={styles.leaderFormInput}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                  onKeyPress={(e) => {
                    Alphabetic(e);
                  }}
                />
              </Col>
              <Col md={4}>
                <TextValidator
                  label="Pincode"
                  name="shop_pincode"
                  fullWidth
                  value={shopPincode}
                  onChange={(e) => setShopPincode(e.target.value)}
                  variant="outlined"
                  className={styles.leaderFormInput}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                  inputProps={{ maxLength: 6 }}
                  onKeyPress={(e) => {
                    Numeric(e);
                  }}
                />
              </Col>
              <Col md={4}>
                <TextValidator
                  label="Shop Registration Number"
                  name="shop_registration_number"
                  fullWidth
                  value={shopRegistrationNumber}
                  onChange={(e) => setShopRegistrationNumber(e.target.value)}
                  variant="outlined"
                  className={styles.leaderFormInput}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                />
              </Col>
              <Col md={4}>
                <TextValidator
                  label="Add Location Coordinates"
                  name="add_location_coordinates"
                  fullWidth
                  value={addLocationQuardinates}
                  onChange={(e) => setAddLocationQuardinates(e.target.value)}
                  variant="outlined"
                  helperText="Note: Add Google Map location Link / URL"
                  className={styles.leaderFormInput}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                />
              </Col>
            </>
          )}
        </Row>
        <Typography className={`mt-4 ${styles.dealerSubheading}`} variant="h5">
          Bank Details
        </Typography>
        <Row className={styles.dealerformInputRow}>
          <Col md={4}>
            <TextValidator
              label="Bank Name"
              name="bank_name"
              fullWidth
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              variant="outlined"
              className={styles.leaderFormInput}
              validators={["required"]}
              errorMessages={["This field is required"]}
              onKeyPress={(e) => {
                Alphabetic(e);
              }}
            />
          </Col>
          <Col md={4}>
            <TextValidator
              label="IFSC Code"
              name="ifce_code"
              fullWidth
              value={IfscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              variant="outlined"
              className={styles.leaderFormInput}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
          </Col>
          <Col md={4}>
            <TextValidator
              label="Bank Account Number"
              name="account_number"
              fullWidth
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              variant="outlined"
              className={styles.leaderFormInput}
              validators={["required"]}
              errorMessages={["This field is required"]}
              onKeyPress={(e) => {
                Numeric(e);
              }}
            />
          </Col>
          <Col md={4}>
            <TextValidator
              label="Branch"
              name="branch"
              fullWidth
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              variant="outlined"
              className={styles.leaderFormInput}
              validators={["required"]}
              errorMessages={["This field is required"]}
              onKeyPress={(e) => {
                Alphabetic(e);
              }}
            />
          </Col>
        </Row>
        <div className={classes.AcceptTermCheckboxContainer}>
          <Checkbox
            icon={<MdRadioButtonUnchecked sx={{ fontSize: "40px" }} />}
            checkedIcon={<CircleCheckedFilled />}
            checked={acceptTerms}
            className={`${classes.AcceptTermCheckbox} ${
              acceptTerms && classes.checkedAccept
            }`}
            onChange={(e) => {
              setAcceptTerms(!acceptTerms);
            }}
          />
          <Typography className={`${classes.acceptTermText}`}>
            By clicking the "Continue" button, you acknowledge and agree to the
            following terms and conditions
          </Typography>
        </div>

        <div className={classes.BooknowSubmitBtnContainer}>
          <span
            className={`${classes.loginArrowBtnIcon} ${
              isClicked && classes.dealerLoginarrowTransist
            }`}
          >
            <FaArrowRight />
          </span>

          <Button
            variant="outlined"
            disabled={!acceptTerms}
            className={`${classes.loginArrowContainer} ${
              isClicked && classes.loginBtnTransition
            }`}
            type="submit"
          >
            <span>Continue</span>
          </Button>
        </div>
      </ValidatorForm>
      {errorAlert && error && (
        <AlertBox type="error" message={error} stateName={CloseAlert} />
      )}
      {successAlert && success && (
        <SuccessModel
          modalClose={CloseAlert}
          heading={"Aadhaar Verification Successful"}
          subheading={`Agent signup Completed!`}
        />
      )}
      <AadharConfirmPop
        open={aadharPop}
        handleClose={handleClose}
        otpSuccess={otpSuccess}
        otpValidateSuccess={otpValidateSuccess}
        errMsg={errMsg}
        validateErrMsg={validateErrMsg}
        handleAadharVerify={handleAadharVerify}
        otp={otp}
        setOtp={setOtp}
        mobile={mobile}
        handleAadharValidate={handleAadharValidate}
        otpLoader={otpLoader}
      />
    </div>
  );
};

export default GreenChapSignup;

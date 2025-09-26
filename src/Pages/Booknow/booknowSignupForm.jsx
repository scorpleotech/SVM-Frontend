import React, { useEffect, useState } from "react";
import classes from "./bookNow.module.css";
import { Row, Col, Button as Button1, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader, submitBookNow } from "../../Redux/Actions/userActions";
import {
  Alphabetic,
  Numeric,
  generateCaptcha,
} from "../../Utils/commonFunctions";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {
  Checkbox,
  Typography,
  MenuItem,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import AlertBox from "../../Components/AlertBox";
import { useNavigate } from "react-router-dom";
import {
  getAccessories,
  getNewCityList,
  getNewStateList,
} from "../../Redux/Actions/otherActions";
import { SuccessGreenChecked } from "../../Assets/Icons/icons";
import BikePayment from "./BikePayment";

const BookNowSignupForm = ({ SelectedVartiant }) => {
  const { error, success, storeList, categoryList } = useSelector(
    (state) => state.demoDriveDatas
  );
  const navigate = useNavigate();
  const { bikeVariants } = useSelector((state) => state.homeDatas);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otpModalToggle, setOtpModalToggle] = useState(false);
  const [mobile, setMobile] = useState("");
  const [selectedState, setSelectedState] = useState(null);
  const [stateError, setStateError] = useState(false);
  const [city, setCity] = useState(null);
  const [cityError, setCityError] = useState(false);
  const [haveCouponCode, setHaveCouponCode] = useState(false);
  const [dealerHub, setDealerHub] = useState("select");
  const [dealerHubError, setDealerHubError] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const [defaultError, setDefaultError] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);
  const [couponError, setCouponError] = useState(false);
  const [stateList, setStateList] = useState([]);
  const [newStoreList, setNewStoreList] = useState([]);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [showAccessory, setShowAccessory] = useState(false);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { oneAccessory, allStates, allCity } = useSelector(
    (state) => state.otherDatas
  );
  const temsCheck = JSON.parse(sessionStorage.getItem("temsCheck"));

  console.log("userData =", userData);

  useEffect(() => {
    dispatch(pageLoader(false));
    generateCaptcha(setCaptchaValue, setNumber1, setNumber2);
  }, []);

  useEffect(() => {
    if (userData?.user) {
      if (!name) {
        setName(userData?.user?.name);
      }
      if (!email) {
        setEmail(userData?.user?.email);
      }
      setMobile(userData?.user?.phone);
    }
  }, [userData]);

  useEffect(() => {
    if (temsCheck) {
      setName(temsCheck.name);
      setEmail(temsCheck.email);
      setMobile(temsCheck.phone);
      setSelectedState(temsCheck.state);
      setCity(temsCheck.city);
      setDealerHub(temsCheck.dealer_hub);
      handleReLoadContent(temsCheck);
      if (temsCheck.coupon_code) {
        setHaveCouponCode(true);
        setCouponCode(temsCheck.coupon_code);
        getAccessorfromServer(temsCheck.coupon_code);
        setShowAccessory(true);
      }
      sessionStorage.removeItem("temsCheck");
    }
  }, [temsCheck]);

  // useEffect(() => {
  //   getAccessories;
  // }, [couponCode.length === 10]);

  const handleReLoadContent = (temsCheck) => {
    setSelectedItem(temsCheck.category_id);
    const filteredItem = bikeVariants?.find(
      (item) => item._id === temsCheck.bike_varient_id
    );
    setSelectedColor(filteredItem?._id);
    SelectedVartiant(filteredItem);
  };

  useEffect(() => {
    setSelectedItem(categoryList[0]?._id);
    handleSelectCategory(categoryList[0]?._id);
  }, [categoryList]);

  useEffect(() => {
    setSelectedColor(bikeVariants[0]?._id);
  }, [bikeVariants]);

  const modalClose = () => {
    setOtpModalToggle(false);
  };

  const handleClickTerms = () => {
    const userEntry = {
      phone: mobile,
      email: email,
      name: name,
      state: selectedState,
      city: city,
      coupon_code: couponCode,
      dealer_hub: dealerHub,
      category_id: selectedItem,
      bike_varient_id: selectedColor,
    };
    sessionStorage.setItem("temsCheck", JSON.stringify(userEntry));
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
    getAccessorfromServer(e.target.value);
    if (e.target.value.length === 10) {
      setShowAccessory(true);
    } else {
      setShowAccessory(false);
    }
  };

  const getAccessorfromServer = (couponCode) => {
    if (!showAccessory && !oneAccessory) {
      dispatch(pageLoader(true));
      dispatch(getAccessories(setErrorAlert, couponCode));
      dispatch(pageLoader(false));
    }
  };

  useEffect(() => {
    dispatch(getNewStateList(setErrorAlert));
  }, []);

  useEffect(() => {
    if (selectedState !== "" && selectedState != "select") {
      dispatch(getNewCityList(setErrorAlert, selectedState));
    }
  }, [selectedState]);

  useEffect(() => {
    if (
      city !== "" &&
      city != "select" &&
      selectedState !== "" &&
      selectedState != "select"
    ) {
      let default_city = "Coimbatore";
      let default_state = "Tamil Nadu";
      let my_stores = [...storeList];

      let filtered_stores = my_stores.filter(
        (item) =>
          item.state.toLowerCase() === selectedState?.toLowerCase() &&
          item.city.toLowerCase() === city?.toLowerCase()
      );

      if (filtered_stores.length > 0) {
        setNewStoreList(filtered_stores);
      } else {
        let new_filtered_stores = my_stores.filter(
          (item) =>
            item.state.toLowerCase() === default_state?.toLowerCase() &&
            item.city.toLowerCase() === default_city?.toLowerCase()
        );
        setNewStoreList(new_filtered_stores);
      }

      // setNewStoreList ,
    }
  }, [city]);

  // useEffect(() => {
  //   if (storeList && storeList?.length > 0) {
  //     if (stateList.length === 0) {
  //       const stateArray = storeList.map((item) => {
  //         return item.state;
  //       });
  //       const resultStateArray = stateArray.filter((value, index, self) => {
  //         return (
  //           value !== undefined && value !== "" && self.indexOf(value) === index
  //         );
  //       });
  //       setStateList(resultStateArray);
  //     }
  //     if (selectedState !== "select") {
  //       const cityArray = storeList.map((item) => {
  //         if (item.state.toLowerCase() === selectedState.toLowerCase()) {
  //           return item.city;
  //         }
  //       });
  //       const resultCityArray = cityArray.filter((value, index, self) => {
  //         return (
  //           value !== undefined && value !== "" && self.indexOf(value) === index
  //         );
  //       });
  //       setCityList(resultCityArray);
  //     }
  //     if (selectedState !== "select" && city !== "select") {
  //     }
  //   }
  // }, [storeList, selectedState]);

  const handleSubmit = () => {
    if (haveCouponCode && couponCode !== "") {
      if (oneAccessory) {
        const userEntry = {
          phone: mobile,
          email: email,
          name: name,
          state: selectedState,
          city: city,
          coupon_code: couponCode,
          dealer_hub: dealerHub,
          category_id: selectedItem,
          bike_varient_id: selectedColor,
        };
        sessionStorage.setItem("order_Details", JSON.stringify(userEntry));
        navigate("/payment-method");
        // userEntry.amount = 999;
        // dispatch(pageLoader(true));
        // dispatch(submitBookNow(setErrorAlert, userEntry, navigate));
      } else {
        setCouponError(true);
      }
    } else {
      const userEntry = {
        phone: mobile,
        email: email,
        name: name,
        state: selectedState,
        city: city,
        coupon_code: couponCode,
        dealer_hub: dealerHub,
        category_id: selectedItem,
        bike_varient_id: selectedColor,
      };
      sessionStorage.setItem("order_Details", JSON.stringify(userEntry));
      navigate("/payment-method");

      // userEntry.amount = 999;
      // dispatch(pageLoader(true));
      // dispatch(submitBookNow(setErrorAlert, userEntry, navigate));
    }
  };

  console.log(name, "username");

  const handleResetState = () => {
    setSelectedState("select");
    setCity("select");
    setDealerHub("select");
    setCouponCode("");
    setMobile("");
    setName("");
    setEmail("");
    setAcceptTerms(false);
    setStateError(false);
    setCityError(false);
    setDealerHubError(false);
  };

  const handleChangeState = (event) => {
    setSelectedState(event.target.value);
    setCity(null);
    setStateError(false);
  };

  const handleBtnClick = () => {
    if (parseInt(enteredCaptcha) !== number1 + number2) {
      setErrorAlert(true);
      setDefaultError("Please enter valid captcha");
      generateCaptcha(setCaptchaValue, setNumber1, setNumber2);
    }

    if (selectedState === "select") {
      setStateError(true);
    }
    if (city === "select" || city == null) {
      setCityError(true);
    }
    if (dealerHub === "select") {
      setDealerHubError(true);
    }

    if (!acceptTerms) {
      setErrorAlert(true);
      setDefaultError("Please accept terms and conditions");
    }
    if (
      selectedState !== "select" &&
      city !== "select" &&
      dealerHub !== "select" &&
      acceptTerms &&
      parseInt(enteredCaptcha) === number1 + number2
    ) {
      setIsClicked(true);
      setTimeout(() => {
        handleSubmit();
        setIsClicked(false);
      }, 1000);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setDealerHub("select");
    setCityError(false);
  };

  const handleDealerHubChange = (event) => {
    setDealerHub(event.target.value);
    setDealerHubError(false);
  };

  const handleSelectCategory = async (id) => {
    await sessionStorage.removeItem("temsCheck");
    setSelectedItem(id);
    const filtereeditem = bikeVariants.filter(
      (item) => item.category_id === id
    );
    setSelectedColor(filtereeditem[0]?._id);
    SelectedVartiant(filtereeditem[0]);
  };

  const CloseAlert = () => {
    setErrorAlert(false);
    setSuccessAlert(false);
    setDefaultError("");
  };

  const handlePicColour = (item) => {
    sessionStorage.removeItem("temsCheck");
    setSelectedColor(item._id);
    SelectedVartiant(item);
  };
  console.log("name =", name);
  return (
    <div>
      <ValidatorForm
        useref="form"
        onSubmit={handleBtnClick}
        className={classes.formInputContainer}
      >
        {/* <Row className={classes.BooknowHeaderRowContainer}></Row> */}
        <Row className={classes.BooknowFormRow}>
          <Col md={12}>
            <div>
              <Typography
                className={classes.headerCategoryVariantLable}
                variant="h1"
              >
                Choose Model
              </Typography>
              <ButtonGroup className={`${classes.headervariantLisContainer}`}>
                {categoryList.map((item, index) => {
                  return (
                    <Button1
                      key={index}
                      className={`${classes.headerVariantBtn} ${
                        item._id === selectedItem && classes.selectedBtn
                      }`}
                      onClick={() => handleSelectCategory(item._id)}
                    >
                      {item.title}
                    </Button1>
                  );
                })}
              </ButtonGroup>
            </div>
          </Col>
          <Col md={12}>
            <div>
              <Typography className={classes.headerCategoryVariantLable}>
                Choose The Color
              </Typography>
              <div className={classes.headerColourDotContainer}>
                {bikeVariants
                  .filter((item) => item.category_id === selectedItem)
                  .map((item, index) => {
                    return (
                      <div
                        style={{
                          backgroundColor: item.colorCode,
                          border:
                            item.colorName === "WHITE"
                              ? "1px solid black"
                              : "none",
                        }}
                        className={`${classes.headerColourDotVariant} `}
                        onClick={() => {
                          handlePicColour(item);
                        }}
                        key={index}
                      >
                        {item._id === selectedColor && (
                          <div className={classes.highlightBorder}></div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </Col>
          <Col md={12}>
            <Typography className={classes.payentPersonaHeader}>
              Please enter your personal details below for purchase and
              registration of your Prana.
            </Typography>
          </Col>
          <Col md={12}>
            <TextValidator
              fullWidth
              placeholder="Name"
              id="NameInput"
              className={classes.NrmlSignUpTextInput}
              value={name}
              disabled={
                userData && userData?.user?.name && userData?.user?.name !== ""
              }
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
          <Col md={12} className={classes.InputContainer}>
            <TextValidator
              placeholder="Mail"
              fullWidth
              id="emailInput"
              className={classes.NrmlSignUpTextInput}
              value={email}
              disabled={
                userData &&
                userData?.user?.email &&
                userData?.user?.email !== ""
              }
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              validators={["required", "isEmail"]} // Add this line
              errorMessages={["Mail is required", "Enter a valid Email"]}
            />
          </Col>
          <Col md={12} className={classes.InputContainer}>
            <TextValidator
              placeholder="Mobile"
              fullWidth
              id="MobileInput"
              className={classes.NrmlSignUpTextInput}
              disabled={
                userData &&
                userData?.user?.phone &&
                userData?.user?.phone !== ""
              }
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
          <Col md={12} className={`${classes.InputContainer} `}>
            {/* <TextValidator
              placeholder="State"
              name="state"
              fullWidth
              value={selectedState}
              onChange={handleChangeState}
              variant="outlined"
              select
              className={
                selectedState === "select"
                  ? `${classes.TextInput1} ${classes.defaultMenuItem} my-selection`
                  : `${classes.TextInput1} my-selection`
              }
              validators={["required"]}
              errorMessages={["State is required"]}
              error={stateError}
              helperText={stateError && "State is required"}
            >
              <MenuItem
                key={name}
                value={"select"}
                style={{ whiteSpace: "normal", display: "none" }}
              >
                Select State
              </MenuItem>
              {allStates.map((name) => (
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
              value={selectedState}
              onChange={(event, value) => {
                setSelectedState(value);
                setCity(null);
                setStateError(false);
                setDealerHub("select");
              }}
              options={allStates.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  placeholder="Select State"
                  className="city-autocomplete"
                  {...params}
                  error={stateError}
                  helperText={stateError && "State is required"}
                />
              )}
            />
          </Col>
          <Col md={12} className={classes.InputContainer}>
            {/* <TextValidator
              placeholder="State"
              name="state"
              fullWidth
              value={city}
              onChange={handleCityChange}
              variant="outlined"
              select
              className={
                city === "select"
                  ? `${classes.TextInput1} ${classes.defaultMenuItem}`
                  : classes.TextInput1
              }
              validators={["required"]}
              errorMessages={["State is required"]}
              error={cityError}
              helperText={cityError && "City is required"}
            >
              <MenuItem
                key={name}
                value={"select"}
                style={{ whiteSpace: "normal", display: "none" }}
              >
                Select City
              </MenuItem>
              {cityList &&
                cityList.length > 0 &&
                cityList.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={{ whiteSpace: "normal" }}
                  >
                    {name?.charAt(0).toUpperCase() +
                      name?.slice(1).toLowerCase().replaceAll("_", " ")}
                  </MenuItem>
                ))}
            </TextValidator> */}
            <Autocomplete
              id="free-solo-demo"
              // freeSolo
              value={city}
              onChange={(event, value) => {
                setCityError(false);
                setDealerHub("select");
                setCity(value);
              }}
              options={allCity.map((option) => option.city)}
              renderInput={(params) => (
                <TextField
                  placeholder="Select City"
                  className="city-autocomplete"
                  {...params}
                  error={cityError}
                  helperText={cityError && "City is required"}
                />
              )}
            />
          </Col>
          <Col md={12} className={classes.InputContainer}>
            <TextValidator
              placeholder="State"
              name="state"
              fullWidth
              value={dealerHub}
              onChange={handleDealerHubChange}
              variant="outlined"
              select
              className={
                city === "select"
                  ? `${classes.TextInput1} ${classes.defaultMenuItem}`
                  : classes.TextInput1
              }
              validators={["required"]}
              errorMessages={["Dealer Hub is required"]}
              error={dealerHubError}
              helperText={dealerHubError && "Dealer Hub is required"}
            >
              <MenuItem
                key={name}
                value={"select"}
                className="remove-whiteSpace d-none"
              >
                Select Dealer Hub
              </MenuItem>
              {newStoreList &&
                newStoreList.length > 0 &&
                // storeList
                //   .filter(
                //     (item) =>
                //       item.state.toLowerCase() ===
                //         selectedState.toLowerCase() &&
                //       item.city.toLowerCase() === city.toLowerCase()
                //   )
                newStoreList.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item._id}
                    className="remove-whiteSpace"
                  >
                    {item.name}
                  </MenuItem>
                ))}
            </TextValidator>
          </Col>
          <Col md={12}>
            <Typography>Have coupon code</Typography>
            <div className={classes.CaptchaInputContainer}>
              <Checkbox
                icon={<MdRadioButtonUnchecked sx={{ fontSize: "40px" }} />}
                checkedIcon={<CircleCheckedFilled />}
                checked={haveCouponCode}
                className={`${classes.AcceptTermCheckbox} ${
                  haveCouponCode && classes.checkedAccept
                }`}
                onChange={(e) => {
                  setHaveCouponCode(e.target.checked);
                }}
              />
              {haveCouponCode && (
                <TextValidator
                  // sx={{
                  //   "& legend": { display: "none" },
                  //   "& fieldset": { top: 0 },
                  // }}
                  fullWidth
                  id="discoutCouponInput"
                  placeholder="Please Enter Coupon Code"
                  className={classes.NrmlSignUpTextInput}
                  value={couponCode}
                  onChange={(e) => {
                    handleCouponCodeChange(e);
                  }}
                  error={couponError}
                  helperText={
                    couponError ? "Please Enter a Valid Coupon Code" : null
                  }
                />
              )}
            </div>
            {haveCouponCode && showAccessory && oneAccessory && (
              <Typography
                className={`${classes.Section2formLable} ${classes.oneAccessory}`}
              >
                <span>
                  Rs. 1000 Worth of accessories has been added to your booking
                </span>
                <SuccessGreenChecked />
              </Typography>
            )}
          </Col>
          <Col md={12} className={classes.InputContainer}>
            <Typography className={`mb-2 ${classes.Section2formLable}`}>
              Please verify you are a human
            </Typography>
            <div className={classes.CaptchaInputContainer}>
              <Typography>{`${number1} + ${number2} =`}</Typography>
              <div>
                <TextValidator
                  id="CaptchaInput"
                  placeholder="Please Enter Captcha Here"
                  className={classes.NrmlSignUpTextInput}
                  value={enteredCaptcha}
                  fullWidth
                  onChange={(e) => {
                    setEnteredCaptcha(e.target.value);
                  }}
                  inputProps={{ maxLength: 5 }}
                  validators={["required"]} // Add this line
                  errorMessages={["Captcha is required"]}
                />
              </div>
            </div>
          </Col>
          <Col md={12} className={classes.InputContainer}>
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
              <Typography className={`${classes.Section2formLable}`}>
                I agree to the{" "}
                <a href="/terms-condition" onClick={handleClickTerms}>
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/policy" onClick={handleClickTerms}>
                  Privacy Policy
                </a>
              </Typography>
            </div>
          </Col>
        </Row>
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
      {errorAlert && defaultError && (
        <AlertBox type="error" message={defaultError} stateName={CloseAlert} />
      )}
      {/* <BikePayment /> */}
    </div>
  );
};

export default BookNowSignupForm;

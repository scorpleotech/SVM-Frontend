import React, { useEffect, useState } from "react";
import classes from "./demoDrive.module.css";
import { Row, Col } from "react-bootstrap";
import {
  Typography,
  Card,
  Button,
  InputAdornment,
  ListItemText,
  TextField,
  MenuItem,
  Select,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import dayjs from "dayjs";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { FaArrowRight } from "react-icons/fa6";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import { DemoPageImageArray } from "../../Utils/dummyConstants";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { IoCalendarOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { debounce } from "lodash";
import CategorySlider from "../../Components/CategorySlider";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import {
  getCategoriesList,
  getStoreList,
  submitTestDrive,
} from "../../Redux/Actions/demoDriveActions";
import AlertBox from "../../Components/AlertBox";
import { Alphabetic, Numeric } from "../../Utils/commonFunctions";
import { useNavigate } from "react-router-dom";
import SuccessModel from "../Booknow/successModal";
import {
  getNewCityList,
  getNewStateList,
} from "../../Redux/Actions/otherActions";

const Section2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [date, setDate] = useState();
  const [dateError, setDateError] = useState(false);
  const [time, setTime] = useState();
  const [timeError, setTimeError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedState, setSelectedState] = useState("select");
  const [stateError, setStateError] = useState(false);
  const [city, setCity] = useState(null);
  const [cityError, setCityError] = useState(false);
  const [dealerHub, setDealerHub] = useState("select");
  const [dealerHubError, setDealerHubError] = useState(false);
  const [acceptTearms, setAcceptTearms] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [defaulErrorAlert, setdefaultErrorAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [defaultCustomErrorMessage, setDefaultCustomErrorMessage] =
    useState("");
  const { error, success, storeList, categoryList } = useSelector(
    (state) => state.demoDriveDatas
  );
  const { oneAccessory, allStates, allCity } = useSelector(
    (state) => state.otherDatas
  );
  const [selectedType, setSelectedType] = useState([categoryList[0]?._id]);
  const [newStoreList, setNewStoreList] = useState([]);

  const handleResetState = () => {
    setSelectedState("select");
    setCity(null);
    setDealerHub("select");
    setDate(null);
    setTime(null);
    setName("");
    setEmail("");
    setMobile("");
    setAcceptTearms(false);
  };

  const closeModal = () => {
    setSuccessMessage(false);
    handleResetState();
  };

  const CloseAlert = () => {
    setErrorAlert(false);
    setSuccessAlert(false);
    setdefaultErrorAlert(false);
    setDefaultCustomErrorMessage("");
  };

  const handleSubmit = () => {
    if (selectedState === "select") {
      setStateError(true);
    }
    if (city === "select") {
      setCityError(true);
    }
    if (dealerHub === "select") {
      setDealerHubError(true);
    }

    if (date === null || date === undefined) {
      setDateError(true);
    }
    if (time === null || time === undefined) {
      setTimeError(true);
    }
    if (selectedType.length === 0) {
      setdefaultErrorAlert(true);
      setDefaultCustomErrorMessage("Please select atleast one type");
    }
    if (
      selectedType.length !== 0 &&
      selectedState !== "select" &&
      city !== "select" &&
      dealerHub !== "select" &&
      date !== null &&
      date !== undefined &&
      time !== null &&
      time !== undefined
    ) {
      console.log(
        `Thank you for booking, your Demo Drive is Scheduled at ${dayjs(
          date.$d
        ).format("DD/MM/YYYY")} ${dayjs(time.$d).format("hh:mm A")}`
      );
      const userEntry = {
        name: name,
        email: email,
        phone: mobile,
        state: selectedState,
        city: city,
        dealer_name: dealerHub,
        booking_date: date,
        booking_time: time,
        model: selectedType[0],
      };
      console.log(userEntry);
      // dispatch(pageLoader(true));
      dispatch(submitTestDrive(setErrorAlert, setSuccessMessage, userEntry));
      // setSuccessMessage(true);
      // handleResetState();
    }
  };

  const handleChangeDate = (newValue) => {
    setDateError(false);
    setDate(newValue);
  };

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getStoreList(setErrorAlert, "showroom", ""));
    dispatch(getCategoriesList(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);

  // useEffect(() => {
  //   if (storeList && storeList?.length > 0) {
  //     if (stateList.length === 0) {
  //       const stateArray = storeList.map((item) => {
  //         return item.state;
  //       });
  //       console.log(stateArray);
  //       const resultStateArray = stateArray.filter((value, index, self) => {
  //         return (
  //           value !== undefined && value !== "" && self.indexOf(value) === index
  //         );
  //       });
  //       console.log(resultStateArray);
  //       setStateList(resultStateArray);
  //     }
  //     if (selectedState !== "select") {
  //       console.log(selectedState);
  //       const cityArray = storeList.map((item) => {
  //         if (item.state.toLowerCase() === selectedState.toLowerCase()) {
  //           return item.city;
  //         }
  //       });
  //       console.log(cityArray);
  //       const resultCityArray = cityArray.filter((value, index, self) => {
  //         return (
  //           value !== undefined && value !== "" && self.indexOf(value) === index
  //         );
  //       });
  //       console.log(resultCityArray);
  //       setCityList(resultCityArray);
  //     }
  //     if (selectedState !== "select" && city !== "select") {
  //     }
  //   }
  // }, [storeList, selectedState]);

  const handleChangeTime = (newValue) => {
    // console.log(newValue);
    setTimeError(false);
    setTime(newValue);
  };

  const handleChangeCheckbox = (value) => {
    setSelectedType([value]);
  };

  const renderCategoryCard = () => {
    if (DemoPageImageArray.length > 0) {
      const ImageBanners = categoryList.map((item, index) => {
        return (
          <Card
            className={classes.section2ImageCard}
            onClick={() => handleChangeCheckbox(item._id)}
          >
            <img
              src={`${process.env.REACT_APP_IMAGE_URL}${item?.image}`}
              alt="elite electric bike demo ride"
              className={classes.section2CardBike}
            />
            <div className={classes.CardBtnContainer}>
              <Typography className={classes.BikeCardHeader}>
                {item.title}
              </Typography>
              <div className="position-relative">
                <span className={classes.Section2BtnIcon}>
                  <FaArrowRight />
                </span>
                <Button
                  variant="outlined"
                  className={`${classes.Section2Btn}`}
                  onClick={() => navigate(`/prana`)}
                >
                  <span>Know More</span>
                </Button>
              </div>
            </div>
            {/* <Checkbox
              icon={<CircleChecked />}
              checkedIcon={<CircleCheckedFilled />}
              checked={acceptTearms}
              className={`${classes.AcceptTermCheckbox} ${
                acceptTearms && classes.checkedAccept
              }`}
              onChange={() => setAcceptTearms(!acceptTearms)}
            /> */}
            <Checkbox
              icon={<CircleChecked />}
              checkedIcon={<CircleCheckedFilled />}
              checked={selectedType.includes(item._id)}
              className={`${classes.CardCheckbox} ${
                selectedType.includes(item._id)
                  ? classes.CardCheckboxChecked
                  : ""
              }`}
            />
          </Card>
        );
      });
      return ImageBanners;
    } else {
      return [];
    }
  };

  const handleChangeState = (event, val) => {
    setSelectedState(val);
    setCity(null);
    setStateError(false);
    setDealerHub("select");
  };

  const handleCityChange = (event, val) => {
    setCity(val);
    setDealerHub("select");
    setCityError(false);
  };

  const handleDealerHubChange = (event) => {
    setDealerHub(event.target.value);
    setDealerHubError(false);
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

  return (
    <div className={classes.section2MainContainer}>
      {/* <Typography
        className={`${classes.DemoFloatingText1} ${classes.DemoFloatingText2}`}
      >
        DRIVE
      </Typography> */}
      <Typography className={classes.section2HeaderText}>
        Select Model
      </Typography>
      <ValidatorForm
        useref="form"
        onSubmit={handleSubmit}
        className={classes.formInputContainer}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <div className={classes.ImageCardContainer}>
            
          </div> */}
          <div className={classes.ImageSliderCardContainer}>
            <CategorySlider
              renderFunction={renderCategoryCard}
              length={categoryList.length}
            />
          </div>
          <Row className={classes.Section2formRow1}>
            {/* <Col md={4} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Pincode
              </Typography>
              <TextValidator
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                id="pincodeInput"
                placeholder=""
                className={classes.TextInput}
                value={pincode}
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <DemoLocationIcon2 />
                    </InputAdornment>
                  ),
                }}
                validators={["required"]} // Add this line
                errorMessages={["Pincode is required"]}
              />
            </Col> */}
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Date
              </Typography>
              <DatePicker
                className={`${classes.datePickerInput} ${
                  dateError ? classes.errorBorder : ""
                }`}
                disablePast
                slotProps={{
                  textField: {
                    helperText: dateError ? "Date is Required" : "",
                    style: { color: dateError ? "red" : "inherit" },
                  },
                }}
                slots={{
                  openPickerIcon: IoCalendarOutline,
                }}
                value={date}
                onChange={handleChangeDate}
                required
              />
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Time
              </Typography>
              <TimePicker
                className={`${classes.datePickerInput} ${
                  timeError ? classes.errorBorder : ""
                }`}
                slotProps={{
                  textField: {
                    helperText: timeError ? "Time is Required" : "",
                  },
                }}
                slots={{
                  openPickerIcon: BsClock,
                }}
                value={time}
                onChange={handleChangeTime}
                required
                error={timeError}
                // helperText={timeError ? "Time is Required" : ""}
              />
            </Col>
          </Row>
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
                State
              </Typography>
              {/* {allStates && allStates.length > 0 && (
                <TextField
                  fullWidth
                  value={selectedState}
                  sx={{
                    "& legend": {
                      display: "none",
                    },
                    "& fieldset": {
                      top: 0,
                    },
                    textAlign: "left",
                    whiteSpace: "normal", // Add this line to ensure normal white space
                  }}
                  select
                  onChange={handleChangeState}
                  className={
                    selectedState === "select"
                      ? `${classes.TextInput1} ${classes.defaultMenuItem}`
                      : classes.TextInput1
                  }
                  // renderValue={(selected) => {
                  //   return (
                  //     selected?.charAt(0).toUpperCase() +
                  //     selected?.slice(1).toLowerCase().replaceAll("_", " ")
                  //   );
                  // }}
                  displayEmpty
                  InputLabelProps={{
                    shrink: false,
                  }}
                  error={stateError}
                  helperText={stateError ? "Please Select State" : null}
                >
                  <MenuItem disabled value="select" style={{ display: "none" }}>
                    <em>{""}</em>
                  </MenuItem>
                  {allStates.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={{ whiteSpace: "normal" }}
                      className="all-listing"
                    >
                      <ListItemText
                        // primary={
                        //   name?.charAt(0).toUpperCase() +
                        //   name?.slice(1).toLowerCase().replaceAll("_", " ")
                        // }
                        primary={name}
                        className={classes.ListItemText}
                      />
                    </MenuItem>
                  ))}
                </TextField>
              )} */}
              <Autocomplete
                id="free-solo-demo"
                // freeSolo
                value={selectedState}
                onChange={(e, val) => handleChangeState(e, val)}
                options={allStates.map((option) => option)}
                renderInput={(params) => (
                  <TextField
                    // label="City"
                    // placeholder="Select City"
                    // className="autocomplete-book-demo"
                    className={`${classes.NrmlTextInput} autocomplete-book-demo`}
                    {...params}
                    error={cityError}
                    helperText={cityError && "This field is required"}
                  />
                )}
              />
              {/* <Select
                fullWidth
                value={selectedState}
                sx={{
                  "& legend": {
                    display: "none",
                  },
                  "& fieldset": {
                    top: 0,
                  },
                  textAlign: "left",
                  whiteSpace: "normal", // Add this line to ensure normal white space
                }}
                select
                onChange={handleChangeState}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select> */}
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                City
              </Typography>
              <Autocomplete
                id="free-solo-demo"
                // freeSolo
                value={city}
                onChange={(e, val) => handleCityChange(e, val)}
                options={allCity.map((option) => option.city)}
                renderInput={(params) => (
                  <TextField
                    // label="City"
                    // placeholder="Select City"
                    // className="autocomplete-book-demo"
                    className={`${classes.NrmlTextInput} autocomplete-book-demo`}
                    {...params}
                    error={cityError}
                    helperText={cityError && "This field is required"}
                  />
                )}
              />
              {/* <TextField
                fullWidth
                value={city}
                sx={{
                  "& legend": {
                    display: "none",
                  },
                  "& fieldset": {
                    top: 0,
                  },
                  textAlign: "left",
                }}
                select
                size="small"
                onChange={handleCityChange}
                // input={<OutlinedInput label="Tag" />}
                className={
                  city === "select"
                    ? `${classes.TextInput1} ${classes.defaultMenuItem}`
                    : classes.TextInput1
                }
                renderValue={(selected) => {
                  return (
                    selected?.charAt(0).toUpperCase() +
                    selected?.slice(1).toLowerCase().replaceAll("_", " ")
                  );
                }}
                displayEmpty // Add displayEmpty property
                InputLabelProps={{
                  shrink: false, // Add shrink property
                }}
                error={cityError}
                helperText={cityError ? "Please Select City" : null}
              >
                <MenuItem disabled value="select" style={{ display: "none" }}>
                  <em>{""}</em>
                </MenuItem>

                {cityList &&
                  cityList.length > 0 &&
                  cityList.map((name) => (
                    <MenuItem key={name} value={name}>
                      <ListItemText
                        primary={
                          name?.charAt(0).toUpperCase() +
                          name?.slice(1).toLowerCase().replaceAll("_", " ")
                        }
                        className={classes.ListItemText}
                      />
                    </MenuItem>
                  ))}
              </TextField> */}
            </Col>
            <Col md={6} className={classes.InputContainer}>
              <Typography className={`mb-2 ${classes.Section2formLable}`}>
                Dealer HUB
              </Typography>
              <TextField
                fullWidth
                value={dealerHub}
                sx={{
                  "& legend": {
                    display: "none",
                  },
                  "& fieldset": {
                    top: 0,
                  },
                  textAlign: "left",
                }}
                select
                size="small"
                onChange={handleDealerHubChange}
                // input={<OutlinedInput label="Tag" />}
                className={
                  city === "select"
                    ? `${classes.TextInput1} ${classes.defaultMenuItem}`
                    : classes.TextInput1
                }
                // renderValue={(selected) => {
                //   return (
                //     selected?.charAt(0)?.toUpperCase() +
                //     selected?.slice(1)?.toLowerCase().replaceAll("_", " ")
                //   );
                // }}
                displayEmpty // Add displayEmpty property
                InputLabelProps={{
                  shrink: false, // Add shrink property
                }}
                error={dealerHubError}
                helperText={dealerHubError ? "Please Select Dealers Hub" : null}
              >
                <MenuItem disabled value="select" className="position-relative">
                  <em>{""}</em>
                </MenuItem>

                {newStoreList &&
                  newStoreList.length > 0 &&
                  // storeList
                  // .filter(
                  //   (item) =>
                  //     item.state?.toLowerCase() ===
                  //       selectedState?.toLowerCase() &&
                  //     item.city?.toLowerCase() === city?.toLowerCase()
                  // )
                  newStoreList.map((item, index) => (
                    <MenuItem key={index} value={item._id}>
                      <ListItemText
                        primary={item.name}
                        className={classes.ListItemText}
                      />
                    </MenuItem>
                  ))}
              </TextField>
            </Col>
          </Row>
          <div className={classes.AcceptTermContainer}>
            <div className="d-flex align-items-center">
              <div className={classes.AcceptTermCheckboxContainer}>
                <Checkbox
                  icon={<CircleChecked />}
                  checkedIcon={<CircleCheckedFilled />}
                  checked={acceptTearms}
                  // disabled
                  className={`${classes.AcceptTermCheckbox} ${
                    acceptTearms && classes.checkedAccept
                  }`}
                  onChange={() => setAcceptTearms(!acceptTearms)}
                />
              </div>
              <Typography className={classes.AcceptTermText}>
                Make sure you entered information with which you want to
                purchase & register your SVM Prana Motorcycle.All payment
                related information and other important updates will be shared
                on those contact details only
              </Typography>
            </div>
            <Button
              variant="outlined"
              disabled={!acceptTearms}
              sx={{
                "&.Mui-disabled": {
                  opacity: 0.3,
                },
              }}
              type="submit"
              className={classes.bookDemoBtn}
            >
              Book Demo Drive
            </Button>
          </div>
        </LocalizationProvider>
      </ValidatorForm>
      {errorAlert && error ? (
        <AlertBox type="error" message={error} stateName={CloseAlert} />
      ) : defaulErrorAlert && defaultCustomErrorMessage ? (
        <AlertBox
          type="error"
          message={defaultCustomErrorMessage}
          stateName={CloseAlert}
        />
      ) : null}

      {successMessage && (
        <SuccessModel
          modalClose={closeModal}
          heading={"Booked Successfully"}
          subheading={`Thank you for booking, your Demo Ride is Scheduled at ${dayjs(
            date.$d
          ).format("DD/MM/YYYY")} ${dayjs(time.$d).format("hh:mm A")}`}
        />
      )}
    </div>
  );
};

export default Section2;

import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import classes from "./others.module.css";
import {
  Autocomplete,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Row, Col } from "react-bootstrap";
import { Alphabetic, Numeric } from "../../Utils/commonFunctions";
import { useDispatch, useSelector } from "react-redux";
import {
  SubmitBecomeaDealerForm,
  pageLoader,
} from "../../Redux/Actions/userActions";
import AlertBox from "../../Components/AlertBox";
import SuccessModel from "../Booknow/successModal";
import { useNavigate } from "react-router-dom";
import {
  getNewCityList,
  getNewStateList,
} from "../../Redux/Actions/otherActions";

const BecomeLeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState(null);
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [otherState, setOtherState] = useState("");
  const [placeOfDealership, setPlaceOfDealership] = useState("");
  const [existBusiness, setExistBusiness] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [noOfYears, setNoOfYears] = useState("");
  const [annualAvarage, setAnnualAverage] = useState("");
  const [averageMonthlyServices, setAverageMonthlyServices] = useState("");
  const [averageParts, setAverageParts] = useState("");
  const [nameOfBusiness, setNameOfBusiness] = useState("");
  const [placeOfBusinessUnit, setPlaceOfBusinessUnit] = useState("");
  const [products, setProducts] = useState("");
  const [existLine, setExistLine] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [SourceOfInvestment, setSourceOfInvestment] = useState("");
  const [percentageOfContribution, setPercentageOfContribution] = useState("");
  const [levelOfInterest, setLevelOfInterest] = useState("");
  const [whyWantDealerShip, setWhyWantDealerShip] = useState("");
  const [willBeSuccessful, setWillBeSuccessful] = useState("");
  const [howSoonToSetup, setHowSoonToSetup] = useState("");
  const [readyToInvest, setReadyToInvest] = useState("");
  const [otherSuggestions, setOtherSuggestions] = useState("");
  const [cityError, setCityError] = useState(false);
  const { error, success } = useSelector((state) => state.userLogin);
  const { oneAccessory, allStates, allCity } = useSelector(
    (state) => state.otherDatas
  );

  const handleBtnClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      handleSubmit();
      setIsClicked(false);
    }, 1000);
  };

  const CloseAlert = () => {
    setErrorAlert(false);
    if (successModal) {
      setSuccessModal(false);
      navigate("/");
    }
  };

  const handleSubmit = () => {
    if (district === null || !district) {
      setCityError(true);
    } else if (state === null || !state) {
      setStateError(true);
    } else {
      const userEntry = {
        name: name,
        phone: mobile,
        email: email,
        gender: gender,
        age: age,
        education_details: education,
        address: address,
        district: district,
        state: state ? state : otherState,
        dealership_place: placeOfDealership,
        existing_business: existBusiness,
        nature_of_business: natureOfBusiness,
        years_in_automotive_business: noOfYears,
        annual_average_sales_volume: annualAvarage,
        average_monthly_service_reporting: averageMonthlyServices,
        average_parts_in_business: averageParts,
        investment_amount: investmentAmount,
        source_of_investment: SourceOfInvestment,
        existing_business_name: nameOfBusiness,
        place_of_business_unit: placeOfBusinessUnit,
        products_dealing_with: products,
        years_in_current_business: noOfYears,
        // annual_turnover: annual_turnover,
        existing_line_of_business: existLine,
        percent_contribution_for_capital: percentageOfContribution,
        level_of_interest_in_starting_new_business: levelOfInterest,
        explain_why_dealership: whyWantDealerShip,
        why_successful: willBeSuccessful,
        setup_dealership_timing: howSoonToSetup,
        ready_to_invest: readyToInvest,
        suggestions_comments: otherSuggestions,
      };
      dispatch(
        SubmitBecomeaDealerForm(setErrorAlert, setSuccessModal, userEntry)
      );
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

  return (
    <>
      <Helmet>
        <title>Srivaru Motors | Prana | E-bike Dealers</title>
        <meta
          property="og:title"
          content="Srivaru Motors | Prana | E-bike Dealers"
        />
        <meta
          property="og:description"
          content="Looking for authorized electric bike dealers? Then check out Srivaru Motors."
        />
        <meta
          name="keywords"
          content="Electric Bike Dealership, Prana E Bike Dealership"
        />
      </Helmet>
      <div>
        <Typography className={classes.termsHeading} variant="h1">
          Become a Dealer
        </Typography>
        <Typography className={classes.subHederTextBecomeDealer}>
          Srivaru Motors implements a meticulous and refined approach to
          Dealership allocation. The selection of dealers is meticulously
          conducted, incorporating a diverse range of criteria, including a
          face-to-face interaction with the prospective applicant. Only upon the
          conclusion of the thorough evaluation and selection procedure are
          subsequent formalities deliberated upon.Srivaru Motors implements a
          meticulous and refined approach to Dealership allocation. The
          selection of dealers is meticulously conducted, incorporating a
          diverse range of criteria, including a face-to-face interaction with
          the prospective applicant. Only upon the conclusion of the thorough
          evaluation and selection procedure are subsequent formalities
          deliberated upon. (The Registration will take approximately 7 minutes
          to complete)
        </Typography>
        <ValidatorForm
          useref="form"
          onSubmit={handleSubmit}
          className={classes.formInputContainer}
        >
          <Typography className={classes.dealerSubheading} variant="h5">
            Personal Details
          </Typography>
          <Row className={classes.dealerformInputRow}>
            <Col md={4}>
              <TextValidator
                label="Name"
                name="name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                className={classes.leaderFormInput}
                onKeyPress={(event) => {
                  Alphabetic(event);
                }}
                validators={["required"]}
                errorMessages={["This field is required"]}
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
                className={classes.leaderFormInput}
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
              <TextValidator
                label="Email Id"
                name="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                className={classes.leaderFormInput}
                validators={["required", "isEmail"]}
                errorMessages={[
                  "This field is required",
                  "Enter a valid Email",
                ]}
              />
            </Col>
            <Col md={4}>
              <TextValidator
                label="Gender"
                name="gender"
                fullWidth
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                variant="outlined"
                select
                className={classes.leaderFormInput}
                validators={["required"]}
                errorMessages={["This field is required"]}
              >
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>
                <MenuItem value="PREFER_NOT_TO_SAY">Prefer not to say</MenuItem>
              </TextValidator>
            </Col>
            <Col md={4}>
              <TextValidator
                label="Age"
                name="age"
                fullWidth
                value={age}
                onChange={(e) => setAge(e.target.value)}
                variant="outlined"
                onKeyPress={(event) => {
                  Numeric(event);
                }}
                className={classes.leaderFormInput}
                validators={["required"]}
                errorMessages={["This field is required"]}
              />
            </Col>
            <Col md={4}>
              <TextValidator
                label="Educational Details"
                name="education"
                fullWidth
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                variant="outlined"
                className={classes.leaderFormInput}
                validators={["required"]}
                errorMessages={["This field is required"]}
              />
            </Col>
            <Col md={4}>
              <TextValidator
                label="Address"
                name="address"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                variant="outlined"
                className={classes.leaderFormInput}
                validators={["required"]}
                errorMessages={["This field is required"]}
              />
            </Col>
            <Col md={4}>
              <Autocomplete
                id="free-solo-demo"
                // freeSolo
                value={state}
                onChange={(event, value) => {
                  setStateError(false);
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
              {/* <TextValidator
              label="State"
              name="state"
              fullWidth
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setDistrict(null)
              }}
              variant="outlined"
              select
              className={classes.leaderFormInput}
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
            </Col>
            <Col md={4}>
              {/* <TextValidator
              label="District"
              name="district"
              fullWidth
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              variant="outlined"
              className={classes.leaderFormInput}
              validators={["required"]}
              errorMessages={["This field is required"]}
            /> */}
              <Autocomplete
                id="free-solo-demo"
                // freeSolo
                value={district}
                onChange={(event, value) => {
                  setCityError(false);
                  setDistrict(value);
                }}
                options={allCity.map((option) => option.city)}
                renderInput={(params) => (
                  <TextValidator
                    label="City"
                    // placeholder="Select City"
                    className="city-autocomplete-agent"
                    {...params}
                    error={cityError}
                    value={district}
                    helperText={cityError && "City is required"}
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                  />
                )}
              />
            </Col>
          </Row>
          {state && (
            <>
              <Typography className={classes.dealerSubheading} variant="h5">
                Business Details
              </Typography>
              <Row className={classes.dealerformInputRow}>
                {state && state === "others" && (
                  <Col md={4}>
                    <TextValidator
                      label="Enter Your State Name"
                      name="otherState"
                      fullWidth
                      value={otherState}
                      onChange={(e) => setOtherState(e.target.value)}
                      variant="outlined"
                      className={classes.leaderFormInput}
                      validators={["required"]}
                      errorMessages={["This field is required"]}
                    />
                  </Col>
                )}
                <Col md={4}>
                  <TextValidator
                    label="Place of Dealership"
                    name="placeOfDealership"
                    fullWidth
                    value={placeOfDealership}
                    onChange={(e) => setPlaceOfDealership(e.target.value)}
                    variant="outlined"
                    className={classes.leaderFormInput}
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                  />
                </Col>
                <Col md={4}>
                  <TextValidator
                    label="Existing Business"
                    name="existingBusiness"
                    fullWidth
                    value={existBusiness}
                    onChange={(e) => {
                      setExistBusiness(e.target.value);
                      setNatureOfBusiness("");
                    }}
                    variant="outlined"
                    select
                    className={classes.leaderFormInput}
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                  >
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </TextValidator>
                </Col>
                {existBusiness === "yes" && (
                  <Col md={4}>
                    <TextValidator
                      label="Nauture of Business"
                      name="natureOfBusiness"
                      fullWidth
                      value={natureOfBusiness}
                      onChange={(e) => setNatureOfBusiness(e.target.value)}
                      variant="outlined"
                      select
                      className={classes.leaderFormInput}
                      validators={["required"]}
                      errorMessages={["This field is required"]}
                    >
                      <MenuItem value="automotive_business">
                        Automotive Business
                      </MenuItem>
                      <MenuItem value="non_automotive_business">
                        Non Automotive Business
                      </MenuItem>
                    </TextValidator>
                  </Col>
                )}
                {natureOfBusiness &&
                natureOfBusiness === "automotive_business" ? (
                  <>
                    <Col md={4}>
                      <TextValidator
                        label="No of Years in Automotive Business"
                        name="noOfYears"
                        fullWidth
                        value={noOfYears}
                        onChange={(e) => setNoOfYears(e.target.value)}
                        variant="outlined"
                        className={classes.leaderFormInput}
                      />
                    </Col>
                    <Col md={4}>
                      <TextValidator
                        label="Annual Average Sales Volume"
                        name="annualAvarage"
                        fullWidth
                        value={annualAvarage}
                        onChange={(e) => setAnnualAverage(e.target.value)}
                        variant="outlined"
                        className={classes.leaderFormInput}
                        onKeyPress={(e) => {
                          Numeric(e);
                        }}
                        validators={["required"]}
                        errorMessages={["This field is required"]}
                        helperText="Please Enter in Numbers"
                      />
                    </Col>
                    <Col md={4}>
                      <TextValidator
                        label="Average Monthly Service Reporting"
                        name="averageMonthlyService"
                        fullWidth
                        value={averageMonthlyServices}
                        onChange={(e) =>
                          setAverageMonthlyServices(e.target.value)
                        }
                        variant="outlined"
                        className={classes.leaderFormInput}
                        validators={["required"]}
                        onKeyPress={(e) => {
                          Numeric(e);
                        }}
                        errorMessages={["This field is required"]}
                        helperText="Please Enter in Numbers"
                      />
                    </Col>
                    <Col md={4}>
                      <TextValidator
                        label="Average Parts in Business"
                        name="avarageParts"
                        fullWidth
                        value={averageParts}
                        onChange={(e) => setAverageParts(e.target.value)}
                        variant="outlined"
                        className={classes.leaderFormInput}
                        validators={["required"]}
                        errorMessages={["This field is required"]}
                        helperText="Please Enter in Lakhs"
                      />
                    </Col>
                  </>
                ) : (
                  natureOfBusiness &&
                  natureOfBusiness === "non_automotive_business" && (
                    <>
                      <Col md={4}>
                        <TextValidator
                          label="Existing Business & Name of Business Unit"
                          name="nameOfBusinessUnit"
                          fullWidth
                          value={nameOfBusiness}
                          onChange={(e) => setNameOfBusiness(e.target.value)}
                          variant="outlined"
                          className={classes.leaderFormInput}
                        />
                      </Col>
                      <Col md={4}>
                        <TextValidator
                          label="Place of Business Unit"
                          name="placeOfBusinessUnit"
                          fullWidth
                          value={placeOfBusinessUnit}
                          onChange={(e) =>
                            setPlaceOfBusinessUnit(e.target.value)
                          }
                          variant="outlined"
                          className={classes.leaderFormInput}
                        />
                      </Col>
                      <Col md={4}>
                        <TextValidator
                          label="Products Your Dealing With"
                          name="productsDealingWith"
                          fullWidth
                          value={products}
                          onChange={(e) => setProducts(e.target.value)}
                          variant="outlined"
                          className={classes.leaderFormInput}
                        />
                      </Col>
                      <Col md={4}>
                        <TextValidator
                          label="No of Years & Annual Turnover"
                          name="noOfYears"
                          fullWidth
                          value={noOfYears}
                          onChange={(e) => setNoOfYears(e.target.value)}
                          variant="outlined"
                          className={classes.leaderFormInput}
                          helperText="Years in Numbers & turnover in lakhs"
                        />
                      </Col>
                      <Col md={4}>
                        <TextValidator
                          label="Existing Line of Business"
                          name="existingLineOfBusiness"
                          fullWidth
                          value={existLine}
                          onChange={(e) => setExistLine(e.target.value)}
                          variant="outlined"
                          className={classes.leaderFormInput}
                        />
                      </Col>
                    </>
                  )
                )}
              </Row>
              {existBusiness && (
                <>
                  <Typography className={classes.dealerSubheading} variant="h5">
                    Investment Details
                  </Typography>
                  <Row className={classes.dealerformInputRow}>
                    <Col md={4}>
                      <TextValidator
                        label="Investment Amount"
                        name="investmentAmount"
                        fullWidth
                        value={investmentAmount}
                        onChange={(e) => {
                          setInvestmentAmount(e.target.value);
                        }}
                        variant="outlined"
                        select
                        className={classes.leaderFormInput}
                        validators={["required"]}
                        errorMessages={["This field is required"]}
                      >
                        <MenuItem value="non_metros">
                          NON-METROS (40 to 50 lakhs)
                        </MenuItem>
                        <MenuItem value="metros">
                          METROS (50 to 60 lakhs)
                        </MenuItem>
                      </TextValidator>
                    </Col>
                    <Col md={4}>
                      <TextValidator
                        label="Source of Investment"
                        name="source"
                        fullWidth
                        value={SourceOfInvestment}
                        onChange={(e) => {
                          setSourceOfInvestment(e.target.value);
                        }}
                        variant="outlined"
                        select
                        className={classes.leaderFormInput}
                        validators={["required"]}
                        errorMessages={["This field is required"]}
                      >
                        <MenuItem value="loan">Loan</MenuItem>
                        <MenuItem value="own_funds">Own Funds</MenuItem>
                        <MenuItem value="combined">Combined</MenuItem>
                      </TextValidator>
                    </Col>
                    {SourceOfInvestment &&
                      SourceOfInvestment !== "own_funds" && (
                        <Col md={4}>
                          <TextValidator
                            label="% of Contribution for capital"
                            name="percentageOfContribution"
                            fullWidth
                            value={percentageOfContribution}
                            onChange={(e) =>
                              setPercentageOfContribution(e.target.value)
                            }
                            variant="outlined"
                            className={classes.leaderFormInput}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                          />
                        </Col>
                      )}
                    {SourceOfInvestment && (
                      <>
                        <Col md={4}>
                          <TextValidator
                            label="Your Level of Interest in starting new business"
                            name="levelOfInterest"
                            fullWidth
                            value={levelOfInterest}
                            onChange={(e) => setLevelOfInterest(e.target.value)}
                            variant="outlined"
                            className={classes.leaderFormInput}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                          />
                        </Col>
                        <Col md={4}>
                          <TextValidator
                            label="Explain why You Wanted Dealership"
                            name="whyWantDealership"
                            fullWidth
                            value={whyWantDealerShip}
                            onChange={(e) =>
                              setWhyWantDealerShip(e.target.value)
                            }
                            variant="outlined"
                            className={classes.leaderFormInput}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                          />
                        </Col>
                        <Col md={4}>
                          <TextValidator
                            label="Why Do You Think You Will Be Successful?"
                            name="whyWillBeSuccessful"
                            fullWidth
                            value={willBeSuccessful}
                            onChange={(e) =>
                              setWillBeSuccessful(e.target.value)
                            }
                            variant="outlined"
                            className={classes.leaderFormInput}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                          />
                        </Col>
                        <Col md={4}>
                          <TextValidator
                            label="How Soon You Want To Setup Dealership?"
                            name="howSoonToSetup"
                            fullWidth
                            value={howSoonToSetup}
                            onChange={(e) => setHowSoonToSetup(e.target.value)}
                            variant="outlined"
                            className={classes.leaderFormInput}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                          />
                        </Col>
                        <Col md={4}>
                          <TextValidator
                            label="Are You Ready To Invest?"
                            name="readyToInvest"
                            fullWidth
                            value={readyToInvest}
                            onChange={(e) => {
                              setReadyToInvest(e.target.value);
                            }}
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
                        <Col md={4}>
                          <TextValidator
                            label="Any Other Suggestions / Comments"
                            name="otherSuggestions"
                            fullWidth
                            value={otherSuggestions}
                            onChange={(e) =>
                              setOtherSuggestions(e.target.value)
                            }
                            variant="outlined"
                            className={classes.leaderFormInput}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                          />
                        </Col>
                      </>
                    )}
                  </Row>
                </>
              )}
            </>
          )}
          <div className="text-center">
            <Button
              type="submit"
              className={`mt-3 ${classes.enquiryBtn}`}
              variant="outlined"
            >
              Submit
            </Button>
          </div>
        </ValidatorForm>
        {errorAlert && error && (
          <AlertBox type="error" message={error} stateName={CloseAlert} />
        )}
        {successModal && (
          <SuccessModel
            modalClose={CloseAlert}
            heading={"Request Submitted"}
            subheading={`Thank you! Your request has been submitted successfully `}
          />
        )}
      </div>
    </>
  );
};

export default BecomeLeader;

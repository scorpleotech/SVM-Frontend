import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import classes from "./others.module.css";
import styles from "../Prana/prana.module.css";
import {
  MenuItem,
  TextField,
  Typography,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Card,
} from "@mui/material";
import ReactApexChart from "react-apexcharts";
import {
  GetDataFromBikes,
  bikeDetails,
  getBarDataFromBikes,
} from "../../Utils/dummyConstants";
import { Col, Row } from "react-bootstrap";
import { pageLoader } from "../../Redux/Actions/userActions";
import { getTcoList } from "../../Redux/Actions/otherActions";
import { useDispatch, useSelector } from "react-redux";
import { PrettoSlider } from "../../Components/designedSlider";

const TcoPage = () => {
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const [svmBikes, setSvmBikes] = useState("");
  const [otherBikes, setOtherBikes] = useState("");
  const [kilometers, setKilometers] = useState(15);
  const [viewType, setViewType] = useState("0");
  const [FirstGraphoptions, setFirstGraphoptions] = useState();
  const [secondGraphoptions, setSecondGraphoptions] = useState();
  const [savingsDetails, setSavingsDetails] = useState({
    totalSavings: 0,
    fuelSavings: 0,
    serviceCostSavings: 0,
  });
  const { tcoBikkes } = useSelector((state) => state.otherDatas);

  const getOptionDataFunction = async () => {
    const data = await GetDataFromBikes(svmBikes, otherBikes, kilometers);
    console.log("Option Data from Function =>", data);
    setFirstGraphoptions(data);
  };

  const getBarDataDetails = async () => {
    const data = await getBarDataFromBikes(svmBikes, otherBikes, kilometers);
    console.log("Option Data from Function =>", data);
    setSecondGraphoptions(data);
  };

  useEffect(() => {
    if (svmBikes !== "" && otherBikes !== "") {
      getOptionDataFunction();
      getSavingsCalculations();
      getBarDataDetails();
      // setFirstGraphoptions(data);
    }
  }, [svmBikes, otherBikes, kilometers]);

  const getSavingsCalculations = () => {
    const totalSavings =
      otherBikes.operatingCosts.totalTCO - svmBikes.operatingCosts.totalTCO;
    const fuelSavings =
      otherBikes.operatingCosts.fuel * 3 - svmBikes.operatingCosts.fuel * 3;
    const serviceCostSavings =
      otherBikes.operatingCosts.maintenance * 3 -
      svmBikes.operatingCosts.maintenance * 3;
    setSavingsDetails({
      totalSavings: Math.round(totalSavings),
      fuelSavings: Math.round(fuelSavings),
      serviceCostSavings: Math.round(serviceCostSavings),
    });
  };

  const handleChange = (event, newValue) => {
    setKilometers(newValue);
  };

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getTcoList(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);

  return (
    <>
    <Helmet>
    <title>Srivaru Motors | TCO | Total Cost of Ownership</title>
       <meta property="og:title" content="Srivaru Motors | TCO | Total Cost of Ownership" />
       <meta property="og:description" content="Calculate the Total Cost of Ownership by clicking on the above link which takes you to the Srivaru Motor's calculator." />
       <meta
         name="keywords"
         content="Total Cost of Ownership"
       />
       </Helmet>
    <div>
      <Typography className={classes.termsHeading} variant="h3">
        TCO (Total Cost of Ownership)
      </Typography>
      <div className={classes.bodyContent}>
        <Row className={classes.bodyContentRow}>
          <Col md={6}>
            {" "}
            <TextField
              label="Svm Bikes"
              name="svmBikes"
              value={svmBikes}
              onChange={(e) => setSvmBikes(e.target.value)}
              variant="outlined"
              select
              className={`${classes.leaderFormInput} ${classes.tcoInput}`}
            >
              <MenuItem value="">Select</MenuItem>
              {tcoBikkes?.svm?.map((item) => (
                <MenuItem value={item}>{item.model}</MenuItem>
              ))}
              {/* <MenuItem value="MALE">Male</MenuItem>
            <MenuItem value="FEMALE">Female</MenuItem>
            <MenuItem value="PREFER_NOT_TO_SAY">Prefer not to say</MenuItem> */}
            </TextField>
          </Col>
          <Col md={6} className={classes.rightAlignContainer}>
            <TextField
              label="Other Bikes"
              name="otherBikes"
              value={otherBikes}
              onChange={(e) => setOtherBikes(e.target.value)}
              variant="outlined"
              select
              className={`${classes.leaderFormInput} ${classes.tcoInput}`}
            >
              <MenuItem value="">Select</MenuItem>
              {tcoBikkes?.other?.map((item) => (
                <MenuItem
                  value={item}
                >{`${item.manufacturer} ${item.model}`}</MenuItem>
              ))}
              {/* <MenuItem value="MALE">Male</MenuItem>
            <MenuItem value="FEMALE">Female</MenuItem>
            <MenuItem value="PREFER_NOT_TO_SAY">Prefer not to say</MenuItem> */}
            </TextField>
          </Col>
        </Row>
        {svmBikes && otherBikes ? (
          <div>
            <Typography className={`mt-4 mb-3 ${styles.Sectio4HeaderText}`}>
              Bike Variations
            </Typography>
            <div className={styles.section7TableContainer}>
              <Table className={styles.section7Table}>
                {/* <TableHead></TableHead> */}
                <TableBody className={styles.section7TableBody}>
                  <TableRow className={styles.TableColSpanCell}>
                    <TableCell colSpan={3}>
                      <Typography className={styles.section7CellMainText}>
                        Vehicle
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Brand
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>{svmBikes.manufacturer}</span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>{otherBikes.manufacturer}</span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Model
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>{svmBikes.model}</span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>{otherBikes.model}</span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Vehicle Class/Type
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>{svmBikes.vehicleClass}</span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>{otherBikes.vehicleClass}</span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Top Speed (KMH)
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>{svmBikes.topSpeed} KMH</span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>{otherBikes.topSpeed} KMH</span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        0-60 KMH (Sec){" "}
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>{svmBikes.acceleration} sec</span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>{otherBikes.acceleration} sec</span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Release Date
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>{svmBikes.releaseDate}</span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>{otherBikes.releaseDate}</span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={styles.TableColSpanCell}>
                    <TableCell colSpan={3}>
                      <Typography className={styles.section7CellMainText}>
                        Acquisition
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Cost
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹{svmBikes.acquisition.cost?.toLocaleString("en-IN")}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {otherBikes.acquisition.cost?.toLocaleString("en-IN")}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        GST
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹{svmBikes.acquisition.GST?.toLocaleString("en-IN")}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹{otherBikes.acquisition.GST?.toLocaleString("en-IN")}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Total Cost
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {svmBikes.acquisition.totalCost?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {otherBikes.acquisition.totalCost?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={styles.TableColSpanCell}>
                    <TableCell colSpan={3}>
                      <Typography className={styles.section7CellMainText}>
                        Financing:
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Total Cost (incl. GST)
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {svmBikes.financing.totalCostInclGst?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {otherBikes.financing.totalCostInclGst?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Down payment(20%)
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {svmBikes.financing.downPayment?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {otherBikes.financing.downPayment?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Residual
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {svmBikes.financing.residual?.toLocaleString("en-IN")}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {otherBikes.financing.residual?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Amount to finance
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {svmBikes.financing.amountToFinance?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {otherBikes.financing.amountToFinance?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Annual PMT
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {svmBikes.financing.annualPMT?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {otherBikes.financing.annualPMT?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={styles.TableColSpanCell}>
                    <TableCell colSpan={3}>
                      <Typography className={styles.section7CellMainText}>
                        Operating Costs (p.a.)
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Range/Charge or Litre
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>{svmBikes.operatingCosts.range} Kms</span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>{otherBikes.operatingCosts.range} Kms</span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Charging time (to full)
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>{svmBikes.operatingCosts.chargingTime} hrs</span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          {otherBikes.operatingCosts.chargingTime} hrs
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        KWh or L p.a. (65 kms per day)
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          {svmBikes.operatingCosts.kWhOrLitres?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          {otherBikes.operatingCosts.kWhOrLitres?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Fuel p.a.
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {svmBikes.operatingCosts.fuel?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {otherBikes.operatingCosts.fuel?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Maintenance
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {svmBikes.operatingCosts.maintenance?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {otherBikes.operatingCosts.maintenance?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Total TCO p.a. (3 years amount.)
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {svmBikes.operatingCosts.totalTCOpA?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {otherBikes.operatingCosts.totalTCOpA?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.section7column1}>
                      <Typography className={styles.section7CellMainText}>
                        Total TCO (3 years)
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={0}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {svmBikes.operatingCosts.totalTCO?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell className={styles.section7column2} key={1}>
                      <Typography className={styles.section7CellText}>
                        <span>
                          ₹
                          {otherBikes.operatingCosts.totalTCO?.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <Card className={`mt-4 mb-3 ${classes.PiechartContainer}`}>
              <Row>
                <Col md={6}>
                  <div className={classes.PiechartleftContainer}>
                    <div>
                      <TextField
                        label="viewType"
                        name="viewType"
                        fullWidth
                        value={viewType}
                        onChange={(e) => setViewType(e.target.value)}
                        variant="outlined"
                        select
                        className={`mt-3 ${classes.leaderFormInput}`}
                      >
                        <MenuItem value="0">Savings</MenuItem>
                        <MenuItem value="1">Fuel Comparison</MenuItem>
                        <MenuItem value="2">Maintenance Comparison</MenuItem>
                      </TextField>
                    </div>
                    {viewType === "1" && (
                      <div className="mt-4">
                        <Typography>
                          How far do you ride daily in Kms?
                        </Typography>
                        <PrettoSlider
                          valueLabelDisplay="auto"
                          aria-label="pretto slider"
                          defaultValue={15}
                          value={kilometers}
                          onChange={handleChange}
                          className="mt-4"
                          step={5}
                          marks
                          min={15}
                          max={100}
                        />
                      </div>
                    )}
                  </div>
                </Col>
                <Col md={6}>
                  <div className={classes.PiechartrightContainer}>
                    {viewType === "0" ? (
                      <div>
                        <Typography className={classes.firstGraphHeaderText}>
                          Your Total TCO Savings in <b>3 years</b>
                        </Typography>
                        <Typography className={classes.firstGraphSubText}>
                          ₹{" "}
                          {savingsDetails?.totalSavings?.toLocaleString(
                            "en-IN"
                          )}
                        </Typography>
                        <div className={`mt-4 ${classes.tabFlexContainer}`}>
                          <Typography className={classes.subText1}>
                            Fuel cost savings
                          </Typography>
                          <Typography className={classes.subText2}>
                            {" "}
                            ₹{" "}
                            {savingsDetails?.fuelSavings?.toLocaleString(
                              "en-IN"
                            )}
                          </Typography>
                        </div>
                        <div className={classes.tabFlexContainer}>
                          <Typography className={classes.subText1}>
                            Service cost savings
                          </Typography>
                          <Typography className={classes.subText2}>
                            {" "}
                            ₹{" "}
                            {savingsDetails?.serviceCostSavings?.toLocaleString(
                              "en-IN"
                            )}
                          </Typography>
                        </div>
                      </div>
                    ) : viewType === "1" ? (
                      <div>
                        <Typography className={classes.MainHeadig}>
                          Comparison of Fuel Charges
                        </Typography>
                        <Typography className={classes.subText1}>
                          In this Graph Comparison of <b>{svmBikes.model}</b>{" "}
                          and{" "}
                          <b>{`${otherBikes.manufacturer} ${otherBikes.model}`}</b>{" "}
                          has done below
                        </Typography>
                        {FirstGraphoptions &&
                          FirstGraphoptions?.series &&
                          FirstGraphoptions?.options && (
                            <ReactApexChart
                              className={classes.firstGraphChart}
                              options={FirstGraphoptions?.options}
                              series={FirstGraphoptions?.series}
                              type="line"
                              height={250}
                            />
                          )}
                        <div className={classes.legendContainer}>
                          <Typography className={classes.legendText}>
                            <span
                              className={classes.ColourContainer}
                              style={{ backgroundColor: "#BA9BFF" }}
                            ></span>
                            <span>Other Bikes</span>
                          </Typography>
                          <Typography className={classes.legendText}>
                            <span
                              className={classes.ColourContainer}
                              style={{ backgroundColor: "#FFC700" }}
                            ></span>
                            <span>SVM Bikes</span>
                          </Typography>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <Typography className={classes.MainHeadig}>
                          Comparison of Operating Charges
                        </Typography>
                        <Typography className={classes.subText1}>
                          In this Graph Comparison of <b>{svmBikes.model}</b>{" "}
                          and{" "}
                          <b>{`${otherBikes.manufacturer} ${otherBikes.model}`}</b>{" "}
                          has done below
                        </Typography>
                        {secondGraphoptions &&
                          secondGraphoptions?.series &&
                          secondGraphoptions?.options && (
                            <ReactApexChart
                              className={classes.firstGraphChart}
                              options={secondGraphoptions?.options}
                              series={secondGraphoptions?.series}
                              type="bar"
                              height={250}
                            />
                          )}
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
        ) : null}
      </div>
    </div>
     </>
  );
};

export default TcoPage;

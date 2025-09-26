import React, { useEffect, useState } from "react";
import classes from "./store.module.css";
import {
  Typography,
  Button,
  Card,
  TextField,
  MenuItem,
  ListItemText,
} from "@mui/material";
import { FiPhone, FiMail, FiCompass } from "react-icons/fi";
import { RiHomeSmileLine } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCitiesList,
  getShowRoomList,
} from "../../Redux/Actions/demoDriveActions";
import { pageLoader } from "../../Redux/Actions/userActions";

const Section1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorAlert, setErrorAlert] = useState(false);
  const [value, setValue] = useState("");
  const [type, setType] = useState("showroom");
  const { showroomList, citiesList, error } = useSelector(
    (state) => state.demoDriveDatas
  );

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getShowRoomList(setErrorAlert, value, type));
    dispatch(getCitiesList(setErrorAlert));
    dispatch(pageLoader(false));
  }, [type, value]);

  return (
    <div className={classes.section1MainContainer}>
      <div className={classes.section1HeaderContainer}>
        <Typography className={classes.section1HeaderText}>
          Visit our PRANA Experience Center,
        </Typography>
        <div className={`mt-3 ${classes.section1BtnMainContainer}`}>
          <Typography className={classes.section1SubHeaderText}>
            "Timings 9:00 AM to 6:00 PM"
          </Typography>
          <div className={classes.section1BtnSubContainer}>
            <Button
              variant="outlined"
              className={`${classes.section1Btn} ${classes.becomeDealerBtn}`}
              onClick={() => navigate("/become-dealer")}
            >
              <span>Become a Dealer</span>
            </Button>
            <Button
              variant="outlined"
              className={classes.section1Btn}
              onClick={() => setType("showroom")}
            >
              <RiHomeSmileLine />
              <span>Showroom</span>
              <span
                className={`${classes.dotIcon} ${
                  type === "showroom" && classes.activeDotBtn
                }`}
              />
            </Button>
            <Button
              variant="outlined"
              className={classes.section1Btn}
              onClick={() => setType("service_center")}
            >
              <LuSettings />
              <span>Service Center</span>
              <span
                className={`${classes.dotIcon} ${
                  type !== "showroom" && classes.activeDotBtn
                }`}
              />
            </Button>
          </div>
        </div>
      </div>
      {/* <Row className={classes.Section1MainRow}>
        <Col lg={3} md={6} className={classes.Section1ColumnContainer}>
          <Card className={classes.ColumnCard}>
            <div className={classes.CardIconContainer}>
              <FiPhone />
            </div>
            <div className={classes.CardTextContainer}>
              <Typography className={classes.CardText}>
                +91 8098402030
              </Typography>
            </div>
          </Card>
        </Col>
        <Col lg={3} md={6} className={classes.Section1ColumnContainer}>
          <Card className={classes.ColumnCard}>
            <div className={classes.CardIconContainer}>
              <FiMail />
            </div>
            <div className={classes.CardTextContainer}>
              <Typography className={classes.CardText}>
                kovaieast@svmbikes.com
              </Typography>
            </div>
          </Card>
        </Col>
        <Col lg={3} md={6} className={classes.Section1ColumnContainer}>
          <Card className={classes.ColumnCard}>
            <div className={classes.CardIconContainer}>
              <FiCompass />
            </div>
            <div className={classes.CardTextContainer}>
              <Typography className={classes.CardText}>svmbikes.com</Typography>
            </div>
          </Card>
        </Col>
        <Col lg={3} md={6} className={classes.Section1ColumnContainer}>
          <Card className={classes.ColumnCard}>
            <div className={classes.CardIconContainer}>
              <GrLocation />
            </div>
            <div className={classes.CardTextContainer}>
              <Typography
                className={`${classes.CardText} ${classes.AddressText}`}
              >
                SVM KOVAI - EAST
                <br /> 91A, B.S Nagar, Near Kumaran <br />
                Kottam, Trichy Road,t Sulur <br /> COIMBATORE( India )<br />{" "}
                Tamil Nadu
              </Typography>
            </div>
          </Card>
        </Col>
      </Row> */}
      <Row className={classes.Section1MapRow}>
        <Col md={5} className={classes.Section1MapCol}>
          <Card className={classes.MapTextBoxContainer}>
            <Typography className={classes.pincodeText}>Choose City</Typography>
            <TextField
              fullWidth
              value={value}
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
              onChange={(e) => setValue(e.target.value)}
              // input={<OutlinedInput label="Tag" />}
              className={
                value === "select"
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
            >
              <MenuItem disabled value="select" style={{ display: "none" }}>
                <em>{""}</em>
              </MenuItem>

              {citiesList &&
                citiesList.length > 0 &&
                citiesList.map((name) => (
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
            </TextField>
            {showroomList && showroomList.length > 0 ? (
              <div className={`${classes.locationCardContainer}`}>
                {showroomList.map((item, index) => {
                  return (
                    <div key={index} className={classes.locationdetailsCard}>
                      <Card className={classes.locationCardmain}>
                        {" "}
                        <div className={classes.ColumnContainer}>
                          <FiPhone />
                          <Typography className={classes.Section2Text}>
                            {item.phone}
                          </Typography>
                        </div>
                        <div className={classes.ColumnContainer}>
                          <FiMail />
                          <Typography className={classes.Section2Text}>
                            {item.email}
                          </Typography>
                        </div>
                        <div
                          className={`${classes.ColumnContainer} ${classes.SmallLocationIconContainer}`}
                        >
                          <GrLocation />
                          <Typography className={classes.Section2Text}>
                            {item.address}
                          </Typography>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                {type === "showroom" ? (
                  <Typography className={classes.Section2Text}>
                    No Showrooms Found
                  </Typography>
                ) : (
                  <Typography className={classes.Section2Text}>
                    No Service center Found
                  </Typography>
                )}
              </div>
            )}
          </Card>
        </Col>
        <Col md={7} className={classes.Section1MapCol}>
          <Card className={classes.MapBoxContainer}>
            {/* <iframe src="https://www.google.com/maps/d/embed?mid=1h-StBV7TzorffjQEph9OYTVqq3UITms&ehbc=2E312F" width="640" height="480"></iframe> */}
            <iframe
              title="map"
              src="https://www.google.com/maps/d/embed?mid=1h-StBV7TzorffjQEph9OYTVqq3UITms&ehbc=2E312F"
              width="100%"
              height="100%"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Section1;

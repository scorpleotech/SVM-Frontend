import React, { useState, useEffect } from "react";
import classes from "./career.module.css";
import { pageLoader } from "../../Redux/Actions/userActions";
import { getCareersList } from "../../Redux/Actions/careerActions";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  TextField,
  MenuItem,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { MdLocationOn } from "react-icons/md";
import ListCard from "./listCard";
import { getTermsandConditions } from "../../Redux/Actions/otherActions";
import { Helmet } from "react-helmet";

const CareerIndex = () => {
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [jobType, setJobType] = useState("0");
  const [location, setLocation] = useState("0");
  const { careerList } = useSelector((state) => state.careerDatas);
  const { carrerInfo, error } = useSelector((state) => state.otherDatas);

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getTermsandConditions(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getCareersList(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);

  const getLocationsList = async () => {
    const array = careerList?.map((item) => {
      return item?.city;
    });
    const uniqueArray = [...new Set(array)];
    console.log(uniqueArray, "uniqueArray");
    setLocationList(uniqueArray);
  };

  useEffect(() => {
    if (locationList.length === 0) {
      getLocationsList();
    }
  }, [careerList]);

  const serachBtnclick = () => {
    dispatch(pageLoader(true));
    dispatch(getCareersList(setErrorAlert, searchValue, jobType, location));
    dispatch(pageLoader(false));
  };

  return (
    <>
      <Helmet>
        <title>Srivaru Motors | Careers | Job Opportunities</title>
        <meta
          property="og:title"
          content="Srivaru Motors | Careers | Job Opportunities"
        />
        <meta
          property="og:description"
          content="Click to know more about the career & job opportunities at Srivaru Motors."
        />
        <meta name="keywords" content="Career" />
      </Helmet>
      <div>
        <Typography className={classes.termsHeading} variant="h3">
          {"Careers"}
        </Typography>
        <Card className={classes.MaincardContainer}>
          <div className={classes.cardSearchContainer}>
            <TextField
              label=""
              name="state"
              variant="standard"
              placeholder="Job Title"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" className={classes.flagDiv}>
                    <FaSearch />
                  </InputAdornment>
                ),
              }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={classes.leaderFormInput}
            />
            <TextField
              label=""
              name="state"
              variant="standard"
              fullWidth
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              select
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" className={classes.flagDiv}>
                    <LiaSuitcaseSolid />{" "}
                  </InputAdornment>
                ),
              }}
              className={`${classes.leaderFormInput} ${
                jobType === "0" && classes.leaderFormInput2
              }`}
            >
              <MenuItem value="0" className="d-none">
                Job Type
              </MenuItem>
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
              <MenuItem value="Freelance">Freelance</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
            </TextField>
            <TextField
              label=""
              name="location"
              variant="standard"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              select
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" className={classes.flagDiv}>
                    <MdLocationOn />
                  </InputAdornment>
                ),
              }}
              className={`${classes.leaderFormInput} ${
                location === "0" && classes.leaderFormInput2
              }`}
            >
              <MenuItem value="0" className="d-none">
                Location
              </MenuItem>
              {locationList.length > 0 &&
                locationList.map((item, index) => {
                  return (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  );
                })}
            </TextField>
            <Button
              variant="contained"
              className={classes.leaderFormBtn}
              onClick={() => serachBtnclick()}
            >
              Search
            </Button>
          </div>
          <div className={classes.careerListContainer}>
            {careerList.map((item, index) => {
              return <ListCard item={item} key={index} index={index} />;
            })}
          </div>
        </Card>
        <div className={`mt-3 ${classes.TermsMainContainer}`}>
          <div dangerouslySetInnerHTML={{ __html: carrerInfo?.description }} />
        </div>
      </div>
    </>
  );
};

export default CareerIndex;

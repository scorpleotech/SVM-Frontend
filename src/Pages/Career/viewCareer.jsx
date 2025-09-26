import React, { useState, useEffect } from "react";
import classes from "./career.module.css";
import { pageLoader } from "../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { getOneCareerDetails } from "../../Redux/Actions/careerActions";
import { Typography, Button } from "@mui/material";
import { BsGlobe } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const ViewCareer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorAlert, setErrorAlert] = useState(false);
  const { oneCareer } = useSelector((state) => state.careerDatas);

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    dispatch(pageLoader(true));
    dispatch(getOneCareerDetails(id, setErrorAlert));
    dispatch(pageLoader(false));
  }, [window.location.pathname]);

  return (
    <div>
      <div className={classes.carrerApplyformContainer}>
        <Link to="/careers" className={classes.brudCrumNavBtn}>
          Back to Carrers Page
        </Link>
        <Typography className={classes.carrerMainHeading} variant="h1">
          {oneCareer?.title}
        </Typography>
        <Typography className={classes.carrerSubHeading}>
          {oneCareer?.work_type}, {oneCareer?.city}, {oneCareer?.country}
        </Typography>
        <Typography className={classes.carrerSubHeading1}>
          <BsGlobe />
          <span>
            {" "}
            Employees {oneCareer?.isRemote ? "Can" : "Can't"} Work Remotely
          </span>
        </Typography>
      </div>
      <div className={`mt-3 ${classes.TermsMainContainer}`}>
        <div
          dangerouslySetInnerHTML={{ __html: oneCareer?.short_description }}
        />
        <div dangerouslySetInnerHTML={{ __html: oneCareer?.description }} />
      </div>
      <div className={classes.careerViePageBtn}>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/career/apply-form/${oneCareer?._id}`)}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default ViewCareer;

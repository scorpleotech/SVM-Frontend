import React, { useState, useEffect, useRef } from "react";
import classes from "./career.module.css";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import { Button, Divider, InputAdornment, Chip } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Numeric } from "../../Utils/commonFunctions";
import { Email } from "@mui/icons-material";
import { authApi } from "../../Api/api";
import { pageLoader } from "../../Redux/Actions/userActions";
import {
  ApplyForJob,
  getOneCareerDetails,
} from "../../Redux/Actions/careerActions";
import { useDispatch, useSelector } from "react-redux";
import AlertBox from "../../Components/AlertBox";

const CareerApplyform = () => {
  const resumeInputRef = useRef(null);
  const coverLetterInputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { oneCareer } = useSelector((state) => state.careerDatas);
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [userName, setUserName] = useState("");
  const [resume, setResume] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [experianceYears, setExperianceYears] = useState("");
  const [previosJob, setPreviosJob] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const getUploadedUrl = async (file) => {
    const formData = new FormData();
    formData.append("resume", file);
    const { data } = await authApi.post(
      "/career-application/upload-resume",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data.filepath;
  };

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    dispatch(pageLoader(true));
    dispatch(getOneCareerDetails(id, setErrorAlert));
    dispatch(pageLoader(false));
  }, [window.location.pathname]);

  const handleSubmit = async () => {
    const resumeUrl = await getUploadedUrl(resume);
    const coverLetterUrl = await getUploadedUrl(coverLetter);
    console.log(resumeUrl, coverLetterUrl);
    const userEntry = {
      name: userName,
      resume: resumeUrl,
      currentJobTitle: previosJob,
      yearsOfExperience: experianceYears,
      email: email,
      career_id: oneCareer._id,
      phone: mobile,
      linkedInUrl: linkedInUrl,
      coverLetter: coverLetterUrl,
    };

    dispatch(pageLoader(true));
    dispatch(ApplyForJob(setErrorAlert, userEntry, setSuccessAlert));
    dispatch(pageLoader(false));
  };

  const openResumeFileSelector = (e) => {
    resumeInputRef.current.click();
    e.stopPropagation();
  };

  const openCoverLetterFileSelector = (e) => {
    coverLetterInputRef.current.click();
    e.stopPropagation();
  };

  const handleFileChange = async (event, name) => {
    const fileObj = event.target.files && event.target.files[0];
    const maxSize = 6 * 1024 * 1024; // 6MB in bytes

    if (fileObj?.size > maxSize) {
      alert("File size exceeds the limit of 6MB.");
      event.target.value = null;
      return;
    }
    if (!fileObj) {
      return;
    }
    console.log("fileObj is", fileObj);
    name(fileObj);
  };

  const handleRemoveFile = (e, name) => {
    if (name === "resume") {
      resumeInputRef.current.value = null;
      setResume(null);
    } else {
      coverLetterInputRef.current.value = null;
      setCoverLetter(null);
    }
    e.stopPropagation();
  };

  const CloseAlert = () => {
    if (successAlert) {
      setSuccessAlert(false);
      navigate("/careers");
    }
  };

  return (
    <div className={classes.carrerApplyformContainer}>
      <Link to="/careers" className={classes.brudCrumNavBtn}>
        Back to Carrers Page
      </Link>
      <Typography className={classes.carrerMainHeading} variant="h1">
        {oneCareer?.title}
      </Typography>
      <Typography className={classes.carrerSubHeading}>
        {oneCareer?.work_type}, {oneCareer?.city}, {oneCareer?.country}{" "}
      </Typography>
      <Typography className={classes.carrerSubHeading1}>
        <BsGlobe />
        <span>
          {" "}
          Employees {oneCareer?.isRemote ? "Can" : "Can't"} Work Remotely
        </span>
      </Typography>
      <Divider className="mt-3 mb-4" />
      <ValidatorForm
        onSubmit={handleSubmit}
        useRef="Form"
        className={classes.carrearForm}
      >
        <div>
          <Typography className={`mb-1 ${classes.formLable}`}>
            First Name <span>*</span>
          </Typography>
          <TextValidator
            variant="outlined"
            name="name"
            validators={["required"]}
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            errorMessages={["this field is required"]}
            className={classes.leaderFormInput}
          />
        </div>
        <div className="position-relative">
          <Typography className={`mb-1 ${classes.formLable}`}>
            Resume/CV <span>*</span> (PDF, Word, TXT, 6MB Maximum){" "}
            {!resume && "No file chosen"}
          </Typography>
          <TextValidator
            variant="outlined"
            name="name"
            validators={["required"]}
            fullWidth
            value={resume ? " " : ""}
            onClick={openResumeFileSelector}
            // renderInput={(params) => (
            //   <Chip
            //     label={params.name}
            //     onDelete={(e) => handleRemoveFile(e, "resume")}
            //     className={classes.chip}
            //   />
            // )}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" className={classes.flagDiv}>
                  {resume && (
                    <Chip
                      label={resume.name}
                      onDelete={(e) => handleRemoveFile(e, "resume")}
                      className={classes.chip}
                    />
                  )}
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    className={classes.browseBtn}
                    variant="contained"
                    onClick={openResumeFileSelector}
                  >
                    Browse
                  </Button>
                </InputAdornment>
              ),
            }}
            errorMessages={["this field is required"]}
            className={`${classes.leaderFormInput} ${classes.fileInput}`}
          />
          {/* <Button
            className={classes.browseBtn}
            variant="contained"
            onClick={openResumeFileSelector}
          >
            Browse
          </Button> */}
          <input
            ref={resumeInputRef}
            type="file"
            className="disablesInput"
            accept=".pdf,.doc,.docx,.txt"
            onChange={(e) => handleFileChange(e, setResume)}
          />
        </div>

        <div>
          <Typography className={`mb-1 ${classes.formLable}`}>
            Current/Previous Job Title
          </Typography>
          <TextValidator
            variant="outlined"
            name="name"
            fullWidth
            value={previosJob}
            onChange={(e) => setPreviosJob(e.target.value)}
            className={classes.leaderFormInput}
          />
        </div>
        <div>
          <Typography className={`mb-1 ${classes.formLable}`}>
            Years of Experience
          </Typography>
          <TextValidator
            variant="outlined"
            name="name"
            type="number"
            fullWidth
            value={experianceYears}
            onChange={(e) => setExperianceYears(e.target.value)}
            className={classes.leaderFormInput}
          />
        </div>
        <div>
          <Typography className={`mb-1 ${classes.formLable}`}>
            Email <span>*</span>
          </Typography>
          <TextValidator
            variant="outlined"
            name="name"
            validators={["required", "isEmail"]}
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMessages={["this field is required", "email is not valid"]}
            className={classes.leaderFormInput}
          />
        </div>
        <div>
          <Typography className={`mb-1 ${classes.formLable}`}>
            Phone Number <span>*</span>
          </Typography>
          <TextValidator
            variant="outlined"
            name="name"
            validators={["required", "matchRegexp:^[0-9]{10}"]}
            fullWidth
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onKeyPress={(e) => {
              Numeric(e);
            }}
            inputProps={{ maxLength: 10 }}
            errorMessages={[
              "this field is required",
              "Mobile number must be 10 digits",
            ]}
            className={classes.leaderFormInput}
          />
        </div>
        <div>
          <Typography className={`mb-1 ${classes.formLable}`}>
            LinkedIn Account
          </Typography>
          <TextValidator
            variant="outlined"
            name="name"
            fullWidth
            value={linkedInUrl}
            onChange={(e) => setLinkedInUrl(e.target.value)}
            onKeyPress={(e) => {
              Numeric(e);
            }}
            className={classes.leaderFormInput}
          />
        </div>
        <div className="position-relative">
          <Typography className={`mb-1 ${classes.formLable}`}>
            Cover Letter
          </Typography>
          <TextValidator
            variant="outlined"
            name="name"
            validators={["required"]}
            fullWidth
            value={coverLetter ? " " : ""}
            onClick={openCoverLetterFileSelector}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" className={classes.flagDiv}>
                  {coverLetter && (
                    <Chip
                      label={coverLetter.name}
                      onDelete={(e) => handleRemoveFile(e, "coverLetter")}
                      className={classes.chip}
                    />
                  )}
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    className={classes.browseBtn}
                    variant="contained"
                    onClick={openCoverLetterFileSelector}
                  >
                    Browse
                  </Button>
                </InputAdornment>
              ),
            }}
            errorMessages={["this field is required"]}
            className={`${classes.leaderFormInput} ${classes.fileInput}`}
          />
          <input
            ref={coverLetterInputRef}
            type="file"
            className="disablesInput"
            accept=".pdf,.doc,.docx,.txt"
            onChange={(e) => handleFileChange(e, setCoverLetter)}
          />
        </div>
        <Button variant="contained" className={classes.submitBtn} type="submit">
          Apply Now
        </Button>
      </ValidatorForm>
      {successAlert ? (
        <AlertBox
          type="success"
          message={"Applied Successfully"}
          stateName={CloseAlert}
        />
      ) : null}
    </div>
  );
};

export default CareerApplyform;

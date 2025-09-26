import React from "react";
import classes from "./home.module.css";
import { Typography, Button } from "@mui/material";
// import image1 from "../../Assets/Images/halfBike.webp";
import image1 from "../../Assets/Images/BLACK-BIKE-SIDE-PRANA-2.0.webp";
// import fullBike from "../../Assets/Images/bikewithShadow.png";
import fullBike from "../../Assets/Images/newsmallscrenbike.webp";
import { InterSectorIcon } from "../../Assets/Icons/icons";
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  const navigate = useNavigate();
  return (
    <div className={`${classes.section4Maincontainer}`}>
      
      {/* T9 Changes */}     
      
      {/* <img src={image1} alt="black e-bike" className={classes.section4Image} />
      <img
        src={fullBike}
        alt="black e-bike"
        className={classes.section4FullBikeImage}
      />
      <div className={classes.section4InterSectorIcon}>
        <InterSectorIcon />
      </div>
      <div className={classes.section4TextContainer}>
        <Typography
          className={`${classes.section4HeaderText} ${classes.Section3SplHeader}`}
        >
          
                Ride Bold, Live Unbound.
        </Typography>
        <Typography
          className={`mt-1 ${classes.section4Text} ${classes.section4SubText} ${classes.SplNrmlText}`}
        >
          SRIVARU, a key player in India's E2W. With extensive research and
          market presence, it aims to grow globally for a sustainable,
          carbon-free future.
        </Typography>
        <Button
          className={`mt-3 ${classes.section4Btn}`}
          variant="contained"
          onClick={() => navigate("/prana-electric-bike")}
        >
          Know More
        </Button>
      </div> */}
    </div>
  );
};

export default Section4;

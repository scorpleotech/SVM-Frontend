import React from "react";
import classes from "./home.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom/dist";
import LinkBtns from "./linkBtns";


const BannerComponent = () => {
  const navigate = useNavigate();
  const bannerData = JSON.parse(localStorage.getItem("bannerData"));

  return (
    <div className="position-relative">
      {bannerData && bannerData.length > 0 && (
        // <BannerSlider
        //   renderFunction={ImagerRenderer}
        //   length={bannerData?.length}
        //   data={bannerData}
        // />
        <div className={classes.banner_size}>
          {/* <LazyLoadImage
            alt="best electric bike in coimbatore"
            effect="blur"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "0.2s" },
            }}
            width={"100%"}
            height={"100%"}
            src={`${process.env.REACT_APP_IMAGE_URL}${window.innerWidth > 850
                ? bannerData[0]?.image
                : bannerData[0]?.imageSmall
              }`} /> */}
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}${
              window.innerWidth > 850
                ? bannerData[0]?.image
                : bannerData[0]?.imageSmall
            }`}
            // src={`${process.env.REACT_APP_API_URL}${image?.image}`}
            width={"100%"}
            height={"100%"}
            alt="best electric bike in coimbatore"
            className={classes.bannerImageClass}
          />
        </div>
      )}
      <LinkBtns />
      <div className={classes.functionButtonDiv}>
  <Button
    variant="contained"
    className={classes.functionButton}
    sx={{
      backgroundColor: "black",
      color: "white",
      fontWeight: "bold",       // bold text
      borderRadius: "15px",      // adjust value as you like (e.g., 12px, 20px, 50px for pill style)
      "&:hover": {
        backgroundColor: "#333", // darker black on hover
      },
    }}
    onClick={() => navigate("/class")}
  >
    Class
  </Button>

  <Button
    variant="contained"
    className={classes.functionButton}
    sx={{
      backgroundColor: "black",
      color: "white",
      fontWeight: "bold", 
      fontsize: "25px",    // bold text
      borderRadius: "15px",      // same radius for consistency
      "&:hover": {
        backgroundColor: "#333",
      },
    }}
    onClick={() => navigate("/alive")}
  >
    Alive
  </Button>
</div>


      {/* <div className={classes.functionButtonDiv1}>
        <Button variant="text" className={classes.headerArrawButtonIcon}>
          <DownArrowIcon />
        </Button>
      </div> */}
    </div>
  );
};

export default BannerComponent;

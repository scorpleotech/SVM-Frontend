import React, { useEffect, useState } from "react";
import classes from "./aboutus.module.css";
import { debounce } from "lodash";
// import aboutBannerImage from "../../Assets/Images/aboutBannerImage.png";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import { getAboutUsBannerImagedatas } from "../../Redux/Actions/aboutUsActions";
import BannerSlider from "../../Components/BannerSlider";
import LinkBtns from "../Home/linkBtns";
import dummyBannerImage from "../../Assets/Images/dummyimage.png";

const AboutBanner = () => {
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const { aboutUsBannerImage, error } = useSelector(
    (state) => state.aboutUsDatas
  );

  const handleImageLoad = () => {
    dispatch(pageLoader(false));
  };

  const ImagerRenderer = () => {
    if (aboutUsBannerImage && aboutUsBannerImage?.length > 0) {
      const ImageBanners = aboutUsBannerImage?.map((image, index) => {
        return (
          <div>
            <img
              key={index}
              src={`${process.env.REACT_APP_IMAGE_URL}${image?.image}`}
              alt="prana electric bike ride"
              onError={(e) => (e.target.src = `${dummyBannerImage}`)}
              className={`${classes.aboutBannerImage}`}
              onLoad={handleImageLoad} // Add event listener for image load
            />
          </div>
        );
      });
      console.log("ImageBanners", ImageBanners);
      return ImageBanners;
    } else {
      return [];
    }
  };

  const fetchData = () => {
    dispatch(pageLoader(true));
    dispatch(getAboutUsBannerImagedatas(setErrorAlert));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`${classes.aboutBannerContainer}`}>
      {aboutUsBannerImage && aboutUsBannerImage.length > 0 && (
        <BannerSlider
          renderFunction={ImagerRenderer}
          length={aboutUsBannerImage?.length}
          data={aboutUsBannerImage}
        />
      )}
      <LinkBtns />
      {/* <Typography className={classes.aboutBannerMainText}>
        <span>The Future of </span>
        <br />
        <b className={classes.aboutBannerSubText}>Urban Mobility </b>
      </Typography> */}
    </div>
  );
};

export default AboutBanner;

import React, { useEffect, useState } from "react";
import classes from "./home.module.css";
import { debounce } from "lodash";
import { Typography } from "@mui/material";
import CommonCorosel from "../../Components/responsiveSlider";
import { useDispatch, useSelector } from "react-redux";
import { getAllPartnersList } from "../../Redux/Actions/homeActions";
import { pageLoader } from "../../Redux/Actions/userActions";
import { eventsNewsSliderResponsive } from "../../Utils/dummyConstants";

const Section12 = () => {
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const { error, partnersList } = useSelector((state) => state.homeDatas);

  // const fetchData = () => {
  //   dispatch(pageLoader(true));
  //   dispatch(getAllPartnersList(setErrorAlert));
  // };

  // const debouncedFetchData = debounce(fetchData, 500); // Adjust the delay as needed

  // useEffect(() => {
  //   debouncedFetchData();

  //   return () => {
  //     // Cleanup, cancel any pending debounce when component unmounts
  //     debouncedFetchData.cancel();
  //   };
  // }, []);

  const getRenderImage = () => {
    if (partnersList && partnersList?.length > 0) {
      const renderedItems = partnersList.map((item, index) => {
        return (
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}${item?.image}`}
            key={index}
            alt="partner"
            className={classes.sliderImage}
            sx={{
              width: "100%",
              height: "auto", // Adjust image height based on width
              objectFit: "cover", // Maintain aspect ratio
            }}
          />
        );
      });
      return renderedItems;
    } else {
      return [];
    }
  };

  return (
    <div className={`mt-4 ${classes.section12MainContainer}`}>
      <Typography className={classes.section12HeaderText}>
        Partnered with Us
      </Typography>
      <Typography className={`mt-3 ${classes.section12SubText}`}>
        Get Your Finance With Our Partnered Banks by some simple steps
      </Typography>
      <div className={`mt-4 ${classes.sliderContainer}`}>
        <CommonCorosel
          renderFunction={getRenderImage}
          arrows={true}
          base_slider={true}
          responsive={eventsNewsSliderResponsive}
        />
        {/* <Slider {...settings} className={classes.sliderMaindiv}>
          {imageArray.map((item, index) => (
            <div key={index} className={classes.sliderInnerdiv}>
              <img
                src={item.image}
                alt="partner"
                className={classes.sliderImage}
                sx={{
                  width: "100%",
                  height: "auto", // Adjust image height based on width
                  objectFit: "cover", // Maintain aspect ratio
                }}
              />
            </div>
          ))}
        </Slider> */}
      </div>
    </div>
  );
};

export default Section12;

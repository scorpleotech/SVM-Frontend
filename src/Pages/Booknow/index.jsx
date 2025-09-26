import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import classes from "./bookNow.module.css";
import BookNowSignupForm from "./booknowSignupForm";
import meterImage1 from "../../Assets/Images/meterImage1.png";
import batteryImage from "../../Assets/Images/batteryImahge.webp";
import meterImage3 from "../../Assets/Images/meterImage3.png";
import { Typography } from "@mui/material";
import OrderSummary from "./orderSummary";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import {
  getCategoriesList,
  getStoreList,
} from "../../Redux/Actions/demoDriveActions";
import { GetBikeVariants } from "../../Redux/Actions/homeActions";
import PaymentMethod from "./paymentMethod";

const BooknowIndex = () => {
  const dispatch = useDispatch();
  const { bikeVariants } = useSelector((state) => state.homeDatas);
  const [errorAlert, setErrorAlert] = useState(false);
  const [selectedVartiant, setSelectedVartiant] = useState(null);

  console.log(errorAlert);

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getStoreList(setErrorAlert, "showroom", ""));
    dispatch(GetBikeVariants(setErrorAlert));
    dispatch(getCategoriesList(setErrorAlert));
    dispatch(pageLoader(false));
  }, [dispatch]);

  const selectedColor = (item) => {
    console.log("item", item);
    setSelectedVartiant(item);
  };

  return (
    <>
    <Helmet>
    <title>Srivaru Motors | Prana E-bikes | Book Now</title>
        <meta property="og:title" content="Srivaru Motors | Prana E-bikes | Book Now" />
        <meta property="og:description" content="Book your Electric Bikes Online at Srivaru Motors" />
       <meta
         name="keywords"
         content="Prana Electric Bike Booking Online"
       />
       </Helmet>
    <div className={classes.BooknowIndexMaindiv}>
      {/* <img
        src={
          selectedVartiant
            ? `${process.env.REACT_APP_API_URL}${selectedVartiant.image}`
            : `${process.env.REACT_APP_API_URL}${bikeVariants[0].image}`
        }
        alt="leftVariantPic"
        className={classes.BooknowOpacityBanner}
      /> */}
      <div className={classes.BooknowIndexRow}>
        <div className={classes.LeftBikeContainer}>
          <img
            src={
              selectedVartiant
                ? `${process.env.REACT_APP_IMAGE_URL}${selectedVartiant?.image}`
                : `${process.env.REACT_APP_IMAGE_URL}${bikeVariants[0]?.image}`
            }
            alt="leftVariantPic"
            className={classes.likeContainerBike}
          />
          <div className={classes.contentRowContainer}>
            <div className={classes.contentColumnContainer}>
              <img
                src={meterImage1}
                alt="meterImage1"
                className={classes.meterImage}
              />
              <div>
                <Typography className={classes.meterHeaderText}>
                  {selectedVartiant
                    ? selectedVartiant?.certified_range
                    : bikeVariants[0]?.certified_range}{" "}
                  km*
                </Typography>
                <Typography className={classes.meterSubText}>
                  Real World Range
                </Typography>
              </div>
            </div>
            <div className={classes.contentColumnContainer}>
              {/* <img
                src={meterImage2}
                alt="meterImage2"
                className={classes.meterImage}
              /> */}
              <span className={classes.batteryIcon}>
                <img id="image0_69_1882" src={batteryImage} alt="Battery" />
              </span>
              <div>
                <Typography className={classes.meterHeaderText}>
                  {selectedVartiant
                    ? selectedVartiant?.battery_capacity
                    : bikeVariants[0]?.battery_capacity}{" "}
                  Kwh
                </Typography>
                <Typography className={classes.meterSubText}>
                  Battery Capacity
                </Typography>
              </div>
            </div>
            <div className={classes.contentColumnContainer}>
              <img
                src={meterImage3}
                alt="meterImage3"
                className={classes.meterImage}
              />
              <div>
                <Typography className={classes.meterHeaderText}>
                  {selectedVartiant
                    ? selectedVartiant?.topSpeed
                    : bikeVariants[0]?.topSpeed}{" "}
                  kmph
                </Typography>
                <Typography className={classes.meterSubText}>
                  Top Speed
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.RightBikeContainer}>
          {window.location.pathname.includes("/book-now") ? (
            <BookNowSignupForm SelectedVartiant={selectedColor} />
          ) : window.location.pathname.includes("/payment-method") ? (
            <PaymentMethod SelectedVartiant={selectedColor} />
          ) : (
            <OrderSummary />
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default BooknowIndex;

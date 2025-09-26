import React, { useEffect, useState } from "react";
import classes from "./prana.module.css";
import ProductBanner from "./productBanner";
import Section2 from "./section2";
import Section3 from "./section3";
import Section11 from "../Home/section11";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Section8 from "./section8";
import Section9 from "./section9";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import {
  getAccessoriesList,
  getCategoriesList,
} from "../../Redux/Actions/demoDriveActions";
import { getAllPartnersList } from "../../Redux/Actions/homeActions";
import { getProductBannerImagedatas } from "../../Redux/Actions/aboutUsActions";
import { getFaqList } from "../../Redux/Actions/otherActions";
import { Helmet } from "react-helmet";

const PranaIndex = () => {
  const [errorAlert, setErrorAlert] = useState(false);
  const dispatch = useDispatch();
  const { productPageBannerImage } = useSelector((state) => state.aboutUsDatas);
  const { loading } = useSelector((state) => state.userLogin);

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getCategoriesList(setErrorAlert));
    dispatch(getAllPartnersList(setErrorAlert));
    dispatch(getProductBannerImagedatas(setErrorAlert));
    dispatch(getAccessoriesList(setErrorAlert));
    dispatch(getFaqList(setErrorAlert));
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Prana Electric Bike | Price List</title>
        <meta property="og:title" content="Prana Electric Bike | Price List" />
        <meta
          property="og:description"
          content="Check out the updated price list of Prana Electric Bikes."
        />
        <meta
          name="keywords"
          content="Prana Electric Bike, Prana Electric Bike Price"
        />
      </Helmet>
      <ProductBanner />
      {/* {!loading && ( */}
      <>
        <Section2 />
        <div className={classes.procustPageSubContainer}>
          {/* <Section3 /> */}
          <Section11 />
          {/* <Section4 /> */}
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default PranaIndex;

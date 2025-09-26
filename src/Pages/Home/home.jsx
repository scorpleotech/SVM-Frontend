import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./home.module.css";
import {
  GetBikeVariants,
  getAllPartnersList,
  getAllTestimonials,
  getBannerImagedatas,
} from "../../Redux/Actions/homeActions";
import { getCategoriesList } from "../../Redux/Actions/demoDriveActions";
import { getAllNewsList } from "../../Redux/Actions/otherActions";
import DummyImg from "../../Assets/Images/dummyimage.png";
import { debounce } from "../../Utils/commonFunctions";
import { Helmet } from "react-helmet";

const BannerComponent = lazy(() => import("./banner"));
const Section2 = lazy(() => import("./section2"));
const Section3 = lazy(() => import("./section3"));
const Section4 = lazy(() => import("./section4"));
const Section5 = lazy(() => import("./section5"));
const Section6 = lazy(() => import("./section6"));
const Section7 = lazy(() => import("./Section7"));
const Section8 = lazy(() => import("./section8"));
const Section9 = lazy(() => import("./section9"));
const Section10 = lazy(() => import("./section10"));
const Section11 = lazy(() => import("./section11"));
const Section12 = lazy(() => import("./section12"));

const Home = () => {
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const [initial, setInitial] = useState(false);
  const { bannerData, error } = useSelector((state) => state.homeDatas);

  useEffect(() => {
    dispatch(getBannerImagedatas(setErrorAlert));
  }, [dispatch]);

  const fetchData = debounce(() => {
    if (!initial) {
      setInitial(true);
      setTimeout(() => {
        dispatch(GetBikeVariants(setErrorAlert));
        dispatch(getAllPartnersList(setErrorAlert));
        dispatch(getAllTestimonials(setErrorAlert));
        dispatch(getCategoriesList(setErrorAlert));
        dispatch(getAllNewsList(setErrorAlert));
      }, 100);
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", fetchData);
    return () => {
      window.removeEventListener("scroll", fetchData);
    };
  }, [initial, fetchData]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Srivaru Motors Prana | Electric Bikes in India</title>
        <meta
          property="og:title"
          content="Srivaru Motors Prana | Electric Bikes in India"
        />
        <meta
          property="og:description"
          content="SVM PRANA premium electric bike company in India, Srivaru Motors offers sustainable solutions with eBikes that offer rider comfort, safety & eco-friendly performance."
        />
        <meta
          name="keywords"
          content="Electric Bikes,  E Bikes, Srivaru Motors Prana, Electric Motorcycle, Best Electric Bike in India"
        />
      </Helmet>

      <div className={classes.homeContainer}>
        <Suspense
          fallback={
            <div className={classes.banner_size}>
              <img
                src={DummyImg}
                width="100%"
                height="100%"
                alt="dummyBannerImage"
              />
            </div>
          }
        >
          <BannerComponent bannerData={bannerData} />
        </Suspense>

        <div className={classes.section2Container}>
          <Suspense fallback={<div />}>
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
          </Suspense>
        </div>

        <Suspense fallback={<div />}>
          <Section8 />
          <Section9 />
          <Section10 />
        </Suspense>

        <div className={classes.section2Container}>
          <Suspense fallback={<div />}>
            <Section11 />
            <Section12 />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState, Suspense } from "react";
// import Header from "./header";
import classes from "./layout.module.css";
import { Outlet, useLocation } from "react-router-dom";

// import Footer from "./footer";
import { useDispatch } from "react-redux";
// import EnquiryForm from "../Pages/Others/enquiryForm";
import { setVisitorsCount } from "../Redux/Actions/otherActions";
import { SocialIcon } from "react-social-icons";
// import CookieContainer from "../Components/CookieContainer";
import { getBannerImagedatas } from "../Redux/Actions/homeActions";

const Header = React.lazy(() => import("./header"));
const Footer = React.lazy(() => import("./footer"));

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // const [modelToggle, setModelToggle] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [countHit, setCountHit] = useState(false);
  const count = sessionStorage.getItem("count_id");

  // useEffect(() => {
  //   if (count) {
  //     return;
  //   } else {
  //       setVistCountFunction();
  //   }
  // }, [count]);

  useEffect(() => {
    console.log("Pathname changed to:", location.pathname);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    const scrollListener = () => {
      if (count) {
        return;
      } else {
        setVistCountFunction();
      }
    };

    window.addEventListener("scroll", scrollListener);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [count]);

  const setVistCountFunction = () => {
    if (!countHit) {
      const randomString =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem("count_id", randomString);
      const userEntry = {
        count_id: randomString,
      };
      dispatch(setVisitorsCount(userEntry, setErrorAlert));
      setCountHit(true);
    }
  };

  useEffect(() => {
    dispatch(getBannerImagedatas(setErrorAlert));
  }, [dispatch]);

  // useEffect(() => {
  //   const accessToken = Cookies.get("access_token");
  // }, []);

  // const checkNewUser = () => {
  //   const checkUser = sessionStorage.getItem("newUser");
  //   if (!checkUser) {
  //     // setModelToggle(true);
  //   }
  // };

  // useEffect(() => {
  //   //timout for 1 minute
  //   setTimeout(() => {
  //     checkNewUser();
  //   }, 60 * 1000);
  // }, []);

  // const modalClose = async () => {
  //   setModelToggle(false);
  //   await sessionStorage.setItem("newUser", true);
  // };

  useEffect(() => {
    console.log("--------------- 90 -----------------");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [window.location.pathname]);
  return (
    <Suspense fallback={<div></div>}>
      <div className={classes.defaultParentDiv}>
        <div className={classes.defaultHeaderParentDiv}>
          <Header />
        </div>
        <div className={classes.defaultContentParentDiv}>
          <Outlet />
          {/* <FloatingWhatsApp
          phoneNumber={8778237578}
          accountName="Sri Varu Motors"
        /> */}
          <div className={classes.WaveContainer}>
            <SocialIcon
              href="https://wa.me/+918098402030" // Replace 'yourphonenumber' with your phone number including country code
              url="https://web.whatsapp.com/" // This will not be used, but you can keep it if you want
              target="_blank"
              className={classes.WhatsAppBtn}
            />
          </div>
        </div>
        <Footer />
        {/* {modelToggle && <EnquiryForm modalClose={modalClose} />}
      {CookieModal && <CookieContainer />} */}
      </div>
    </Suspense>
  );
};

export default DefaultLayout;

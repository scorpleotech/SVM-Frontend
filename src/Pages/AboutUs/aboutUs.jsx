import React, { useEffect } from "react";
import AboutBanner from "./aboutBanner";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  const { aboutUsBannerImage, error } = useSelector(
    (state) => state.aboutUsDatas
  );
  const { loading } = useSelector((state) => state.userLogin);

  useEffect(() => {
    console.log("--------------- 16 -----------------")
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }, []);


  return (
    <div>
      <Helmet>
        <title>About Srivaru Motors Private Limited</title>
        <meta
          property="og:title"
          content="About Srivaru Motors Private Limited"
        />
        <meta
          property="og:description"
          content="SVM is dedicated to designing and manufacturing premium electric motorbikes in India. Click here to know more."
        />
        <meta name="keywords" content="About Srivaru Motors Private Limited" />
      </Helmet>
      <AboutBanner />
      {!loading && aboutUsBannerImage && aboutUsBannerImage.length > 0 && (
        <>
          <Section2 />
          <Section3 />
          <Section4 />
        </>
      )}
    </div>
  );
};

export default AboutUs;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AliveBanner from "./AlivaBanner";
import AliveSection2 from "./AliveSection2";
import AliveFeatures from "./AliveFeatures";
import Section11 from "../Home/section11";
import AliveFeatures2 from './AliveFeatures2'
const AliveIndex = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Responsive padding styles
  const section11WrapperStyle = {
    padding: window.innerWidth <= 768 ? '40px 16px' : '60px 120px'
  };
  const WrapperStyle = {
    padding: window.innerWidth <= 768 ? '40px 16px' : '60px 20px'
  };

  return (
    <div>
      <Helmet>
        <title>Alive Electric Bike</title>
        <meta property="og:title" content="Alive Electric Bike" />
        <meta
          property="og:description"
          content="Discover the Alive Electric Bike – stylish, efficient, and eco-friendly."
        />
        <meta name="keywords" content="Alive Electric Bike, alive Bike Price" />
      </Helmet>

      {/* ✅ Banner */}
      <AliveBanner />
      <AliveSection2 />
      <div style={WrapperStyle}>
      
      <AliveFeatures2 />
      <AliveFeatures />
      
      </div>
     
      <div style={section11WrapperStyle}>
        <Section11 />
      </div>
    </div>
  );
};

export default AliveIndex;
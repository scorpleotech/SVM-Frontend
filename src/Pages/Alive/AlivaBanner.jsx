import React, { useState } from "react";
import "./AliveCss/Banner.css";
import LinkBtns from "../Home/linkBtns";
import scooterImg from "../../Assets/Images/Alive/alive_banner.png";
import aliveLogo from "../../Assets/Images/Alive/ALIVE.svg";
import srivaruLogo from "../../Assets/Images/SVM_Minimal_Logo.png";
import AliveReservationPopup from "./AliveReservationPopup"; // Import your popup component

const PreBookButton = ({ onClick }) => (
  <button className="pre-book-btn" onClick={onClick}>
    PRE-BOOK NOW
  </button>
);

const AliveBanner = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePreBookClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    const section2Element = document.getElementById("alive-section2");
    if (section2Element) {
      section2Element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="alive-banner-container">
      <div className="top-right-text">
        <img src={srivaruLogo} alt="SRIVARU Motors Logo" className="top-right-logo" />
      </div>

      <div className="left-content">
        <div className="alive-logo-box">
          <img src={aliveLogo} alt="ALIVE Logo" className="alive-logo-img" />
          <div className="tagline">The scooter made for everyone</div>
        </div>

        <div className="pre-book-section">
          <PreBookButton onClick={handlePreBookClick} />
          <div className="sub-text">
            From the makers of PRANA for the extraordinary you.
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="scooter-container">
          <img src={scooterImg} alt="Alive Scooter" className="scooter-image" />
        </div>
      </div>

      <div className="social-links">
        <LinkBtns />
      </div>

      {/* Render the popup conditionally */}
      {isPopupOpen && (
        <AliveReservationPopup 
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default AliveBanner;
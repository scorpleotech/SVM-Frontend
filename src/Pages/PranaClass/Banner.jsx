import React, { useState } from "react";
import styles from "./ClassCss/ClassBanner.module.css";
import LinkBtns from "../Home/linkBtns";

import scooterImg from "../../Assets/Images/prana_class/prana_black.png";
import pranaLogo from "../../Assets/Images/prana_class/PranaLOGO.png";
import srivaruLogo from "../../Assets/Images/SVM_Minimal_Logo.png";
import PranaReservationPopup from "./PranaReservationPopup"; // Import your popup component

const PreBookButton = ({ onClick }) => (
  <button className={styles.preBookBtn} onClick={onClick}>
    PRE-BOOK NOW
  </button>
);

const ClassBanner = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePreBookClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.bannerContainer}>
      {/* Top Right Logo */}
      <div className={styles.topRightText}>
        <img
          src={srivaruLogo}
          alt="SRIVARU Motors Logo"
          className={styles.topRightLogo}
        />
      </div>

      {/* Left Content */}
      <div className={styles.leftContent}>
        <div className={styles.logoBox}>
          <img src={pranaLogo} alt="PRANA Logo" className={styles.aliveLogoImg} />
          <div className={styles.tagline}>Ride bold. Live unbound</div>
        </div>

        <div className={styles.preBookSection}>
          <PreBookButton onClick={handlePreBookClick} />
        </div>
      </div>

      {/* Right Content */}
      <div className={styles.rightContent}>
        <div className={styles.scooterContainer}>
          <img
            src={scooterImg}
            alt="Prana Scooter"
            className={styles.scooterImage}
          />
        </div>
      </div>

      {/* Social Links */}
      <div className={styles.socialLinks}>
        <LinkBtns />
      </div>

      {/* Render the popup conditionally */}
      {isPopupOpen && (
        <PranaReservationPopup 
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ClassBanner;
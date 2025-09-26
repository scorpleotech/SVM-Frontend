import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner2.css";
import LinkBtns from "./linkBtns.jsx";

const aliveBanner = () => {
  const navigate = useNavigate();

  const handleAliveClick = () => {
    navigate("/alive");
  };

  const handlePranaClassClick = () => {
    navigate("/class");
  };

  return (
    <div className="alive-banner-container">
      {/* Left content */}
      <div className="content-section">
        <div className="pre-book-section">
          <div className="button-group">
            <button className="banner-btn" onClick={handleAliveClick}>
              ALIVE
            </button>
            <button className="banner-btn" onClick={handlePranaClassClick}>
              CLASS
            </button>
          </div>
          <span className="desc-text">YOUR PERFECT SCOOTER IS HERE</span>
        </div>
      </div>

      {/* Right social links using LinkBtns component */}
      <div className="social-links">
        <LinkBtns />
      </div>
    </div>
  );
};

export default aliveBanner;

import React, { useState } from "react";
import styles from "./ClassCss/PranaSection2.module.css";
import { Card, Typography, Button } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import PranaReservationPopup from "./PranaReservationPopup";

// Import images for the models
import pranaBlackImage from "../../Assets/Images/prana_class/prana_black.png";
import pranaBlueImage from "../../Assets/Images/prana_class/prana_blue.png"; // Add blue variant image

// Import title/logo images
import pranaLogo from "../../Assets/Images/prana_class/PranaLOGO.png";

const PranaSection2 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Prana");
  const [selectedColor, setSelectedColor] = useState("black");

  const pranaData = {
    title: "Prana",
    titleImage: pranaLogo,
    variants: [
      {
        id: 1,
        color: "black",
        colorName: "Black",
        image: pranaBlackImage,
        colorHex: "#000000"
      },
      {
        id: 2,
        color: "blue", 
        colorName: "Blue",
        image: pranaBlueImage || pranaBlackImage, // Fallback to black if blue not available
        colorHex: "#1976d2"
      }
    ],
    battery_capacity: "3.5",
    certified_range: "170",
    topSpeed: "85",
    price: 144900,
  };

  // Safety check for pranaData
  if (!pranaData || !pranaData.variants) {
    return <div>Loading...</div>;
  }

  const handlePreBookClick = () => {
    setSelectedModel(pranaData.title);
    setShowPopup(true);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const renderBikeCard = (variant) => {
    const isSelected = selectedColor === variant.color;
    
    return (
      <Col md={6} key={variant.id} className={styles.bikeVariantCol}>
        <Card 
          className={`${styles.bikeVariantCard} ${isSelected ? styles.selected : ''}`}
          onClick={() => handleColorSelect(variant.color)}
        >
          <div className={styles.pranaLogoContainer}>
            <img
              src={pranaData.titleImage}
              alt="Prana Logo"
              className={styles.pranaLogoImage}
              onError={(e) => {
                e.target.style.display = 'none';
                const fallbackText = document.createElement('div');
                fallbackText.className = styles.pranaLogoText;
                fallbackText.textContent = 'PRANA';
                e.target.parentNode.appendChild(fallbackText);
              }}
            />
          </div>
          
          <img
            src={variant.image}
            alt={`${pranaData.title} ${variant.colorName} electric bike`}
            className={styles.bikeVariantImage}
          />
        </Card>
      </Col>
    );
  };

  return (
    <div id="prana-section2" className={styles.pranaMainContainer}>
      <div className={styles.pranaContentContainer}>
        <Typography className={styles.pranaMainHeader}>
          Choose Your <span>Style</span>
        </Typography>
        
        <Row className={styles.pranaMainRow}>
          {/* Left side - Both bike variants */}
          <Col lg={8} md={12} className={styles.bikeVariantsSection}>
            <Row>
              {/* FIXED LINE 99 - Added safety check */}
              {(pranaData?.variants || []).map(variant => renderBikeCard(variant))}
            </Row>
          </Col>

          {/* Right side - Highlights panel */}
          <Col lg={4} md={12} className={styles.highlightsSection}>
            <Card className={styles.highlightsCard}>
              <Typography className={styles.highlightsTitle}>Highlights</Typography>
              
              {/* Specifications */}
              <div className={styles.specItem}>
                <Typography className={styles.specLabel}>Battery Capacity</Typography>
                <Typography className={styles.specValue}>{pranaData.battery_capacity} Kwh</Typography>
              </div>
              
              <div className={styles.specItem}>
                <Typography className={styles.specLabel}>Est. Driving Range</Typography>
                <Typography className={styles.specValue}>{pranaData.certified_range} Km*</Typography>
              </div>
              
              <div className={styles.specItem}>
                <Typography className={styles.specLabel}>Top Speed</Typography>
                <Typography className={styles.specValue}>{pranaData.topSpeed} Kmph</Typography>
              </div>

              {/* Color selection indicators */}
              <div className={styles.colorSelection}>
                {/* FIXED LINE 126 - Added safety check */}
                {(pranaData?.variants || []).map((variant) => (
                  <button
                    key={variant.color}
                    className={`${styles.colorOption} ${selectedColor === variant.color ? styles.selected : ''}`}
                    style={{ backgroundColor: variant.colorHex }}
                    onClick={() => handleColorSelect(variant.color)}
                    aria-label={`Select ${variant.colorName} color`}
                  />
                ))}
              </div>

              {/* Price and button */}
              <div className={styles.priceSection}>
                <Typography className={styles.priceLabel}>Ex-Showroom</Typography>
                <Typography className={styles.priceValue}>
                  ₹ {pranaData.price.toLocaleString("en-IN")}
                </Typography>
              </div>

              <Button
                className={styles.preBookButton}
                variant="contained"
                onClick={handlePreBookClick}
                fullWidth
              >
                <span>Pre Book Now</span> <FaArrowRight />
              </Button>
            </Card>
          </Col>
        </Row>
      </div>

      {showPopup && (
        <PranaReservationPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          selectedModel={selectedModel}
          bikeModels={{}}
        />
      )}
    </div>
  );
};

export default PranaSection2;
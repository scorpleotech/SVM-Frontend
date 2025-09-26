import React, { useState, useEffect } from "react";
import classes from "./AliveCss/AliveFeatures.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import assets
import speedometer from "../../Assets/Images/Alive/caserol/i1.JPG";
import wheel from "../../Assets/Images/Alive/caserol/i3.JPG";
import handbar from "../../Assets/Images/Alive/caserol/i4.JPG";
import highlights4 from "../../Assets/Images/Alive/caserol/i6.JPG";
import highlights5 from "../../Assets/Images/Alive/caserol/i2.JPG";

const AliveFeatures = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Perfect Family Companion",
      subtitle: "Safe, Spacious & Comfortable",
      image: speedometer,
    },
    {
      id: 1,
      title: "Smart Savings, Everyday",
      subtitle: "Cost-Effective Mobility for All",
      image: wheel,
    },
    {
      id: 2,
      title: "Effortless Ride, Modern Style",
      subtitle: "Comfort Meets Innovation",
      image: handbar,
    },
    {
      id: 3,
      title: "Advanced Technology",
      subtitle: "Innovation at Your Fingertips",
      image: highlights4,
    },
    {
      id: 4,
      title: "Premium Experience",
      subtitle: "Luxury Meets Performance",
      image: highlights5,
    },
  ];

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextFeature();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentFeature]);

  const getCardClass = (index) => {
    const diff = (index - currentFeature + features.length) % features.length;
    
    switch (diff) {
      case 0: return classes.centerCard;     // Current/Active card
      case 1: return classes.rightCard1;     // First right card
      case 2: return classes.rightCard2;     // Second right card
      case 3: return classes.leftCard2;      // Second left card
      case 4: return classes.leftCard1;      // First left card
      default: return classes.hiddenCard;
    }
  };

  return (
    <div className={classes.featuresContainer}>
      {/* Header */}
      <div className={classes.featuresHeader}>
        <h2 className={classes.featuresSubtitle}>Explore Alive's Latest:</h2>
        <h1 className={classes.featuresTitle}>Alive's Highlights</h1>
      </div>

      {/* Carousel */}
      <div className={classes.carouselWrapper}>
        {features.map((feature, index) => (
          <article
            key={feature.id}
            className={`${classes.slide} ${getCardClass(index)}`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className={classes.image}
            />
          </article>
        ))}

        {/* Arrows inside carousel */}
        <button
          className={classes.prev}
          onClick={prevFeature}
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>
        <button
          className={classes.next}
          onClick={nextFeature}
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className={classes.dots}>
        {features.map((_, index) => (
          <span
            key={index}
            className={`${classes.dot} ${
              index === currentFeature ? classes.activeDot : ""
            }`}
            onClick={() => setCurrentFeature(index)}
          ></span>
        ))}
      </div>

      {/* Navigation Arrows Below Dots */}
      <div className={classes.navigationArrows}>
        <button
          className={classes.navArrowLeft}
          onClick={prevFeature}
          aria-label="Previous Feature"
        >
          <FaChevronLeft />
        </button>
        <button
          className={classes.navArrowRight}
          onClick={nextFeature}
          aria-label="Next Feature"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Feature Info */}
      <div className={classes.featureInfo}>
      </div>
    </div>
  );
};

export default AliveFeatures;
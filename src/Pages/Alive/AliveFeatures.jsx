import React, { useState, useEffect } from "react";
import classes from "./AliveCss/AliveFeatures.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import only the provided Alive images
import i1 from "../../Assets/Images/Alive/caserol/i1.JPG";
import i2 from "../../Assets/Images/Alive/caserol/i2.JPG";
import i3 from "../../Assets/Images/Alive/caserol/i3.JPG";
import i4 from "../../Assets/Images/Alive/caserol/i4.JPG";
import i6 from "../../Assets/Images/Alive/caserol/i6.JPG";

const AliveFeatures = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { id: 0, title: "Perfect Family Companion", subtitle: "Safe, Spacious & Comfortable", image: i1 },
    { id: 1, title: "Smart Savings, Everyday", subtitle: "Cost-Effective Mobility for All", image: i3 },
    { id: 2, title: "Effortless Ride, Modern Style", subtitle: "Comfort Meets Innovation", image: i4 },
    { id: 3, title: "Advanced Technology", subtitle: "Innovation at Your Fingertips", image: i6 },
    { id: 4, title: "Premium Experience", subtitle: "Luxury Meets Performance", image: i2 },
  ];

  const nextFeature = () => setCurrentFeature((prev) => (prev + 1) % features.length);
  const prevFeature = () => setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);

  useEffect(() => {
    const interval = setInterval(nextFeature, 3000);
    return () => clearInterval(interval);
  }, [currentFeature]);

  const getCardClass = (index) => {
    const diff = (index - currentFeature + features.length) % features.length;
    switch (diff) {
      case 0: return classes.centerCard;
      case 1: return classes.rightCard1;
      case 2: return classes.rightCard2;
      case 3: return classes.leftCard2;
      case 4: return classes.leftCard1;
      default: return classes.hiddenCard;
    }
  };

  return (
    <div className={classes.featuresContainer}>
      <div className={classes.featuresHeader}>
        <h2 className={classes.featuresSubtitle}>Explore Alive's Latest:</h2>
        <h1 className={classes.featuresTitle}>Alive's Highlights</h1>
      </div>

      <div className={classes.carouselWrapper}>
        {features.map((feature, index) => (
          <article key={feature.id} className={`${classes.slide} ${getCardClass(index)}`}>
            <img src={feature.image} alt={feature.title} className={classes.image} />
          </article>
        ))}

        <button className={classes.prev} onClick={prevFeature}><FaChevronLeft /></button>
        <button className={classes.next} onClick={nextFeature}><FaChevronRight /></button>
      </div>

      <div className={classes.dots}>
        {features.map((_, index) => (
          <span
            key={index}
            className={`${classes.dot} ${index === currentFeature ? classes.activeDot : ""}`}
            onClick={() => setCurrentFeature(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AliveFeatures;

import React, { useState, useEffect } from "react";
import classes from "./ClassCss/ClassFeatures2.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import only the provided Prana Class images
import h1 from "../../Assets/Images/prana_class/h1.png";
import h5 from "../../Assets/Images/prana_class/h5.JPG";
import h3 from "../../Assets/Images/prana_class/h3.png";
import h4 from "../../Assets/Images/prana_class/h4.JPG";
import h2 from "../../Assets/Images/prana_class/h2.JPG";

const ClassFeatures2 = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { id: 0, title: "Perfect Family Companion", subtitle: "Safe, Spacious & Comfortable", image: h1 },
    { id: 1, title: "Smart Savings, Everyday", subtitle: "Cost-Effective Mobility for All", image: h5 },
    { id: 2, title: "Effortless Ride, Modern Style", subtitle: "Comfort Meets Innovation", image: h3 },
    { id: 3, title: "Advanced Technology", subtitle: "Innovation at Your Fingertips", image: h4 },
    { id: 4, title: "Premium Experience", subtitle: "Luxury Meets Performance", image: h2 },
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
        <h2 className={classes.featuresSubtitle}>Explore Prana Class</h2>
        <h1 className={classes.featuresTitle}>Prana Class Highlights</h1>
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

export default ClassFeatures2;

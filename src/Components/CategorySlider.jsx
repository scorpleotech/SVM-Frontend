import React, { useState, useEffect } from "react";
import classes from "./component.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 850 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
  },
};

const CategorySlider = ({ renderFunction, length }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <Carousel
          responsive={responsive}
          // autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true}
          draggable={false}
          swipeable={window.innerWidth < 850 ? true : false}
          arrows={false}
          showDots={window.innerWidth < 850 ? true : false}
          className={classes.categoryBannerContainer}
          dotListClass={classes.DotListClass}
        >
          {renderFunction()}
        </Carousel>
      )}
    </div>
  );
};

export default CategorySlider;

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
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 850 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
  },
};

const BannerSlider = ({ renderFunction, length, data }) => {
  const [loading, setLoading] = useState(false);
  const [backgroundColors, setBackgroundColors] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   if (length < 2) {
  //     setBackgroundColors(data[0]?.colorCode);
  //   }
  // }, [length]);

  const handleSlideChange = async (nextSlide, index, item) => {
    console.log(item);
    // const pos = item.currentSlide - 3;
    // console.log("Slider Index", pos);
    // const color = data[item]?.colorCode;
    // console.log(color);
    // setBackgroundColors(color);
  };

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <Carousel
          responsive={responsive}
          // autoPlay={length > 1}
          // autoPlaySpeed={5000}
          infinite={true}
          arrows={length > 1}
          draggable={false}
          swipeable={false}
          className={classes.BannerContainer}
          afterChange={handleSlideChange}

          // removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {renderFunction()}
        </Carousel>
      )}
    </div>
  );
};

export default BannerSlider;

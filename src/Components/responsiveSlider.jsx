import React, { useState, useEffect } from "react";
// import "./news.css";
import classes from "./component.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CommonCorosel = ({ renderFunction, arrows, base_slider, responsive }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1500}
          draggable={false}
          swipeable={false}
          infinite={true}
          arrows={arrows ? true : false}
          renderDotsOutside={true}
          dotListClass={classes.DotListClass}
          showDots={base_slider ? true : false}
        >
          {renderFunction()}
        </Carousel>
      )}
    </div>
  );
};

export default CommonCorosel;

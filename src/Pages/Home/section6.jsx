import React, { useState, useEffect } from "react";
import classes from "./home.module.css";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

const Section6 = () => {
  const { error, bikeVariants } = useSelector((state) => state.homeDatas);
  const { categoryList } = useSelector((state) => state.demoDriveDatas);
  const [prevselectedItem, setPrevSelectedItem] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [isTransitioning, setIsTransitioning] = useState(false);

  console.log(error);

  useEffect(() => {
    if (bikeVariants && bikeVariants.length > 0 && !selectedItem) {
      console.log("");
      setSelectedItem(bikeVariants[1]);
    }
  }, [bikeVariants, selectedItem]);

  useEffect(() => {
    setIsTransitioning(true);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [selectedItem]);

  const handleSelect = (index) => {
    //setActiveIndex(1);
    if (selectedItem.colorCode !== index) {
      // setSlideStatus(false);
      setPrevSelectedItem(selectedItem);
      const item = bikeVariants.find((i) => i.colorCode === index);
      setSelectedItem(item);
      // setActiveClass()
    }
  };

  return (
    <div className={`${classes.section6MainDiv}`}>
      <Row className={classes.variantColourContainer}>
        {categoryList?.map((item, index) => {
          return (
            <Col key={index}>
              <Typography className={classes.CategoryText}>
                {item.title}
              </Typography>
              <div className={classes.ColourDivContainer}>
                {item?.bikeVariants?.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        style={{
                          backgroundColor: item,
                        }}
                        className={`${classes.colourVariantBox} `}
                        onClick={() => {
                          handleSelect(item);
                        }}
                        key={index}
                      >
                        {item === selectedItem?.colorCode && (
                          <div className={classes.highlightBorder}></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="position-relative overflow-hidden">
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}${selectedItem?.imageFront}`}
          alt="elite e-bike"
          className={`${classes.Section6NewBackgroundImage}`}
        />
        <div
          className={`${classes.Coroseldiv} ${
            isTransitioning ? classes.TransitionClass : ""
          }`}
          id="transition-element"
        >
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}${selectedItem?.image}`}
            alt="elite e-bike"
            className={`${classes.section6Image}`}
          />
          {prevselectedItem?.image && (
            <img
              src={`${process.env.REACT_APP_IMAGE_URL}${prevselectedItem?.image}`}
              alt="elite e-bike"
              className={`${classes.section6Image}`}
            />
          )}
        </div>
        {/* <Carousel
          className={`${classes.Coroseldiv}`}
          interval={null}
          controls={true}
          activeIndex={activeIndex}
          indicators={true}
          slide={slideStatus}
          fade={!slideStatus}
          // onSlide={}
        >
          {bikesArray &&
            bikesArray.length > 0 &&
            bikesArray.map((bike, index) => {
              return (
                <Carousel.Item key={index} className={`new-static`}>
                  <img
                    src={`${process.env.REACT_APP_IMAGE_URL}${bike.image}`}
                    alt="elite e-bike"
                    className={`${classes.section6Image}`}
                  />
                </Carousel.Item>
              );
            })}
        </Carousel> */}
      </div>
      <div>
        {bikeVariants &&
          bikeVariants.map((item, index) => {
            return (
              <img
                key={index}
                src={`${process.env.REACT_APP_IMAGE_URL}${item?.image}`}
                alt="elite e-bike"
                className={`${classes.section6ImageHiddenImages}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Section6;

// {
//   bikeVariants && bikeVariants.length > 0 && (
//     <div className={`${classes.section6MainDiv}`}>
//       <div className={`${classes.section6BikeBackground1}`}>
//         <Typography
//           className={classes.Section6HeaderText}
//           style={{
//             color:
//               selectedItem?.colorName !== "WHITE"
//                 ? selectedItem?.colorCode
//                 : "#8e8e8e",
//           }}
//         >
//           {selectedItem?.name}
//         </Typography>
//         <Carousel
//           className={`${classes.Coroseldiv}`}
//           interval={null}
//           controls={false}
//           activeIndex={activeIndex}
//           indicators={false}
//         >
//           {bikeVariants.map((bike, index) => {
//             return (
//               <Carousel.Item key={index}>
//                 <img
//                   src={`${process.env.REACT_APP_IMAGE_URL}${bike.image}`}
//                   alt="elite e-bike"
//                   className={`${classes.section6Image}`}
//                 />
//               </Carousel.Item>
//             );
//           })}
//         </Carousel>
//         <div>
//           {/* {bikeVariants.map((bike, index) => {
//                 return (
//                   <div
//                     className={`${classes.colourVariantBox} ${
//                       selectedItem?.colorCode === bike?.colorCode &&
//                       classes.activeColorVariant
//                     }`}
//                     key={index}
//                     style={{
//                       backgroundColor: bike.colorCode,
//                     }}
//                     onClick={() => handleSelect(index)}
//                   />
//                 );
//               })} */}
//           <Row className={classes.variantColourContainer}>
//             {categoryList?.map((item, index) => {
//               return (
//                 <Col key={index}>
//                   <Typography className={classes.CategoryText}>
//                     {item.title}
//                   </Typography>
//                   <div className={classes.ColourDivContainer}>
//                     {item?.bikeVariants?.map((item, index) => {
//                       return (
//                         <div key={index}>
//                           <div
//                             style={{
//                               backgroundColor: item,
//                             }}
//                             className={`${classes.colourVariantBox} `}
//                             onClick={() => {
//                               handleSelect(item);
//                             }}
//                             key={index}
//                           >
//                             {item === selectedItem?.colorCode && (
//                               <div className={classes.highlightBorder}></div>
//                             )}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </Col>
//               );
//             })}
//           </Row>
//         </div>
//         {/* <div className={classes.colourStepperMainContainer}>
//               <Typography className={classes.chooseColourText}>
//                 CHOOSE THE <b>COLOR</b>
//               </Typography>
//               <div className={classes.colourStepperContainer}>
//                 {bikeVariants.map((bike, index) => {
//                   return (
//                     <React.Fragment key={index}>
//                       <div
//                         className={`${classes.colourDot1}`}
//                         style={{
//                           backgroundColor: bike.colorCode,
//                           border:
//                             bike.colorName !== "WHITE"
//                               ? "2px solid white"
//                               : "2px solid black",
//                         }}
//                         onClick={() => handleSelect(index)}
//                       />
//                       {index !== bikeVariants.length - 1 && (
//                         <span className={classes.dotSeparator}>......</span>
//                       )}
//                     </React.Fragment>
//                   );
//                 })}
//               </div>
//             </div> */}
//       </div>
//       {/* <div className={`${classes.section6BikeBackground2}`}>

//       </div> */}
//       <div className={`${classes.section6ImageTextDiv}`}>
//         <div>
//           <Typography className={classes.Section6ImageHeaderText}>
//             Top - Speed
//           </Typography>
//           <Typography
//             className={`mt-2 ${classes.Section6ImageText}`}
//             style={{
//               color:
//                 selectedItem?.color !== "white"
//                   ? selectedItem?.color
//                   : "#8e8e8e",
//             }}
//           >
//             123 KM/H*
//           </Typography>
//         </div>
//         <div>
//           <Typography className={classes.Section6ImageHeaderText}>
//             Torque
//           </Typography>
//           <Typography
//             className={`mt-2 ${classes.Section6ImageText}`}
//             style={{
//               color:
//                 selectedItem?.color !== "white"
//                   ? selectedItem?.color
//                   : "#8e8e8e",
//             }}
//           >
//             {"0-60 KM/HR < 4 SEC*"}
//           </Typography>
//         </div>
//         <div>
//           <Typography className={classes.Section6ImageHeaderText}>
//             Charging
//           </Typography>
//           <Typography
//             className={`mt-2 ${classes.Section6ImageText}`}
//             style={{
//               color:
//                 selectedItem?.color !== "white"
//                   ? selectedItem?.color
//                   : "#8e8e8e",
//               width: "185px",
//             }}
//           >
//             126KM DRIVE ON SINGLE CHARGE*
//           </Typography>
//         </div>
//       </div>
//       <div
//         className={`${classes.colourDot}`}
//         style={{ backgroundColor: selectedItem?.colorCode }}
//       />
//       <Typography
//         className={classes.Section6ColourText}
//         style={{
//           color:
//             selectedItem?.colorName !== "WHITE"
//               ? selectedItem?.colorCode
//               : "#8e8e8e",
//         }}
//       >
//         {selectedItem?.colorName}
//       </Typography>
//     </div>
//   );
// }

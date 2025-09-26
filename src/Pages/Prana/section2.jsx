import React, { useEffect, useState } from "react";
import classes from "./prana.module.css";
import { debounce } from "lodash";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Card, Typography, Button } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { pageLoader } from "../../Redux/Actions/userActions";
import { getCategoriesList } from "../../Redux/Actions/demoDriveActions";
import { CategorySliderResponsive } from "../../Utils/dummyConstants";
import { ListStyledDotSymbol } from "../../Assets/Icons/icons";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Section2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const { error, Success, storeList, categoryList } = useSelector(
    (state) => state.demoDriveDatas
  );
  const renderCategoryCard = () => {
    if (categoryList.length > 0) {
      const ImageBanners = categoryList.map((item, index) => {
        return (
          <Col md={12 / categoryList.length} key={index}>
            <Card className={classes.section2ImageCard} key={index}>
              <div>
                <Typography className={`${classes.CategoryHeader}`}>
                  {item.title}
                </Typography>
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}${item.image}`}
                  alt="prana elite electric bikes demo"
                  className={classes.section2CardBike}
                />
              </div>
              <div className={classes.cardTextContainerSection2}>
                <Row className={classes.Section2CardRowContainer}>
                  <Col xs={4}>
                    <Typography className={classes.FeaturesValue}>
                      {item.battery_capacity} Kwh
                    </Typography>
                    <Typography className={classes.FeaturesLable}>
                      Battery Capacity
                    </Typography>
                  </Col>
                  <Col xs={4}>
                    <Typography className={classes.FeaturesValue}>
                      {item.certified_range} Km*
                    </Typography>
                    <Typography className={classes.FeaturesLable}>
                      Real World Range
                    </Typography>
                  </Col>
                  <Col xs={4}>
                    <Typography className={classes.FeaturesValue}>
                      {item.topSpeed} Kmph
                    </Typography>
                    <Typography className={classes.FeaturesLable}>
                      Top Speed
                    </Typography>
                  </Col>
                </Row>
                {/* <div className={classes.FeaturesList}>
                  {item.features.map((feature, index) => (
                    <Typography className={classes.FeaturesListItem}>
                      <ListStyledDotSymbol /> <span>{feature.features}</span>
                    </Typography>
                  ))}
                </div> */}
                <div className={classes.sectionBtnContainer}>
                  <div>
                    <Typography className={classes.Section2BtnPrice}>
                      Ex-Showroom
                    </Typography>
                    <Typography className={classes.Section2BtnPrice}>
                      ₹ {item.price.toLocaleString("en-IN")}
                    </Typography>
                  </div>
                  <Button
                    className={classes.Section2Btn}
                    variant="contained"
                    onClick={() => navigate("/book-now")}
                  >
                    <span>Order Now</span> <FaArrowRight />
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        );
      });
      return ImageBanners;
    } else {
      return [];
    }
  };

  return (
    <div className={classes.Section2Maincontainer}>
      <div className={classes.sliderContainer}>
        <Typography className={`${classes.Section2MainHeader}`}>
          Choose Your <span>Prana</span>
        </Typography>
        {/* <Carousel
          responsive={CategorySliderResponsive}
          autoPlay={false}
          autoPlaySpeed={1500}
          infinite={true}
          arrows={false}
          showDots={window.innerWidth < 850 ? true : false}
          className={classes.section2Corosel}
          dotListClass={classes.DotListClass}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          
        </Carousel> */}
        <Row className="row-custom-style">{renderCategoryCard()}</Row>
      </div>
    </div>
  );
};

export default Section2;

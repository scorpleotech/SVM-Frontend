import React, { useEffect, useRef, useState } from "react";
import classes from "./home.module.css";
import { Col, Row } from "react-bootstrap";
import { Typography, Button, Card, Avatar } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";
import { debounce } from "lodash";
import CommonCorosel from "../../Components/responsiveSlider";
import { useDispatch, useSelector } from "react-redux";
import boyAvatar from "../../Assets/Images/boyAvatar.webp";
import girlAvarar from "../../Assets/Images/girlAvatar.webp";
import { useNavigate } from "react-router-dom";
import {
  eventsNewsSliderResponsive,
  responsiveSlider,
} from "../../Utils/dummyConstants";

const Section10 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const { error, testimonialList } = useSelector((state) => state.homeDatas);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const handleBtnClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => {
      navigate("/news");
      setIsClicked(false);
    }, 1000);
  };

  const handleBlogsClick = () => {
    setIsClicked2(!isClicked2);
    setTimeout(() => {
      navigate("/blogs");
      setIsClicked2(false);
    }, 1000);
  };

  const fetchData = () => {
    // dispatch(pageLoader(true));
  };

  const debouncedFetchData = debounce(fetchData, 500); // Adjust the delay as needed

  useEffect(() => {
    debouncedFetchData();

    return () => {
      // Cleanup, cancel any pending debounce when component unmounts
      debouncedFetchData.cancel();
    };
  }, [dispatch]);

  const handleScroll = () => {
    const element = document.querySelector(`.${classes.section10Row}`);
    const element1 = document.querySelector(`.${classes.TestimonialMainCard}`);

    if (element && element1) {
      const rect1 = element?.getBoundingClientRect();
      const rect2 = element1?.getBoundingClientRect();

      const isFirstTransistion =
        rect1.top >= 0 && rect1.bottom <= window.innerHeight;
      const isSecondTransition =
        rect2.top >= 0 && rect2.bottom <= window.innerHeight;

      if (isFirstTransistion && !isVisible) {
        setIsVisible(true);
      }
      if (isSecondTransition && !isVisible2) {
        setIsVisible2(true);
      }
    }
    // if (element && !isVisible) {
    //   const rect = element.getBoundingClientRect();
    //   const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    //   setIsVisible(isVisible);
    // }
    // if (element1 && !isVisible2) {
    //   const rect = element1.getBoundingClientRect();
    //   const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    //   setIsVisible2(isVisible);
    // }
  };

  useEffect(() => {
    const scrollListener = () => {
      handleScroll();
    };

    window.addEventListener("scroll", scrollListener);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const GetRenderTestimonialCards = () => {
    if (testimonialList && testimonialList?.length > 0) {
      const renderedItems = testimonialList.map((item, index) => {
        return (
          <Card className={classes.TestimonialCard} key={index}>
            <Typography className={`${classes.TestimonialCardTopic}`}>
              {item.title}
            </Typography>
            <Typography className={`${classes.TestimonialCardText}`}>
              {item.message}
            </Typography>
            <div className={classes.TestimonialCardAvatar}>
              {/* <img
              alt="avatar"
              src={item.image}
              className={classes.avatarImage}
            /> */}
              <Avatar
                src={item.gender === "male" ? boyAvatar : girlAvarar}
                className={classes.avatarImage}
              />
              <div>
                <Typography className={classes.TestimonialCardName}>
                  {item.name}
                </Typography>
                <Typography className={classes.TestimonialCardDesignation}>
                  {item.designation}
                </Typography>
              </div>
            </div>
          </Card>
        );
      });
      return renderedItems;
    } else {
      return [];
    }
  };

  return (
    <div className={`mt-5 ${classes.section10MainContainer}`}>
      <Row className={classes.section10Row}>
        <Col lg={6} className={classes.section10leftContainer}>
          <Typography
            id="yourComponentId" // Assign a unique ID to your component
            className={`${classes.section10HeaderText} ${
              isVisible ? classes.headerLeftSection10 : ""
            } `}
            // style={ComponentStyles}
          >
            Events
          </Typography>
          {/* <div className={classes.section10cardBtncontainer}>
            <Button className={classes.section10CardButton} variant="contained">
              <GoArrowLeft />
            </Button>
            <Button className={classes.section10CardButton} variant="contained">
              <GoArrowRight />
            </Button>
          </div> */}
          <div className={classes.section10TextOverImageCotainer}>
            <Typography className={classes.section10SubHeaderText}>
              Events & Media News
            </Typography>
            <Typography
              className={`mt-3 ${classes.section10NrmlTexts} ${
                isVisible ? classes.transitionclassLeftText : ""
              }`}
            >
              Your quick, go-to source for the latest updates and insights about
              our prana and SVM. Stay in the know effortlessly!
            </Typography>

            <div className={`mt-3 ${classes.section10BtnContainer}`}>
              <span
                className={`${classes.Section3BtnIcon} ${
                  classes.section10BtnIcon
                } ${isClicked ? classes.eventArrowTransition : ""}`}
              >
                <FaArrowRight />
              </span>
              <Button
                variant="outlined"
                className={`${classes.Section3Btn} ${classes.section10Btn} ${
                  isClicked ? classes.eventBtnTransition : ""
                }`}
                onClick={handleBtnClick}
              >
                <span
                  className={`${classes.section10BtnText} ${
                    isVisible ? classes.transitionclassLeftText : ""
                  }`}
                >
                  Know More
                </span>
              </Button>
            </div>
          </div>
          {/* <Card className={classes.section10Card}>
            <img
              src={wideImage}
              alt="wideImage"
              className={classes.section10CardImage}
            />
            <div className={classes.section10TextOverImageCotainer}>
              <Typography className={classes.section10SubHeaderText}>
                Events Lorem Ipsum
              </Typography>
              <Typography
                className={`mt-3 ${classes.section10NrmlTexts} ${
                  isVisible ? classes.transitionclassLeftText : ""
                }`}
              >
                lorem ipLorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.sumlorem
              </Typography>
              <div className={`mt-3 ${classes.section10BtnContainer}`}>
                <span
                  className={`${classes.Section3BtnIcon} ${classes.section10BtnIcon}`}
                >
                  <FaArrowRight />
                </span>
                <Button
                  variant="outlined"
                  className={`${classes.Section3Btn} ${classes.section10Btn}`}
                >
                  <span
                    style={{ marginLeft: "20px" }}
                    className={`${classes.section10BtnText} ${
                      isVisible ? classes.transitionclassLeftText : ""
                    }`}
                  >
                    Know More
                  </span>
                </Button>
              </div>
            </div>
          </Card> */}
        </Col>
        <Col lg={6} className={classes.section10rightContainer}>
          <Typography
            className={`${classes.section10HeaderText} ${
              classes.section10HeaderText2
            } ${isVisible ? classes.headerRightSection10 : ""}`}
          >
            Blogs
          </Typography>
          {/* <div className={classes.section10cardBtncontainer}>
            <Button className={classes.section10CardButton} variant="contained">
              <GoArrowLeft />
            </Button>
            <Button className={classes.section10CardButton} variant="contained">
              <GoArrowRight />
            </Button>
          </div> */}
          <div className={classes.section10SubHeaderContainer}>
            <Typography className={classes.section10SubHeaderText}>
              Blogs & Presentation
            </Typography>
            <Typography
              className={`mt-3 ${classes.section10NrmlTexts} ${
                isVisible ? classes.rightContainerTransition : ""
              }            
            }`}
            >
              Your destination for concise, informative blogs and dynamic
              presentations. Explore valuable insights and engaging content that
              captivate and inform.
            </Typography>
            <div className={`mt-3 ${classes.section10BtnContainer}`}>
              <span
                className={`${classes.Section3BtnIcon} ${
                  classes.section10BtnIcon
                } ${isClicked2 ? classes.eventArrowTransition : ""}`}
              >
                <FaArrowRight />
              </span>
              <Button
                variant="outlined"
                className={`${classes.Section3Btn} ${classes.section10Btn} ${
                  isClicked2 ? classes.eventBtnTransition : ""
                }`}
                onClick={handleBlogsClick}
              >
                <span
                  className={`${classes.section10BtnText} ${
                    isVisible ? classes.transitionclassLeftText : ""
                  }`}
                >
                  Know More
                </span>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div className="position-relative">
        <Card className={classes.TestimonialMainCard}>
          <Typography
            className={`${classes.TestimonialText} ${
              isVisible2 ? classes.testimonialTextTransist : ""
            }`}
          >
            Testimonial
          </Typography>
        </Card>
        <div
          className={`${classes.TestimonialRow} ${
            isVisible2 ? classes.testimonialTextTransist : ""
          }`}
        >
          <CommonCorosel
            renderFunction={GetRenderTestimonialCards}
            responsive={eventsNewsSliderResponsive}
          />
        </div>
        {/* <Row
          className={`${classes.TestimonialRow} ${
            isVisible ? classes.testimonialTextTransist : ""
          }`}
        >
          {avatarArray.map((item, index) => {
            return (
              <Col lg={4} key={index}>
                <Card className={classes.TestimonialCard}>
                  <Typography className={`${classes.TestimonialCardTopic}`}>
                    {item.topic}
                  </Typography>
                  <Typography className={`${classes.TestimonialCardText}`}>
                    There’s no other program that walks you through exactly what
                    you need to know to start an online store fast, written by
                    someone who has built several 7-figure ecommerce businesses
                    from scratch.
                  </Typography>
                  <div className={classes.TestimonialCardAvatar}>
                    <img
                      alt="avatar"
                      src={item.image}
                      className={classes.avatarImage}
                    />
                    <div>
                      <Typography className={classes.TestimonialCardName}>
                        Anna Gates
                      </Typography>
                      <Typography
                        className={classes.TestimonialCardDesignation}
                      >
                        Web Designer
                      </Typography>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row> */}
      </div>
    </div>
  );
};

export default Section10;

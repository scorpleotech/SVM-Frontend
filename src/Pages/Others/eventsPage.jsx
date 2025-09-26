import React, { useEffect, useState } from "react";
import classes from "./others.module.css";
import { Chip, Typography, Button, Card } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import bannerImage from "../../Assets/Images/product_banner.png";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dayjs from "dayjs";
import { eventsNewsSliderResponsive } from "../../Utils/dummyConstants";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import {
  getAllEventsList,
  getAllNewsList,
} from "../../Redux/Actions/otherActions";
import { GoArrowRight } from "react-icons/go";
import { BsCalendar3 } from "react-icons/bs";
import { Helmet } from "react-helmet";

const EventsPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { eventsList, error, newsList } = useSelector(
    (state) => state.otherDatas
  );
  const handleBtnClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => {
      setIsClicked(false);
      navigate(`/news/${newsList[0]?.slug}`);
    }, 1000);
  };
  console.log("newsList =", newsList);
  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getAllEventsList(setErrorAlert));
    dispatch(getAllNewsList(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);

  const renderEvents = () => {
    if (newsList && newsList.length > 0) {
      console.log("eventsListfrom", eventsList);
      const eventsArray = newsList?.map((item, index) => {
        return (
          <Card
            style={{
              padding: "15px",
              position: "relative",
              borderRadius: "25px",
            }}
            className={classes.eventsCard}
          >
            <img
              src={`${process.env.REACT_APP_IMAGE_URL}${item.image}`}
              alt="news"
              className={classes.eventsPageImage}
            />
            <Button
              variant="contained"
              className={`${classes.eventsCardTopic}`}
            >{`${item.topic}`}</Button>
            <div className={`${classes.eventsCardMessage}`}>{item.title}</div>
            <div className={`mt-3 ${classes.eventsCardFooter}`}>
              <Typography className={classes.eventsSmalltext}>
                7 min read. September 12
              </Typography>
              <Button
                variant="contained"
                className={classes.eventsCardButton}
                id={`section9CardButton${index}`}
              >
                <GoArrowRight />
              </Button>
            </div>
          </Card>
        );
      });
      return eventsArray;
    } else {
      return [];
    }
  };

  return (
    <>
      <Helmet>
        <title>Srivaru Motors | News and Events</title>
        <meta property="og:title" content="Srivaru Motors | News and Events" />
        <meta
          property="og:description"
          content="Check out SVM News and Events, and stay tuned for the latest updates on Srivaru Motors and Prana e-bikes."
        />
        <meta name="keywords" content="Svm News and Events" />
      </Helmet>
      <div className={classes.eventsPageMainContainer}>
        <div className={classes.eventsPageSubContainer1}>
          <Typography className={classes.eventsPageMainHeading}>
            News & Events
          </Typography>
          <Typography className={classes.eventsPageSubHeading}>
            Grab at latests news and annocements
          </Typography>
          <Row className={classes.eventBannerRow}>
            <Col lg={6}>
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}${newsList[0]?.image}`}
                alt="EventsBannerImage"
                className={classes.eventsBanner}
              />
            </Col>
            <Col lg={6}>
              <div className={classes.eventsBannerTextContainer}>
                <Chip label={newsList[0]?.topic} variant="outlined" />
                <Typography className={classes.eventsBannerHeaderText}>
                  {newsList[0]?.title}
                </Typography>
                <Typography className={classes.eventsBannerText}>
                  {newsList[0]?.short_description?.length < 350
                    ? newsList[0]?.short_description
                    : `${newsList[0]?.short_description?.slice(0, 350)}...`}
                </Typography>
                <div className={classes.EventBannerbtnContainer}>
                  <span
                    className={`${classes.eventBannerBtnIcon} ${
                      isClicked && classes.arrowTransist
                    }`}
                  >
                    <FaArrowRight />
                  </span>
                  <Button
                    variant="outlined"
                    className={`${classes.eventBannerBtn} ${
                      isClicked && classes.BtnTransist
                    }`}
                    onClick={() => {
                      handleBtnClick();
                    }}
                  >
                    <span>Know More</span>
                  </Button>
                </div>
                <Chip
                  label={dayjs(newsList[0]?.published_date).format(
                    "DD MMM YYYY"
                  )}
                  variant="outlined"
                  className={classes.BannerDateChip}
                />
              </div>
            </Col>
          </Row>
        </div>

        {newsList && newsList.length > 0 && (
          <Row className={classes.eventsPageSubContainer2}>
            {newsList.map((item, index) => {
              return (
                <Col lg={3} md={4} key={index}>
                  <Card
                    style={{
                      padding: "15px",
                      position: "relative",
                      borderRadius: "25px",
                    }}
                    className={classes.eventsCard}
                  >
                    <img
                      src={`${process.env.REACT_APP_IMAGE_URL}${item.image}`}
                      alt="news"
                      className={classes.eventsPageImage}
                    />
                    <Button
                      variant="contained"
                      className={`${classes.eventsCardTopic}`}
                    >{`${item.topic}`}</Button>
                    <div className={`${classes.eventsCardMessage}`}>
                      {item.title?.length < 50
                        ? item.message
                        : `${item.title?.slice(0, 50)}...`}
                    </div>
                    <div className={`${classes.eventsSubHEadercard}`}>
                      {item.short_description?.length < 60
                        ? item.short_description
                        : `${item.short_description?.slice(0, 60)}...`}
                    </div>
                    <div className={`mt-3 ${classes.eventsCardFooter}`}>
                      <Typography className={classes.eventsSmalltext}>
                        <span>
                          <BsCalendar3 />
                          {dayjs(item.published_date).format("DD MMM YYYY")},
                        </span>
                        <span>
                          {item.readingTime} min read. {item.date}
                        </span>
                      </Typography>
                      <Button
                        variant="contained"
                        className={classes.eventsCardButton}
                        id={`section9CardButton${index}`}
                        onClick={() => {
                          navigate(`/news/${item.slug}`);
                        }}
                      >
                        <GoArrowRight />
                      </Button>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
        {eventsList && eventsList.length > 0 && (
          <div className={classes.eventsPageSubContainer2}>
            <Carousel
              responsive={eventsNewsSliderResponsive}
              autoPlay={true}
              autoPlaySpeed={5000}
              infinite={true}
              arrows={false}
              showDots={window.innerWidth < 850 ? true : false}
              className={classes.section2Corosel}
              dotListClass={classes.DotListClass}
              // removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {renderEvents()}
            </Carousel>
          </div>
        )}
      </div>
    </>
  );
};

export default EventsPage;

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
  getAllBlogsList,
  getAllEventsList,
  getAllNewsList,
} from "../../Redux/Actions/otherActions";
import { GoArrowRight } from "react-icons/go";
import { BsCalendar3 } from "react-icons/bs";
import { Helmet } from "react-helmet";

const BlogPageNew = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { eventsList, error, newsList, blogsList } = useSelector(
    (state) => state.otherDatas
  );
  const handleBtnClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      navigate(`/blog/${blogsList[0]?.slug}`);
    }, 1000);
  };

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getAllBlogsList(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);

  return (
    <>
      <Helmet>
        <title>Srivaru Motors | E-bike Blogs | Read More</title>
        <meta
          property="og:title"
          content="Srivaru Motors | E-bike Blogs | Read More"
        />
        <meta
          property="og:description"
          content="Check out & take a quick read at the E-Bike Blogs by Srivaru Motors."
        />
        <meta name="keywords" content="E-Bike Blogs" />
      </Helmet>
      <div className={classes.eventsPageMainContainer}>
        <div className={classes.eventsPageSubContainer1}>
          <Typography className={classes.eventsPageMainHeading} variant="h1">
            Blogs & Events
          </Typography>
          <Typography className={classes.eventsPageSubHeading}>
            Check Our Latest Blog
          </Typography>
          <Row className={classes.eventBannerRow}>
            <Col lg={6}>
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}${blogsList[0]?.image}`}
                alt="EventsBannerImage"
                className={classes.eventsBanner}
              />
            </Col>
            <Col lg={6}>
              <div className={classes.eventsBannerTextContainer}>
                <Chip
                  label={blogsList[0]?.tags?.toString()}
                  variant="outlined"
                />
                <Typography className={classes.eventsBannerHeaderText}>
                  {blogsList[0]?.title}
                </Typography>
                <Typography className={classes.eventsBannerText}>
                  {blogsList[0]?.short_description?.length < 350
                    ? blogsList[0]?.short_description
                    : `${blogsList[0]?.short_description?.slice(0, 350)}...`}
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
                  label={dayjs(blogsList[0]?.createdAt).format("DD MMM YYYY")}
                  variant="outlined"
                  className={classes.BannerDateChip}
                />
              </div>
            </Col>
          </Row>
        </div>

        {blogsList && blogsList.length > 0 && (
          <Row className={classes.eventsPageSubContainer2}>
            {blogsList.map((item, index) => {
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
                      src={`${process.env.REACT_APP_IMAGE_URL}${item?.image}`}
                      alt="news"
                      className={classes.eventsPageImage}
                    />
                    <Button
                      variant="contained"
                      className={`${classes.eventsCardTopic}`}
                    >{`${item.tags?.toString()}`}</Button>
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
                      <Typography
                        className={classes.eventsSmalltext}
                        marginTop={"12px"}
                      >
                        {/* <span>
                        <BsCalendar3 style={{ marginRight: "5px" }} />
                        {dayjs(item.createdAt).format("DD MMM YYYY")},
                      </span> */}
                        <span>
                          {item.readingTime} min read..{" "}
                          {dayjs(item?.createdAt).format("MMM YYYY")}
                        </span>
                      </Typography>
                      <Button
                        variant="contained"
                        className={classes.eventsCardButton}
                        id={`section9CardButton${index}`}
                        onClick={() => {
                          navigate(`/blog/${item.slug}`);
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
      </div>
    </>
  );
};

export default BlogPageNew;

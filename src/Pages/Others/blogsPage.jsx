import React, { useState, useEffect } from "react";
import classes from "./others.module.css";
import { Button, Card, Chip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import {
  getAllBlogsList,
  getAllEventsList,
} from "../../Redux/Actions/otherActions";
import { GoArrowRight } from "react-icons/go";
import { Col, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import bannerImage from "../../Assets/Images/product_banner.png";
import dayjs from "dayjs";

const BlogsPage = () => {
  const [currentCategory, setCurrentCategory] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { eventsList, error, blogsList } = useSelector(
    (state) => state.otherDatas
  );
  const handleBtnClick = () => {
    setIsClicked(!isClicked);
    // setTimeout(() => {
    //   navigate("/about-us");
    // }, 1000);
  };

  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(getAllBlogsList(setErrorAlert));
    dispatch(pageLoader(false));
  }, []);

  return (
    <div>
      {" "}
      <div className={classes.eventsPageSubContainer1}>
        <Typography className={classes.eventsPageMainHeading} variant="h1">
          Blogs & Events
        </Typography>
        <Typography className={classes.eventsPageSubHeading}>
          Check Our Latest Blog
        </Typography>
        <Row className={classes.eventBannerRow}>
          <Col lg={7}>
            {blogsList[0] && (
              <div className={classes.blogsBannerLeftContainer}>
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}/${blogsList[0]?.image}`}
                  alt="EventsBannerImage"
                  className={`${classes.eventsBanner} ${classes.neweventsBanner}`}
                />
                <div className={classes.eventsBannerLeftTextContainer1}>
                  <Chip
                    label={blogsList[0]?.tags?.toString()}
                    variant="contained"
                    className={classes.BannerChip}
                  />
                  <Typography className={classes.leftContainerText}>
                    {blogsList[0]?.title}
                  </Typography>
                  <div className={classes.eventsBannerLeftbtnContainer}>
                    <Button
                      variant="contained"
                      className={classes.eventsBannerBtn}
                      onClick={() => {
                        navigate(`/blog/${blogsList[0]?._id}`);
                      }}
                    >
                      <FaArrowRight />
                    </Button>
                    <Chip
                      label={dayjs(blogsList[0]?.createdAt).format(
                        "DD MMM YYYY"
                      )}
                      variant="contained"
                      className={classes.BannerChip}
                    />
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col lg={5}>
            {/* <div className={classes.eventsBannerTextContainer}>
              <Chip label="# Prana 2.0" variant="outlined" />
              <Typography className={classes.eventsBannerHeaderText}>
                lorem ipLorem ipsum dolor sit amet,nsetetur sadipscing elitr,
                sed
              </Typography>
              <Typography className={classes.eventsBannerText}>
                lorem ipLorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.sumlorem ipLorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua.sumlorem ipLorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod
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
                label={dayjs().format("DD MMM YYYY")}
                variant="outlined"
                className={classes.BannerDateChip}
              />
            </div> */}
            <div className={classes.BlogsBannerRightcontainer}>
              {blogsList[1] && (
                <div className="position-relative">
                  <img
                    src={`${process.env.REACT_APP_IMAGE_URL}/${blogsList[1]?.image}`}
                    alt="EventsBannerImage"
                    className={classes.eventsBanner}
                  />
                  <div
                    className={`${classes.eventsBannerLeftTextContainer1} ${classes.eventsBannerLeftTextContainer2}`}
                  >
                    <Chip
                      label={blogsList[1]?.tags?.toString()}
                      variant="contained"
                      className={classes.BannerChip}
                    />
                    <Typography
                      className={`${classes.leftContainerText} ${classes.rightContainerText}`}
                    >
                      {blogsList[1]?.title}
                    </Typography>
                  </div>
                  <div className={classes.eventsBannerrightbtnContainer}>
                    <Button
                      variant="contained"
                      className={classes.eventsBannerBtn}
                      onClick={() => {
                        navigate(`/blog/${blogsList[1]?._id}`);
                      }}
                    >
                      <FaArrowRight />
                    </Button>
                    <Chip
                      label={dayjs(blogsList[1]?.createdAt).format(
                        "DD MMM YYYY"
                      )}
                      variant="contained"
                      className={classes.BannerChip}
                    />
                  </div>
                </div>
              )}
              {blogsList[2] && (
                <div className="position-relative">
                  <img
                    src={`${process.env.REACT_APP_IMAGE_URL}/${blogsList[2]?.image}`}
                    alt="EventsBannerImage"
                    className={classes.eventsBanner}
                  />
                  <div
                    className={`${classes.eventsBannerLeftTextContainer1} ${classes.eventsBannerLeftTextContainer2}`}
                  >
                    <Chip
                      label={blogsList[2]?.tags?.toString()}
                      variant="contained"
                      className={classes.BannerChip}
                    />
                    <Typography
                      className={`${classes.leftContainerText} ${classes.rightContainerText}`}
                    >
                      {blogsList[2]?.title}
                    </Typography>
                  </div>
                  <div className={classes.eventsBannerrightbtnContainer}>
                    <Button
                      variant="contained"
                      className={classes.eventsBannerBtn}
                      onClick={() => {
                        navigate(`/blog/${blogsList[2]?._id}`);
                      }}
                    >
                      <FaArrowRight />
                    </Button>
                    <Chip
                      label={dayjs(blogsList[2]?.createdAt).format(
                        "DD MMM YYYY"
                      )}
                      variant="contained"
                      className={classes.BannerChip}
                    />
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
      <div className={classes.blogsMainContainer}>
        {/* <div className={classes.categoryListContainer}>
          {[1].map((item) => {
            return (
              <Typography
                className={`${classes.categoryHeading} ${
                  currentCategory === item && classes.activeCategory
                }`}
                onClick={() => setCurrentCategory(item)}
              >{`Category ${item}`}</Typography>
            );
          })}
        </div> */}
        <Row className={classes.eventsPageRow}>
          {Array.isArray(blogsList) &&
            blogsList?.map((item, index) => {
              return (
                <Col md={4}>
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
                    >{`${item?.topic}`}</Button>
                    <div className={`${classes.eventsCardMessage}`}>
                      {item?.title}
                    </div>
                    <div className={`mt-3 ${classes.eventsCardFooter}`}>
                      <Typography className={classes.eventsSmalltext}>
                        {item?.readingTime} min read.{" "}
                        {dayjs(item?.createdAt).format("MMM YYYY")}
                      </Typography>
                      <Button
                        variant="contained"
                        className={classes.eventsCardButton}
                        id={`section9CardButton${index}`}
                        onClick={() => {
                          navigate(`/blog/${item._id}`);
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
      </div>
    </div>
  );
};

export default BlogsPage;

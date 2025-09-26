import React from "react";
import classes from "./home.module.css";
import { Typography, Card, Button } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GoArrowRight } from "react-icons/go";
import SVM_News_logo from "../../Assets/Images/SVM_News_logo.jpg";
import SVM_News_logo1 from "../../Assets/Images/SVM_News_logo_2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BsCalendar3 } from "react-icons/bs";
import dayjs from "dayjs";

const Section9 = () => {
  const { newsList } = useSelector((state) => state.otherDatas);
  const navigate = useNavigate();
  const imageList = [
    {
      url: SVM_News_logo,
      topic: "Nasdaq News",
      message: "SRIVARU Holding Receives Nasdaq Non-Compliance Notices",
      date: "05 Feb 2024",
    },
    {
      url: SVM_News_logo1,
      topic: "Nasdaq News",
      message:
        "SRIVARU Holding Receives Nasdaq Notification Regarding Minimum Bid Price Deficiency",
      date: "31 Jan 2024",
    },
    {
      url: SVM_News_logo,
      topic: "Company News",
      message:
        "SRIVARU Holding Eyes Strong Growth by H1 of 2024 through Expansion of Manufacturing Facility",
      date: "26 Jan 2024",
    },
    {
      url: SVM_News_logo1,
      topic: "Company News",
      message:
        "SRIVARU, a Leading Commercial-Stage Provider of Premium E-Motorbikes, to Become Publicly Listed on Nasdaq via Business Combination with Mobiv",
      date: "13 Dec 2023",
    },
  ];
  return (
    <div className={`mt-4 ${classes.section9MainContainer}`}>
      <Typography className={classes.section9HeaderText}>
        Recent News
      </Typography>
      <Row className={`mt-4 row-custom-style ${classes.section9CardContainer}`}>
        {newsList?.slice(0, 4)?.map((item, index) => (
          <Col
            md={6}
            lg={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={index}
          >
            <Card
              style={{
                padding: "15px",
                position: "relative",
                borderRadius: "25px",
              }}
              className={classes.Section9Card}
            >
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}${item?.image}`}
                alt="news"
                className={classes.section9CardImage}
              />
              <Button
                variant="contained"
                className={`${classes.section9CardTopic}`}
              >{`${item.topic}`}</Button>
              <Typography className={`${classes.section9CardMessage}`}>
                {item.title?.length < 50
                  ? item.message
                  : `${item.title?.slice(0, 50)}...`}
              </Typography>
              <div className={`mt-3 ${classes.section9CardFooter}`}>
                <Typography className={classes.section9Smalltext}>
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
                  className={classes.section9CardButton}
                  id={`section9CardButton${index}`}
                  onClick={() => {
                    navigate(`/news/${item._id}`);
                  }}
                >
                  <GoArrowRight />
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Section9;

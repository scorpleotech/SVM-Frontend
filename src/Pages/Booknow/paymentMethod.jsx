import { Card, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./bookNow.module.css";
import {
  Row,
  Col,
  Button as Button1,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import AlertBox from "../../Components/AlertBox";
import { pageLoader, submitBookNow } from "../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaymentMethod = ({ SelectedVartiant }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [errorAlert, setErrorAlert] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [defaultError, setDefaultError] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const { success, storeList, categoryList } = useSelector(
    (state) => state.demoDriveDatas
  );
  const { error } = useSelector((state) => state.userLogin);
  const { bikeVariants } = useSelector((state) => state.homeDatas);
  const userdata = JSON.parse(sessionStorage.getItem("order_Details"));

  useEffect(() => {
    setSelectedItem(categoryList[0]?._id);
  }, [categoryList]);

  useEffect(() => {
    setSelectedColor(bikeVariants[0]?._id);
  }, [bikeVariants]);

  const dummyData = [
    {
      title: "Initial Booking Amount",
      price: 999,
      disabled: false,
    },
    {
      title: "Priority Booking Amount",
      price: "Available Soon!",
      disabled: true,
    },
    {
      title: "Full Payment",
      price: "Available Soon!",
      disabled: true,
    },
    // {
    //   title: "No Cost Booking",
    //   price: "",
    //   disabled: false,
    // },
  ];

  const handleSelectedIndex = (index) => {
    if (index !== 0) {
      setDefaultError("Currently other payment option are not available");
      setErrorAlert(true);
    }
  };

  const handleSubmit = () => {
    if (selectedPaymentMethod) {
      setIsClicked(true);
      setTimeout(() => {
        handleSubmitForm();
        setIsClicked(false);
      }, 1000);
    } else {
      setDefaultError("Please Select Any One Payment Method");
      setErrorAlert(true);
    }
  };

  console.log("selectedPaymentMethod =", selectedPaymentMethod);
  const handleSubmitForm = () => {
    if (selectedPaymentMethod?.title === "Initial Booking Amount") {
      userdata.amount = 999;
    } else {
      userdata.amount = 0;
    }

    console.log("G=sumbit Gorm datas", userdata);
    dispatch(pageLoader(true));
    dispatch(submitBookNow(setErrorAlert, userdata, navigate));
  };

  const CloseAlert = () => {
    setErrorAlert(false);
    setDefaultError("");
    dispatch({
      type: "BOOK_NOW_SUBMIT_FAILURE",
      payload: null,
    });
  };

  const handleSelectCategory = (id) => {
    setSelectedItem(id);
    setSelectedColor();
  };

  return (
    <div>
      <div className={classes.formInputContainer}>
        {/* <Typography className={classes.paymentMethodSubHeaderText}>
          Lorem Ipsum Dolar Sit
        </Typography> */}
        <Row className={classes.BooknowFormRow}>
          <Col md={12}>
            <div>
              <Typography className={classes.headerCategoryVariantLable}>
                Choose Model
              </Typography>
              <ButtonGroup className={`${classes.headervariantLisContainer}`}>
                {categoryList
                  ?.filter((item) => item._id === userdata.category_id)
                  ?.map((item, index) => {
                    return (
                      <Button1
                        key={index}
                        className={`${classes.headerVariantBtn} ${classes.selectedBtn}`}
                      >
                        {item.title}
                      </Button1>
                    );
                  })}
              </ButtonGroup>
            </div>
          </Col>
          <Col md={12}>
            <div>
              <Typography className={classes.headerCategoryVariantLable}>
                Choose The Color
              </Typography>
              <div className={classes.headerColourDotContainer}>
                {bikeVariants
                  .filter((item) => item._id === userdata.bike_varient_id)
                  .map((item, index) => {
                    return (
                      <div
                        style={{
                          backgroundColor: item.colorCode,
                          border:
                            item.colorName === "WHITE"
                              ? "1px solid black"
                              : "none",
                        }}
                        className={`${classes.headerColourDotVariant} `}
                        onClick={() => {
                          setSelectedColor(item._id);
                          SelectedVartiant(item);
                        }}
                        key={index}
                      >
                        <div className={classes.highlightBorder}></div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </Col>
          <Col md={12}>
            <Typography className={classes.paymentMethodSubHeaderText}>
              Payment Plan
            </Typography>
            <Card className={classes.paymentCardContainer}>
              <div className={classes.paymentCardHeaders}>
                <Typography>Booking Amount</Typography>
                <Typography>
                  ₹{" "}
                  {selectedPaymentMethod?.price
                    ? selectedPaymentMethod?.price
                    : 0}
                </Typography>
              </div>
              <div className={classes.radioBtnContainer}>
                {dummyData.map((item, index) => {
                  return (
                    <div key={index} className={classes.paymentRadioContainer}>
                      <Form.Check
                        inline
                        label={`${item.title}: `}
                        className={classes.PaymentRadioBox}
                        name="group1"
                        onChange={() => setSelectedPaymentMethod(item)}
                        type="radio"
                        disabled={item.disabled}
                        id={`inline-${index}`}
                      />
                      <Typography
                        className={`${classes.paymentRadioPrice} ${
                          item.disabled && classes.disablesText
                        }`}
                      >
                        {item.price}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </Card>
          </Col>
          <Col md={12}>
            <Typography className={classes.termsListItem}>
              <b>
                <sup className="mt-2">*</sup>
              </b>
              Our focus lies primarily on complete customer satisfaction. So, we
              understand that sometimes in an unforeseen instance, you can have
              second thoughts regarding owning a PRANA motorcycle after having
              made a deposit for your booking. In such an instance as well, you
              can cancel the booking anytime before invoicing the vehicle and
              request the refund. We will refund 100% of your money paid towards
              the booking. for more details please check our{" "}
              <a href="/terms-condition">T&C</a> and{" "}
              <a href="/refund-policy">Refund Policy</a>.
            </Typography>
            {/* <Typography className={`mt-3 ${classes.termsListItem}`}>
              <b>
                <sup style={{ marginTop: "5px" }}>*</sup>
              </b>
              Please read all the information,{" "}
              <a href="/terms-condition">terms & conditions</a> before placing
              the order. Our website provides all the details about the services
              or the product you purchase. If in need of additional information,
              kindly contact us.
            </Typography>
            <Typography className={`mt-3 ${classes.termsListItem}`}>
              <b>
                <sup style={{ marginTop: "5px" }}>*</sup>
              </b>
              For Cancellations please contact us via registered email/
              registered mobile number to info@srivarumotors.com / +91
              8098202030 on our website.
            </Typography> */}
          </Col>
        </Row>
        <div
          className={`${classes.BooknowSubmitBtnContainer} ${classes.paymentSubmitContainer}`}
        >
          <span
            className={`${classes.BookNowContinueIcon} ${
              isClicked && classes.arrowTransist
            }`}
          >
            <FaArrowRight />
          </span>
          <Button
            variant="outlined"
            className={`${classes.BookNowBtn} ${
              isClicked && classes.BtnTransist
            }`}
            onClick={() => {
              handleSubmit();
            }}
          >
            <span>Continue</span>
          </Button>
        </div>
      </div>
      {errorAlert && defaultError && (
        <AlertBox type="error" message={defaultError} stateName={CloseAlert} />
      )}
      {errorAlert && error && (
        <AlertBox type="error" message={error} stateName={CloseAlert} />
      )}
    </div>
  );
};

export default PaymentMethod;

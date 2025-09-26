import { Typography, Button, Card } from "@mui/material";
import classes from "./bookNow.module.css";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makePaymentApi,
  pageLoader,
  submitOtp,
} from "../../Redux/Actions/userActions";
import { GetOrderDatas } from "../../Redux/Actions/otherActions";
import { Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import OtpModel from "./OtpModel";
import { getOtp } from "../../Redux/Actions/aboutUsActions";
import { Table, TableCell, TableRow } from "@mui/material";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const OrderSummary = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const [queryParams, setQueryParams] = useState();
  const [newQueryUrl, setNewQueryUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery();
  const [isClicked, setIsClicked] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [otpModalToggle, setOtpModalToggle] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { orderDetails, error } = useSelector((state) => state.otherDatas);
  const userData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    dispatch(pageLoader(true));
    dispatch(
      GetOrderDatas(
        setErrorAlert,
        userData?._id ? userData?._id : userData?.customer?._id
      )
    );
    dispatch(pageLoader(false));
  }, []);

  useEffect(() => {
    if (queryParams) {
      dispatch(pageLoader(true));
      dispatch(
        GetOrderDatas(
          setErrorAlert,
          userData?._id ? userData?._id : userData?.customer?._id,
          queryParams && queryParams.status ? true : ""
        )
      );
      dispatch(pageLoader(false));
    }
    if (queryParams && queryParams.status) {
      setNewQueryUrl(queryParams?.status?.toLowerCase());
      setShowSuccessModal(true);
    }
  }, [queryParams]);

  useEffect(() => {
    const params = {};
    for (let [key, value] of query.entries()) {
      params[key] = value;
    }
    setQueryParams(params);
  }, [location.search]);

  // useEffect(() => {}, [orderDetails]);

  const hanldeClickContinue = () => {
    setIsClicked(true);
    setTimeout(() => {
      handleSubmit();
      setIsClicked(false);
    }, 1000);
  };

  const handleSuccess = () => {
    console.log("from new functon");
    setOtpModalToggle(false);
    setShowSuccessModal(true);
  };

  const handleOtpSubmit = (otp) => {
    console.log(orderDetails.order, "Order Details");
    const userEntry = {
      otp: otp,
      phone: userData?.phone || userData?.user?.phone,
      type: "order",
    };
    dispatch(pageLoader(true));
    if (orderDetails.order.booking_amount === 0) {
      console.log("Comes int this");
      dispatch(
        submitOtp(setErrorAlert, userEntry, "bookwithoutPay", handleSuccess)
      );
    } else {
      dispatch(
        submitOtp(
          setErrorAlert,
          userEntry,
          "payment",
          makePayment,
          setShowSuccessModal
        )
      );
    }
    setOtpModalToggle(false);
  };
  console.log("orderDetails =", orderDetails);
  const makePayment = () => {
    const userEntry = {
      amount: orderDetails?.amount,
    };

    if (orderDetails?.order?.booking_amount == 999) {
      dispatch(makePaymentApi(setErrorAlert, orderDetails?.order?._id));
    } else {
      setNewQueryUrl("success");
      setShowSuccessModal(true);
    }
  };

  const handleSubmit = () => {
    const userEntry = {
      phone: orderDetails?.customerDetails.phone,
    };
    dispatch(pageLoader(true));
    dispatch(getOtp(setErrorAlert, userEntry, setOtpModalToggle));
    dispatch(pageLoader(false));
  };

  const modalClose = () => {
    setOtpModalToggle(false);
    setNewQueryUrl("");
    setShowSuccessModal(false);
  };

  const navigateFunction = () => {
    console.log("navigate");
    setNewQueryUrl("");
    setShowSuccessModal(false);
    navigate("/");
  };

  return (
    <div className={classes.formInputContainer}>
      <Typography className={classes.orderText}>
        You're one step closer to owning the future. Please pay your booking
        amount to reserve
      </Typography>
      <Typography className={classes.orderText}>
        your chosen {orderDetails?.categoriesDetails?.title}. Click and select
        your preferred payment method.
      </Typography>
      <Card className={classes.paymentCardContainer}>
        <Table>
          <TableRow className={classes.orderSummaryTableRow}>
            <TableCell className={classes.OrderSummaryFirstTableCell}>
              Name
            </TableCell>
            <TableCell className={classes.OrderSummarySecondTableCell}>
              {orderDetails?.customerDetails?.name}
            </TableCell>
          </TableRow>
          <TableRow className={classes.orderSummaryTableRow}>
            <TableCell className={classes.OrderSummaryFirstTableCell}>
              Email Id
            </TableCell>
            <TableCell className={classes.OrderSummarySecondTableCell}>
              {orderDetails?.customerDetails?.email}
            </TableCell>
          </TableRow>
          <TableRow className={classes.orderSummaryTableRow}>
            <TableCell className={classes.OrderSummaryFirstTableCell}>
              Mobile
            </TableCell>
            <TableCell className={classes.OrderSummarySecondTableCell}>
              {orderDetails?.customerDetails?.phone}
            </TableCell>
          </TableRow>
          <TableRow className={classes.orderSummaryTableRow}>
            <TableCell className={classes.OrderSummaryFirstTableCell}>
              Bike Model | Color
            </TableCell>
            <TableCell
              className={`text-capitalize ${classes.OrderSummarySecondTableCell}`}
            >
              {orderDetails?.categoriesDetails?.title} |{" "}
              {orderDetails?.bikeVariantDetails?.colorName?.toLowerCase()}
            </TableCell>
          </TableRow>
          <TableRow className={classes.orderSummaryTableRow}>
            <TableCell className={classes.OrderSummaryFirstTableCell}>
              Booking Amount
            </TableCell>
            <TableCell
              className={`text-capitalize ${classes.OrderSummarySecondTableCell}`}
            >
              ₹ {orderDetails?.order?.booking_amount}
            </TableCell>
          </TableRow>
          <TableRow className={classes.orderSummaryTableRow}>
            <TableCell className={classes.OrderSummaryFirstTableCell}>
              Dealer Hub
            </TableCell>
            <TableCell
              className={`text-capitalize ${classes.OrderSummarySecondTableCell}`}
            >
              {orderDetails?.dealer_hub ? orderDetails?.dealer_hub : "N/A"}
            </TableCell>
          </TableRow>
        </Table>
      </Card>
      <div className={classes.BooknowSubmitBtnContainer}>
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
          onClick={hanldeClickContinue}
        >
          <span>Continue</span>
        </Button>
      </div>
      {otpModalToggle && (
        <OtpModel modalClose={modalClose} callback={handleOtpSubmit} />
      )}
      {showSuccessModal && (
        <OtpModel
          modalClose={navigateFunction}
          type={newQueryUrl || "success"}
        />
      )}
    </div>
  );
};

export default OrderSummary;

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import classes from "./home.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { pageLoader } from "../../Redux/Actions/userActions";
import { CancelMyOrder, myOrdersList } from "../../Redux/Actions/homeActions";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function MyOrders() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorAlert, setErrorAlert] = useState(false);
  const [ordersList, setOrdersList] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const id = userData?.user?._id || userData?.user_id;
    if (ordersList.length === 0) {
      dispatch(pageLoader(true));
      dispatch(myOrdersList(id, setOrdersList, setErrorAlert));
      dispatch(pageLoader(false));
    }
  }, [userData, ordersList]);

  const handleCancelOrder = async (item) => {
    console.log(item);    
    const id = userData?.user?._id || userData?.user_id;
    dispatch(pageLoader(true));
    dispatch(CancelMyOrder(item._id, id, setOrdersList, setErrorAlert));
    dispatch(pageLoader(false));
  };

  return (
    <>
      <Helmet>
        <title>Srivaru Motors | Track Your Orders</title>
        <meta
          property="og:title"
          content="Srivaru Motors | Track Your Orders"
        />
        <meta
          property="og:description"
          content="Click here to track your orders in Srivaru Motors & know your order details."
        />
        <meta name="keywords" content="My Orders, Track Order Status" />
      </Helmet>
      <Box>
        {ordersList && ordersList.length > 0 ? (
          <Container mb={5}>
            {/* <Box className={classes.myOrders}>
          <Box className={classes.myOrdersBox}>
            <FaShoppingCart />
            <Box>
              <h1>Order BG644328999</h1>
              <span>Oct 5, 2024 , 05:30:14 PM | Location</span>
            </Box>
          </Box>
          <Box className={classes.myOrderstable}>
            <TableContainer component={Paper} sx={{ borderRadius: "0px" }}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.order_header}>
                      Model
                    </TableCell>
                    <TableCell className={classes.order_header}>
                      Color
                    </TableCell>
                    <TableCell className={classes.order_header}>
                      Accessories
                    </TableCell>
                    <TableCell className={classes.order_header}>
                      Booking Charges
                    </TableCell>
                    <TableCell className={classes.order_header}>
                      Unit Price
                    </TableCell>
                    <TableCell align="right" className={classes.order_header}>
                      Sub Total
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.order_data}
                    >
                      <img
                        src="https://api.svm.apps.org.in/images/uploads/categories/1711704286121.png"
                        width={"125px"}
                        height={"90px"}
                      />
                      SVM Prana Grand
                    </TableCell>
                    <TableCell className={classes.order_data}>Red</TableCell>
                    <TableCell align="right" className={classes.order_data}>
                      N/A
                    </TableCell>
                    <TableCell align="right" className={classes.order_data}>
                      ₹ 800
                    </TableCell>
                    <TableCell align="right" className={classes.order_data}>
                      ₹ 2,75,000
                    </TableCell>
                    <TableCell align="right" className={classes.order_data}>
                      ₹ 2,75,800
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.orderrow}>
                    <TableCell component="th" colSpan={4}></TableCell>
                    <TableCell className={classes.order_header}>Tax</TableCell>
                    <TableCell align="right" className={classes.order_data}>
                      ₹ 300
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.orderrow}>
                    <TableCell component="th" colSpan={4}></TableCell>
                    <TableCell className={classes.order_header}>
                      Total
                    </TableCell>
                    <TableCell align="right" className={classes.order_data}>
                      ₹ 2,76,100
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box> */}
            {ordersList?.map((item, index) => {
              return (
                <Box className={classes.myOrders} key={index}>
                  <Typography className={classes.order_summary} variant="h1">
                    Order Summary
                  </Typography>
                  <Box className={classes.SubContainer}>
                    <Box>
                      <Typography className={classes.sub_order_summary}>
                        Order Details
                      </Typography>
                      <Typography className={`mt-3`}>
                        OrderNo : {item.orderNo}
                      </Typography>
                      <Typography className={`mt-2`}>
                        {/* Oct 5, 2024 , 05:30:14 PM */}
                        {dayjs(item?.createdAt).format(
                          "MMM D, YYYY, hh:mm:ss A"
                        )}{" "}
                        | Coimbatore
                      </Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box px={2} className={classes.leftContainer}>
                      <Typography className={classes.sub_order_summary}>
                        Customer Details
                      </Typography>
                      <Box className={classes.ColumnFlexContainer}>
                        <Typography>
                          {" "}
                          <b>Name:</b> {item.name}
                        </Typography>
                        <Typography>
                          {" "}
                          <b>Mobile:</b> {item.mobile}
                        </Typography>
                        <Typography>
                          {" "}
                          <b>Email:</b> {item.email}
                        </Typography>
                        <Typography>
                          {" "}
                          <b>Hub:</b> {item.hub}
                        </Typography>
                        {/* <Typography>
                  {" "}
                  <b>City:</b> Coimbatore
                </Typography> */}
                      </Box>
                    </Box>
                  </Box>
                  <Divider className="mt-4 mb-4" />
                  <Box className={classes.SubContainer}>
                    <Box>
                      <Typography className={classes.sub_order_summary}>
                        Vehicle Details
                      </Typography>
                      <Box className={classes.imageContainer}>
                        <img
                          src={`${process.env.REACT_APP_IMAGE_URL}/${item?.image}`}
                          alt="bikeImg"
                          className={classes.bookedBikeimage}
                        />
                        <Box className={classes.ColumnFlexContainer}>
                          <Typography>
                            {" "}
                            <b>Model:</b> SVM Prana {item.category}
                          </Typography>
                          <Typography>
                            {" "}
                            <b>Color:</b> {item.color}
                          </Typography>
                          <Typography>
                            {" "}
                            <b>Unit Price:</b> ₹{" "}
                            {item?.unitPrice?.toLocaleString("en-IN")}
                          </Typography>
                          <Typography>
                            {" "}
                            <b>Accessories:</b>{" "}
                            {item.coupon && item.coupon !== ""
                              ? "Rs. 1000 Worth of accessories has been added to your booking"
                              : "N/A"}
                          </Typography>
                          <Typography>
                            {" "}
                            <b>Status:</b> {item.status}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box px={2} className={classes.leftContainer}>
                      <Typography className={classes.sub_order_summary}>
                        Other Price details
                      </Typography>

                      <Box className={classes.ColumnFlexContainer}>
                        <Typography>
                          {" "}
                          <b>Coupon Code:</b> {item.coupon ?? "N/A"}
                        </Typography>
                        <Typography>
                          {" "}
                          <b>Advance Paid Amount:</b> ₹{" "}
                          {item?.bookingAmount?.toLocaleString("en-IN")}
                        </Typography>
                      </Box>
                      <Typography mt={2} className={classes.OrderNoteText}>
                        Note: Our focus lies primarily on complete customer
                        satisfaction. So, we understand that sometimes in an
                        unforeseen instance, you can have second thoughts
                        regarding owning a PRANA motorcycle after having made a
                        deposit for your booking. In such an instance as well,
                        you can cancel the booking anytime before invoicing the
                        vehicle and request the refund. We will refund 100% of
                        your money paid towards the booking. for more details
                        please check our <a href="/terms-condition">T&C</a> and{" "}
                        <a href="/refund-policy">Refund Policy</a>.
                      </Typography>
                    </Box>
                  </Box>
                  {item.status === "Pending" && (
                    <div className={classes.btnContainer}>
                      <Button
                        className={classes.anotherBookingbtn}
                        variant="contained"
                        onClick={() => navigate("/order-summary")}
                      >
                        Pay Now
                      </Button>
                      <Button
                        className={`${classes.anotherBookingbtn} ${classes.cancelBookingbtn}`}
                        variant="contained"
                        onClick={() => handleCancelOrder(item)}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </Box>
              );
            })}
          </Container>
        ) : (
          <div className={classes.notFoundContainer}>
            <Typography className={classes.sub_order_summary}>
              No Orders Found !, <a href="/book-now">Book Now</a>
            </Typography>
            {/* <Button
            className={classes.notFoundbookNowIcon}
            variant="contained"
            onClick={() => navigate("/book-now")}
          >
            Book Now
          </Button> */}
          </div>
        )}
      </Box>
    </>
  );
}

export default MyOrders;

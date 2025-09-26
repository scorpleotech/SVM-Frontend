import React, { useEffect, useState } from "react";
import classes from "./prana.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import pdf from "../../Assets/PRANA_2.0_Spec_Sheet.pdf";
import { api } from "../../Api/api";

const Section7 = () => {
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const { error, success, storeList, categoryList } = useSelector(
    (state) => state.demoDriveDatas
  );

  const downloadBrochure = async (type) => {
    const { data } = await api.get(`/brochure/url/${type}`, {});
    console.log("data = ", data);

    const url = `${process.env.REACT_APP_IMAGE_URL}${data?.file_url?.replace(
      "../admin/public",
      ""
    )}`;

    console.log("url = ", url);

    var link = document.createElement("a");
    link.href = url;
    link.target = '_blank';  
    link.download = `${data?.file_type}.pdf`; // Optional: You can specify the name of the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getDollarAmount = (amount) => {
    const exchangeRate = 75;
    const usdPrice = amount / exchangeRate;

    return `$${usdPrice.toFixed(2)}`;
  };

  return (
    <div className={classes.section7Maincontainer}>
      <Typography className={classes.Sectio4Header}>PRANA Prowess:</Typography>
      <Typography className={classes.Sectio4HeaderText}>
        Handpick Your Electric Riding Companion
      </Typography>
      {categoryList && categoryList.length > 0 ? (
        <div className={classes.section7TableContainer}>
          <Table className={classes.section7Table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.section7column1}></TableCell>
                {categoryList.map((item, index) => {
                  return (
                    <TableCell
                      className={`${classes.section7column2}`}
                      key={index}
                    >
                      <Typography
                        className={`${classes.section7CellText} ${classes.TableColumnTitle}`}
                      >
                        {item.title}
                      </Typography>
                      <img
                        src={`${process.env.REACT_APP_IMAGE_URL}${item.imageSide}`}
                        alt="elite electric bike comparision"
                        className={classes.section7HeaderImage}
                      />
                    </TableCell>
                  );
                })}

                {/* <TableCell className={classes.section7column3}>
                <img
                  src={sampleImage2}
                  alt="sampleImage1"
                  className={classes.section7HeaderImage}
                />
              </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody className={classes.section7TableBody}>
              <TableRow>
                <TableCell className={classes.section7column1}>
                  <Typography className={classes.section7CellMainText}>
                    Price
                  </Typography>
                </TableCell>
                {categoryList.map((item, index) => {
                  return (
                    <TableCell className={classes.section7column2} key={index}>
                      <Typography className={classes.section7CellText}>
                        <span>₹{item.price.toLocaleString("en-IN")}</span>
                        {/* <br />
                        <span>{getDollarAmount(item.price)}</span> */}
                        {/* <br />
                        <span className={classes.section7EMI}>
                          EMI Starts at ₹
                          {parseInt(item.emi_price).toLocaleString("en-IN")}
                        </span> */}
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell className={classes.section7column1}>
                  <Typography className={classes.section7CellMainText}>
                    Top Speed*
                  </Typography>
                </TableCell>
                {categoryList.map((item, index) => {
                  return (
                    <TableCell className={classes.section7column2} key={index}>
                      <Typography className={classes.section7CellText}>
                        {item.topSpeed} Km/h
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell className={classes.section7column1}>
                  <Typography className={classes.section7CellMainText}>
                    Certified Range*
                  </Typography>
                </TableCell>
                {categoryList.map((item, index) => {
                  return (
                    <TableCell className={classes.section7column2} key={index}>
                      <Typography className={classes.section7CellText}>
                        {item.certified_range} Km
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell className={classes.section7column1}>
                  <Typography className={classes.section7CellMainText}>
                    Modes
                  </Typography>
                </TableCell>
                {categoryList.map((item, index) => {
                  return (
                    <TableCell className={classes.section7column2} key={index}>
                      <Typography className={classes.section7CellText}>
                        {item.modes}
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell className={classes.section7column1}>
                  <Typography className={classes.section7CellMainText}>
                    Colours
                  </Typography>
                </TableCell>
                {categoryList.map((item, index) => {
                  return (
                    <TableCell className={classes.section7column2} key={index}>
                      <div className={classes.section7ColoursContainer}>
                        {item?.bikeVariants?.map((color, index) => {
                          return (
                            <div
                              className={classes.section7ColoursBox}
                              key={index}
                              style={{
                                backgroundColor: color,
                              }}
                            />
                          );
                        })}
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell className={classes.section7column1}>
                  <Typography className={classes.section7CellMainText}>
                    Charging Time
                  </Typography>
                </TableCell>
                {categoryList.map((item, index) => {
                  return (
                    <TableCell className={classes.section7column2} key={index}>
                      <Typography className={classes.section7CellText}>
                        {item.charging_time} Hrs
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell className={classes.section7column1}>
                  <Typography className={classes.section7CellMainText}>
                    Peak Power
                  </Typography>
                </TableCell>
                {categoryList.map((item, index) => {
                  return (
                    <TableCell className={classes.section7column2} key={index}>
                      <Typography className={classes.section7CellText}>
                        {item.peek_power} kW
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell className={classes.section7column1}>
                  <Typography className={classes.section7CellMainText}>
                    Instrument Display
                  </Typography>
                </TableCell>
                {categoryList.map((item, index) => {
                  return (
                    <TableCell className={classes.section7column2} key={index}>
                      <Typography className={classes.section7CellText}>
                        {item.cluster}
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : null}
      <div className={classes.section7Footer}>
        <Typography className={classes.section7FooterText}>
          * Above mentioned prices are ex-showroom
        </Typography>
        <div className={classes.section7ButtonContainer}>
          <Button
            className={`${classes.section7Button} ${classes.section7BrowcherBtn}`}
            variant="contained"
            style={{ backgroundColor: "#F2FEFF", color: "#000000" }}
            onClick={() => downloadBrochure("brochure")}
          >
            <span>Download Brochure</span>
            <FaArrowRight />
                      </Button>
          <Button
            className={classes.section7Button}
            variant="contained"
            style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
            onClick={() => downloadBrochure("spec_sheet")}
          >
            <span>Download Spec Sheet</span>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section7;

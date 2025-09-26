import React, { useEffect, useState } from "react";
import classes from "./home.module.css";
import { Button, Col, Row } from "react-bootstrap";
import { Card, Slider, Typography, Box } from "@mui/material";

const Section11 = () => {
  const [kmValue, setKmValue] = useState(90);
  const [mileageValue, setMileageValue] = useState(45);
  const [petrolPrice, setPetrolPrice] = useState(100);
  const [yearPrice, setYearPrice] = useState(0);
  const [monthlyPrice, setMonthlyPrice] = useState(0);

  useEffect(() => {
    handleCalculation();
  }, [kmValue, mileageValue, petrolPrice]);

  const handleKmChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setKmValue(newValue);
    }
  };

  const handleMileageChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setMileageValue(newValue);
    }
  };

  const handleChangePetrolPrice = (event, newValue) => {
    if (typeof newValue === "number") {
      setPetrolPrice(newValue);
    }
  };

  const handleCalculation = () => {
    // const A = kmValue * 30;
    // const B = A / mileageValue;
    // const C = B * petrolPrice;
    const Monthly_Price = ((kmValue * 30) / mileageValue) * petrolPrice;
    const yearPrice = Monthly_Price * 12;
    setMonthlyPrice(Math.floor(Monthly_Price));
    setYearPrice(Math.floor(yearPrice));
  };

  return (
    <div className={`mt-5 ${classes.section11MainContainer}`}>
      <Row className="row-custom-style">
        <Col lg={7}>
          <Card
            // style={{ padding: "30px" }}
            className={classes.section11commonCardClass}
          >
            <div className={classes.sliderheader}>
              <Typography className={classes.KilometeText}>
                Daily travel distance in <b>KMS</b>
              </Typography>
              <Typography className={classes.KilometeText}>
                <b>{kmValue}</b> KMS
              </Typography>
            </div>
            <Slider
              value={kmValue}
              min={0}
              max={150}
              className={classes.section11slider1}
              onChange={handleKmChange}
              valueLabelDisplay="auto"
              sx={{
                "& .MuiSlider-thumb": {
                  position: "relative",
                  backgroundColor: "#e2e2e2", // Change the color of the thumb
                  color: "white",
                  border: "none",
                  width: 28, // Adjust the size of the main dot
                  height: 28,
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#1c1c1c", // Change the color of the additional dot
                    width: 14, // Adjust the size of the additional dot
                    height: 14,
                    borderRadius: "50%",
                  },
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "white",
                  boxShadow: "0 0 10px 2px var(--lightgray-background)",
                  border: "none",
                },
                "& .MuiSlider-track": {
                  backgroundImage:
                    "linear-gradient(121deg, #ffd500 0.00%, #22a9ef 100.00%)", // Change the color of the track
                  border: "none",
                },
              }}
              aria-labelledby="km-slider"
            />
            <div className={classes.sliderheader}>
              <Typography className={classes.KilometeText}>
                Mileage in <b>KMS</b>
              </Typography>
              <Typography className={classes.KilometeText}>
                <b>{mileageValue}</b> KMS
              </Typography>
            </div>
            <Slider
              value={mileageValue}
              min={1}
              max={200}
              className={classes.section11slider1}
              onChange={handleMileageChange}
              valueLabelDisplay="auto"
              aria-labelledby="mileage-slider"
              sx={{
                "& .MuiSlider-thumb": {
                  position: "relative",
                  backgroundColor: "#e2e2e2", // Change the color of the thumb
                  color: "white",
                  border: "none",
                  width: 28, // Adjust the size of the main dot
                  height: 28,
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#1c1c1c", // Change the color of the additional dot
                    width: 14, // Adjust the size of the additional dot
                    height: 14,
                    borderRadius: "50%",
                  },
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "white",
                  boxShadow: "0 0 10px 2px var(--lightgray-background)",
                  border: "none",
                },
                "& .MuiSlider-track": {
                  backgroundImage:
                    "linear-gradient(121deg, #ffd500 0.00%, #ef2222 100.00%)",
                  border: "none", // Change the color of the track
                },
              }}
            />
            <div className={classes.sliderheader}>
              <Typography className={classes.KilometeText}>
                Petrol Price in <b>INR</b>
              </Typography>
              <Typography className={classes.KilometeText}>
                <b>{petrolPrice}</b> INR
              </Typography>
            </div>
            <Slider
              value={petrolPrice}
              min={0}
              max={150}
              className={classes.section11slider1}
              onChange={handleChangePetrolPrice}
              valueLabelDisplay="auto"
              sx={{
                "& .MuiSlider-thumb": {
                  position: "relative",
                  backgroundColor: "#e2e2e2", // Change the color of the thumb
                  color: "white",
                  border: "none",
                  width: 28, // Adjust the size of the main dot
                  height: 28,
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#1c1c1c", // Change the color of the additional dot
                    width: 14, // Adjust the size of the additional dot
                    height: 14,
                    borderRadius: "50%",
                  },
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "white",
                  boxShadow: "0 0 10px 2px var(--lightgray-background)",
                  border: "none",
                },
                "& .MuiSlider-track": {
                  backgroundImage:
                    "linear-gradient(121deg, #ffd500 0.00%, #22a9ef 100.00%)", // Change the color of the track
                  border: "none",
                },
              }}
              aria-labelledby="km-slider"
            />
            <Card
              className={`${classes.section11commonCardClass} ${classes.section11SavingsCard} position-relative`}
            >
              <Button
                className={classes.section11SavingsBtn}
                variant="contained"
              >
                Savings
              </Button>
              <Row>
                <Col>
                  <Typography className={classes.ValueText}>
                    ₹<span>{monthlyPrice}</span>
                  </Typography>
                  <Typography className={classes.ValueLableText}>
                    Monthly
                  </Typography>
                </Col>
                <Col>
                  <Typography className={classes.ValueText}>
                    ₹<span>{yearPrice}</span>
                  </Typography>
                  <Typography className={classes.ValueLableText}>
                    Annually
                  </Typography>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col lg={5}>
          <div className={classes.section11RightDiv}>
            <Typography className={classes.section11HeaderText}>
              Today petrol{" "}
              <span className={classes.section11SpanSubText}>₹</span>{" "}
              <span className={classes.section11SpanMainText}>
                {petrolPrice}
              </span>
              <span
                className={`${classes.section11SpanSubText} ${classes.marginleftClass}`}
              >
                Per litre
              </span>
            </Typography>
            <Typography className={classes.section11HeaderText2}>
              Petrol to EV
            </Typography>
            <Typography className={`mt-2 ${classes.section11HeaderText3}`}>
              Savings Calculator
            </Typography>
            <Typography className={`mt-2 ${classes.section11NrmlText}`}>
              Choosing the SVM PRANA electric motorbike presents a range of
              compelling financial advantages. The cost-efficiency of charging
              this innovative vehicle translates into lower day-to-day operating
              expenses when compared to traditional petrol bikes. SVM PRANA
              stands out as an economically sound and environmentally conscious
              choice, making it a compelling option for riders seeking both
              financial savings and sustainable transportation.
            </Typography>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section11;

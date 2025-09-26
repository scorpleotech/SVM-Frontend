import React from "react";
import classes from "./career.module.css";
import { Box, Typography, Button, Chip } from "@mui/material";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const ListCard = ({ item, index }) => {
  const navigate = useNavigate();

  const handleClickNavigate = (e) => {
    navigate(`/career/apply-form/${item._id}`);
    e.stopPropagation();
  };

  return (
    <div key={index}>
      <Box
        className={classes.career}
        onClick={() => navigate(`/career/${item._id}`)}
      >
        <Box className={classes.career_detail}>
          <Typography className={classes.job_role} variant="h1">
            {" "}
            <PiSuitcaseSimpleDuotone /> {item.title}
          </Typography>
          {/* <Typography className={classes.job_price}>
            {" "}
            <RiMoneyDollarCircleLine /> {item.salary_range}
          </Typography> */}
        </Box>
        <div
          className={`mt-3 ${classes.TermsMainContainer} ${classes.ShortDescription}`}
        >
          <div dangerouslySetInnerHTML={{ __html: item?.short_description }} />
        </div>
        <Box mt={5} className={classes.career_detail}>
          <Box className={classes.chipContainer}>
            {item.tags.map((item, index) => (
              <Chip label={item} key={index} />
            ))}
            {/* <Chip label="Fulltimr" />
            <Chip label="Fulltimr" /> */}
          </Box>
          <Button
            variant="contained"
            className={classes.apply_job}
            size="small"
            onClick={handleClickNavigate}
          >
            Apply Now
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ListCard;

import React from "react";
import classes from "./home.module.css";
import { Button } from "@mui/material";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../Assets/Icons/icons";

const LinkBtns = () => {
  return (
    <div className={classes.linkBtnsDiv}>
      <Button
        className={classes.linkIconBtns}
        onClick={() =>
          window.open("https://www.facebook.com/srivarumotors", "_blank")
        }
      >
        <FacebookIcon />
      </Button>
      <Button
        className={classes.linkIconBtns}
        onClick={() =>
          window.open("https://www.instagram.com/srivarumotors/", "_blank")
        }
      >
        <InstagramIcon />
      </Button>
      <Button
        className={classes.linkIconBtns}
        onClick={() =>
          window.open("https://www.youtube.com/@srivarumotors", "_blank")
        }
      >
        <YoutubeIcon />
      </Button>
      <Button
        className={classes.linkIconBtns}
        onClick={() =>
          window.open("https://twitter.com/srivarumotors", "_blank")
        }
      >
        <TwitterIcon />
      </Button>
      <Button
        className={classes.linkIconBtns}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/company/srivarumotors/",
            "_blank"
          )
        }
      >
        <LinkedInIcon />
      </Button>
    </div>
  );
};

export default LinkBtns;

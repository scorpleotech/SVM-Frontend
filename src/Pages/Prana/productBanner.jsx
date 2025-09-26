import React, { useEffect, useState } from "react";
import classes from "./prana.module.css";
import { debounce } from "lodash";
import dummyBannerImage from "../../Assets/Images/dummyimage.png";
import { useDispatch, useSelector } from "react-redux";
import BannerSlider from "../../Components/BannerSlider";
import LinkBtns from "../Home/linkBtns";
import { pageLoader } from "../../Redux/Actions/userActions";

const ProductBanner = () => {
  const dispatch = useDispatch();
  const [errorAlert, setErrorAlert] = useState(false);
  const { aboutUsBannerImage, error, productPageBannerImage } = useSelector(
    (state) => state.aboutUsDatas
  );

  const ImagerRenderer = () => {
    if (productPageBannerImage && productPageBannerImage?.length > 0) {
      const ImageBanners = productPageBannerImage?.map((item, index) => {
        return (
          <div>
            <img
              key={index}
              src={`${process.env.REACT_APP_IMAGE_URL}${item.image}`}
              alt="prana electric bikes"
              className={`${classes.aboutBannerImage}`}
              onLoad={handleImageLoad}
            />
          </div>
        );
      });
      console.log("ImageBanners", ImageBanners);
      return ImageBanners;
    } else {
      return [];
    }
  };

  const handleImageLoad = () => {
    dispatch(pageLoader(false));
  };

  return (
    <div className={`${classes.aboutBannerContainer}`}>
      {productPageBannerImage && productPageBannerImage.length > 0 && (
        <BannerSlider
          renderFunction={ImagerRenderer}
          length={productPageBannerImage?.length}
          data={productPageBannerImage}
          // Add event listener for image load
        />
      )}
      {/* <div className={classes.linkBtnsDiv}>
        <Button
          className={classes.linkIconBtns}
          onClick={() =>
            window.open("https://www.facebook.com/srivarumotors/", "_blank")
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
      </div> */}
      <LinkBtns />
      {/* <Typography className={classes.productBannerHeading1}>grand</Typography> */}
    </div>
  );
};

export default ProductBanner;

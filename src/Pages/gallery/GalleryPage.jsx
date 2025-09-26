import {
  Box,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./gallery.css";
import classes from "./gallery.module.css";
import { useDispatch } from "react-redux";
import { getGallery } from "../../Redux/Actions/otherActions";
import VideoPreviewPop from "./VideoPreviewPop";
import { FaPlayCircle } from "react-icons/fa";
import PhotoPreviewPop from "./PhotoPreviewPop";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function GalleryPage() {
  const [tabValue, setTabValue] = useState(0);
  const [myGallery, setMyGallery] = useState([]);
  const [previewPopup, setPreviewPopup] = useState(false);
  const [previewImgPopup, setPreviewImgPopup] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleClose = (event, newValue) => {
    setPreviewPopup(false)
  };

  const handlePopClose = (event, newValue) => {
    setPreviewImgPopup(false)
  };

  function handleGetGallery() {
    dispatch(getGallery(setMyGallery, tabValue));
  }

  function thumbnailUrl(file_url) {
    const videoId = file_url?.split("embed/")[1];

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return thumbnailUrl;
  }

  function handleOpen(dat) {
    setYoutubeUrl(dat);
    setPreviewPopup(true)
  }

  useEffect(() => {
    handleGetGallery();
  }, [tabValue]);

  console.log("tabValue =", myGallery, " || ", typeof tabValue);
  return (
    <Box>
      <Typography className={classes.termsHeading} variant="h1">
        Gallery
      </Typography>
      <Box className={classes.paddingClass}>
        <Box className="table-tabs">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Images" {...a11yProps(0)} />
            <Tab label="Videos" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={tabValue} index={0}>
          <Box>
            {/* <Grid container spacing={2}>
              {Array.isArray(_images) &&
                _images?.map((datas, i) => (
                  <Grid item xs={12} sm={12} md={3}>
                    <Box height={"200px"}>
                      <img
                        src={datas?.image}
                        alt="image"
                        width={"100%"}
                        height={"100%"}
                      />
                    </Box>
                  </Grid>
                ))}
            </Grid> */}
            <div className={classes.ImageGridContainer}>
              {Array.isArray(myGallery) &&
                myGallery?.map((item, i) => (
                  <img
                    src={`https://api.srivarumotors.com/${item?.file_url?.replace(
                      "../admin/public",
                      ""
                    )}`}
                    alt={item.title}
                    className={classes.imageGridItem}
                    loading="lazy"
                    key={i}
                    style={{ borderRadius: "15px",cursor:"pointer" }}
                    onClick={()=>{
                      setImageUrl(item?.file_url);
                      setPreviewImgPopup(true);
                    }}
                  />
                ))}
            </div>
            {Array.isArray(myGallery) && myGallery?.length === 0 && (
              <Typography>No Photos found</Typography>
            )}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          <Grid container spacing={2}>
            {Array.isArray(myGallery) &&
              myGallery?.map((datas, i) => (
                <Grid item xs={12} sm={12} md={4}>
                  <Box
                    onClick={() => handleOpen(datas?.file_url)}
                    className={classes.video_part}
                  >
                    <img src={thumbnailUrl(datas?.file_url)} width={"100%"} height={"100%"} />
                    <FaPlayCircle />
                  </Box>
                  {/* <Box height={"250px"}>
                    <iframe
                width="100%"
                height="100%"
                src={datas?.file_url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
                    </Box> */}
                </Grid>
              ))}
          </Grid>
          {/* {Array.isArray(myGallery) &&
        myGallery?.length === 0 &&
        <Typography>No Video found</Typography>
      } */}
        </CustomTabPanel>
      </Box>
      <VideoPreviewPop
        open={previewPopup}
        handleClose={handleClose}
        youtubeUrl={youtubeUrl}
      />
      <PhotoPreviewPop
        open={previewImgPopup}
        handleClose={handlePopClose}
        imageUrl={imageUrl}
      />
    </Box>
  );
}

export default GalleryPage;

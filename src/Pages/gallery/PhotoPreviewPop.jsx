import {
    Modal,
    Box,
    Button,
    Typography,
    CircularProgress,
  } from "@mui/material";
  import classes from "./gallery.module.css";
  import OtpInput from "react-otp-input";
  import { useState } from "react";
  import { IoClose } from "react-icons/io5";


  function PhotoPreviewPop(props) {
    const {
      open,
      handleClose,
      imageUrl
    } = props;
  
    return (
      <>
        <Modal
          open={open}
        //   onClose={handleClose}
          aria-labelledby="server-modal-title"
          data-testid="register_modal"
          aria-describedby="server-modal-description"
          sx={{
            display: "flex",
            top: "2%",
            height: "fit-content",
            marginTop: 10,
            justifyContent: "center",
          }}
        >
          <Box className={classes.pop_container}>
            <IoClose style={{marginBottom:"7px",float:"right",fontSize:"23px",cursor:"pointer"}} onClick={handleClose} />
            <Box>
          <img src={imageUrl && `https://api.srivarumotors.com/${imageUrl?.replace(
                      "../admin/public",
                      ""
                    )}`} alt="gallery" width={"100%"} height={"400px"} style={{objectFit:"contain"}} />
          </Box>
          </Box>
         
        </Modal>
      </>
    );
  }
  
  export default PhotoPreviewPop;
  
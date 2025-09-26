import { authApi, getAuthorizationHeader } from "../../Api/api";
import { ABOUT_US_BANNER_IMAGE_FAILURE, ABOUT_US_BANNER_IMAGE_SUCCESS, PRODUCT_BANNER_IMAGE_FAILURE, PRODUCT_BANNER_IMAGE_SUCCESS } from "../Constants/aboutUsConstants";
import { pageLoader } from "./userActions";

export const getAboutUsBannerImagedatas =
    (setErrorAlert) => async (dispatch) => {
        try {
            const { data } = await authApi.get("/aboutus/active", {
                headers: {
                    Authorization: getAuthorizationHeader(),
                },
            });
            console.log("getBannerImagedatas", data);
            // dispatch(pageLoader(false));
            if (data) {
                dispatch({
                    type: ABOUT_US_BANNER_IMAGE_SUCCESS,
                    payload: data,
                });
            }
        } catch (error) {
            // console.log("error", error);
            dispatch({
                type: ABOUT_US_BANNER_IMAGE_FAILURE,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
            dispatch(pageLoader(false));
            setErrorAlert(true);
        }
    };

export const getProductBannerImagedatas =
    (setErrorAlert) => async (dispatch) => {
        try {
            const { data } = await authApi.get("/productbanner/active", {
                headers: {
                    Authorization: getAuthorizationHeader(),
                },
            });
            console.log("getBannerImagedatas", data);
            // dispatch(pageLoader(false));
            if (data) {
                dispatch({
                    type: PRODUCT_BANNER_IMAGE_SUCCESS,
                    payload: data,
                });
            }
        } catch (error) {
            // console.log("error", error);
            dispatch({
                type: PRODUCT_BANNER_IMAGE_FAILURE,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
            dispatch(pageLoader(false));
            setErrorAlert(true);
        }
    };

export const getOtp = (setErrorAlert, userEntry, setOtpModalToggle) => async (dispatch) => {
    try {
        const { data } = await authApi.post("/customer/signup/checkout", userEntry, {
            headers: {
                Authorization: getAuthorizationHeader(),
            },
        });
        console.log("getOtp", data);
        if (data) {
            localStorage.setItem("OTP", data.otp);
            setOtpModalToggle(true);
        }
    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: PRODUCT_BANNER_IMAGE_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        dispatch(pageLoader(false));
        setErrorAlert(true);
    }
};
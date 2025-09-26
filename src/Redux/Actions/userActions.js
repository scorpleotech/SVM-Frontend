import { authApi, getAuthorizationHeader } from "../../Api/api";
import {
  BOOK_NOW_SUBMIT_FAILURE,
  BOOK_NOW_SUBMIT_SUCCESS,
  DEALER_LOGIN_FAILURE,
  DEALER_LOGIN_SUCCESS,
  GREEN_CHAMP_SIGNUP_FAILURE,
  GREEN_CHAMP_SIGNUP_SUCCESS,
  PAGE_LOADER,
  SUBSCRIBE_FAILURE,
  SUBSCRIBE_SUCCESS,
} from "../Constants/userConstants";

export const pageLoader = (value) => async (dispatch) => {
  dispatch({
    type: PAGE_LOADER,
    payload: value,
  });
};

export const submitBookNow =
  (setErrorAlert, userEntry, navigate) => async (dispatch) => {
    try {
      const { data } = await authApi.post("/customer/signup", userEntry, {
        headers: {
          Authorization: getAuthorizationHeader(),
        },
      });
      console.log("events list =>", data);
      // dispatch(pageLoader(false));
      if (data) {
        dispatch({
          type: BOOK_NOW_SUBMIT_SUCCESS,
          payload: data,
        });
        await localStorage.setItem("userData", JSON.stringify(data?.customer));
        dispatch(pageLoader(false));
        navigate("/order-summary");
      }
    } catch (error) {
      // console.log("error", error);
      dispatch({
        type: BOOK_NOW_SUBMIT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

export const submitOtp =
  (setErrorAlert, userEntry, type, callback, params) => async (dispatch) => {
    try {
      const { data } = await authApi.post("/customer/signup/verify", userEntry);
      console.log("events list =>", data);
      // dispatch(pageLoader(false));
      if (data) {
        localStorage.setItem("userData", JSON.stringify(data));
        dispatch({
          type: BOOK_NOW_SUBMIT_SUCCESS,
          payload: data,
        });
        dispatch(pageLoader(false));
        if (type === "login") {
          callback(params);
        } else if (type === "bookwithoutPay") {
          callback(true);
        } else {
          callback();
        }
      }
    } catch (error) {
      // console.log("error", error);
      // setShowSuccessModal(false);
      // callback();
      dispatch({
        type: BOOK_NOW_SUBMIT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

export const SubscribeSubmit =
  (userEntry, setErrorAlert, setSuccessAlert, setErrorText) =>
  async (dispatch) => {
    try {
      const { data } = await authApi.post("/subscriber", userEntry);
      console.log("events list =>", data);
      // dispatch(pageLoader(false));
      if (data) {
        dispatch({
          type: SUBSCRIBE_SUCCESS,
          payload: data,
        });
        setSuccessAlert(true);
      }
    } catch (error) {
      // console.log("error", error);
      dispatch({
        type: SUBSCRIBE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
      setErrorText(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

export const makePaymentApi = (setErrorAlert, id) => async (dispatch) => {
  try {
    const { data } = await authApi.post(
      `/payment/pay/${id}`,
      {},
      {
        headers: {
          Authorization: getAuthorizationHeader(),
        },
      }
    );
    if (data) {
      document.write(data);
    }
  } catch (error) {
    dispatch({
      type: SUBSCRIBE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getOrderDetails =
  (setErrorAlert, userEntry) => async (dispatch) => {
    try {
      const { data } = await authApi.post("/customer/signup/verify", {
        headers: {
          Authorization: getAuthorizationHeader(),
        },
      });
      console.log("events list =>", data);
      // dispatch(pageLoader(false));
      if (data) {
        dispatch({
          type: BOOK_NOW_SUBMIT_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      // console.log("error", error);
      dispatch({
        type: BOOK_NOW_SUBMIT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

export const greenChampSubmit =
  (setErrorAlert, setSuccessAlert, userEntry, handleClose, setAadharPop) =>
  async (dispatch) => {
    try {
      const { data } = await authApi.post("/agent/", userEntry);
      console.log("events list =>", data);
      // dispatch(pageLoader(false));
      if (data) {
        handleClose();
        setSuccessAlert(true);
        dispatch({
          type: GREEN_CHAMP_SIGNUP_SUCCESS,
          payload: "Agent Registered Successfully",
        });
      }
    } catch (error) {
      // console.log("error", error);
      handleClose();
      dispatch({
        type: GREEN_CHAMP_SIGNUP_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

export const dealerLoginApi =
  (setErrorAlert, userEntry) => async (dispatch) => {
    try {
      const { data } = await authApi.post("/users/login", userEntry);
      console.log("events list =>", data);
      // dispatch(pageLoader(false));
      if (data) {
        dispatch(pageLoader(false));
        dispatch({
          type: DEALER_LOGIN_SUCCESS,
          payload: "Agent Logged Successfully",
        });
        console.log("dealer data", data);
        const Url = `https://admin.srivarumotors.com/signin?token=${data.access_token}`;
        window.location.href = Url;
      }
    } catch (error) {
      // console.log("error", error);
      dispatch({
        type: DEALER_LOGIN_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

export const customerLoginApi =
  (setErrorAlert, userEntry) => async (dispatch) => {
    try {
      const { data } = await authApi.post("/customer/login", userEntry);
      console.log("events list =>", data);
      // dispatch(pageLoader(false));
      if (data) {
        dispatch(pageLoader(false));
        sessionStorage.setItem("otp_data", JSON.stringify(data?.customer));
        dispatch({
          type: DEALER_LOGIN_SUCCESS,
          payload: "Agent Logged Successfully",
        });
      }
    } catch (error) {
      // console.log("error", error);
      dispatch({
        type: DEALER_LOGIN_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

export const SubmitBecomeaDealerForm =
  (setErrorAlert, setSuccessAlert, userEntry) => async (dispatch) => {
    try {
      const { data } = await authApi.post("/dealer", userEntry);
      console.log("events list =>", data);
      // dispatch(pageLoader(false));
      if (data) {
        dispatch({
          type: DEALER_LOGIN_SUCCESS,
          payload: "Delear Request Submitted Successfully",
        });
        setSuccessAlert(true);
      }
    } catch (error) {
      // console.log("error", error);
      dispatch({
        type: DEALER_LOGIN_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

export const SubmitEnquiryForm =
  (setErrorAlert, userEntry) => async (dispatch) => {
    try {
      const { data } = await authApi.post("/enquiry", userEntry);
      console.log("events list =>", data);
      // dispatch(pageLoader(false));
      if (data) {
        dispatch({
          type: DEALER_LOGIN_SUCCESS,
          payload: "Delear Request Submitted Successfully",
        });
      }
    } catch (error) {
      // console.log("error", error);
      dispatch({
        type: DEALER_LOGIN_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

export const aadharOtpVerify =
  (userEntry, setErrMsg, setOtpSuccess, setOtpLoader) => async (dispatch) => {
    try {
      const { data } = await authApi.post("/agent/aadhaar/verify", userEntry);
      if (data) {
        setOtpSuccess(true);
        setOtpLoader(false);
      }
    } catch (error) {
      console.log(error);
      setOtpLoader(false);
      setErrMsg(
        error.response && error.response.data?.error
          ? error.response.data?.error
          : error.message
      );
    }
  };

export const aadharOtpValidate =
  (userEntry, setValidateErrMsg, setOtpValidateSuccess, handleSubmit) =>
  async (dispatch) => {
    try {
      const { data } = await authApi.post(
        "/agent/aadhaar/verify/otp",
        userEntry
      );
      if (data) {
        handleSubmit();
        setOtpValidateSuccess(true);
      }
    } catch (error) {
      setValidateErrMsg(
        error.response && error.response.data?.message
          ? error.response.data?.message
          : error.message
      );
    }
  };

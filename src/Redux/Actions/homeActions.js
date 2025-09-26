import { authApi, getAuthorizationHeader } from "../../Api/api";
import {
  GET_BANNER_IMAGE_FAILED,
  GET_BANNER_IMAGE_SUCCESS,
  GET_BIKE_VARIANTS_FAILED,
  GET_BIKE_VARIANTS_SUCCESS,
  GET_PARTNERS_LIST_FAILED,
  GET_PARTNERS_LIST_SUCCESS,
  GET_TESTIMONIAL_LIST_FAILED,
  GET_TESTIMONIAL_LIST_SUCCESS,
} from "../Constants/homeConstants";
import { pageLoader } from "./userActions";

export const getBannerImagedatas = (setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get("/banner/active", {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    // console.log("getBannerImagedatas", data);
    // dispatch(pageLoader(false));
    if (data) {
      dispatch({
        type: GET_BANNER_IMAGE_SUCCESS,
        payload: data,
      });
      pageLoader(false);
    }
  } catch (error) {
    // console.log("error", error);
    dispatch({
      type: GET_BANNER_IMAGE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const myOrdersList =
  (id, setOdersList, setErrorAlert) => async (dispatch) => {
    try {
      const { data } = await authApi.get(`/customer/summary/${id}`, {
        headers: {
          Authorization: getAuthorizationHeader(),
        },
      });
      console.log("myOrdersList", data);
      // dispatch(pageLoader(false));
      if (data) {
        setOdersList(data);
      }
    } catch (error) {
      dispatch({
        type: GET_BIKE_VARIANTS_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

  export const CancelMyOrder = (id,user_id,setOrdersList,setErrorAlert) => async (dispatch) => {
   try{
    const { data } = await authApi.post(`/orders/${id}`,{
      status:"Canceled"
    }, {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    if(data){
      dispatch(myOrdersList(user_id, setOrdersList, setErrorAlert));
    }
   }catch(error) {
    dispatch({
      type: GET_BIKE_VARIANTS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
   }
  }

export const GetBikeVariants = (setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get("/bikevarient/active", {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    // console.log("getBikeVariants", data);
    // dispatch(pageLoader(false));
    if (data) {
      dispatch({
        type: GET_BIKE_VARIANTS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    // console.log("error", error);
    dispatch({
      type: GET_BIKE_VARIANTS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getAllTestimonials = (setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get("/testimonial", {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    console.log("getAllTestimonials", data);
    // dispatch(pageLoader(false));
    if (data) {
      dispatch({
        type: GET_TESTIMONIAL_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    // console.log("error", error);
    dispatch({
      type: GET_TESTIMONIAL_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getAllPartnersList = (setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get("/partner/active", {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    console.log("getAllPartnersList", data);
    // dispatch(pageLoader(false));
    if (data) {
      dispatch({
        type: GET_PARTNERS_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    // console.log("error", error);
    dispatch({
      type: GET_PARTNERS_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

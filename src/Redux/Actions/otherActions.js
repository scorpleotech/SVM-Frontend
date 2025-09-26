import { api, authApi, getAuthorizationHeader } from "../../Api/api";
import {
  ADD_CUSTOMER_DELEVIERY_ADDRESS_FAILED,
  ADD_CUSTOMER_DELEVIERY_ADDRESS_SUCCESS,
  ALL_CITY_FAILED,
  ALL_CITY_SUCCESS,
  ALL_STATES_FAILED,
  ALL_STATES_SUCCESS,
  GET_BLOGS_LIST_FAILED,
  GET_BLOGS_LIST_SUCCESS,
  GET_EVENTS_LIST_FAILED,
  GET_EVENTS_LIST_SUCCESS,
  GET_FAQ_LIST_FAILED,
  GET_FAQ_LIST_SUCCESS,
  GET_NEWS_LIST_FAILED,
  GET_NEWS_LIST_SUCCESS,
  GET_ONE_BLOG_DETAILS_FAILED,
  GET_ONE_BLOG_DETAILS_SUCCESS,
  GET_ONE_NEWS_DETAILS_SUCCESS,
  GET_ORDER_DATAS_FAILED,
  GET_ORDER_DATAS_SUCCESS,
  GET_TERMS_CONDITION_FAILED,
  GET_TERMS_CONDITION_SUCCESS,
  TCO_BIKES_LIST_FAILED,
  TCO_BIKES_LIST_SUCCESS,
} from "../Constants/otherConstants";
import {
  GET_ACCOSORIES_BY_COUPON,
  GET_ACCOSORIES_BY_COUPON_FAILED,
} from "../Constants/userConstants";
import { pageLoader } from "./userActions";

export const getAllEventsList = (setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get("/event", {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    console.log("events list =>", data);
    // dispatch(pageLoader(false));
    if (data) {
      dispatch({
        type: GET_EVENTS_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    // console.log("error", error);
    dispatch({
      type: GET_EVENTS_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getAllBlogsList = (setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get("/blog", {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });

    // dispatch(pageLoader(false));
    if (data) {
      dispatch({
        type: GET_BLOGS_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    // console.log("error", error);
    dispatch({
      type: GET_BLOGS_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getOneBlogDetails = (id, setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get(`/blog/${id}`, {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    console.log("events list =>", data);
    // dispatch(pageLoader(false));
    if (data) {
      dispatch({
        type: GET_ONE_BLOG_DETAILS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    // console.log("error", error);
    dispatch({
      type: GET_ONE_BLOG_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getAllNewsList = (setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get(`/news?tags=&topics`, {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    console.log("events list =>", data);
    // dispatch(pageLoader(false));
    if (data) {
      dispatch({
        type: GET_NEWS_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    // console.log("error", error);
    dispatch({
      type: GET_NEWS_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getOneNewsDetails = (id, setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get(`/news/${id}`, {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    console.log("events list =>", data);
    // dispatch(pageLoader(false));
    if (data) {
      dispatch({
        type: GET_ONE_NEWS_DETAILS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    // console.log("error", error);
    dispatch({
      type: GET_NEWS_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const GetOrderDatas = (setErrorAlert, id, type) => async (dispatch) => {
  try {
    const { data } = await authApi.get(`customer/orders/${id}?type=${type}`, {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    if (data) {
      console.log(data, "Before Updae");
      dispatch({
        type: GET_ORDER_DATAS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    //  console.log("error", error);
    dispatch({
      type: GET_ORDER_DATAS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const addCustomerDeleveryAddress =
  (userEntry, setErrorAlert, setSuccessAlert, navigate) => async (dispatch) => {
    try {
      const { data } = await authApi.put("/customer/address", userEntry);
      console.log("delevery Address", data);
      dispatch(pageLoader(false));
      if (data) {
        setSuccessAlert(true);
        dispatch({
          type: ADD_CUSTOMER_DELEVIERY_ADDRESS_SUCCESS,
          payload: "Address added successfully",
        });
        navigate("/payment-method");
      }
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: ADD_CUSTOMER_DELEVIERY_ADDRESS_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

export const getTermsandConditions = (setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get("/footer");
    console.log("delevery Address", data);
    if (data) {
      const termsandConditions = data.find(
        (item) => item.title === "TERMS AND CONDITIONS"
      );
      const policies = data.find((item) => item.title === "Privacy Policy");
      const refund = data.find(
        (item) => item.title === "Refund and Cancellation Policy"
      );
      const career = data.find(
        (item) => item.title === "Career's Perks and Location"
      );
      const cookies = data.find((item) => item.title === "Cookies Policy");
      console.log(
        "Terms",
        termsandConditions,
        "/n Policies",
        policies,
        "/n Refund",
        refund
      );
      dispatch({
        type: GET_TERMS_CONDITION_SUCCESS,
        payload: [termsandConditions, policies, refund, career, cookies],
      });
    }
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: GET_TERMS_CONDITION_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getFaqList = (setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get("/faq");
    console.log("delevery Address", data);
    if (data) {
      dispatch({
        type: GET_FAQ_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: GET_FAQ_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getTcoList = (setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get("/tco");
    console.log("delevery Address", data);
    if (data) {
      dispatch({
        type: TCO_BIKES_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: TCO_BIKES_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getAccessories = (setErrorAlert, coupon) => async (dispatch) => {
  try {
    const { data } = await authApi.get(`/accessories/coupon/${coupon}`);
    console.log("delevery Address", data);
    if (data) {
      dispatch({
        type: GET_ACCOSORIES_BY_COUPON,
        payload: data,
      });
    }
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: GET_ACCOSORIES_BY_COUPON_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getNewStateList = (setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get(`/cities//state/list`);
    if (data) {
      dispatch({
        type: ALL_STATES_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: ALL_STATES_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const getNewCityList = (setErrorAlert, state) => async (dispatch) => {
  try {
    const { data } = await authApi.get(`/cities/${state}`);
    if (data) {
      dispatch({
        type: ALL_CITY_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: ALL_CITY_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const setVisitorsCount =
  (userEntry, setErrorAlert) => async (dispatch) => {
    try {
      const { data } = await api.post(`/websitecount`, userEntry);
      console.log("delevery Address", data);
      // if (data) {
      //     dispatch({
      //         type: GET_ACCOSORIES_BY_COUPON,
      //         payload: data
      //     })
      // }
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: GET_ACCOSORIES_BY_COUPON_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

export const getVisitorsCount =
  (setCount, setErrorAlert) => async (dispatch) => {
    try {
      const { data } = await api.get(`/websitecount`);
      console.log("delevery Address", data);
      setCount(data.count);
      // if (data) {
      //     dispatch({
      //         type: GET_ACCOSORIES_BY_COUPON,
      //         payload: data
      //     })
      // }
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: GET_ACCOSORIES_BY_COUPON_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

  
export const getGallery = (setMyGallery, _type) => async (dispatch) => {
  try {
    const { data } = await authApi.get(`/gallery?file_type=${_type == 0 ? "image":"video"}`);
    console.log("delevery Address", data);
    if (data) {
      setMyGallery(data);
    }
  } catch (error) {
    setMyGallery([]);
    dispatch(pageLoader(false))
  }
};
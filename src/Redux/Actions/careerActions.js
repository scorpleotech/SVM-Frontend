import { authApi, getAuthorizationHeader } from "../../Api/api";
import {
  GET_ALL_CAREERS_LIST_FAILED,
  GET_ALL_CAREERS_LIST_SUCCESS,
  GET_ONE_CAREER_DETAILS_FAILED,
  GET_ONE_CAREER_DETAILS_SUCCESS,
} from "../Constants/careerConstants";
import { pageLoader } from "./userActions";

export const getCareersList =
  (setErrorAlert, search, jobType, location) => async (dispatch) => {
    try {
      const { data } = await authApi.get(
        `/career?title=${search ? search : ""}&jobType=${
          jobType && jobType !== "0" ? jobType : ""
        }&location=${location && location !== "0" ? location : ""}`,
        {
          headers: {
            Authorization: getAuthorizationHeader(),
          },
        }
      );
      console.log("Carreer list =>", data);
      // dispatch(pageLoader(false));
      if (data) {
        dispatch({
          type: GET_ALL_CAREERS_LIST_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      // console.log("error", error);
      dispatch({
        type: GET_ALL_CAREERS_LIST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

export const getOneCareerDetails = (id, setErrorAlert) => async (dispatch) => {
  try {
    const { data } = await authApi.get(`/career/${id}`, {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    console.log("Carreer list =>", data);
    // dispatch(pageLoader(false));
    if (data) {
      dispatch({
        type: GET_ONE_CAREER_DETAILS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    // console.log("error", error);
    dispatch({
      type: GET_ONE_CAREER_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(pageLoader(false));
    setErrorAlert(true);
  }
};

export const ApplyForJob =
  (setErrorAlert, userEntry, setSuccessAlert) => async (dispatch) => {
    try {
      const { data } = await authApi.post("/career-application", userEntry, {
        headers: {
          Authorization: getAuthorizationHeader(),
        },
      });
      console.log("data", data);
      if (data) {
        setSuccessAlert(true);
      }
    } catch (error) {
      dispatch({
        type: GET_ALL_CAREERS_LIST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(pageLoader(false));
      setErrorAlert(true);
    }
  };

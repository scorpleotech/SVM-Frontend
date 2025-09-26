import { authApi, getAuthorizationHeader } from "../../Api/api";
import { GET_ACCESSORIES_LIST_FAILURE, GET_ACCESSORIES_LIST_SUCCESS, GET_CATEGORY_LIST_FAILURE, GET_CATEGORY_LIST_SUCCESS, GET_CITIES_LIST_FAILURE, GET_CITIES_LIST_SUCCESS, GET_SHOWROOM_LIST_FAILURE, GET_SHOWROOM_LIST_SUCCESS, GET_STORE_LIST_FAILURE, GET_STORE_LIST_SUCCESS, SUBMIT_DEMODRIVE_FAILURE, SUBMIT_DEMODRIVE_SUCCESS, SUBMIT_VISIT_US_FAILURE, SUBMIT_VISIT_US_SUCCESS } from "../Constants/demoDriveConstants";
import { pageLoader } from "./userActions";

export const getCategoriesList =
    (setErrorAlert) => async (dispatch) => {
        try {
            const { data } = await authApi.get("/categories", {
                headers: {
                    Authorization: getAuthorizationHeader(),
                },
            });
            console.log("getCategoriesData", data);
            // dispatch(pageLoader(false));
            if (data) {
                dispatch({
                    type: GET_CATEGORY_LIST_SUCCESS,
                    payload: data,
                });
            }
        } catch (error) {
            // console.log("error", error);
            dispatch({
                type: GET_CATEGORY_LIST_FAILURE,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
            dispatch(pageLoader(false));
            setErrorAlert(true);
        }
    };

export const getStoreList = (setErrorAlert, storeType, pincode) => async (dispatch) => {
    try {
        const { data } = await authApi.get(`/store/data?pincode=${pincode}&store_type=${storeType}`, {
            headers: {
                Authorization: getAuthorizationHeader(),
            },
        });
        console.log("getStoreData", data);
        dispatch(pageLoader(false));
        if (data) {
            dispatch({
                type: GET_STORE_LIST_SUCCESS,
                payload: data,
            });
        }
    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: GET_STORE_LIST_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        dispatch(pageLoader(false));
        setErrorAlert(true);
    }
}

export const submitTestDrive = (setErrorAlert, setSuccessAlert, userEntry) => async (dispatch) => {
    try {
        const { data } = await authApi.post("/testdrive", userEntry);
        console.log("submitTestDrive", data);
        dispatch(pageLoader(false));
        if (data) {
            setSuccessAlert(true);
            dispatch({
                type: SUBMIT_DEMODRIVE_SUCCESS,
                payload: "Your Request Has been submitted successfully. We will get back to you shortly.",
            });
        }
    } catch (error) {
        console.log("error", error);
        dispatch({
            type: SUBMIT_DEMODRIVE_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        dispatch(pageLoader(false));
        setErrorAlert(true);
    }
}

export const submitVisitUsForm = (setErrorAlert, setSuccessAlert, userEntry) => async (dispatch) => {
    try {
        const { data } = await authApi.post("/visitus", userEntry);
        console.log("submitTestDrive", data);
        dispatch(pageLoader(false));
        if (data) {
            setSuccessAlert(true);
            dispatch({
                type: SUBMIT_VISIT_US_SUCCESS,
                payload: "Your Request Has been submitted successfully. We will get back to you shortly.",
            });
        }
    } catch (error) {
        console.log("error", error);
        dispatch({
            type: SUBMIT_VISIT_US_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        dispatch(pageLoader(false));
        setErrorAlert(true);
    }
}

export const getShowRoomList = (setErrorAlert, city, storeType) => async (dispatch) => {
    try {
        const { data } = await authApi.get(`/store/locator/search?city=${city}&store_type=${storeType}`);
        console.log("submitTestDrive", data);
        if (data) {
            dispatch({
                type: GET_SHOWROOM_LIST_SUCCESS,
                payload: data,
            });
        }
    } catch (error) {
        console.log("error", error);
        dispatch({
            type: GET_SHOWROOM_LIST_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        dispatch(pageLoader(false));
        setErrorAlert(true);
    }
}

export const getCitiesList = (setErrorAlert) => async (dispatch) => {
    try {
        const { data } = await authApi.get(`/store/data/cities`);
        console.log("citiesListGot", data);
        if (data) {
            dispatch({
                type: GET_CITIES_LIST_SUCCESS,
                payload: data,
            });
        }
    } catch (error) {
        console.log("error", error);
        dispatch({
            type: GET_CITIES_LIST_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        dispatch(pageLoader(false));
        setErrorAlert(true);
    }
}

export const getAccessoriesList = (setErrorAlert) => async (dispatch) => {
    try {
        const { data } = await authApi.get(`/accessories/active`);
        console.log("accessoriesListGot", data);
        if (data) {
            dispatch({
                type: GET_ACCESSORIES_LIST_SUCCESS,
                payload: data,
            });
        }
    } catch (error) {
        console.log("error", error);
        dispatch({
            type: GET_ACCESSORIES_LIST_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        dispatch(pageLoader(false));
        setErrorAlert(true);
    }
}
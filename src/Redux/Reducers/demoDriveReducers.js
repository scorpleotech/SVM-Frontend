import { GET_ACCESSORIES_LIST_FAILURE, GET_ACCESSORIES_LIST_SUCCESS, GET_CATEGORY_LIST_FAILURE, GET_CATEGORY_LIST_SUCCESS, GET_CITIES_LIST_FAILURE, GET_CITIES_LIST_SUCCESS, GET_SHOWROOM_LIST_FAILURE, GET_SHOWROOM_LIST_SUCCESS, GET_STORE_LIST_FAILURE, GET_STORE_LIST_SUCCESS, SUBMIT_DEMODRIVE_FAILURE, SUBMIT_DEMODRIVE_SUCCESS, SUBMIT_VISIT_US_FAILURE, SUBMIT_VISIT_US_SUCCESS } from "../Constants/demoDriveConstants";

const initialState = {
    storeList: [],
    categoryList: [],
    showroomList: [],
    citiesList: [],
    accessoriesList: [],
    success: null,
    error: null,
};

export const demoDriveReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_LIST_SUCCESS:
            return { ...state, categoryList: action.payload, error: null };
        case GET_CATEGORY_LIST_FAILURE:
            return { ...state, error: action.payload, success: null };
        case SUBMIT_DEMODRIVE_SUCCESS:
            return { ...state, success: action.payload, error: null };
        case SUBMIT_DEMODRIVE_FAILURE:
            return { ...state, error: action.payload, success: null };
        case GET_STORE_LIST_SUCCESS:
            return { ...state, storeList: action.payload, error: null };
        case GET_STORE_LIST_FAILURE:
            return { ...state, error: action.payload, success: null };
        case SUBMIT_VISIT_US_SUCCESS:
            return { ...state, success: action.payload, error: null };
        case SUBMIT_VISIT_US_FAILURE:
            return { ...state, error: action.payload, success: null };
        case GET_SHOWROOM_LIST_SUCCESS:
            return { ...state, showroomList: action.payload, error: null };
        case GET_SHOWROOM_LIST_FAILURE:
            return { ...state, error: action.payload, success: null };
        case GET_CITIES_LIST_SUCCESS:
            return { ...state, citiesList: action.payload, error: null };
        case GET_CITIES_LIST_FAILURE:
            return { ...state, error: action.payload, success: null };
        case GET_ACCESSORIES_LIST_SUCCESS:
            return { ...state, accessoriesList: action.payload, error: null };
        case GET_ACCESSORIES_LIST_FAILURE:
            return { ...state, error: action.payload, success: null };
        default:
            return { ...state };
    }
};

import { GET_BANNER_IMAGE_FAILED, GET_BANNER_IMAGE_SUCCESS, GET_BIKE_VARIANTS_FAILED, GET_BIKE_VARIANTS_SUCCESS, GET_PARTNERS_LIST_FAILED, GET_PARTNERS_LIST_SUCCESS, GET_TESTIMONIAL_LIST_FAILED, GET_TESTIMONIAL_LIST_SUCCESS } from "../Constants/homeConstants";


const initialState = {
    bannerData: null,
    error: null,
    testimonialList: [],
    bikeVariants: [],
    partnersList: [],
};

export const homeReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNER_IMAGE_SUCCESS:
            return { ...state, bannerData: action.payload };
        case GET_BANNER_IMAGE_FAILED:
            return { ...state, error: action.payload };
        case GET_BIKE_VARIANTS_SUCCESS:
            return { ...state, bikeVariants: action.payload };
        case GET_BIKE_VARIANTS_FAILED:
            return { ...state, error: action.payload };
        case GET_TESTIMONIAL_LIST_SUCCESS:
            return { ...state, testimonialList: action.payload };
        case GET_TESTIMONIAL_LIST_FAILED:
            return { ...state, error: action.payload };
        case GET_PARTNERS_LIST_SUCCESS:
            return { ...state, partnersList: action.payload };
        case GET_PARTNERS_LIST_FAILED:
            return { ...state, error: action.payload };
        default:
            return { ...state };
    }
};

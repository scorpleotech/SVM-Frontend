import { ABOUT_US_BANNER_IMAGE_FAILURE, ABOUT_US_BANNER_IMAGE_SUCCESS, PRODUCT_BANNER_IMAGE_FAILURE, PRODUCT_BANNER_IMAGE_SUCCESS } from "../Constants/aboutUsConstants";

const initialState = {
    aboutUsBannerImage: [],
    productPageBannerImage: [],
    error: null,
    success: null,
};

export const aboutUsReducers = (state = initialState, action) => {
    switch (action.type) {
        case ABOUT_US_BANNER_IMAGE_SUCCESS:
            return { ...state, aboutUsBannerImage: action.payload };
        case ABOUT_US_BANNER_IMAGE_FAILURE:
            return { ...state, error: action.payload };
        case PRODUCT_BANNER_IMAGE_SUCCESS:
            return { ...state, productPageBannerImage: action.payload };
        case PRODUCT_BANNER_IMAGE_FAILURE:
            return { ...state, error: action.payload };
        default:
            return { ...state };
    }
};

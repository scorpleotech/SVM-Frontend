import {
  BOOK_NOW_SUBMIT_FAILURE,
  DEALER_LOGIN_FAILURE,
  DEALER_LOGIN_SUCCESS,
  GREEN_CHAMP_SIGNUP_FAILURE,
  GREEN_CHAMP_SIGNUP_SUCCESS,
  MAKE_PAYMENT_SUCCESS,
  PAGE_LOADER,
  SUBSCRIBE_FAILURE,
  SUBSCRIBE_SUCCESS,
} from "../Constants/userConstants";

const initialState = {
  loading: false,
  error: null,
  success: null,
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_LOADER:
      return { ...state, loading: action.payload };
    case GREEN_CHAMP_SIGNUP_SUCCESS:
      return { ...state, success: action.payload };
    case GREEN_CHAMP_SIGNUP_FAILURE:
      return { ...state, error: action.payload };
    case DEALER_LOGIN_SUCCESS:
      return { ...state, success: action.payload };
    case DEALER_LOGIN_FAILURE:
      return { ...state, error: action.payload };
    case SUBSCRIBE_SUCCESS:
      return { ...state, success: action.payload };
    case BOOK_NOW_SUBMIT_FAILURE:
      return { ...state, error: action.payload };
    case SUBSCRIBE_FAILURE:
      return { ...state, error: action.payload };
    case MAKE_PAYMENT_SUCCESS:
      return { ...state, success: action.payload };
    default:
      return { ...state };
  }
};

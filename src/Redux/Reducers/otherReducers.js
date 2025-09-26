import {
  ADD_CUSTOMER_DELEVIERY_ADDRESS_FAILED,
  ADD_CUSTOMER_DELEVIERY_ADDRESS_SUCCESS,
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

const initialState = {
  error: null,
  success: null,
  orderDetails: null,
  oneAccessory: null,
  blogsList: [],
  eventsList: [],
  newsList: [],
  faqList: [],
  allStates: [],
  allCity:[],
  tcoBikkes: null,
  terms: null,
  policy: null,
  refund: null,
  oneNews: null,
  oneBlog: null,
  carrerInfo: null,
};

export const otherReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_LIST_SUCCESS:
      return { ...state, eventsList: action.payload };
    case GET_EVENTS_LIST_FAILED:
      return { ...state, error: action.payload };
    case GET_NEWS_LIST_SUCCESS:
      return { ...state, newsList: action.payload };
    case GET_NEWS_LIST_FAILED:
      return { ...state, error: action.payload };
    case GET_BLOGS_LIST_SUCCESS:
      return { ...state, blogsList: action.payload };
    case GET_BLOGS_LIST_FAILED:
      return { ...state, error: action.payload };
    case GET_ORDER_DATAS_SUCCESS:
      return { ...state, orderDetails: action.payload };
    case GET_ORDER_DATAS_FAILED:
      return { ...state, error: action.payload };
    case ADD_CUSTOMER_DELEVIERY_ADDRESS_SUCCESS:
      return { ...state, success: action.payload };
    case ADD_CUSTOMER_DELEVIERY_ADDRESS_FAILED:
      return { ...state, error: action.payload };
    case GET_TERMS_CONDITION_SUCCESS:
      return {
        ...state,
        terms: action.payload[0],
        policy: action.payload[1],
        refund: action.payload[2],
        carrerInfo: action.payload[3],
        cookies: action.payload[4],
      };
    case GET_TERMS_CONDITION_FAILED:
      return { ...state, error: action.payload };
    case GET_FAQ_LIST_SUCCESS:
      return { ...state, faqList: action.payload };
    case GET_FAQ_LIST_FAILED:
      return { ...state, error: action.payload };
    case TCO_BIKES_LIST_SUCCESS:
      return { ...state, tcoBikkes: action.payload };
    case TCO_BIKES_LIST_FAILED:
      return { ...state, error: action.payload };
    case GET_ACCOSORIES_BY_COUPON:
      return { ...state, oneAccessory: action.payload };
    case GET_ACCOSORIES_BY_COUPON_FAILED:
      return { ...state, oneAccessory: null };
    case GET_ONE_NEWS_DETAILS_SUCCESS:
      return { ...state, oneNews: action.payload };
    case GET_ONE_BLOG_DETAILS_SUCCESS:
        return { ...state, oneBlog: action.payload };
    case ALL_STATES_SUCCESS:
        return { ...state, allStates: action.payload };
    case ALL_CITY_SUCCESS:
          return { ...state, allCity: action.payload };
    default:
      return { ...state };
  }
};

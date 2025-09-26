import {
  GET_ALL_CAREERS_LIST_FAILED,
  GET_ALL_CAREERS_LIST_SUCCESS,
  GET_ONE_CAREER_DETAILS_FAILED,
  GET_ONE_CAREER_DETAILS_SUCCESS,
} from "../Constants/careerConstants";

const initialState = {
  error: null,
  success: null,
  careerList: [],
  oneCareer: null,
};

export const careerReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CAREERS_LIST_SUCCESS:
      return { ...state, careerList: action.payload, error: null };
    case GET_ALL_CAREERS_LIST_FAILED:
      return { ...state, error: action.payload };
    case GET_ONE_CAREER_DETAILS_SUCCESS:
      return { ...state, oneCareer: action.payload, error: null };
    case GET_ONE_CAREER_DETAILS_FAILED:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

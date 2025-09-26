import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { homeReducers } from "./Reducers/homeReducer";
import { aboutUsReducers } from "./Reducers/aboutUsReducers";
import { userReducers } from "./Reducers/userReducers";
import { demoDriveReducers } from "./Reducers/demoDriveReducers";
import { otherReducers } from "./Reducers/otherReducers";
import { careerReducers } from "./Reducers/careerReducers";

const reducer = combineReducers({
  userLogin: userReducers,
  homeDatas: homeReducers,
  aboutUsDatas: aboutUsReducers,
  demoDriveDatas: demoDriveReducers,
  otherDatas: otherReducers,
  careerDatas: careerReducers,
});

// const userInfoFromStorage = localStorage.getItem("userToken")
//   ? JSON.parse(localStorage.getItem("userToken"))
//   : null;

const initialState = {
  pageLoader: false,
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

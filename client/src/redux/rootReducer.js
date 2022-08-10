import { combineReducers } from "redux";
import statusReducer from "../redux/status/statusReducers";

const reducers = combineReducers({
  status: statusReducer,
});

export default reducers;

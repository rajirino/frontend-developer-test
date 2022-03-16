import { combineReducers } from "redux";
import devicePageReducer from "./device/reducers";

export default () => combineReducers({

    device: devicePageReducer

});
import { combineReducers } from "redux";
import IndexReducer from "./IndexReducers";

const RootReducer = combineReducers({
   index: IndexReducer,
});

export default RootReducer;

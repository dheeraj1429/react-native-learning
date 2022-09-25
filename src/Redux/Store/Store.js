import { createStore } from "redux";
import RootReducer from "../Reducers/Index";

const store = createStore(RootReducer);

export default store;

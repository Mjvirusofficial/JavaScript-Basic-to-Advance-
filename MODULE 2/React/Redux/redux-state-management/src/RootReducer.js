import { combineReducers } from "redux";
import IncrementReducer from "./Reducer/IncrementReducer";
import SubmitReducer from "./Reducer/SubmitReducer";

const allReducer = combineReducers({
    IncrementReducer,SubmitReducer
})

export default allReducer;
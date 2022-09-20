import PlusMinusReducer from "./Reducer/PlusMinusReducer";
import FormReducer from "./Reducer/FormReducer";
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    PlusMinusReducer, FormReducer
    
})

export default  rootReducer;
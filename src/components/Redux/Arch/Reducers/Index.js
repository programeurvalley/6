import countReducer from "./Counter";
import LoggedReducer from "./Lock";

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    countReducer ,
    LoggedReducer
})

export default allReducers
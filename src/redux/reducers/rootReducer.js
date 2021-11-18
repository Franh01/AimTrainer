import { combineReducers } from "redux";
import diffReducer from './diffReducer';
import contadorReducer from './contadorReducer';
import targetStatusReducer from './targetStatusReducer'
import timerReducer from "./timerReducer";


const rootReducers = combineReducers({
    diffReducer,    
    contadorReducer,
    targetStatusReducer,
    timerReducer
})

export default rootReducers;
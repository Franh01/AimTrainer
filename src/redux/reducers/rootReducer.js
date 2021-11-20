import { combineReducers } from "redux";
import diffReducer from './diffReducer';
import contadorReducer from './contadorReducer';
import targetStatusReducer from './targetStatusReducer'
import timerReducer from "./timerReducer";
import gameStateReducer from './gameStateReducer'
import switchReducer from './switchReducer'


const rootReducers = combineReducers({
    diffReducer,    
    contadorReducer,
    targetStatusReducer,
    timerReducer,
    gameStateReducer,
    switchReducer
})

export default rootReducers;
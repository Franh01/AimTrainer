import { combineReducers } from "redux";
import diffReducer from './diffReducer';
import contadorReducer from './contadorReducer';


const rootReducers = combineReducers({
    diffReducer,    
    contadorReducer
})

export default rootReducers;
import { SET_SWITCH_STATE } from "./actionTypes"

export const setSwitchState = (value) => {
    return {
        type: SET_SWITCH_STATE,
        payload: value
    }
}
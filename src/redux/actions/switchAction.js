import { SET_SWITCH_STATE } from "./actionTypes"

const setSwitchState = (value) => {
    return {
        type: SET_SWITCH_STATE,
        payload: value
    }
}

export default setSwitchState;
import { DIFF_BUTTON_ACTION } from "./actionTypes"

export const diffButtonAction = (value) => {
    return {
        type: DIFF_BUTTON_ACTION,
        payload: value
    }
}
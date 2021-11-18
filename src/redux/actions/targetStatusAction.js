import { TARGET_STATE_ACTION } from "./actionTypes"

export const targetStateAction = (boolean) => {
    return {
        type: TARGET_STATE_ACTION,
        payload: boolean
    }
}
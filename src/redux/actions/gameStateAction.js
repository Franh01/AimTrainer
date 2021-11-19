import { SET_GAME_STATE } from "./actionTypes"

export const setGameState = (value) => {
    return {
        type: SET_GAME_STATE,
        payload: value
    }
}
import { CONTADOR_RESET, SUMA_CONTADOR } from "./actionTypes"


export const suma_contador_action = () => {
    return {
        type: SUMA_CONTADOR
    }
}

export const contador_reset = () => {
    return {
        type: CONTADOR_RESET
    }
}
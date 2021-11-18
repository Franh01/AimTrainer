import { RESTA_CONTADOR, SUMA_CONTADOR } from "./actionTypes"


export const suma_contador_action = () => {
    return {
        type: SUMA_CONTADOR
    }
}

export const resta_contador_action = () => {
    return {
        type: RESTA_CONTADOR
    }
}
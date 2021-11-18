import { ACTIVAR_CRONOMETRO, DEFINIR_TIEMPO, DESACTIVAR_CRONOMETRO } from "./actionTypes"


export const definirTiempo = (tiempo) => {
    return {
        type: DEFINIR_TIEMPO,
        payload: tiempo
    }
}

export const activarCronometro = () => {
    return {
        type: ACTIVAR_CRONOMETRO
    }
}

export const desactivarCronometro = () => {
    return {
        type: DESACTIVAR_CRONOMETRO
    }
}
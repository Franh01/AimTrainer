import { ACTIVAR_CRONOMETRO, DEFINIR_TIEMPO, DESACTIVAR_CRONOMETRO } from "../actions/actionTypes";


const initial_state = {
    tiempo: 60
};

const timerReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ACTIVAR_CRONOMETRO: {
            return {
                tiempo: state.tiempo - 1
            }
        }
        case DEFINIR_TIEMPO: {
            return {
                tiempo: action.payload
            }        
        }
        case DESACTIVAR_CRONOMETRO: {
            return {
                tiempo: 'hola'
            }
        }
        default:
            return state;
    }
}

export default timerReducer;
import { CONTADOR_RESET, SUMA_CONTADOR } from "../actions/actionTypes";


const initial_state = {
    contador: 0
};

const contadorReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SUMA_CONTADOR: {
            return {
                contador: state.contador + 1
            }
        }
        case CONTADOR_RESET: {
            return {
                contador: state.contador * 0
            }
        }
        default:
            return state;
    }
}

export default contadorReducer;
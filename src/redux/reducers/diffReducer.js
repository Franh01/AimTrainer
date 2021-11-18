import { DIFF_BUTTON_ACTION } from "../actions/actionTypes";

const initial_state = {
    diffSegs: 1000
};

const difficulty = (state = initial_state, action) => {
    switch (action.type) {
        case DIFF_BUTTON_ACTION: 
            return {
                diffSegs: action.payload
            }
        default:
            return state;
    }
}

export default difficulty;
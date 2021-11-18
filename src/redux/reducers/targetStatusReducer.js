import { TARGET_STATE_ACTION } from "../actions/actionTypes";

const initial_state = {
    shown: 3
};

const targetStatusReducer = (state = initial_state, action) => {
    switch (action.type) {
        case TARGET_STATE_ACTION: 
            return {
                shown: action.payload
            }
        default:
            return state;
    }
}

export default targetStatusReducer;

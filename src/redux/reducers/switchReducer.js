import { SET_SWITCH_STATE } from "../actions/actionTypes";

const initial_state = {
    theme: 'light'
};

const switchReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_SWITCH_STATE:
            return {
                theme: action.payload
            }
        default:
            return state;
    }
}

export default switchReducer;
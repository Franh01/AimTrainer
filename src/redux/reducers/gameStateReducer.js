import {SET_GAME_STATE} from '../actions/actionTypes'

const initial_state = {
    gameState: ''
};

const gameStatus = (state = initial_state, action) => {
    switch (action.type) {
        case SET_GAME_STATE:
            return {
                gameState: action.payload
            }
        default:
            return state;
    }
}

export default gameStatus;
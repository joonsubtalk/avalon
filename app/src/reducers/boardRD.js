import { SET_PLAYER_COUNT } from '../config/actionTypes';

export const defaultState = {
    playerCount : 5,
    quest : null,
    hasGameStarted : false
};

function boardRD(state = defaultState , action ) {

	switch (action.type) {
		case SET_PLAYER_COUNT: {
			return Object.assign({}, state, {
				playerCount : action.payload
			});
		}
		default: {
			return state;
		}
	}
}

export default boardRD;

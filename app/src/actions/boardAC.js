import { SET_PLAYER_COUNT } from '../config/actionTypes';

export const setPlayerCount = (payload) => {

	return {
		type : SET_PLAYER_COUNT,
		payload
	};

};

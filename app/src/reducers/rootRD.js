import { combineReducers } from 'redux';
import boardRD from './boardRD';

const rootReducer = combineReducers({
	board : boardRD
});

export default rootReducer;

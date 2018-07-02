import { combineReducers } 	from 'redux';
import { 
	inventoryReducer
} 							from './inventoryReducers';
export default combineReducers({
	inventory		: inventoryReducer,
})
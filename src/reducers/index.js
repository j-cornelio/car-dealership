import { combineReducers } from 'redux';
import { 
	inventoryReducer
} 							from './inventoryReducers';
export default combineReducers({
	inventory		: inventoryReducer,
})

//gets created as store, passed to Provider then connected - passed state as prop
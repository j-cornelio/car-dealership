import { combineReducers } from 'redux';
import { 
	inventoryReducer, 
	isAmountLoading, 
} 							from './inventoryReducers';
export default combineReducers({
	inventory		: inventoryReducer,
	isAmountLoading,
})

//gets created as store, passed to Provider then connected - passed state as prop
import { combineReducers } from 'redux';
import { 
	inventoryReducer, 
	isAmountLoading, 
	validate,
	amountSet 
} 							from './inventoryReducers';
export default combineReducers({
	inventory		: inventoryReducer,
	rentAmount 		: amountSet,
	isAmountLoading,
})

//gets created as store, passed to Provider then connected - passed state as prop
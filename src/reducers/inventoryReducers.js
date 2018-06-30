import * as TYPES from '../actions/TYPES';

const initalState = {
	inventory: [],
	loading: false,
};

export const inventoryReducer = (state=initalState, action={}) => {
	switch(action.type){

	    case TYPES.POST_INVENTORY:
	      return {
	        ...state,
	        uploading: true,
	      }

	    case TYPES.UPLOAD_PROD_FULFILLED:
	      return {
	        ...state,
	        inventory: [
	        	...state.inventory,
	        	action.payload
	        ],
	        uploading: false,
	      }

		default: 
			return state;
	}
};

export const isAmountLoading = (state=[], action) => {
	switch(action.type){
		case 'AMOUNT_IS_LOADING':
			return action.isAmountLoading;
			
		default:
			return state;
	}
};


export const fetchUserFulfilled = (user) => { 
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: user
  }
};

export const show = (user) => { 
  return {
    type: 'SHOW'
  }
};

export function clear() {
  return {
    type: 'CLEAR_USERS'
  }
}
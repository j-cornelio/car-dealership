import * as TYPES from '../actions/TYPES';

const initalState = {
	inventory: [],
	loading: false,
};

export const inventoryReducer = (state=initalState, action={}) => {
	switch(action.type){
	    case TYPES.FETCH_USER:
	      return {
	        ...state,
	        loading: true
	      }

	    case TYPES.UPLOAD_PROD_FULFILLED:
	      return {
	        ...state,
	        uploaded: true,
	        data: action.data
	      }

	    case TYPES.FETCH_USER_FULFILLED:
	      return {
	        ...state,
	        inventory: [
	        		action.payload,
	        ],
	        loading: false
	      }

		case 'FETCH_INVENTORY':
			return state;

		case 'ADD_INVENTORY':
			return state;

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
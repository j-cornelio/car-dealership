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

	    case TYPES.POST_PROD_FULFILLED:
	      return {
	        ...state,
	        inventory: [
	        	...state.inventory,
	        	action.payload
	        ],
	        uploading: false,
	      }

	    case TYPES.FETCH_INVENTORY:
	      return {
	        ...state,
	        loading: true,
	      }

	    case TYPES.FETCH_INVENTORY_FULFILLED:
	      return {
	        ...state,
	        inventory: [
	        	...state.inventory,
	        	...action.payload
	        ],
	        loading: false,
	      }

		default: 
			return state;
	}
};

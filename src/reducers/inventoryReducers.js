import * as TYPES from '../actions/TYPES';

const initalState = {
//	inventory: [],
	inventory: [
		{ id: 0, manufacturer: 'Ford', make: 'Mustang', model: 'GT', year: 2017 },
		{ id: 1, manufacturer: 'Toyota', make: 'Rav4', model: 'EX', year: 2018 }
	],
	loading: false,
	error: false,
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

	    case TYPES.EDIT_INVENTORY:
	      return {
	        ...state,
	        inventory: state.inventory.map( elem => {
	        	if( elem.id === action.payload.id){
	        		return action.payload
	        	}
	        	return elem;
	        })

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

	    case TYPES.FETCH_ERROR:
	      return {
	        ...state,
	        error: true,
	      }

	    case TYPES.DELETE_INVENTORY:
	      return {
	        ...state,
	        inventory: state.inventory.filter(item => item.id !== action.payload)
	      }

		default: 
			return state;
	}
};

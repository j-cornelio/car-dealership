import * as TYPES from '../actions/TYPES';

const initialState = {
	// inventory: [],
	inventory: [
		{ id: 0, manufacturer: 'Ford', make: 'Mustang', model: 'GT', year: 2017 },
		{ id: 1, manufacturer: 'Toyota', make: 'Rav4', model: 'EX', year: 2018 }
	],
	loading: false,
	error: false,
};

const inventorySuccess = (state, action) => {
    return {
        ...state,
        uploading: true,
    }
} 
const postProductionFulfilled = (state, action) => {
    return {
        ...state,
        inventory: [
        	...state.inventory,
        	action.payload
        ],
        uploading: false,
    }
} 
const putFulfilled = (state, action) => {
    return {
	    ...state,
	    edit: 'success'
    }
} 

const fetchInventory = (state, action) => {
    return {
	    ...state,
	    loading: true,
    }
} 
const fetchFulfilled = (state, action) => {
    return {
        ...state,
        inventory: [
        	...state.inventory,
        	...action.payload
        ],
        loading: false,
    }
} 
const fetchError = (state, action) => {
    return {
        ...state,
        error: true,
    }
} 
const editInventory = (state, action) => {
    return {
        ...state,
        inventory: state.inventory.map( elem => {
        	if( elem.id === action.payload.id){
        		return action.payload
        	}
        	return elem;
        })
    }
} 
const deleteInventory = (state, action) => {
    return {
        ...state,
        inventory: state.inventory.filter(item => item.id !== action.payload)
    }
} 

export const inventoryReducer = (state = initialState, action) => {
    const handlers = {
        [TYPES.POST_INVENTORY]: inventorySuccess,
        [TYPES.POST_PROD_FULFILLED]: postProductionFulfilled,
        [TYPES.PUT_FULFILLED]: putFulfilled,
        [TYPES.FETCH_INVENTORY_FULFILLED]: fetchFulfilled,
        [TYPES.FETCH_INVENTORY]: fetchInventory,
        [TYPES.FETCH_ERROR]: fetchError,
        [TYPES.EDIT_INVENTORY]: editInventory,
        [TYPES.DELETE_INVENTORY]: deleteInventory
    }

    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
}

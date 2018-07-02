import * as types from '../actions/types';

const initialState = {
	inventory: [],
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
        [types.POST_INVENTORY]: inventorySuccess,
        [types.POST_PROD_FULFILLED]: postProductionFulfilled,
        [types.PUT_FULFILLED]: putFulfilled,
        [types.FETCH_INVENTORY_FULFILLED]: fetchFulfilled,
        [types.FETCH_INVENTORY]: fetchInventory,
        [types.FETCH_ERROR]: fetchError,
        [types.EDIT_INVENTORY]: editInventory,
        [types.DELETE_INVENTORY]: deleteInventory
    }

    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
}
const initalState = {
	inventory: [],
	loading: false,
};

export const inventoryReducer = (state=initalState, action={}) => {
	switch(action.type){
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

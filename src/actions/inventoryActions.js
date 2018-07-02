import * as types from './types';

export const postInventory = (payload) => { 
  return {
    type: types.POST_INVENTORY,
    payload,
  }
};

export const postProductFulfilled = (payload) => { 
  return {
    type: types.POST_PROD_FULFILLED,
    payload: payload.response
  }
};

export const editInventory = (payload) => { 
  return {
    type: types.EDIT_INVENTORY,
    payload,
  }
};

export const putProductFulfilled = (payload) => { 
  return {
    type: types.PUT_FULFILLED
  }
};

export const postProductRejected = () => { 
  return {
    type: types.POST_PROD_ERROR
  }
};

export const fetchInventory = (payload) => { 
  return {
    type: types.FETCH_INVENTORY,
    payload,
  }
};

export const fetchInventoryFulfilled = (payload) => { 
  return {
    type: types.FETCH_INVENTORY_FULFILLED,
    payload,
  }
};

export const deleteProduct = (payload) => { 
  return {
    type: types.DELETE_INVENTORY,
    payload,
  }
};
export const deleteProductFulfilled = (payload) => { 
  return {
    type: types.DELETE_INVENTORY_FULFILLED
  }
};


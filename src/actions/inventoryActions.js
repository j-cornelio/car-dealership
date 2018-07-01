import * as TYPES from './TYPES';

export const postInventory = (payload) => { 
  return {
    type: TYPES.POST_INVENTORY,
    payload,
  }
};

export const postProductFulfilled = (payload) => { 
  return {
    type: TYPES.POST_PROD_FULFILLED,
    payload: payload.response
  }
};

export const putInventory = (id) => { 
  return {
    type: TYPES.PUT_INVENTORY,
    id
  }
};

export const putProductFulfilled = (payload) => { 
  return {
    type: TYPES.PUT_INVENTORY_FULFILLED,
    payload: payload.response
  }
};

export const postProductRejected = () => { 
  return {
    type: TYPES.POST_PROD_ERROR
  }
};

export const fetchInventory = (payload) => { 
  return {
    type: TYPES.FETCH_INVENTORY,
    payload,
  }
};

export const editInventory = (payload) => { 
  return {
    type: TYPES.EDIT_INVENTORY,
    payload,
  }
};

export const fetchInventoryFulfilled = (payload) => { 
  return {
    type: TYPES.FETCH_INVENTORY_FULFILLED,
    payload,
  }
};

export const deleteProduct = (payload) => { 
  return {
    type: TYPES.DELETE_INVENTORY,
    payload,
  }
};
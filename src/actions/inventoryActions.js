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

export const postProductRejected = (payload) => { 
  return {
    type: TYPES.POST_PROD_REJECTED,
    payload,
  }
};

export const fetchInventory = (payload) => { 
  return {
    type: TYPES.FETCH_INVENTORY,
    payload,
  }
};

export const fetchInventoryFulfilled = (payload) => { 
  return {
    type: TYPES.FETCH_INVENTORY_FULFILLED,
    payload,
  }
};
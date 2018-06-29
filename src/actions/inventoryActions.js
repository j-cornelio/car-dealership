import request          from 'superagent';
import * as TYPES from './TYPES';

 /* eslint-disable */
const APIURL      = 'http://rest.learncode.academy/api/inventory/data';
const APIURLPOST  = 'http://rest.learncode.academy/api/inventory/';

export const fetchUserActions = (login) => { 
  return {
    type: TYPES.FETCH_USER,
    payload: login
  }
};

export const fetchUserFulfilled = (user) => { 
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: {user: 'big vlad'}
  }
};

export const addInventory = (amount, id) => {
  return {
    type    : TYPES.ADD_INVENTORY,
    amount,
    id
  }
};

export const postData = (data) => {
  return (dispatch) => {
    return request.post(APIURL) 
    	.send(data)
      .then( response => { //also returns promise 
     		console.log('%c rsonponse ', 'background:lime', JSON.stringify(response.body));
      })
  }
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch( isAmountLoading(true) ); // immediate dispatch, loader

    return request.get(APIURL) // asynch task returns promise obj
      .then( response => { //also returns promise 
        if(!response.ok){
          throw Error(response.statusText);
        }

        dispatch( isAmountLoading(false) );

     		console.log('%c RESPONSE ', 'background:lime', response.body);
        return response; // returns to next chained then
      })
      .then( response => { 

        dispatch( fetchAmountSuccess( response.body ) );

      })
      .catch( error => {
        throw Error(error);
      })
  }
};
export const fetchAmountSuccess = (amount) => {
  return {
    type 						: TYPES.FETCH_AMOUNT_SUCCESS,
    amount 					: amount,
  }
};
export const isAmountLoading = (bool) => {
  return {
    type            : TYPES.AMOUNT_IS_LOADING,
    isAmountLoading : bool
  }
};
 
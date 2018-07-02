import { Observable } 			         from 'rxjs';
import { combineEpics } 			       from 'redux-observable';
import * as types                    from '../actions/types';
import {
  fetchInventoryFulfilled,
  postProductFulfilled,
  postProductRejected,
  putProductFulfilled,
  deleteProductFulfilled
}                                    from '../actions/inventoryActions';

const URL = 'http://rest.learncode.academy/api/dealership/inventory';

const api = {
  fetchUser: id => {
    const request = fetch(URL)
      .then( response => response.json() );
    return Observable.from(request);
  }
};

const fetchInventoryEpic = (action$) =>
  action$.ofType( types.FETCH_INVENTORY )
  .mergeMap(action =>
      api.fetchUser(action.payload) 
        .map( payload => fetchInventoryFulfilled(payload) )
    );

const postInventoryEpic = action$ =>
  action$.ofType( types.POST_INVENTORY )
    .mergeMap(action =>
      Observable.ajax.post(URL, action.payload)
        .map(response => postProductFulfilled(response))
        .catch(error => Observable.of(
          postProductRejected(error)
        ))
    );

const putInventoryEpic = action$ =>
  action$.ofType( types.EDIT_INVENTORY )
    .mergeMap(action => 
      Observable.ajax.put( `${URL}/${action.payload.id}`)
        .map(response => putProductFulfilled())
        .catch(error => Observable.of(
          postProductRejected(error)
        ))
    );

const deleteInventoryEpic = action$ =>
  action$.ofType( types.DELETE_INVENTORY )
    .mergeMap(action => 
      Observable.ajax.put( `${URL}/${action.payload.id}`)
        .map(response => deleteProductFulfilled())
        .catch(error => Observable.of(
          postProductRejected(error)
        ))
    );

export const rootEpic = combineEpics( fetchInventoryEpic, postInventoryEpic, putInventoryEpic, deleteInventoryEpic );
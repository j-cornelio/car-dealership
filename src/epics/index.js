import { Observable } 			         from 'rxjs';
import { combineEpics } 			       from 'redux-observable';
import * as TYPES                    from '../actions/TYPES';
//import { ajax }                      from 'rxjs/observable/dom/ajax'
import {
  fetchInventoryFulfilled,
  postProductFulfilled,
  postProductRejected,
  putProductFulfilled,
  deleteProductFulfilled
}                                    from '../actions/inventoryActions';

const URL = 'http://rest.learncode.academy/api/dealership/inventory';

      // .post(
      //   'http://rest.learncode.academy/api/amazon/inventory', 
      //   payload,
      //   { 'Content-Type': 'application/json' }
      // )
//const D = [{ id: 0, name: 'Ford', make: 'Mustang', model: 'GT', year: 2018 }]

const api = {
  fetchUser: id => {
    const request = fetch(URL)
      .then( response => response.json() );
    return Observable.from(request);
  }
};

const fetchInventoryEpic = (action$) =>
  action$.ofType( TYPES.FETCH_INVENTORY )
  .mergeMap(action =>
      api.fetchUser(action.payload) // This returns our Observable wrapping the Promise
        .map( payload => fetchInventoryFulfilled(payload) )
    );

const postInventoryEpic = action$ =>
  action$.ofType( TYPES.POST_INVENTORY )
    .mergeMap(action =>
      Observable.ajax.post(URL, action.payload)
        .map(response => postProductFulfilled(response))
        .catch(error => Observable.of(
          postProductRejected(error)
        ))
    );

const putInventoryEpic = action$ =>
  action$.ofType( TYPES.EDIT_INVENTORY )
    .mergeMap(action => 
      Observable.ajax.put( `${URL}/${action.payload.id}`)
        .map(response => putProductFulfilled())
        .catch(error => Observable.of(
          postProductRejected(error)
        ))
    );

const deleteInventoryEpic = action$ =>
  action$.ofType( TYPES.DELETE_INVENTORY )
    .mergeMap(action => 
      Observable.ajax.put( `${URL}/${action.payload.id}`)
        .map(response => deleteProductFulfilled())
        .catch(error => Observable.of(
          postProductRejected(error)
        ))
    );

// const postInventoryEpic = (action$, store) => (
//    action$.ofType('POST_INVENTORY')
//     .mergeMap( ({payload}) => {
      
//       Observable.ajax.post(URL, action.payload)
//         .map(response => postProductFulfilled(response))
//         .catch(error => Observable.of(
//           postProductRejected(error)
//         ))
//     })
// )

export const rootEpic = combineEpics( fetchInventoryEpic, postInventoryEpic, putInventoryEpic, deleteInventoryEpic );
import { Observable } 			         from 'rxjs';
import { combineEpics } 			       from 'redux-observable';
import * as TYPES from '../actions/TYPES';
import { FETCH_INVENTORY_FULFILLED } from '../actions/TYPES';
//import { ajax }                      from 'rxjs/observable/dom/ajax'
import { 
  fetchInventoryFulfilled, 
  postProductFulfilled,
  postProductRejected 
}                                     from '../actions/inventoryActions';

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
      .then(response => response.json());
    return Observable.from(request);
  }
};

const fetchInventoryEpic = (action$) => 
  action$.ofType( TYPES.FETCH_INVENTORY )
  .mergeMap(action =>
      api.fetchUser(action.payload) // This returns our Observable wrapping the Promise
        .map(payload => ({ type: FETCH_INVENTORY_FULFILLED, payload }))
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

export const rootEpic = combineEpics( fetchInventoryEpic, postInventoryEpic );
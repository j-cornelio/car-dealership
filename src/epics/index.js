import { Observable } 			         from 'rxjs';
import { combineEpics } 			       from 'redux-observable';
//import { ajax }                      from 'rxjs/observable/dom/ajax'
import { 
  fetchUserFulfilled, 
  postProductFulfilled,
  postProductRejected 
}                                     from '../actions/inventoryActions';


      // .post(
      //   'http://rest.learncode.academy/api/amazon/inventory', 
      //   payload,
      //   { 'Content-Type': 'application/json' }
      // )

const URL = 'http://rest.learncode.academy/api/dealership/inventory';

const fetchUserEpic = (action$, store) => (
  action$.ofType('FETCH_USER')
    .switchMap(( { payload } ) => { 
      //const users = store.getState().users;
      return Observable.of( fetchUserFulfilled(payload) ).delay(2222)
        
    })
)

const postInventoryEpic = action$ =>
  action$.ofType('POST_INVENTORY')
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

export const rootEpic = combineEpics( fetchUserEpic, postInventoryEpic );
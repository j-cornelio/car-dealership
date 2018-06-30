import { Observable } 			         from 'rxjs';
import { combineEpics } 			       from 'redux-observable';
import { ajax }                      from 'rxjs/observable/dom/ajax'
import { 
  fetchUserFulfilled, 
  uploadProductFulfilled,
  uploadProductRejected 
}                                     from '../actions/inventoryActions';


      // .post(
      //   'http://rest.learncode.academy/api/amazon/inventory', 
      //   payload,
      //   { 'Content-Type': 'application/json' }
      // )

const APIURL      = 'http://rest.learncode.academy/api/inventory/data';
const APIURLPOST  = 'http://rest.learncode.academy/api/inventory/';
const URL = 'http://rest.learncode.academy/api/amazon/inventory';

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
        .map(response => uploadProductFulfilled(response))
        .catch(error => Observable.of(
          uploadProductRejected(error)
        ))
    );

// const postInventoryEpic = (action$, store) => (

//    action$.ofType('POST_INVENTORY')
//     .mergeMap( ({payload}) => {
//       console.log('PAYLOAD ',payload)
//       Observable.ajax({
//                 method: 'POST',
//                 url: 'http://rest.learncode.academy/api/inventory',
//                 body: JSON.stringify(payload),
//             })
//         .map(response => uploadProductFulfilled(response))
//         .catch(error => Observable.of(uploadProductRejected(error)))
//     })
// )

export const rootEpic = combineEpics( fetchUserEpic, postInventoryEpic );
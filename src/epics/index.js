import { Observable } 			         from 'rxjs';
import { combineEpics } 			       from 'redux-observable';
import { fetchUserFulfilled, clear } from '../actions/inventoryActions';

const fetchUserEpic = (action$, store) => (
  action$.ofType('FETCH_USER')
    .switchMap(( { payload } ) => { 
      //const users = store.getState().users;
console.log('fetching')
      return Observable.of( fetchUserFulfilled(payload) ).delay(2222)
        
    })
)

export const rootEpic = combineEpics( fetchUserEpic );



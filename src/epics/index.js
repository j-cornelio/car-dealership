import { Observable } 			     from 'rxjs';
import { combineEpics } 			   from 'redux-observable';
import { single, multiple, addRent } 	    from "../actions/inventoryActions";

function rentReducerEpic(action$, store) {
  return action$.ofType('ADD')
    .switchMap(({type, amount, id}) => {
      console.log('EPIC AMOUNT ==> ', amount);

      return Observable.of( multiple(type, amount, id) );
    });
}

export const rootEpic = combineEpics( rentReducerEpic );
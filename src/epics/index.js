import { Observable } 			     from 'rxjs';
import { combineEpics } 			   from 'redux-observable';
import { single, multiple, addRent } 	    from "../actions/rentActions";

/*
  epic - func dat takes stream of actions n returns stream.  an app will have many epics.  
  you define one for each action in da redux store you want to react to.
*/

function rentReducerEpic(action$, store) {
  return action$.ofType('ADD_RENT')
    .switchMap(({type, amount, id}) => {
      console.log('EPIC AMOUNT ==> ', amount);

      return Observable.of( multiple(type, amount, id) );
    });

  // .filter(action => action.type === 'ADD_MULTIPLE')
  //   .switchMap(() => {
  //     return Observable.of( multiple() ).delay(2000);
  //   });

  // .filter(action => action.type === 'ADD_LATER')
  //   .switchMap(() => {
  //     return Observable.of( addLater() ).delay(2000);
  //   });
}

export const rootEpic = combineEpics( rentReducerEpic );

    // return action$
    // .do(action => {
    //   console.clear();
    //   console.log('>>>>>>>>>>>>>>>> ACTION <<<<<<<<<<<<<<<<', action);
    //   console.log('>>>>>>>>>>>>>>>> STORE <<<<<<<<<<<<<<<<', store.getState());
    // })
    // .ignoreElements();
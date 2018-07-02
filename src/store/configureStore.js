import { 
	createStore,  
	applyMiddleware,
	compose,
} 							                  from 'redux';
import rootReducer                from '../reducers';

import { createEpicMiddleware }   from 'redux-observable';
import { rootEpic }               from '../epics/index'; 

const epicMiddleware = createEpicMiddleware(rootEpic); 

export default function configureStore(initialState) {
  return createStore( 
  	rootReducer, 
  	initialState,    
  	compose(
      applyMiddleware(epicMiddleware), 
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
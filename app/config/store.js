import { createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';


const middleware = [];

if(process.env.NODE_ENV === 'development'){
  middleware.push(logger);
  middleware.push(thunkMiddleware);
}


export default createStore(reducers, applyMiddleware(...middleware));


// const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

// function configureStore(initialState) {
//   const enhancer = compose(
//     applyMiddleware(
//       thunkMiddleware, // lets us dispatch() functions
//       logger,
//     ),
//   );
//   return createStore(reducer, initialState, enhancer);
// }
//
// const store = configureStore({});
//
//
// export default store;

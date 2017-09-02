
// creation of redux store of the app
import { createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';


const middleware = [];

if(process.env.NODE_ENV === 'development'){
  middleware.push(logger);
}
middleware.push(thunkMiddleware);

export default createStore(reducers, applyMiddleware(...middleware));

import { combineReducers } from 'redux';
import  nav from './nav';
import  auth from './auth';
import  dashboard from './dashboard';


const rootReducer = combineReducers({
    nav,
    auth,
    dashboard,

});

export default rootReducer;

import { combineReducers } from 'redux';
import  nav from './nav';
import  auth from './auth';
import  homePage from './homePage';


const rootReducer = combineReducers({
    nav,
    auth,
    homePage,

});

export default rootReducer;

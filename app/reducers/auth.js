// user authentication reducer
import * as types from '../actions/types'; // action types from types.js file


const defaultState = {
    isLoggedIn: false,
    username: '',
    password: '',
    invalidCredentials: false,

};

const reducer =  ( state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.username,
        password: action.password,
        invalidCredentials: false


      };
    case types.INVALID_CREDENTIALS:
     // let newState = {
     //      isLoggedIn: false,
     //      username: '',
     //      password: '',
     //      invalidCredentials: true,
     // };
     // return newState;
      return{
        isLoggedIn: false,
        username: '',
        password: '',
        invalidCredentials: true
      };
    case types.LOGOUT:
    default:
      return state;
  }
};

export default reducer;

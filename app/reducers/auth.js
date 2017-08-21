// user authentication reducer
import * as types from '../actions/types'; // action types from types.js file


const defaultState = {
    isLoggedIn: false,
    username: '',
    password: '',
    invalidCredentials: false,

};

const reducer =  ( state = defaultState, action) => {
  console.log(" inside login reducer login");
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.username,
        password: action.password,
        
      };
    case types.INVALID_CREDENTIALS:
      return{
        ...state,
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

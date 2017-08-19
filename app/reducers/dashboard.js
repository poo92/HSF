// dashboard reducer
import * as types from '../actions/types'; // action types from types.js file




const reducer =  ( state = {}, action) => {
  console.log(" inside login reducer login");
  switch (action.type) {
    case types.GET_HOMEPAGE_DETAILS:
      return {
        ...state,
        homePageDetails: action.homepageDetails,
      };
  //   case types.LOGOUT:
    default:
      return state;
  }
};

export default reducer;

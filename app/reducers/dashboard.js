// dashboard reducer
import * as types from '../actions/types'; // action types from types.js file




const reducer =  ( state = {}, action) => {
  switch (action.type) {
    case types.GET_HOMEPAGE_DETAILS:
      return {
        ...state,
        homePageDetails: action.homepageDetails,
        factoryName: action.factoryName,
      };
    case types.GET_PRODUCTIONLINE_DETAILS:
        return {
          ...state,
          branch: action.branch,
          section : action.section,
          productionline :action.productionline, 
          productionlineDetails: action.productionlineDetails,
        };
    default:
      return state;
  }
};

export default reducer;

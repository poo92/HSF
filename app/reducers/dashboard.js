// dashboard reducer
import * as types from '../actions/types'; // action types from types.js file




const reducer =  ( state = {}, action) => {
      console.log("reduccer");
      switch (action.type) {
            case types.GET_DASHBOARD_DETAILS_OF_FACTORY_USER:
            return {
                  ...state,
                  dashboardDetailsOfFactoryUser: action.dashboardDetails,
                  userType: action.userType,
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
            case types.GET_SENSOR_DETAILS:
            return {
                  ...state,
                  sensorDetails: action.sensorDetails,
                  sensorName : action.sensorName,
            };
            default:
            return state;
      }
};

export default reducer;

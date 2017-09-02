// contains methods related to dashboard
import * as types from './types'; // action types from types.js file
import { Platform, Alert } from 'react-native';

// method to get dashboard details of user
export const getDashboardDetails = () => {
      // sample json
      let homePageDetails = [
            {
                  "id": "Main",
                  "sectiondata": [
                        {
                              "id": "Molding",
                              "productionlines": [
                                    "Prod-1",
                              ]
                        },
                        {
                              "id": "Sawing",
                              "productionlines": [
                                    "Test",

                              ]
                        },
                        {
                              "id": "Delivery",
                              "productionlines": [
                                    "1",
                                    "2"
                              ]
                        }
                  ],
            },
            {
                  "id": "Negombo",
                  "sectiondata": [
                        {
                              "id": "Delivery",
                              "productionlines": [
                                    "1",
                                    "2",
                                    "3"
                              ]
                        },
                        {
                              "id": "y",
                              "productionlines": [
                                    "1",
                                    "2"
                              ]
                        }
                  ]
            }

      ];

      return {
            type: types.GET_HOMEPAGE_DETAILS,
            homepageDetails: homePageDetails,
            factoryName: "Bata-Shoe-Company",

      };

};


//localhost method - check ip :D
// export const getProductionLineDetails = (factory,branch,section,productionline) => {
//       console.log(factory + " " + branch + " " + section + " " + productionline );
//       // http://192.168.1.4:80/readfromfileserver/file.php?getProductionlinedetails?
//       // 10.22.120.29
//       let branchRequest = branch+"-Branch";
//       let sectionRequest = section+"-Section";
//       return(dispatch) =>{
//             // return fetch('http://192.168.1.4:80/readfromfileserver/productionlineServer.php?'
//             return fetch('http://10.22.120.187:80/readfromfileserver/productionlineServer.php?'
//             , {
//                   method: 'POST',
//                   headers : {
//                         'Content-Type': 'application/json',
//                         // 'Accept': 'application/json'
//                   },
//                   body: JSON.stringify({
//                         factoryName: factory,
//                         branchName: branchRequest,
//                         sectionName:sectionRequest ,
//                         productionline: productionline,
//
//                   })
//             }
//       )
//       .then((response) => response.text())
//       .then((responseJson) => {
//             console.log(responseJson);
//             var jsonResponse = JSON.parse(responseJson);
//             console.log("responseJson   " + jsonResponse.error);
//             if(jsonResponse.error){
//                   this.alertUser("No such productionLine");
//
//             }else{
//                   dispatch(setProductionlineDetails( { productionlineDetails :jsonResponse , Branch : branch, Section : section, Productionline : productionline }));
//
//             }
//       })
//       .catch((error) => {
//             console.error(error);
//       })};
//
// };


// export const getProductionLineDetails = async (factory,branch,section,productionline) => {
//       try {
//
//             let branchRequest = branch+"-Branch";
//             let sectionRequest = section+"-Section";
//
//             async (dispatch) =>{
//                   let response = await fetch('http://ec2-52-38-15-248.us-west-2.compute.amazonaws.com/hitech-smart-factory/productionlineServer.php?'
//                   , {
//                         method: 'POST',
//                         headers : {
//                               'Content-Type': 'application/json',
//                               // 'Accept': 'application/json'
//                         },
//                         body: JSON.stringify({
//                               factoryName: factory,
//                               branchName: branchRequest,
//                               sectionName:sectionRequest ,
//                               productionline: productionline,
//
//                         })
//                   }
//             );
//             let responseJson = await response.text();
//             var jsonResponse = JSON.parse(responseJson);
//             // console.log("responseJson   " + jsonResponse.name);
//             dispatch(setProductionlineDetails( { productionlineDetails :jsonResponse , Branch : branch, Section : section, Productionline : productionline }));
//       }
// } catch(error) {
//       console.error(error);
// }
// }





















//method with url
export const getProductionLineDetails = (factory,branch,section,productionline) => {
      let branchRequest = branch+"-Branch";
      let sectionRequest = section+"-Section";
      return(dispatch) =>{
            return fetch('http://ec2-52-38-15-248.us-west-2.compute.amazonaws.com/hitech-smart-factory/productionlineServer.php?'
            , {
                  method: 'POST',
                  headers : {
                        'Content-Type': 'application/json',
                        // 'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                        factoryName: factory,
                        branchName: branchRequest,
                        sectionName:sectionRequest ,
                        productionline: productionline,

                  })
            }
      )
      .then(async (response) => await response.text())
      .then((responseJson) => {
            var jsonResponse = JSON.parse(responseJson);
            if(jsonResponse.error){
                  this.alertUser("This productionline has not modeled yet.");
            }else{
                  dispatch(setProductionlineDetails( { productionlineDetails :jsonResponse , Branch : branch, Section : section, Productionline : productionline }));
            }
      })
      .catch((error) => {
            console.error(error);
      })};


};


export function setProductionlineDetails( { productionlineDetails, Branch, Section, Productionline }) {
      // console.log("productionlineDetails  : " + productionlineDetails);
      return{
            type: types.GET_PRODUCTIONLINE_DETAILS,
            productionlineDetails : productionlineDetails,
            branch : Branch,
            section : Section,
            productionline :Productionline

      };
      console.log("productionlineDetails  : " + productionlineDetails);

}


alertUser = (alert) => {
      Alert.alert('Details Unavailable', alert);
};

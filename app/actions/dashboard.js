// contains methods related to dashboard
import * as types from './types'; // action types from types.js file
import { Platform, Alert } from 'react-native';

var url = 'http://192.168.59.1:9763/services/';

// alert to user
alertUser = (message) => {
      Alert.alert('Details Unavailable', message);
};



// // Hard coded method to get dashboard details of user
// export const getDashboardDetails = () => {
//       // sample json
//       let homePageDetails = [
//             {
//                   "id": "Main",
//                   "sectiondata": [
//                         {
//                               "id": "Molding",
//                               "productionlines": [
//                                     "Prod-1",
//                               ]
//                         },
//                         {
//                               "id": "Sawing",
//                               "productionlines": [
//                                     "Test",
//
//                               ]
//                         },
//                         {
//                               "id": "Delivery",
//                               "productionlines": [
//                                     "1",
//                                     "2"
//                               ]
//                         }
//                   ],
//             },
//             {
//                   "id": "Negombo",
//                   "sectiondata": [
//                         {
//                               "id": "Delivery",
//                               "productionlines": [
//                                     "1",
//                                     "2",
//                                     "3"
//                               ]
//                         },
//                         {
//                               "id": "y",
//                               "productionlines": [
//                                     "1",
//                                     "2"
//                               ]
//                         }
//                   ]
//             }
//
//       ];
//
//       return {
//             type: types.GET_HOMEPAGE_DETAILS,
//             homepageDetails: homePageDetails,
//             factoryName: "Bata-Shoe-Company",
//
//       };
//
// };


// actual method to get dashboard details of user
export const getDashboardDetails = (username) => {

      var userid, userType,factory;

      //get userId and usertype from DB
      return(dispatch) =>{
            return fetch( url +'getBasicUserDetails/get_basic_user_details'
            , {
                  method: 'POST',
                  headers : {
                        'Content-Type': 'application/json',
                        // 'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                        _postget_basic_user_details: {
                              username : username
                        }

                  })
            }
      )
      .then(async (response) => await response.text())
      .then((responseJson) => {
            var jsonResponse = JSON.parse(responseJson);
            var userDetails = jsonResponse.UserDetails.User;


            for (let user of userDetails) {
                  userid = user.userid;
                  userType = user.userType;

                  console.log( "factory" + user.FactoryNames.FactoryName);

                  var factoryArray = user.FactoryNames.FactoryName;
                  for (let factory of factoryArray) {
                        factory =factory.Name;
                  }
            }

            // call relevent method according to userType

            // FACTORY USER
            if(userType == 'f'){
                  dispatch(getDashboardDetailsOfFactoryUser( { userid :userid, userType :userType }));
            }




      })
      .catch((error) => {
            console.error(error);
      })};





      // return(dispatch) =>{
      //       return fetch('http://192.168.59.1:9763/services/getDashboardDetailsOfUser/get_productionline_details'
      //       , {
      //             method: 'POST',
      //             headers : {
      //                   'Content-Type': 'application/json',
      //                   // 'Accept': 'application/json'
      //             },
      //             body: JSON.stringify({
      //
      //                   _postget_productionline_details: {
      //                         username : username
      //                   }
      //
      //
      //             })
      //       }
      // )
      // .then(async (response) => await response.text())
      // .then((responseJson) => {
      //
      //       var jsonResponse = JSON.parse(responseJson);
      //       //Reading the object
      //       var one = jsonResponse.userIDs.UserID;
      //       var Array1 = [];
      //       var Array2 = [];
      //       var Array3 = [];
      //       var Array4 = [];
      //
      //
      //       {one.map((ProductionLineIDs) => (
      //             Array1.push(ProductionLineIDs)
      //       ))}
      //
      //       {Array1.map((object1) => (
      //             Array2.push(object1.ProductionLineIDs.ProductionLineID)
      //       ))}
      //
      //       for (let userObject1 of Array2) {
      //             {userObject1.map((object3) => (
      //                   Array3.push(object3.DetailsOfProductionLines.DetailsOfProductionLine)
      //                   // Array2.push(object1.ProductionLineIDs.ProductionLineID)
      //             ))}
      //       }
      //
      //       for (let userObject2 of Array3) {
      //             {userObject2.map((object4) => (
      //                   Array4.push(object4)
      //             ))}
      //       }
      //
      //       // arrays for
      //       var company;
      //       var branches = [];
      //       var branchNames = new Set();
      //       var sections = new Set();
      //       var productionlines = new Set();
      //
      //
      //
      //       function Branch (name) {
      //             this.name = name;
      //             this.sections = new Set();
      //             this.productionlines = new Set();
      //       }
      //
      //
      //
      //
      //       for (let object of Array4) {
      //             company = object.factory_name;
      //
      //             if(!(object.branch_name in branches)){
      //                   branchNames.add(object.branch_name);
      //                   var branchObject = new Branch(object.branch_name);
      //                   branchObject.sections.add(object.section_name);
      //                   branchObject.productionlines.add(object.productionline_name);
      //                   branches[object.branch_name] = branchObject;
      //                   console.log(branches.length);
      //             }
      //
      //             // branches.add(object.branch_name);
      //             // sections.add(object.section_name);
      //             // productionlines.add(object.productionline_name);
      //       }
      //
      //       // console.log(company + " b " +branches.length + " s " + sections.size + " p " + productionlines.size);
      //
      //       for(var branch in branchNames) {
      //             console.log(branches[branch]);
      //       }
      //
      //
      //       // console.log(" jsonResponse jsonResponse jsonResponse " + one.ProductionLineIDs);
      //       if(jsonResponse.error){
      //             this.alertUser("This productionline has not modeled yet.");
      //       }else{
      //             // dispatch(setProductionlineDetails( { productionlineDetails :jsonResponse , Branch : branch, Section : section, Productionline : productionline }));
      //       }
      // })
      // .catch((error) => {
      //       console.error(error);
      // })};


};

function Branch (name) {
      this.name = name;
      this.sections = [];
}
function Section (name) {
      this.name = name;
      this.productionlines = [];
}


export function getDashboardDetailsOfFactoryUser( { userid, userType }) {
      return(dispatch) =>{
            return fetch(url + 'getDashboardDetailsOfFactoryUser/get_dashboard_details_of_factory_user'
            , {
                  method: 'POST',
                  headers : {
                        'Content-Type': 'application/json',
                        // 'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                        _postget_dashboard_details_of_factory_user: {
                              uid : userid
                        }

                  })
            }
      )
      .then(async (response) => await response.text())
      .then((responseJson) => {
            var jsonResponse = JSON.parse(responseJson);
            var factory = jsonResponse.Factories.Factory;


            var branchesArray = [];
            var Branches = [];

            for (let branch of factory) {
                  branchesArray.push(branch.Branches.Branch);
            }

            for (let ob of branchesArray) {
                  for (let ob1 of ob) {
                        var branchObject = new Branch(ob1.BranchName);
                        for (let section of ob1.Sections.Section) {
                              var sectionObject = new Section(section.SectionName);
                              for (let producionline of section.Productionlines.Productionline) {
                                    sectionObject.productionlines.push(producionline.name);
                              }
                               branchObject.sections.push(sectionObject);
                        }
                              Branches.push(branchObject);
                  }


            }

            console.log(Branches);
            dispatch(setDashboardDetailsOfFactoryUser( { dashboardDetails :Branches, userType: userType }));



      })
      .catch((error) => {
            console.error(error);
      })};

};

export function setDashboardDetailsOfFactoryUser( { dashboardDetails , userType}) {
      return{
            type: types.GET_DASHBOARD_DETAILS_OF_FACTORY_USER,
            dashboardDetails : dashboardDetails,
            userType: userType,
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


//method with url
export const getProductionLineDetails = (factory,branch,section,productionline) => {
console.log(factory+ " " + branch + " " + section+ " " + productionline);

      let factoryRequest = factory.replace(" ", "-");
      let branchRequest = branch.replace(" ", "-");
      let sectionRequest = section.replace(" ", "-");

      return(dispatch) =>{
            return fetch('http://ec2-52-38-15-248.us-west-2.compute.amazonaws.com/hitech-smart-factory/productionlineServer.php?'
            , {
                  method: 'POST',
                  headers : {
                        'Content-Type': 'application/json',
                        // 'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                        factoryName: factoryRequest,
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

};

// localhost method - check ip :D
export const getSensorDetails = (factory,branch,section,productionline,component,sensorName) => {
      // http://192.168.1.4:80/readfromfileserver/file.php?getProductionlinedetails?
      // 10.22.120.29
      let branchRequest = branch+"-Branch";
      let sectionRequest = section+"-Section";
      return(dispatch) =>{
            // return fetch('http://192.168.1.4:80/readfromfileserver/productionlineServer.php?'
            return fetch('http://192.168.1.8:80/sensorDetails.php?'
            , {
                  method: 'POST',
                  headers : {
                        'Content-Type': 'application/json',
                        // 'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                        tag: "Bata-Shoe-CompanyMainBranchMoldingSectionProd-1Filling-ArmDHT11",

                  })
            }
      )
      .then(async (response) => await response.text())
      .then((responseJson) => {
            var jsonResponse = JSON.parse(responseJson);
            console.log("jsonResponse.uri  " + jsonResponse.uri);
            if(jsonResponse.error){
                  this.alertUser("No such productionLine");
            }else{
                  dispatch(setSensorDetails( { sensorDetails :jsonResponse.uri , sensorName : sensorName }));

            }
      })
      .catch((error) => {
            console.error(error);
      })};

};


export function setSensorDetails( { sensorDetails, sensorName}) {
      // console.log("productionlineDetails  : " + productionlineDetails);
      return{
            type: types.GET_SENSOR_DETAILS,
            sensorDetails : sensorDetails,
            sensorName : sensorName

      };

};

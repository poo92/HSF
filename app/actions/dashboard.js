// contains methods related to dashboard
import * as types from './types'; // action types from types.js file
import { Platform, Alert } from 'react-native';

// var url = 'http://192.168.59.1:9763/services/';
// var url = 'http://172.17.42.1:9763/services/';
var hostedip = 'http://35.202.158.138/';
var url = 'http://35.202.158.138:9763/services/';

// alert to user
alertUser = (message) => {
      Alert.alert('Details Unavailable', message);
};



// method to get dashboard details of user from DSS
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
                  fid = user.fid;
                  var factoryArray = user.FactoryNames.FactoryName;
                  for (let factoryName of factoryArray) {
                        factory = factoryName.Name;
                  }
            }

            // call relevent method according to userType

            // FACTORY USER
            if(userType == 'f'){
                  dispatch(getDashboardDetailsOfFactoryUser( { userid :userid, userType :userType , factoryName :factory, fid :fid}));
            }else if(userType == 'b'){
                  dispatch(getDashboardDetailsOfBranchUser( { userid :userid, userType :userType , factoryName :factory, fid :fid}));
            }else if(userType == 's'){
                  console.log("section user");
                  dispatch(getDashboardDetailsOfSectionUser( { userid :userid, userType :userType , factoryName :factory, fid :fid}));
            }

      })
      .catch((error) => {
            console.error(error);
      })};


};

// branch class
function Branch(name) {
      this.name = name;
      this.id = 0;
      this.sections = [];
};

// section class
function Section(name) {
      this.name = name;
      this.id = 0;
      this.productionlines = [];
};

// productionline class
function ProductionLine(name) {
      this.name = name;
      this.fid = 0;
      this.bid =0;
      this.sid = 0;
      this.pid=0;
      this.sectionName ="";
      this.branchName = "";
};

// ---------------------------------------------- mehods of factory user ------------------------------------------ //
export function getDashboardDetailsOfFactoryUser( { userid, userType, factoryName , fid}) {
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
                  console.log(ob);
                  for (let ob1 of ob) {
                        var branchObject = new Branch(ob1.BranchName);
                        for (let section of ob1.Sections.Section) {
                              var sectionObject = new Section(section.SectionName);
                              sectionObject.id = section.sid;
                              for (let producionline of section.Productionlines.Productionline) {
                                    productionlineObject = new   ProductionLine (producionline.Name);
                                    productionlineObject.fid =    fid;
                                    productionlineObject.bid =  ob1.bid;
                                    productionlineObject.sid =  section.sid;
                                    productionlineObject.pid =  producionline.pid;
                                    sectionObject.productionlines.push(productionlineObject);
                              }
                               branchObject.sections.push(sectionObject);
                        }
                              Branches.push(branchObject);
                  }
            }
            // console.log(Branches);
            dispatch(setDashboardDetailsOfFactoryUser( { dashboardDetails :Branches, userType: userType, factory:factoryName }));

      })
      .catch((error) => {
            console.error(error);
      })};

};

export function setDashboardDetailsOfFactoryUser( { dashboardDetails , userType ,factory}) {
      return{
            type: types.GET_DASHBOARD_DETAILS_OF_FACTORY_USER,
            dashboardDetails : dashboardDetails,
            userType: userType,
            factoryName: factory,

      };

};

// ---------------------------------------------- mehods of factory user ------------------------------------------ //

// ---------------------------------------------- mehods of branch  user ------------------------------------------ //
export function getDashboardDetailsOfBranchUser( { userid, userType, factoryName, fid }) {
      return(dispatch) =>{
            return fetch(url + 'getDashboardDetailsOfBranchUser/get_dashboard_details_of_branch_user'
            , {
                  method: 'POST',
                  headers : {
                        'Content-Type': 'application/json',
                        // 'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                        _postget_dashboard_details_of_branch_user: {
                              uid : userid
                        }
                  })
            }
      )
      .then(async (response) => await response.text())
      .then((responseJson) => {
            var jsonResponse = JSON.parse(responseJson);
            var BranchJson = jsonResponse.Branches.Branch;
            var Branches = [];
            var branchesArray = [];
            for (let branch of BranchJson) {
                  branchesArray.push(branch);
            }

            for (let ob of branchesArray) {
                  var branchNameArray = [];
                  var sectionsArray = [];
                  branchNameArray.push(ob.BranchNames.BranchName);
                  sectionsArray.push(ob.Sections);

                  // console.log(branchNameArray);
                  // console.log(sectionsArray);

                  let branchObject;
                  for (let ob1 of branchNameArray) {
                        for (let ob2 of ob1) {
                              branchObject = new Branch(ob2.Name);
                        }
                  }

                  for (let ob3 of sectionsArray) {
                        for (let ob4 of ob3.Section) {
                                    var sectionObject = new Section(ob4.SectionName);
                                    sectionObject.id  = ob4.sid;
                                     for (let producionline of ob4.Productionlines.Productionline) {
                                                      productionLineObject = new ProductionLine(producionline.Name);
                                                      productionLineObject.fid = fid;
                                                      productionLineObject.bid = ob.bid;
                                                      productionLineObject.sid = ob4.sid;
                                                      productionLineObject.pid = producionline.pid;
                                                      productionLineObject.sectionName = ob4.Name;
                                                      // productionLineObject.branchName = ob.BranchNames.BranchName;
                                                      sectionObject.productionlines.push(productionLineObject);
                                                }
                                                branchObject.sections.push(sectionObject);
                        }
                  }
                  Branches.push(branchObject);

            }

            // console.log("Branches",Branches);
            dispatch(setDashboardDetailsOfFactoryUser( { dashboardDetails :Branches, userType: userType, factory:factoryName }));



      })
      .catch((error) => {
            console.error(error);
      })};

};


// ---------------------------------------------- mehods of branch  user ------------------------------------------ //





// ---------------------------------------------- mehods of section  user ------------------------------------------ //

export function getDashboardDetailsOfSectionUser( { userid, userType, factoryName , fid}) {
      return(dispatch) =>{
            return fetch(url + 'getDashboardDetailsofSectionUser/get_dashboard_details_of_section_user'
            , {
                  method: 'POST',
                  headers : {
                        'Content-Type': 'application/json',
                        // 'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                        _postget_dashboard_details_of_section_user: {
                              uid : userid
                        }

                  })
            }
      )
      .then(async (response) => await response.text())
      .then((responseJson) => {
            var jsonResponse = JSON.parse(responseJson);


            var sections = jsonResponse.Sections.Section;
            var sectionDetailsArray = [];
            var Branches = [];


            // console.log(Branches);
            for(var i =0; i < jsonResponse.Sections.Section.length ; i++ ){
                  var section = sections[i];
                  var sectionDetail = section.SectionDetails.SectionDetail;
                  var productionlines = section.Productionlines.Productionline;

                  var branchName = sectionDetail[0].branchName;
                  var branchId = sectionDetail[0].bid;
                  var branchObject = new Branch(branchName);;
                  branchObject.id = branchId;

                  // console.log(sectionDetail);
                  // console.log(productionlines);
                  console.log(i);
                  console.log(Branches);
                  if(Branches.length == 0){
                        Branches.push(branchObject);
                  }else{
                        isBranchIn = false;

                        for(let branch in Branches){


                              // console.log(branchId);

                              if(branch.id == branchId){

                                    isBranchIn = true;
                              }
                        }
                        if( !isBranchIn){
                              Branches.push(branchObject);
                        }
                  }



                  // console.log(Branches);


            }

            // for (let sectionDetails of sections) {
            //       sectionDetailsArray.push(sectionDetails.SectionDetails.SectionDetail);
            // }
            //
            //
            //
            // for (let ob of sectionDetailsArray) {
            //       branchObject = new Branch(ob.branchName);
            // }


            //
            // for (let ob of branchesArray) {
            //       console.log(ob);
            //       for (let ob1 of ob) {
            //             var branchObject = new Branch(ob1.BranchName);
            //             for (let section of ob1.Sections.Section) {
            //                   var sectionObject = new Section(section.SectionName);
            //                   sectionObject.id = section.sid;
            //                   for (let producionline of section.Productionlines.Productionline) {
            //                         productionlineObject = new   ProductionLine (producionline.Name);
            //                         productionlineObject.fid =    fid;
            //                         productionlineObject.bid =  ob1.bid;
            //                         productionlineObject.sid =  section.sid;
            //                         productionlineObject.pid =  producionline.pid;
            //                         sectionObject.productionlines.push(productionlineObject);
            //                   }
            //                    branchObject.sections.push(sectionObject);
            //             }
            //                   Branches.push(branchObject);
            //       }
            //
            //
            // }
            //
            // console.log(Branches);
            // dispatch(setDashboardDetailsOfFactoryUser( { dashboardDetails :Branches, userType: userType, factory:factoryName }));
            //


      })
      .catch((error) => {
            console.error(error);
      })};

};

// ---------------------------------------------- mehods of section  user ------------------------------------------ //


// method to get details of the productionline
export const getProductionLineDetails = (fid,bid,sid,pid,productionline) => {
      return(dispatch) =>{
            // return fetch('http://192.168.1.2/readfromfileserver/productionlineServer.php?'
            // return fetch('http://ec2-52-38-15-248.us-west-2.compute.amazonaws.com/hitech-smart-factory/productionlineServer.php?'
            return fetch( hostedip + 'hitech-smart-factory/productionlineServer.php?'

            , {
                  method: 'POST',
                  headers : {
                        'Content-Type': 'application/json',
                        // 'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                        fid: fid,
                        bid: bid,
                        sid:sid ,
                        pid: pid,

                  })
            }
      )
      .then(async (response) => await response.text())
      .then((responseJson) => {
            var jsonResponse = JSON.parse(responseJson);
            if(jsonResponse.error){
                  this.alertUser("This productionline has not modeled yet.");
            }else{
                  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                  dispatch(setProductionlineDetails( { productionlineDetails :jsonResponse ,Productionline : productionline }));
            }
      })
      .catch((error) => {
            console.error(error);
      })};


};


export function setProductionlineDetails( { productionlineDetails, Branch, Section, Productionline }) {
      return{
            type: types.GET_PRODUCTIONLINE_DETAILS,
            productionlineDetails : productionlineDetails,
            branch : Branch,
            section : Section,
            productionline :Productionline

      };

};



// lmethod to get sensor graph
export const getSensorDetails = (factory,branch,section,productionline,component,sensorName,sensorTag) => {

      console.log(sensorTag);
      let branchRequest = branch+"-Branch";
      let sectionRequest = section+"-Section";

      // return(dispatch) =>{
      //       // return fetch('http://192.168.1.4:80/readfromfileserver/productionlineServer.php?'
      //       return fetch('http://35.196.127.106/graph2.php'
      //       , {
      //             method: 'POST',
      //             headers : {
      //                   'Content-Type': 'application/json',
      //                   // 'Accept': 'application/json'
      //             },
      //             body: JSON.stringify({
      //                   "Tag":"3/8/6/8/4/18"
      //
      //             })
      //       }
      // )
      // .then(async (response) => await response.text())
      // .then((responseJson) => {
      //
      //       var jsonResponse = JSON.parse(responseJson);
      //       console.log("jsonResponse.uri  " + jsonResponse.uri);
      //       if(jsonResponse.error){
      //             this.alertUser("No such productionLine");
      //       }else{
      //             dispatch(setSensorDetails( { sensorDetails :jsonResponse.uri , sensorName : sensorName }));
      //
      //       }
      // })
      // .catch((error) => {
      //       console.error(error);
      // })};
      return(dispatch) =>{
            // var graphurl= 'https://i.pinimg.com/736x/2e/e6/99/2ee6998e34c3e2eff7b894c66cfc5267--infographics-animation-line-graph-design.jpg'
      // var graphurl = 'http://35.196.127.106:3000/dashboard-solo/db/3-8-6-8-4-18?panelId=1&orgId=1&refresh=5s&from=1514324796452&to=1514367996452';
      var graphurl = 'http://35.196.127.106:3000/dashboard-solo/db/3-8-6-8-4-18?panelId=1&orgId=1&refresh=5s';

      dispatch(setSensorDetails( { sensorDetails :graphurl , sensorName : sensorName }));
}

};


export function setSensorDetails( { sensorDetails, sensorName}) {
      // console.log("productionlineDetails  : " + productionlineDetails);
      return{
            type: types.GET_SENSOR_DETAILS,
            sensorDetails : sensorDetails,
            sensorName : sensorName

      };

};

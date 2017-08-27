// contains methods related to dashboard
import * as types from './types'; // action types from types.js file
import { Platform } from 'react-native';

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
                        "Right",
                    ]
                },
                {
                    "id": "Packaging",
                    "productionlines": [
                        "1",
                        "2",
                        "3",
                        "4"
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
export const getProductionLineDetails = (factory,branch,section,productionline) => {
    console.log(factory + " " + branch + " " + section + " " + productionline );
    // http://192.168.1.4:80/readfromfileserver/file.php?getProductionlinedetails?
    // 10.22.120.29
    let branchRequest = branch+"-Branch";
    let sectionRequest = section+"-Section";
    return(dispatch) =>{
        // return fetch('http://192.168.1.4:80/readfromfileserver/productionlineServer.php?'
return fetch('http://192.168.1.8:80/readfromfileserver/productionlineServer.php?'
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
    .then((response) => response.text())
    .then((responseJson) => {
        console.log(responseJson);
        var jsonResponse = JSON.parse(responseJson);
                // console.log("responseJson   " + jsonResponse.name);
        dispatch(setProductionlineDetails( { productionlineDetails :jsonResponse , Branch : branch, Section : section, Productionline : productionline }));
    })
    .catch((error) => {
        console.error(error);
    })};


};

//method with url
// export const getProductionLineDetails = (factory,branch,section,productionline) => {
// let branchRequest = branch+"-Branch";
// let sectionRequest = section+"-Section";
//     return(dispatch) =>{
//         return fetch('http://ec2-52-38-15-248.us-west-2.compute.amazonaws.com/hitech-smart-factory/productionlineServer.php'
//         , {
//             method: 'POST',
//             headers : {
//                 'Content-Type': 'application/json',
//                 // 'Accept': 'application/json'
//             },
//             body: JSON.stringify({
                // factoryName: factory,
                // branchName: branchRequest,
                // sectionName:sectionRequest ,
                // productionline: productionline,

// })
//         }
//     )
//     .then((response) => response.text())
//     .then((responseJson) => {
//         var jsonResponse = JSON.parse(responseJson);
//                 // console.log("responseJson   " + jsonResponse.name);
//         dispatch(setProductionlineDetails( { productionlineDetails :jsonResponse , Branch : branch, Section : section, Productionline : productionline }));
//     })
//     .catch((error) => {
//         console.error(error);
//     })};
//
//
// };


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

// contains methods related to dashboard
import * as types from './types'; // action types from types.js file
import { Platform } from 'react-native';

// method to get dashboard details of user
export const getDashboardDetails = () => {
    // sample json
    let homePageDetails = [
        {
            "id": "Colombo",
            "sectiondata": [
                {
                    "id": "Filling",
                    "productionlines": [
                        "Left",
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
        factoryName: "CocaCola PVT Ltd",

    };

};




export const getProductionLineDetails = (factory,branch,section,productionline) => {
    // http://192.168.1.4:80/readfromfileserver/file.php?getProductionlinedetails?
    return(dispatch) =>{
        return fetch('http://192.168.1.4:80/readfromfileserver/file.php?getProductionlinedetails?'
        , {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: JSON.stringify({
                productionlines: 1,

            })
        }
    )
    .then((response) => response.text())
    .then((responseJson) => {
        var jsonResponse = JSON.parse(responseJson);
                // console.log("responseJson   " + jsonResponse.name);
        dispatch(setProductionlineDetails( { productionlineDetails :jsonResponse , Branch : branch, Section : section, Productionline : productionline }));
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

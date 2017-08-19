// contains methods related to dashboard
import * as types from './types'; // action types from types.js file


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
    };

};

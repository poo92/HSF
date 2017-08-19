import * as types from './types';



export const getHomePageDetails = () => {
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

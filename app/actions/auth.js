// contains all the actions regarding user authentication
import { Alert } from 'react-native';
import * as types from './types'; // action types from types.js file



// actual login method
export const login = (username, password) => {
  if(username == "1" && password == "1"){
    // console.log("inside");
    return {
      type: types.LOGIN,
      username: username,
      password: password,
      

    };

  }else{
        this.alertUser("Please enter correct credentials");
    return {
        type: types.INVALID_CREDENTIALS,
        username: '',
        password: '',
    }
  }
  // }


};

alertUser = (alert) => {
  // console.log("inside alert");
   Alert.alert('Invalid Credentials', alert);
    };

//  test login method for development
// export const login = (username, password) => {
//     return {
//       type: types.LOGIN,
//       username: username,
//       password: password
//     };
//
// };



//fetch method
// return fetch('https://facebook.github.io/react-native/movies.json')
//   .then((response) => response.json())
//   .then((responseJson) => {
//     return responseJson.movies;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// }

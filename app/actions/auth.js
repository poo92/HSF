// contains all the actions regarding user authentication
import { Alert, View } from 'react-native';
import * as types from './types'; // action types from types.js file



// actual login method
export const login = (username, password) => {
  if(username == "Poornima" && password == "1"){
    // console.log("inside");
    return {
      type: types.LOGIN,
      username: username,
      password: password,


    };

  }else{
        Alert.alert('Invalid Credentials',"Please enter correct credentials");
    return {
        type: types.INVALID_CREDENTIALS,
        username: '',
        password: '',
    }
  }
  // }



};

// alertUser = (message) => {
//    // Alert.alert('Invalid Credentials', message,);
//    Alert.alert(
//            'Alert Title',
//            message,
//          )
//     };

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

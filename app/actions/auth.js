import * as types from './types';
import { NavigationActions } from 'react-navigation';



// actual method
// export const login = (username, password) => {
//   if(username == "1" && password == "1"){
//     // console.log("inside");
//     return {
//       type: types.LOGIN,
//       username: username,
//       password: password
//
//     };
//
//   }else{
//         // this.alertUser("Please enter correct credentials");
//     // return {
//     //     type: 'ALERT_USER',
//     //     username: '',
//     //     password: '',
//     // }
//   }
//   // }
//
//
// };

// dev test login method
export const login = (username, password) => {
    return {
      type: types.LOGIN,
      username: username,
      password: password
    };

};

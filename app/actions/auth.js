import * as types from './types';
import { NavigationActions } from 'react-navigation';

export const login = (username, password) => {
  if(username == "pooh" && password == "12345"){
    // console.log("inside");
    return {
      type: types.LOGIN,
      username: username,
      password: password

    };

  }else{
    // this.alertUser("Please enter correct credentials");
    // return {
    //     type: 'ALERT_USER',
    //     username: '',
    //     password: '',
    // }
  }
  // }


};





//
// export function loginSuccess({ username,password}) {
//     return {
//         type:types.LOGIN,
//         isLoggedIn:true,
//         username: username,
//         password:password,
//     }
// }

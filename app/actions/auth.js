// contains all the actions regarding user authentication
import { Alert, View } from 'react-native';
import * as types from './types'; // action types from types.js file
import * as urls from '../config/urls';

var url = urls.DSS_URL;

// actual login method
export const login = (username, password) => {
      //get password from DB
      return(dispatch) =>{
            return fetch( url +'getPassword/get_password'
            , {
                  method: 'POST',
                  headers : {
                        'Content-Type': 'application/json',
                        // 'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                        _postget_password: {
                              username : username
                        }

                  })
            }
      )
      .then(async (response) => await response.text())
      .then((responseJson) => {
            var jsonResponse = JSON.parse(responseJson);
            var passwordArray = jsonResponse.passwords.password;
            var passwordFromDB = passwordArray[0].password;

            if(password == passwordFromDB){
                  dispatch(setLoginDetails_Valid( { username :username, password: password }));


            }else{
                  Alert.alert('Invalid Credentials',"Please enter correct credentials");
                  dispatch(setLoginDetails_Invalid());
            }


      })
      .catch((error) => {
            console.error(error);
      })};

};



export function setLoginDetails_Valid( { username, password}) {
      return {
        type: types.LOGIN,
        username: username,
        password: password,
      };

};

export function setLoginDetails_Invalid() {
      return {
          type: types.INVALID_CREDENTIALS,
          username: '',
          password: '',
    };
};

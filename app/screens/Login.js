import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableHighlight, Text, NetInfo, Alert ,Keyboard} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { connectAlert } from '../components/alert';
import { LoginPageContainer } from '../components/containers/loginPageContainer';
import { Logo } from '../components/logo';
import { TextInput } from '../components/textInput';
import { Button } from '../components/buttons/button';


import { login } from '../actions/auth.js';

class Login extends Component{
      static propTypes = {
            navigation: PropTypes.object,
            dispatch: PropTypes.func,
            alertWithType: PropTypes.func,
      }

      constructor (props) {
            super(props);
            this.state = {
                  username: '',
                  password: '',
                  connected: false
            };
            this.checkInternetConnection("You need to connect to the Internet to proceed. Please check your connection.");

      }

      componentWillMount () {
            this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
            this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
      }
      componentWillUnmount () {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
      }
      componentWillReceiveProps(nextProps) {
            if(nextProps.isLoggedIn){
                  this.props.navigation.navigate('userDashBoard');
            }
      }
      // shouldComponentUpdate(nextProps){
      //       if(nextProps.invalidCredentials){
      //             return true;
      //       }
      // }
      //
      // componentWillUpdate(nextProps){
      //       this.alertUser();
      // }

      alertUser(){
            this.props.alertWithType('error','Invalid Credentials',"Please enter correct username and password");

      }

      _keyboardDidShow () {
            // this.props.alertWithType('Error','Sorry',"Keybard hidden");
            // alert('Keyboard Shown');
      }

      _keyboardDidHide () {
            // alert('Keyboard Hidden');
      }



      handlelogin = () => {
            Keyboard.dismiss();
            this.checkInternetConnection("Please check your internet connection");
            if(this.state.connected){
                  this.props.dispatch(login(this.state.username,this.state.password));
            }
      };

      handleUsernameText = ( text ) => {
            this.setState({ username: text })
      };

      handlePasswordText = ( text ) =>{
            this.setState({ password: text })
      };


      // method to check if connected to internet
      checkInternetConnection = (text) => {
            NetInfo.isConnected.fetch().then(isConnected => {
                  if(!isConnected){
                        this.props.alertWithType('info','No Internet Connection',text);
                        this.setState({ connected: false });
                  }else{
                        this.setState({ connected: true });
                  }
            });
      }




      render () {
            return (
                  <LoginPageContainer>
                        <StatusBar translucent={false} barStyle="light-content" />
                        <Logo />
                        <KeyboardAvoidingView behavior="padding" >
                              <TextInput
                                    placeholder={"username"}
                                    onChangeText={ this.handleUsernameText }

                                    />

                              <TextInput
                                    placeholder={"password"}
                                    secureTextEntry={true}
                                    onChangeText={ this.handlePasswordText }

                                    />

                              <Button title={"Login"} onpress={ () => this.handlelogin() } />
                        </KeyboardAvoidingView>
                  </LoginPageContainer>
            );

      }

}


const mapStateToProps =  state  => ({
      isLoggedIn : state.auth.isLoggedIn,
      invalidCredentials: state.auth.invalidCredentials,
});



// export default connect (mapStateToProps)(Login);
export default connect(mapStateToProps)(connectAlert(Login));

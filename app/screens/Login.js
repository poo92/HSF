import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableHighlight, Text, NetInfo, Alert ,Keyboard} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { connectAlert } from '../components/alert';
import { LoginPageContainer } from '../components/containers/loginPageContainer';
import { Logo } from '../components/logo';
import { TextInput } from '../components/textInput';
import { Button } from '../components/buttons/button';
import * as GlobalStyles from '../config/GlobalStyles';


import { login } from '../actions/auth.js';

class Login extends Component{
      static propTypes = {
            navigation: PropTypes.object,
            dispatch: PropTypes.func,
            alertWithType: PropTypes.func,
      }

      constructor (props) {
            super(props);
            // screenSize is to check the screen size of the device
            this.state = {
                  username: '',
                  password: '',
                  connected: false,
                  screenSize : (GlobalStyles.WIDTH<GlobalStyles.SCREEN_SIZE),
            };
            this.checkInternetConnection("You need to connect to the Internet to proceed. Please check your connection.");

      }

      // navigate to userDashBoard
      componentWillReceiveProps(nextProps) {
            if(nextProps.isLoggedIn){
                  this.props.navigation.navigate('userDashBoard');
            }
      }




      // alertUser(){
            //       this.props.alertWithType('error','Invalid Credentials',"Please enter correct username and password");
            //
            // }


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
                  // set keyboardAvoidingView behaviour
                  var behaviorType;
                  if(this.state.screenSize){
                        behavbehaviorTypeior = 'padding';
                  }else{
                        behaviorType = 'height';
                  }

                  return (
                        <LoginPageContainer>
                              <StatusBar translucent={false} barStyle="light-content" />
                              <Logo />
                              <KeyboardAvoidingView behavior= {behaviorType} >
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

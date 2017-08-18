import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableHighlight, Text } from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/container';
import { Logo } from '../components/logo';
import { TextInput } from '../components/textInput';
import { Button } from '../components/button';
import { Header } from '../components/homePageHeader';


import { login } from '../actions/auth.js';

class Login extends Component{
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  }

  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }




  handlelogin = () => {
    console.log("inside handlelogin ");
    this.props.dispatch(login(this.state.username,this.state.password));
  };

  handleUsernameText = ( text ) => {
    this.setState({ username: text })
  };

  handlePasswordText = ( text ) =>{
    this.setState({ password: text })
  };

  getlist() {
    console.log("inside get list");
    this.props.navigation.navigate('userDashBoard');
  };

  componentWillReceiveProps(nextProps) {
    console.log("inside get list" + nextProps.isLoggedIn);
    if(nextProps.isLoggedIn){
      this.props.navigation.navigate('userDashBoard');
    }
    // this.setState({
    //   // set something
    // });
  }

  render () {
    // if(this.props.isLoggedIn){
    //   return(
    //     <TouchableHighlight onPress={ this.getlist()}>
    //       <Text></Text>
    //     </TouchableHighlight>
    //
    //   );
    //
    // }else{
      return (
        <Container>
          <StatusBar translucent={false} barStyle="light-content" />
          <Header />
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
        </Container>
      );
    // }

  }

}


const mapStateToProps =  state  => ({
  isLoggedIn : state.auth.isLoggedIn,
});



export default connect (mapStateToProps)(Login);

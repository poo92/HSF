import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableHighlight, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/container';
import Login from '../screens/Login';
import userDashBoard from '../screens/userDashBoard';

class Home extends Component{
  static propTypes = {
    navigation: PropTypes.object,
  }

  componentWillMount(){
    this._navigateToPages();
  }


  _navigateToPages(){
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate('userDashBoard');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return(null);
    // if (this.props.isLoggedIn) {
    //   // return <List />;
    //   return(
    //     <View>
    //       { this.props.navigation.navigate('list') }
    //     </View>
    //   );
    //
    // } else {
    //   // return <Login />;
    //   return(
    //     <View>
    //       { this.props.navigation.navigate('Login') }
    //     </View>
    //   );
    // }
  }





}

const mapStateToProps =  state  => ({
  isLoggedIn : state.auth.isLoggedIn,
});


export default connect(mapStateToProps)(Home);

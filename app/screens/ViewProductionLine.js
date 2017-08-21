import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableHighlight, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



class ViewProductionLine extends Component{
  static propTypes = {
    navigation: PropTypes.object,
    productionlineDetails: PropTypes.object,
  }


  render() {
    return(
        <View>
            <Text> { this.props.productionlineDetails.machine }</Text>
            <Text> { this.props.productionlineDetails.sensor }</Text>
        </View>
    );

  }





}

const mapStateToProps =  state  => ({
  isLoggedIn : state.auth.isLoggedIn,
  productionlineDetails : state.dashboard.productionlineDetails,

});


export default connect(mapStateToProps)(ViewProductionLine);

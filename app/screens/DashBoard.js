// dashboard of the logged user
import React, { Component} from 'react';
import { View, Text, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DashboardHeader } from '../components/dashboardHeader';
import { PageContainer } from '../components/containers/appPagesContainer';
import { SecctionTitlle } from '../components/titles/sectionTitle';
import { DashboardButton } from '../components/buttons/dashboardButton'

import { getDashboardDetails } from '../actions/dashboard.js';

class  userDashBoard extends Component {
  // constructor(props){
  //   super(props);
  //
  // }
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    username: PropTypes.string,
    factoryName: PropTypes.string,
    userType : PropTypes.string,
  }


  componentWillMount(){
    this.props.dispatch(getDashboardDetails(this.props.username));
  }


  handleButtonPress = ( branchName, sectiondata) => {
    this.props.navigation.navigate('Sections', { branchName : branchName , sections: sectiondata});

  }
  // goback = () => {
  //   this.props.navigation.goBack(null);
  // }

  render() {
  var dashboardDetailsOfFactoryUser = this.props.dashboardDetailsOfFactoryUser;
    if (!dashboardDetailsOfFactoryUser) {
      return <ActivityIndicator />;
    }else{
      return(
        <PageContainer>
          <DashboardHeader  factoryName= { this.props.factoryName } />
          <SecctionTitlle titleText={ "Branches" } />
           { this.props.dashboardDetailsOfFactoryUser.map((branch) => (
           <DashboardButton key= {branch.name} title={ branch.name} onPress= { () => this.handleButtonPress( branch.name , branch.sections) }/>
           ))}
        </PageContainer>
      );
    }


  }


}

// {this.props.homepagedetails.map(branch => (
//   <DashboardButton title= { branch.id } onPress={ this.handleButtonPress} />
//   ))}


const mapStateToProps =  (state)  => {
  return{
    username : state.auth.username,
    dashboardDetailsOfFactoryUser : state.dashboard.dashboardDetailsOfFactoryUser,
    factoryName: state.dashboard.factoryName,
    userType : state.dashboard.userType,
  };
};


export default connect (mapStateToProps)(userDashBoard);

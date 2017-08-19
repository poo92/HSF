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
  }

  // componentWillMount() {
  //   this.props.dispatch(getHomePageDetails());
  //   console.log("state.homePage.homePageDetails" + this.props.homepagedetails);
  //   console.log("username" + this.props.username);
  // }

  // componentWillReceiveProps(newProps) {
  //   console.log("state.homePage.homePageDetails" + newProps.homepagedetails);
  //   { newProps.homepagedetails.map((item) => (
  //     console.log(" here" + item.id)
  //   ))};
  // }


  componentWillMount(){
    this.props.dispatch(getDashboardDetails());
  }


  handleButtonPress = ( branchName, sectiondata) => {
    this.props.navigation.navigate('Sections', { branchName : branchName , sections: sectiondata});

  }
  // goback = () => {
  //   this.props.navigation.goBack(null);
  // }

  render() {
  var homepagedetails = this.props.homepagedetails;
    if (!homepagedetails) {
      return <ActivityIndicator />;
    }else{
      return(
        <PageContainer>
          <DashboardHeader  factoryName= {"CocaCola PVT Ltd"} />
          <SecctionTitlle titleText={ "Branches" } />
            { this.props.homepagedetails.map((branch) => (
            <DashboardButton key= {branch.id} title={ branch.id} onPress= { () => this.handleButtonPress( branch.id , branch.sectiondata) }/>
            ))}
        </PageContainer>
      );
    }

    //...
  }


}

// {this.props.homepagedetails.map(branch => (
//   <DashboardButton title= { branch.id } onPress={ this.handleButtonPress} />
//   ))}


const mapStateToProps =  (state)  => {
  return{
    username : state.auth.username,
    homepagedetails : state.dashboard.homePageDetails,
  };
};


export default connect (mapStateToProps)(userDashBoard);

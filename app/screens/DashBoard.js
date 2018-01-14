// dashboard of the logged user
import React, { Component} from 'react';
import { View, Text, FlatList, TouchableHighlight, ActivityIndicator, ScrollView, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DashboardHeader } from '../components/dashboardHeader';
import { PageContainer } from '../components/containers/appPagesContainer';
import { SecctionTitlle } from '../components/titles/sectionTitle';
import { DashboardButton } from '../components/buttons/dashboardButton';
import * as GlobalStyles from '../config/GlobalStyles';

import { getDashboardDetails } from '../actions/dashboard.js';

class  userDashBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
          branchList1 : [],
          branchList2 : [],
    };
}

  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    username: PropTypes.string,
    factoryName: PropTypes.string,
  }

  alertUser = (message) => {
        Alert.alert('Details Unavailable', message);
  };


  componentWillMount(){
    this.props.dispatch(getDashboardDetails(this.props.username));
  }



  handleButtonPress = ( branchName, sectiondata) => {
        if(sectiondata.length == 0){
             this.alertUser("This branch doesn't have any section");
      }else{
            this.props.navigation.navigate('Sections', { branchName : branchName , sections: sectiondata});
      }
  }


  render() {
  var dashboardDetails = this.props.dashboardDetails;
    if (!dashboardDetails) {
      return <ActivityIndicator />;
    }else{
      return(
        <PageContainer>
          <DashboardHeader  factoryName= { this.props.factoryName } />
          <SecctionTitlle titleText={ "Branches" } />
          {this.setBranchLists()}
          <View style={GlobalStyles.gridView.container} >
                <View style={GlobalStyles.gridView.column} >
                      { this.state.branchList1.map((branch) => (
                           <DashboardButton key= {branch.id} title={ branch.name} onPress= { () => this.handleButtonPress( branch.name , branch.sections)} />
                     ))}
               </View>
               <View style={GlobalStyles.gridView.column}>
                     { this.state.branchList2.map((branch) => (
                        <DashboardButton key= {branch.id} title={ branch.name} onPress= { () => this.handleButtonPress( branch.name , branch.sections)} />
                  ))}
                </View>
          </View>

        </PageContainer>
      );
    }


  }

  setBranchLists = () => {
        var dashboard = this.props.dashboardDetails;
        var length = dashboard.length;
        if(length % 2 == 0){
             for(var i = 0; i < length; i+=2) {
                 this.state.branchList1.push(dashboard[i]);
                 this.state.branchList2.push(dashboard[i + 1]);
           }
     }else{
           for(var i = 0; i < length - 1; i+=2) {
                 this.state.branchList1.push(dashboard[i]);
                 this.state.branchList2.push(dashboard[i + 1]);
           }
           var lastbranch = dashboard[length - 1];
           this.state.branchList1.push(lastbranch);
     }
 }



}

// { this.props.dashboardDetails.map((branch) => (
// <DashboardButton key= {branch.name} title={ branch.name} onPress= { () => this.handleButtonPress( branch.name , branch.sections) }/>
// ))}


// {this.props.homepagedetails.map(branch => (
//   <DashboardButton title= { branch.id } onPress={ this.handleButtonPress} />
//   ))}



const mapStateToProps =  (state)  => {
  return{
    username : state.auth.username,
    dashboardDetails : state.dashboard.dashboardDetailsOfFactoryUser,
    factoryName: state.dashboard.factoryName,
  };
};



export default connect (mapStateToProps)(userDashBoard);

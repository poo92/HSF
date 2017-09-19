// section list screen
import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageContainer } from '../components/containers/appPagesContainer';
import { SecctionTitlle } from '../components/titles/sectionTitle';
import { DashboardButton } from '../components/buttons/dashboardButton'


class Section extends Component{
  static propTypes = {
    navigation: PropTypes.object,
  }

  handleButtonPress = (branchName, sectionName, productionlines) => {
    console.log("productionlines  :" + productionlines);
    this.props.navigation.navigate('ProductionLines', { branchName: branchName, sectionName : sectionName , productionlines: productionlines});
    console.log("here");
  }





  render() {
    return(
      <PageContainer>
        <SecctionTitlle titleText={ "Sections of " + this.props.navigation.state.params.branchName } />
          { this.props.navigation.state.params.sections.map((section) => (
          <DashboardButton key= {section.name} title={ section.name} onPress= { () => this.handleButtonPress(this.props.navigation.state.params.branchName, section.name, section.productionlines) }/>

          ))}
      </PageContainer>
    );


  }





}

const mapStateToProps =  state  => ({
  isLoggedIn : state.auth.isLoggedIn,
});


export default connect(mapStateToProps)(Section);

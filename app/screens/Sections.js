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

  handleButtonPress = ( sectionName, productionlines) => {
    console.log("productionlines  :" + productionlines);
    this.props.navigation.navigate('ProductionLines', { sectionName : sectionName , productionlines: productionlines});
    console.log("here");
  }





  render() {
    return(
      <PageContainer>
        <SecctionTitlle titleText={ "Sections of " + this.props.navigation.state.params.branchName +" Branch" } />
          { this.props.navigation.state.params.sections.map((section) => (
          <DashboardButton key= {section.id} title={ section.id} onPress= { () => this.handleButtonPress(section.id, section.productionlines) }/>

          ))}
      </PageContainer>
    );


  }





}

const mapStateToProps =  state  => ({
  isLoggedIn : state.auth.isLoggedIn,
});


export default connect(mapStateToProps)(Section);

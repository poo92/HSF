// production line list screen
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

  handleButtonPress = () => {
    // this.props.navigation.navigate('Sections', { branchName : branchName , sections: sectiondata});
    console.log("here");
  }





  render() {
    return(
      <PageContainer>
        <SecctionTitlle titleText={ "Production Lines of " + this.props.navigation.state.params.sectionName +" Section" } />
          { this.props.navigation.state.params.productionlines.map((productionLine) => (
          <DashboardButton key= {productionLine} title={ productionLine} onPress= { () => this.handleButtonPress() }/>

          ))}
      </PageContainer>
    );


  }





}

const mapStateToProps =  state  => ({
  isLoggedIn : state.auth.isLoggedIn,
});


export default connect(mapStateToProps)(Section);

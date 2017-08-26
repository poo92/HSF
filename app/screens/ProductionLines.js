// production line list screen
import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageContainer } from '../components/containers/appPagesContainer';
import { SecctionTitlle } from '../components/titles/sectionTitle';
import { DashboardButton } from '../components/buttons/dashboardButton';

import { getProductionLineDetails } from '../actions/dashboard.js';


class ProductionLines extends Component{
  static propTypes = {
    navigation: PropTypes.object,
    factoryName: PropTypes.string,
    productionlineDetails:PropTypes.array,
  }

  handleButtonPress = (factory,branch,section,productionline) => {
    this.props.dispatch(getProductionLineDetails(factory,branch,section,productionline));

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.productionlineDetails){
      this.props.navigation.navigate('ViewProductionLine');
    }
}



  render() {
    return(
      <PageContainer>
        <SecctionTitlle titleText={ "Production Lines of " + this.props.navigation.state.params.sectionName +" Section" } />
          { this.props.navigation.state.params.productionlines.map((productionLine) => (
          <DashboardButton key= {productionLine} title={ productionLine}
              onPress= { () => this.handleButtonPress(this.props.factoryName,this.props.navigation.state.params.branchName,this.props.navigation.state.params.sectionName,productionLine ) }/>
          ))}
      </PageContainer>
    );


  }





}

const mapStateToProps =  state  => ({
  isLoggedIn : state.auth.isLoggedIn,
  factoryName: state.dashboard.factoryName,
  productionlineDetails : state.dashboard.productionlineDetails,

});


export default connect(mapStateToProps)(ProductionLines);

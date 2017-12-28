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

  handleButtonPress = (fid,bid,sid,pid,productionlineName) => {
    this.props.dispatch(getProductionLineDetails(fid,bid,sid,pid,productionlineName));

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.productionlineDetails){
      this.props.navigation.navigate('ViewProductionLine');
    }
}



  render() {
    return(
      <PageContainer>
        <SecctionTitlle titleText={ "Production Lines of " + this.props.navigation.state.params.sectionName } />
          { this.props.navigation.state.params.productionlines.map((productionLine) => (
          <DashboardButton key= {productionLine.name} title={ productionLine.name}
              onPress= { () => this.handleButtonPress(productionLine.fid,productionLine.bid,productionLine.sid,productionLine.pid,productionLine.name) }/>
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

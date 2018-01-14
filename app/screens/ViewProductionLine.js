import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableHighlight, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as urls from '../config/urls';         // get the url for images
import { PageContainer } from '../components/containers/appPagesContainer';
import { SecctionTitlle } from '../components/titles/sectionTitle';
import { DashboardButton } from '../components/buttons/dashboardButton';
import { Panel} from '../components/expandablePanel';

import { getSensorDetails } from '../actions/dashboard.js';



class ViewProductionLine extends Component{
      static propTypes = {
            navigation: PropTypes.object,
            productionlineDetails: PropTypes.array,
            productionline: PropTypes.string,
            factory: PropTypes.string,
            section: PropTypes.string,
            branch: PropTypes.string,
            sensorDetails: PropTypes.string,

      }

      handleButtonPress= (component,sensorName, sensorTag) =>{
            this.props.dispatch(getSensorDetails(this.props.factory,this.props.branch,this.props.section,this.props.productionline,component,sensorName,sensorTag));
            this.navigateToPage();
      }
       navigateToPage(){
             this.props.navigation.navigate('ViewSensor');
       }

      render() {
            var productionlineDetails = this.props.productionlineDetails;
            if(!productionlineDetails){
                  return <ActivityIndicator />;
            }else{
                  return(

                        <PageContainer>
                              <ScrollView >
                                    <SecctionTitlle titleText={ "Components  of " + this.props.productionline  } />
                                    { this.props.productionlineDetails.map((component) => (
                                          <Panel
                                                key={component.componentTag}
                                                component={component.componentName}
                                                image={component.componentImage}
                                                sensorList={component.sensorList}
                                                onPress={this.handleButtonPress} >
                                          </Panel>
                                    ))}
                              </ScrollView>
                        </PageContainer>

                  );
            }


      }


}






const mapStateToProps =  state  => ({
      isLoggedIn : state.auth.isLoggedIn,
      productionlineDetails : state.dashboard.productionlineDetails,
      productionline: state.dashboard.productionline,
      factory : state.dashboard.factoryName,
      branch: state.dashboard.branch,
      section: state.dashboard.section,
      sensorDetails : state.dashboard.sensorDetails,


});


export default connect(mapStateToProps)(ViewProductionLine);

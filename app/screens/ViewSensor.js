import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableHighlight, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageContainer } from '../components/containers/appPagesContainer';
import { SecctionTitlle } from '../components/titles/sectionTitle';
import { Graph } from '../components/graph';



class ViewSensor extends Component{
      static propTypes = {
            navigation: PropTypes.object,
            sensorDetails: PropTypes.string,
            sensorName: PropTypes.string,

      }

      render() {
            if(this.props.sensorDetails){
                  return(
                        <PageContainer>
                              <ScrollView >
                                    <SecctionTitlle titleText={ "Graph  of " + this.props.sensorName +" Sensor" } />
                                    <Graph  uri = {this.props.sensorDetails} />
                              </ScrollView>
                        </PageContainer>

                  );
            }else{
                  return(
                  <ActivityIndicator color="#0000ff" />
                  );
            }
      }
}

const mapStateToProps =  state  => ({
      isLoggedIn : state.auth.isLoggedIn,
      sensorDetails : state.dashboard.sensorDetails,
      sensorName: state.dashboard.sensorName,


});


export default connect(mapStateToProps)(ViewSensor);

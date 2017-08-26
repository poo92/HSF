import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableHighlight, Text, View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as urls from '../config/urls';         // get the url for images
import { PageContainer } from '../components/containers/appPagesContainer';
import { SecctionTitlle } from '../components/titles/sectionTitle';
import { DashboardButton } from '../components/buttons/dashboardButton';
import { Panel } from '../components/expandablePanel';

class ViewProductionLine extends Component{
      static propTypes = {
            navigation: PropTypes.object,
            productionlineDetails: PropTypes.array,
            productionline: PropTypes.string,
      }

      handleButtonPress(){
            console.log("here");
      }


      render() {
            return(
                  <ScrollView>
                        <PageContainer>
                              <SecctionTitlle titleText={ "Components  of " + this.props.productionline +" ProductionLine" } />
                              { this.props.productionlineDetails.map((component) => (
                                    <Panel key={component.component} title={component.component} image={component.componentImage} >
                                          { component.sensorList.map((sensor) => (
                                                <View key= { sensor.sensor }>
                                                      <Text> { sensor.sensor }</Text>
                                                </View>
                                          ))}
                                    </Panel>

                              ))}
                        </PageContainer>
                  </ScrollView>
            );

      }

      // <ExpandablePanel title={component.component} image={component.componentImage} productionlinedata={component.sensorList}  key={component.component}>
      // </ExpandablePanel>



}


///////////*************************************************************************************************////////////
// { this.props.productionlineDetails.map((component) => (
//                                     <View  key={component.component}>
//
//                                           <DashboardButton key= {component.component} title={ component.component}
//                                                 onPress= { () => this.handleButtonPress() }/>
//
//                                           <Image source={{uri: urls.IMAGE_URL + component.componentImage}}
//                                                 style={{width: 100, height: 100}} />
//
//
//                                           { component.sensorList.map((sensor) => (
//
//
//
//
//
//
//
//                                                 <View  key={sensor.sensor}>
//                                                       <Text>
//                                                             { sensor.sensor}
//                                                       </Text>
//                                                       <Image source={{uri: urls.IMAGE_URL + sensor.sensorImage}}
//                                                             style={{width: 100, height: 100}} />
//                                                 </View>
//                                                 //
//                                           ))}
//                                     </View>
//                               ))}


///////***************************************************************************/////////////////////////

















const mapStateToProps =  state  => ({
      isLoggedIn : state.auth.isLoggedIn,
      productionlineDetails : state.dashboard.productionlineDetails,
      productionline: state.dashboard.productionline,

});


export default connect(mapStateToProps)(ViewProductionLine);
